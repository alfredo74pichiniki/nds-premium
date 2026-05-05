"""Merge new Batch 3C articles into the master articles.json index (APPEND ONLY)."""
import sys, json, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ARTICLES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "data", "articles")
INDEX_PATH = os.path.join(os.path.dirname(ARTICLES_DIR), "articles.json")

NEW_SLUGS = [
    "best-ergonomic-mice-2026",
    "best-external-ssds-2026",
    "best-wifi-7-routers-2026",
    "best-smart-home-hubs-2026",
    "best-usb-c-hubs-docking-stations-2026",
]

# Load existing index
with open(INDEX_PATH, "r", encoding="utf-8") as f:
    index = json.load(f)

existing_slugs = {a["slug"] for a in index}
added = 0

for slug in NEW_SLUGS:
    if slug in existing_slugs:
        print(f"⏭️  Already in index: {slug}")
        continue
    
    art_path = os.path.join(ARTICLES_DIR, f"{slug}.json")
    if not os.path.exists(art_path):
        print(f"❌ File not found: {art_path}")
        continue
    
    with open(art_path, "r", encoding="utf-8") as f:
        art = json.load(f)
    
    entry = {
        "slug": art["slug"],
        "title": art["title"],
        "category": art["category"],
        "date": art["date"],
        "wordCount": art.get("wordCount", 0),
        "score": art.get("score", 90),
        "featured": art.get("featured", False),
        "author": art.get("author", "Tech Research Team"),
    }
    index.append(entry)
    added += 1
    print(f"✅ Added to index: {slug}")

# Write back
with open(INDEX_PATH, "w", encoding="utf-8") as f:
    json.dump(index, f, indent=2, ensure_ascii=False)

print(f"\n📊 Total articles in index: {len(index)} (+{added} new)")
