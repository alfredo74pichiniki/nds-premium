import json
import os

ARTICLES_DIR = 'public/data/articles'
INDEX_FILE = 'public/data/articles.json'

# Load index with utf-8
with open(INDEX_FILE, 'r', encoding='utf-8') as f:
    index = json.load(f)

existing = {a['slug'] for a in index}

# Add AUDIO articles
audio_slugs = [
    'best-studio-monitors-home-2026',
    'best-dac-amp-combos-2026', 
    'best-open-back-headphones-2026',
    'best-portable-bluetooth-speakers-2026',
    'best-soundbars-tv-2026',
    'best-turntables-vinyl-2026',
    'best-usb-microphones-streaming-2026',
    'best-bone-conduction-headphones-2026'
]

for slug in audio_slugs:
    if slug not in existing:
        json_path = os.path.join(ARTICLES_DIR, f'{slug}.json')
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                a = json.load(f)
            index.append({
                'slug': a['slug'], 'title': a['title'],
                'description': a['description'],
                'category': 'audio', 'articleType': 'best_list',
                'date': a['date'], 'wordCount': a['wordCount'],
                'href': f"/audio/{a['slug']}", 'featured': False
            })
            print(f'Added: {slug}')

with open(INDEX_FILE, 'w', encoding='utf-8') as f:
    json.dump(index, f, indent=2, ensure_ascii=False)

print(f'Index updated: {len(index)} total')
