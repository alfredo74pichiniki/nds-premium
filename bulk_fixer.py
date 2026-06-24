#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
bulk_fixer.py — Corrector de afiliados en lote, SEGURO e IDEMPOTENTE
Nest Digital Studio — nds-premium

Corrige SOLO lo inequívoco, con IDs verificados extraídos del propio contenido:
  1) CTAs/enlaces con placeholder AFFILIATE_ID  -> ID real de cada red
  2) CTAs "mudos" (esquema viejo {name,url})    -> añade cta/type/label (botón con texto)
  3) Enlaces de Amazon sin tag                  -> añade tag=nestdigital-20
  4) Enlaces planos de marca con ID conocido    -> URL de afiliado canónica (solo en CTAs)

NO toca (lo reporta para decisión humana, igual que un buen director escala):
  - Proton (ref= de referidos / offer_id por producto)   <- NO inventar
  - Pipedrive, SiteGround, Hostinger, A2, Bluehost (sin ID en el repo)
  - Reescritura de deep-links de marca dentro del texto (riesgo E-E-A-T)

Uso:
    python bulk_fixer.py            # DRY-RUN (no escribe nada, solo informa)
    python bulk_fixer.py --apply    # aplica cambios + crea backups con timestamp
"""

import sys, os, re, json, glob, shutil, argparse
from datetime import datetime, timezone

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
ARTICLES_DIR = os.path.join(ROOT, "public", "data", "articles")
STAMP = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
BACKUP_DIR = os.path.join(ROOT, "backups", f"audit_fix_{STAMP}")

AMAZON_TAG = "nestdigital-20"

# --- Reemplazos de URL placeholder -> URL correcta (mapa EXACTO, sin regex ambigua) ---
PLACEHOLDER_FIX = {
    "https://www.cloudways.com/en/?id=AFFILIATE_ID":            "https://www.cloudways.com/en/?id=2134070",
    "https://www.cloudways.com/en/pricing.php?id=AFFILIATE_ID": "https://www.cloudways.com/en/pricing.php?id=2134070",
    "https://be.elementor.com/visit/?bta=AFFILIATE_ID&brand=elementorpro": "https://be.elementor.com/visit/?bta=231223&brand=elementorpro",
    "https://kinsta.com/?kaid=AFFILIATE_ID":        "https://kinsta.com/?kaid=ULBVTXSGGBYO",
    "https://kinsta.com/plans/?kaid=AFFILIATE_ID":  "https://kinsta.com/plans/?kaid=ULBVTXSGGBYO",
    "https://go.nordpass.io/aff_c?offer_id=488&aff_id=AFFILIATE_ID": "https://go.nordpass.io/aff_c?offer_id=488&aff_id=142918",
    "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=AFFILIATE_ID":  "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142918",
    "https://www.roboform.com/go?id=AFFILIATE_ID":  "https://www.roboform.com/?affid=aocaa",  # formato canónico verificado
    "https://get.surfshark.net/aff_c?offer_id=926&aff_id=AFFILIATE_ID": "https://get.surfshark.net/aff_c?offer_id=926&aff_id=45353",
}

# Placeholders que NO tocamos: requieren dato/criterio humano. Se cuentan y reportan.
PLACEHOLDER_SKIP = {
    "https://proton.me/mail/referral?ref=AFFILIATE_ID": "Proton usa referido (ref=), distinto del aff_id de la red. Confirmar estrategia/offer_id.",
    "https://proton.me/pricing?ref=AFFILIATE_ID":       "Proton usa referido (ref=), distinto del aff_id de la red. Confirmar estrategia/offer_id.",
    "https://www.pipedrive.com/en/affiliates/AFFILIATE_ID": "No existe ID de Pipedrive en el repo. Falta tu ID de afiliado.",
}

# Enlace plano de marca -> URL de afiliado canónica (solo marcas con ID verificado).
CANONICAL = {
    "nordvpn.com":  "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142918",
    "nordpass.com": "https://go.nordpass.io/aff_c?offer_id=488&aff_id=142918",
    "surfshark.com":"https://get.surfshark.net/aff_c?offer_id=926&aff_id=45353",
    "elementor.com":"https://be.elementor.com/visit/?bta=231223&brand=elementorpro",
    "kinsta.com":   "https://kinsta.com/?kaid=ULBVTXSGGBYO",
    "cloudways.com":"https://www.cloudways.com/en/?id=2134070",
    "roboform.com": "https://www.roboform.com/?affid=aocaa",
}
# Marcas SIN ID (no se monetizan; se reportan)
BRANDS_NO_ID = ["pipedrive.com", "siteground.com", "hostinger.com",
                "a2hosting.com", "bluehost.com", "proton.me", "protonvpn.com",
                "ipvanish.com"]

URL_IN_TEXT_RE = re.compile(r"https?://[^\s\)\]\"'\\<>]+")

# --------------------------------------------------------------------------- #
def add_amazon_tag(url):
    """Añade tag=nestdigital-20 a una URL de Amazon que no lo tenga. Idempotente."""
    if "amazon." not in url.lower():
        return url, False
    if "tag=" in url:
        return url, False
    sep = "&" if "?" in url else "?"
    return f"{url}{sep}tag={AMAZON_TAG}", True

def fix_content(content, log):
    """Aplica a un string de content: placeholders conocidos + Amazon tag."""
    changed = False
    # 1) placeholders exactos
    for bad, good in PLACEHOLDER_FIX.items():
        if bad in content:
            content = content.replace(bad, good)
            changed = True
            log.append(("placeholder", bad, good))
    # 2) Amazon sin tag (sobre cada URL del texto)
    def repl(m):
        nonlocal changed
        url = m.group(0)
        new, did = add_amazon_tag(url)
        if did:
            changed = True
            log.append(("amazon_tag", url[:80], new[:90]))
        return new
    content = URL_IN_TEXT_RE.sub(repl, content)
    return content, changed

def brand_in(url):
    low = url.lower()
    for dom in CANONICAL:
        if dom in low and not _is_tracking(low):
            return dom
    return None

def _is_tracking(low):
    return any(t in low for t in ("aff_c", "/visit", "aff_id=", "kaid=", "?id=", "&id=",
                                  "affid=", "bta=", "a_aid="))

def fix_affiliate_links(links, log):
    """Repara CTAs mudos + monetiza planos de marca con ID + Amazon tag + placeholders."""
    if not isinstance(links, list):
        return links, False
    changed = False
    for i, link in enumerate(links):
        if not isinstance(link, dict):
            continue
        # placeholder exacto en url
        url = link.get("url", "")
        if url in PLACEHOLDER_FIX:
            link["url"] = PLACEHOLDER_FIX[url]; url = link["url"]; changed = True
            log.append(("cta_placeholder", f"[{i}]", url))
        elif url in PLACEHOLDER_SKIP:
            log.append(("cta_skip", f"[{i}]", PLACEHOLDER_SKIP[url]))
        # Amazon tag
        new, did = add_amazon_tag(url)
        if did:
            link["url"] = new; url = new; changed = True
            log.append(("cta_amazon_tag", f"[{i}]", new[:90]))
        # plano de marca con ID -> canónica
        dom = brand_in(url)
        if dom:
            link["url"] = CANONICAL[dom]; url = CANONICAL[dom]; changed = True
            log.append(("cta_monetize", f"[{i}] {dom}", CANONICAL[dom]))
        # CTA mudo: falta 'cta' y no es enlace interno
        if not link.get("internal") and not link.get("cta"):
            name = link.get("label") or link.get("name") or "this option"
            link["cta"] = f"Visit {name}"
            link.setdefault("label", name)
            link["type"] = "primary" if i == 0 else "secondary"
            changed = True
            log.append(("cta_mute_fix", f"[{i}]", link["cta"]))
    return links, changed

def process(path, apply):
    fname = os.path.basename(path)
    with open(path, encoding="utf-8") as f:
        original_text = f.read()
    try:
        data = json.loads(original_text)
    except Exception as e:
        return {"file": fname, "error": f"JSON ilegible: {e}", "log": []}

    log = []
    if isinstance(data.get("content"), str):
        data["content"], c1 = fix_content(data["content"], log)
    else:
        c1 = False
    data["affiliateLinks"], c2 = fix_affiliate_links(data.get("affiliateLinks", []), log)

    if (c1 or c2) and apply:
        os.makedirs(BACKUP_DIR, exist_ok=True)
        shutil.copy2(path, os.path.join(BACKUP_DIR, fname))
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    return {"file": fname, "changed": bool(c1 or c2), "log": log}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="Escribe los cambios (si no, dry-run)")
    args = ap.parse_args()
    mode = "APPLY" if args.apply else "DRY-RUN"
    print(f"=== bulk_fixer.py [{mode}] ===")
    if args.apply:
        print(f"Backups -> {BACKUP_DIR}")

    files = sorted(glob.glob(os.path.join(ARTICLES_DIR, "*.json")))
    results = [process(p, args.apply) for p in files]

    # Tally
    tally = {}
    changed_files = []
    skips = []
    for r in results:
        if r.get("error"):
            print(f"  ⚠ {r['file']}: {r['error']}"); continue
        if r["changed"]:
            changed_files.append(r["file"])
        for kind, a, b in r["log"]:
            tally[kind] = tally.get(kind, 0) + 1
            if kind == "cta_skip":
                skips.append((r["file"], b))

    print(f"\nArchivos que cambian: {len(changed_files)}")
    print("Operaciones:")
    labels = {
        "placeholder": "Placeholders AFFILIATE_ID corregidos (en texto)",
        "cta_placeholder": "Placeholders AFFILIATE_ID corregidos (en CTA)",
        "amazon_tag": "Enlaces Amazon con tag añadido (en texto)",
        "cta_amazon_tag": "Enlaces Amazon con tag añadido (en CTA)",
        "cta_monetize": "CTAs planos monetizados a URL de afiliado",
        "cta_mute_fix": "CTAs mudos reparados (botón con texto)",
        "cta_skip": "Placeholders OMITIDOS (requieren tu dato/criterio)",
    }
    for k in labels:
        if k in tally:
            print(f"  - {labels[k]}: {tally[k]}")

    if skips:
        print("\n⚠ PENDIENTES (no tocados — necesito tu decisión):")
        seen = set()
        for fn, msg in skips:
            key = (fn, msg)
            if key in seen: continue
            seen.add(key)
            print(f"  - {fn}: {msg}")

    if not args.apply:
        print("\n(DRY-RUN: no se ha escrito nada. Ejecuta con --apply para aplicar.)")
    else:
        print(f"\n✅ Aplicado. Backups en {BACKUP_DIR}")

if __name__ == "__main__":
    main()
