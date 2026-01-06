"""
AMAZON ASIN DYNAMIC LOOKUP MODULE
Busca ASINs REALES de CUALQUIER producto en Amazon mediante scraping.

NO está limitado a productos específicos - puede buscar cualquier cosa.
"""

import requests
from bs4 import BeautifulSoup
import re
import time
import json
import os
from typing import Optional, Dict, List

# Cache para evitar búsquedas repetidas
CACHE_FILE = os.path.join(os.path.dirname(__file__), "asin_cache.json")

# Headers para simular navegador real
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
}


def load_cache() -> Dict:
    """Carga el cache de ASINs buscados."""
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r') as f:
                return json.load(f)
        except:
            return {}
    return {}


def save_cache(cache: Dict):
    """Guarda el cache de ASINs buscados."""
    with open(CACHE_FILE, 'w') as f:
        json.dump(cache, f, indent=2)


def search_amazon_for_asin(product_name: str) -> Optional[str]:
    """
    Busca un producto en Amazon y extrae el ASIN del primer resultado.
    
    Esta función hace scraping real de Amazon para encontrar el producto.
    
    Args:
        product_name: Nombre del producto a buscar
        
    Returns:
        ASIN del primer producto encontrado, o None si no se encuentra
    """
    search_query = product_name.replace(' ', '+')
    url = f"https://www.amazon.com/s?k={search_query}"
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=15)
        
        if response.status_code != 200:
            print(f"[WARN] Amazon returned status {response.status_code}")
            return None
        
        # Verificar si Amazon bloquea
        if 'To discuss automated access' in response.text or 'captcha' in response.text.lower():
            print("[WARN] Amazon detectó bot - usando fallback")
            return None
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Buscar productos en los resultados
        # Amazon usa data-asin en los elementos de producto
        products = soup.find_all('div', {'data-asin': True})
        
        for product in products:
            asin = product.get('data-asin')
            # Filtrar ASINs vacíos o publicidad
            if asin and len(asin) == 10 and asin.startswith('B'):
                # Verificar que es un producto real (no publicidad)
                if product.find('span', {'class': 'a-price'}):
                    return asin
        
        # Método alternativo: buscar enlaces /dp/ASIN
        dp_links = soup.find_all('a', href=re.compile(r'/dp/[A-Z0-9]{10}'))
        for link in dp_links:
            match = re.search(r'/dp/([A-Z0-9]{10})', link.get('href', ''))
            if match:
                return match.group(1)
        
        return None
        
    except Exception as e:
        print(f"[ERROR] Failed to search Amazon: {e}")
        return None


def get_amazon_asin(product_name: str, use_cache: bool = True) -> Optional[str]:
    """
    Obtiene el ASIN de un producto, usando cache si está disponible.
    
    Args:
        product_name: Nombre del producto
        use_cache: Si usar el cache (default: True)
        
    Returns:
        ASIN del producto o None si no se encuentra
    """
    cache_key = product_name.lower().strip()
    
    # 1. Verificar cache
    if use_cache:
        cache = load_cache()
        if cache_key in cache:
            cached = cache[cache_key]
            # Cache válido por 7 días
            if time.time() - cached.get('timestamp', 0) < 604800:
                return cached.get('asin')
    
    # 2. Buscar en Amazon
    asin = search_amazon_for_asin(product_name)
    
    # 3. Guardar en cache
    if asin:
        cache = load_cache()
        cache[cache_key] = {
            'asin': asin,
            'timestamp': time.time(),
            'product_name': product_name
        }
        save_cache(cache)
    
    return asin


def get_amazon_product_link(product_name: str, affiliate_tag: str = "nestdigital0e-20") -> str:
    """
    Obtiene el enlace de Amazon para CUALQUIER producto.
    
    1. Busca el ASIN real en Amazon
    2. Si lo encuentra, retorna enlace directo con ASIN
    3. Si no, retorna enlace de búsqueda como fallback
    
    Args:
        product_name: Nombre del producto
        affiliate_tag: Tag de afiliado de Amazon
        
    Returns:
        URL de Amazon con tag de afiliado
    """
    asin = get_amazon_asin(product_name)
    
    if asin:
        return f"https://www.amazon.com/dp/{asin}?tag={affiliate_tag}"
    else:
        # Fallback a enlace de búsqueda
        search_query = product_name.replace(' ', '+')
        return f"https://www.amazon.com/s?k={search_query}&tag={affiliate_tag}"


def get_product_info(product_name: str, affiliate_tag: str = "nestdigital0e-20") -> Dict:
    """
    Obtiene información completa del producto incluyendo enlace verificado.
    
    Esta función busca CUALQUIER producto en Amazon.
    
    Returns:
        Dict con: name, asin, url, verified, source
    """
    asin = get_amazon_asin(product_name)
    
    if asin:
        return {
            "name": product_name,
            "asin": asin,
            "url": f"https://www.amazon.com/dp/{asin}?tag={affiliate_tag}",
            "verified": True,
            "source": "amazon_search"
        }
    else:
        search_query = product_name.replace(' ', '+')
        return {
            "name": product_name,
            "asin": None,
            "url": f"https://www.amazon.com/s?k={search_query}&tag={affiliate_tag}",
            "verified": False,
            "source": "search_fallback"
        }


def batch_search_asins(product_names: List[str], delay: float = 1.0) -> Dict[str, Optional[str]]:
    """
    Busca ASINs para múltiples productos.
    
    Args:
        product_names: Lista de nombres de productos
        delay: Segundos entre búsquedas (para evitar bloqueo)
        
    Returns:
        Dict con producto -> ASIN
    """
    results = {}
    total = len(product_names)
    
    for i, name in enumerate(product_names, 1):
        print(f"[{i}/{total}] Buscando: {name}")
        asin = get_amazon_asin(name)
        results[name] = asin
        
        if asin:
            print(f"         ✅ Found: {asin}")
        else:
            print(f"         ⚠️ Not found")
        
        if i < total:
            time.sleep(delay)
    
    return results


def verify_asin(asin: str) -> bool:
    """
    Verifica que un ASIN existe en Amazon.
    """
    url = f"https://www.amazon.com/dp/{asin}"
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        
        if response.status_code == 404:
            return False
        
        if 'Page Not Found' in response.text:
            return False
            
        return response.status_code == 200
        
    except Exception:
        return False


if __name__ == "__main__":
    print("="*60)
    print("AMAZON ASIN DYNAMIC LOOKUP TEST")
    print("Busca ASINs de CUALQUIER producto en tiempo real")
    print("="*60)
    print()
    
    # Productos de prueba - CUALQUIERA que esté en Amazon
    test_products = [
        "Logitech MX Master 3S mouse",
        "Razer BlackWidow keyboard",
        "Samsung T7 SSD 1TB",
        "Anker PowerCore 10000",
        "JBL Flip 6 speaker"
    ]
    
    for product in test_products:
        print(f"Buscando: {product}")
        info = get_product_info(product)
        
        if info['verified']:
            print(f"  ✅ ASIN: {info['asin']}")
            print(f"     URL: {info['url'][:60]}...")
        else:
            print(f"  ⚠️ No encontrado, usando búsqueda")
        print()
        
        time.sleep(1)  # Evitar bloqueo
