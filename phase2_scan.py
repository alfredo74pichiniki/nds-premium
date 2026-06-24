#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""phase2_scan.py — Alcance de la Fase 2 (contenido). READ-ONLY."""
import sys, os, re, json, glob
from collections import Counter
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(ROOT, "public", "data", "articles")

authors = Counter()
no_qa, short = [], []
for p in sorted(glob.glob(os.path.join(D, "*.json"))):
    a = json.load(open(p, encoding="utf-8"))
    authors[a.get("author", "(sin autor)")] += 1
    c = a.get("content") or ""
    if "## quick answer" not in c.lower():
        no_qa.append((a.get("articleType", "?"), a.get("slug")))
    w = len(re.findall(r"\b\w+\b", c))
    if w < 3000:
        short.append((w, a.get("articleType", "?"), a.get("slug")))

print("=== AUTORES (nº artículos) ===")
for k, v in authors.most_common():
    print(f"  {v:3} | {k}")

print(f"\n=== SIN QUICK ANSWER ({len(no_qa)}) ===")
for t, s in sorted(no_qa):
    print(f"  [{t}] {s}")

print(f"\n=== CORTOS <3000 palabras ({len(short)}) ===")
for w, t, s in sorted(short):
    print(f"  {w:5} | [{t}] {s}")
