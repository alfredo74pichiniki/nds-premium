#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""insert_quick_answers.py — Inserta un bloque '## Quick Answer' al inicio de cada
artículo (para GEO: que la IA cite el sitio). Idempotente, dry-run, backups.

Lee `quick_answers.json` = { "slug": "texto del quick answer (markdown)", ... }
Inserta justo antes del primer H2 (## ...) del content. Si ya existe un
'## Quick Answer', no hace nada (idempotente)."""
import sys, os, json, glob, shutil, argparse
from datetime import datetime, timezone
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(ROOT, "public", "data", "articles")
QA_FILE = os.path.join(ROOT, "quick_answers.json")
STAMP = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
BACKUP = os.path.join(ROOT, "backups", f"quickanswers_{STAMP}")

def insert_block(content, qa):
    if "## quick answer" in content.lower():
        return content, False  # idempotente
    block = f"## Quick Answer\n\n{qa.strip()}\n\n"
    idx = content.find("\n## ")
    if idx == -1:
        return content.rstrip() + "\n\n" + block, True
    return content[:idx + 1] + block + content[idx + 1:], True

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()
    if not os.path.exists(QA_FILE):
        print(f"Falta {QA_FILE}"); return
    qas = json.load(open(QA_FILE, encoding="utf-8"))

    done, skipped, missing = [], [], []
    for slug, qa in qas.items():
        path = os.path.join(D, f"{slug}.json")
        if not os.path.exists(path):
            missing.append(slug); continue
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        new, changed = insert_block(data.get("content", ""), qa)
        if not changed:
            skipped.append(slug); continue
        done.append(slug)
        if args.apply:
            data["content"] = new
            os.makedirs(BACKUP, exist_ok=True)
            shutil.copy2(path, os.path.join(BACKUP, f"{slug}.json"))
            with open(path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"[{'APPLY' if args.apply else 'DRY-RUN'}] Quick Answers a insertar: {len(done)}")
    for s in done:
        print(f"  + {s}")
    if skipped:
        print(f"Ya tenían Quick Answer (omitidos): {len(skipped)}")
    if missing:
        print(f"⚠ Slug sin archivo: {missing}")
    print(f"Backups: {BACKUP}" if args.apply else "(dry-run: nada escrito)")

if __name__ == "__main__":
    main()
