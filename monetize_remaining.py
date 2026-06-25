#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""monetize_remaining.py — Cierra las fugas de Pipedrive y A2 Hosting con los IDs
REALES verificados (encontrados ya en uso en otros artículos). Idempotente,
dry-run por defecto, backups. Toca content + affiliateLinks de los 196 JSON.

  Pipedrive: enlaces planos pipedrive.com (y ?utm) + placeholder AFFILIATE_ID
             -> https://aff.trypipedrive.com/rvhldlkqe2dy
  A2 Hosting: enlaces a2hosting.com sin 'aid=' -> se añade ?aid=nestdigitalstudio
             (preserva la ruta; no rompe deep-links)

NO toca SiteGround / Hostinger / Bluehost (sin ID en local).
"""
import sys, os, re, json, glob, shutil, argparse
from datetime import datetime, timezone
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(ROOT, "public", "data", "articles")
STAMP = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
BACKUP = os.path.join(ROOT, "backups", f"monetize_{STAMP}")

PIPEDRIVE_AFF = "https://aff.trypipedrive.com/rvhldlkqe2dy"
A2_AID = "aid=nestdigitalstudio"
URL_RE = re.compile(r"https?://[^\s\)\]\"'\\<>]+")

def fix_url(url):
    """Devuelve (nueva_url, tipo) o (url, None) si no cambia."""
    low = url.lower()
    # Pipedrive placeholder
    if "pipedrive.com/en/affiliates/affiliate_id" in low:
        return PIPEDRIVE_AFF, "pipedrive_placeholder"
    # Pipedrive plano (cualquier pipedrive.com que NO sea ya el de afiliado trypipedrive)
    if "pipedrive.com" in low and "trypipedrive" not in low:
        return PIPEDRIVE_AFF, "pipedrive_flat"
    # A2 Hosting sin aid -> añadir, preservando ruta y query
    if "a2hosting.com" in low and "aid=" not in low:
        sep = "&" if "?" in url else "?"
        return f"{url}{sep}{A2_AID}", "a2_param"
    return url, None

def process(path, apply):
    fname = os.path.basename(path)
    with open(path, encoding="utf-8") as f:
        text = f.read()
    try:
        data = json.loads(text)
    except Exception as e:
        return {"file": fname, "error": str(e), "log": []}
    log = []

    # content (markdown)
    content = data.get("content", "")
    if isinstance(content, str) and content:
        def repl(m):
            u = m.group(0).rstrip(".,);")
            new, kind = fix_url(u)
            if kind:
                log.append((kind, "content"))
                return m.group(0).replace(u, new)
            return m.group(0)
        data["content"] = URL_RE.sub(repl, content)

    # affiliateLinks
    for i, link in enumerate(data.get("affiliateLinks") or []):
        if isinstance(link, dict) and link.get("url"):
            new, kind = fix_url(link["url"])
            if kind:
                link["url"] = new
                log.append((kind, f"affiliateLinks[{i}]"))

    if log and apply:
        os.makedirs(BACKUP, exist_ok=True)
        shutil.copy2(path, os.path.join(BACKUP, fname))
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    return {"file": fname, "log": log}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()
    files = sorted(glob.glob(os.path.join(D, "*.json")))
    results = [process(p, args.apply) for p in files]
    tally, files_changed = {}, 0
    for r in results:
        if r.get("error"):
            print(f"  ⚠ {r['file']}: {r['error']}"); continue
        if r["log"]:
            files_changed += 1
        for kind, where in r["log"]:
            tally[kind] = tally.get(kind, 0) + 1
    print(f"[{'APPLY' if args.apply else 'DRY-RUN'}] Archivos afectados: {files_changed}")
    for k, v in sorted(tally.items()):
        print(f"  {k}: {v}")
    print(f"Backups: {BACKUP}" if args.apply else "(dry-run: nada escrito)")

if __name__ == "__main__":
    main()
