#!/usr/bin/env python3
"""
Poblar articles.json escaneando todos los artículos existentes en el sitio NDS.
Este script escanea las carpetas de categorías y genera un articles.json completo.
"""
import os
import re
import json
from pathlib import Path
from datetime import datetime

# Rutas
NDS_PREMIUM = Path(r"c:\Users\alfre\super-agent-factory\nds-premium")
APP_DIR = NDS_PREMIUM / "src" / "app"
OUTPUT_FILE = NDS_PREMIUM / "public" / "data" / "articles.json"

# Categorías web del sitio
WEB_CATEGORIES = [
    "reviews",
    "gaming", 
    "software",
    "guides",
    "deals",
    "compare",
    "blog"
]

def extract_metadata_from_page(page_path: Path) -> dict:
    """Extraer metadata de un page.tsx de artículo."""
    try:
        content = page_path.read_text(encoding="utf-8")
        
        # Extraer título
        title_match = re.search(r'title["\']?:\s*["\']([^"\']+)["\']', content)
        if not title_match:
            title_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
        if not title_match:
            title_match = re.search(r'<title>([^<]+)</title>', content)
        
        title = title_match.group(1) if title_match else page_path.parent.name.replace("-", " ").title()
        
        # Extraer descripción
        desc_match = re.search(r'description["\']?:\s*["\']([^"\']+)["\']', content)
        if not desc_match:
            desc_match = re.search(r'<meta name="description" content="([^"]+)"', content)
        
        description = desc_match.group(1) if desc_match else f"Expert guide about {title}"
        
        # Detectar tipo de artículo por patrones en el título/slug
        slug = page_path.parent.name
        article_type = "review"  # default
        
        if " vs " in slug.lower() or "-vs-" in slug:
            article_type = "comparison"
        elif slug.startswith("best-"):
            article_type = "listicle"
        elif slug.startswith("how-to-") or "guide" in slug:
            article_type = "guide"
        elif "deal" in slug or "discount" in slug or "sale" in slug:
            article_type = "deal"
        elif "news" in slug or "update" in slug or "launch" in slug:
            article_type = "news"
        elif "ultimate" in slug or "complete" in slug:
            article_type = "comprehensive"
            
        # Estimar fecha (usar fecha de modificación del archivo si no hay otra)
        mtime = os.path.getmtime(page_path)
        date = datetime.fromtimestamp(mtime).strftime("%Y-%m-%d")
        
        # Buscar fecha en el contenido
        date_match = re.search(r'(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}', content)
        if date_match:
            try:
                parsed = datetime.strptime(date_match.group(0).replace(",", ""), "%B %d %Y")
                date = parsed.strftime("%Y-%m-%d")
            except:
                pass
        
        # Contar palabras aproximado
        text_only = re.sub(r'<[^>]+>', '', content)
        text_only = re.sub(r'\{[^}]+\}', '', text_only)
        word_count = len(text_only.split())
        
        return {
            "title": title.strip()[:100],
            "description": description.strip()[:200],
            "articleType": article_type,
            "date": date,
            "wordCount": word_count,
            "featured": word_count > 2000  # Featured si es largo
        }
    except Exception as e:
        print(f"  ⚠️ Error parsing {page_path}: {e}")
        return None


def scan_category(category: str) -> list:
    """Escanear una categoría y encontrar todos los artículos."""
    articles = []
    category_dir = APP_DIR / category
    
    if not category_dir.exists():
        print(f"  ⚠️ Categoría no existe: {category}")
        return articles
    
    # Buscar subcarpetas con page.tsx (cada artículo es una carpeta)
    for item in category_dir.iterdir():
        if item.is_dir() and item.name != "[slug]":
            page_file = item / "page.tsx"
            if page_file.exists():
                metadata = extract_metadata_from_page(page_file)
                if metadata:
                    slug = item.name
                    href = f"/{category}/{slug}"
                    
                    article = {
                        "slug": slug,
                        "title": metadata["title"],
                        "description": metadata["description"],
                        "category": category,
                        "articleType": metadata["articleType"],
                        "date": metadata["date"],
                        "featured": metadata["featured"],
                        "href": href,
                        "wordCount": metadata["wordCount"]
                    }
                    articles.append(article)
                    print(f"  ✅ {slug}")
    
    return articles


def main():
    print("=" * 60)
    print("📚 POBLANDO articles.json")
    print("=" * 60)
    
    all_articles = []
    
    for category in WEB_CATEGORIES:
        print(f"\n📁 Escaneando /{category}...")
        articles = scan_category(category)
        all_articles.extend(articles)
        print(f"   Encontrados: {len(articles)} artículos")
    
    # Ordenar por fecha descendente
    all_articles.sort(key=lambda x: x["date"], reverse=True)
    
    # Guardar
    output_data = all_articles  # Lista directa, no objeto con "articles"
    
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    print("\n" + "=" * 60)
    print(f"✅ Guardado: {OUTPUT_FILE}")
    print(f"📊 Total artículos: {len(all_articles)}")
    print("=" * 60)
    
    # Mostrar resumen por categoría
    print("\n📊 Resumen por categoría:")
    from collections import Counter
    cat_counts = Counter(a["category"] for a in all_articles)
    for cat, count in sorted(cat_counts.items(), key=lambda x: -x[1]):
        print(f"   {cat}: {count}")
    
    # Mostrar resumen por tipo
    print("\n📊 Resumen por tipo de artículo:")
    type_counts = Counter(a["articleType"] for a in all_articles)
    for atype, count in sorted(type_counts.items(), key=lambda x: -x[1]):
        print(f"   {atype}: {count}")
    
    return all_articles


if __name__ == "__main__":
    main()
