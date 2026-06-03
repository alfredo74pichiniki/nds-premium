import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import json, os
from datetime import datetime

data = json.load(open('public/data/articles.json', encoding='utf-8'))
arts = data if isinstance(data, list) else data.get('articles', [])

def parse_date(d):
    for fmt in ['%B %d, %Y', '%B %Y', '%Y-%m-%d', '%b %d, %Y']:
        try:
            return datetime.strptime(d, fmt)
        except:
            pass
    return datetime(2025, 1, 1)

sorted_arts = sorted(arts, key=lambda a: parse_date(a.get('date', '')), reverse=True)

print(f"=== TOTAL ARTICULOS EN articles.json: {len(arts)} ===\n")

print("=== 25 ARTICULOS MAS RECIENTES ===")
for a in sorted_arts[:25]:
    print(f"  {a.get('date','?'):20} | {a.get('category','?'):10} | {a.get('slug','?')}")

# Check which ones have individual JSON files
print("\n=== ARTICULOS SIN ARCHIVO JSON INDIVIDUAL ===")
missing = []
for a in arts:
    slug = a.get('slug','')
    path = f"public/data/articles/{slug}.json"
    if not os.path.exists(path):
        missing.append(slug)
print(f"  Total sin archivo individual: {len(missing)}")
for s in missing[:20]:
    print(f"  MISSING: {s}")

# Count articles with affiliate links
print("\n=== ESTADISTICAS ===")
with_affiliates = 0
for a in arts:
    slug = a.get('slug','')
    path = f"public/data/articles/{slug}.json"
    if os.path.exists(path):
        try:
            d = json.load(open(path, encoding='utf-8'))
            links = d.get('affiliateLinks', [])
            if links:
                with_affiliates += 1
        except:
            pass

print(f"  Articulos con affiliateLinks definidos: {with_affiliates}/{len(arts)}")
print(f"  Articulos con archivo JSON individual: {len(arts) - len(missing)}/{len(arts)}")
