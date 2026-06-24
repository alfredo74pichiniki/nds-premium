#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""unify_authors.py — Unifica el campo 'author' a una sola identidad de marca.
Idempotente, dry-run por defecto, con backups. READ-ONLY salvo --apply.

Soluciona el caos de E-E-A-T: 5 identidades distintas (incluida 'NDS AI Editor',
que delata contenido IA). El schema.author (Organization) se respeta tal cual."""
import sys, os, json, glob, shutil, argparse
from collections import Counter
from datetime import datetime, timezone
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(ROOT, "public", "data", "articles")
CANON = "Nest Digital Studio Team"
STAMP = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
BACKUP = os.path.join(ROOT, "backups", f"authors_{STAMP}")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()
    files = sorted(glob.glob(os.path.join(D, "*.json")))
    prev = Counter()
    for p in files:
        with open(p, encoding="utf-8") as f:
            data = json.load(f)
        cur = data.get("author", "")
        if cur != CANON:
            prev[cur or "(sin autor)"] += 1
            if args.apply:
                data["author"] = CANON
                os.makedirs(BACKUP, exist_ok=True)
                shutil.copy2(p, os.path.join(BACKUP, os.path.basename(p)))
                with open(p, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"[{'APPLY' if args.apply else 'DRY-RUN'}] Unificar a '{CANON}': {sum(prev.values())} artículos")
    for name, n in prev.most_common():
        print(f"  {n:3} | {name}  ->  {CANON}")
    print(f"Backups: {BACKUP}" if args.apply else "(dry-run: nada escrito)")

if __name__ == "__main__":
    main()
