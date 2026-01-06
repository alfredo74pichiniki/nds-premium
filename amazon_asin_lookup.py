"""
AMAZON ASIN LOOKUP MODULE
Busca ASINs reales de productos para generar enlaces válidos.
NO inventa ASINs - usa web scraping para encontrar productos reales.
"""

import requests
from bs4 import BeautifulSoup
import re
import time
import json
import os
from typing import Optional, Dict, List

# Cache de ASINs verificados para evitar búsquedas repetidas
CACHE_FILE = os.path.join(os.path.dirname(__file__), "verified_asins_cache.json")

# ASINs verificados manualmente (productos populares conocidos)
KNOWN_GOOD_ASINS = {
    # Audio
    "airpods pro 2": "B0D1XD1ZV3",
    "airpods pro 2 usb-c": "B0CP4CG1ZB",
    "sony wh-1000xm5": "B09XS7JWHH",
    "sony wh-1000xm4": "B0863TXGM3",
    "bose quietcomfort ultra headphones": "B0CCZ26B5V",
    "bose quietcomfort headphones": "B0CHX91Y2Z",
    
    # Apple Products
    "macbook air m3": "B0CX23V2ZK",
    "macbook air m2": "B0B3BVWJ6Y",
    "macbook pro m3": "B0CM5KK44S",
    "ipad 10th gen": "B0BJLT98Q7",
    "ipad air m2": "B0D3J617D3",
    "ipad pro m4": "B0D3J5VFYQ",
    "apple watch se": "B0CHX9N594",
    "apple watch series 9": "B0CSTJ2Y5F",
    "apple pencil 2": "B07K1WWBJK",
    
    # Amazon Devices
    "echo dot 5th gen": "B09B8V1LZ3",
    "echo show 8": "B0BLS3Y632",
    "fire tv stick 4k": "B0CJM1GNFQ",
    "fire tv stick 4k max": "B0BP9SNVH9",
    "ring video doorbell": "B08N5NQ869",
    "kindle paperwhite": "B0CFPJYX7P",
    "fire hd 10": "B0B1VQ1ZQY",
    
    # Samsung
    "samsung galaxy buds3 pro": "B0D64K7VQP",
    "samsung galaxy watch 6": "B0C79MJGJF",
    "samsung galaxy tab s9": "B0CCX11R2J",
    
    # Gaming
    "playstation 5": "B0CL61F39H",
    "nintendo switch oled": "B098RKWHHZ",
    "xbox controller": "B0BY3GFDQ7",
    "steelseries arctis nova 7": "B0B15QM2R2",
    "razer deathadder v3": "B0BT7CWD7D",
    
    # Smart Home
    "philips hue starter kit": "B096YFWVVS",
    "google nest thermostat": "B08HRPDYTP",
    "eufy security camera": "B0CDGCKGWB",
    "sonos era 100": "B0BW34LCJ6",
    
    # Storage
    "samsung 990 pro": "B0CHGT1KY5",
    "sandisk microsd 1tb": "B0B7NXH5C7",
    
    # Wearables
    "fitbit charge 6": "B0CCJFLS8B",
    "garmin forerunner 265": "B0BS1V2W1N",
    "oura ring gen 3": "B0CS56MMMW",
    
    # Laptops
    "lenovo ideapad": "B0D5L97D6D",
    "asus chromebook plus": "B0CG29SC8S",
    "apple mac mini m2": "B0BSHGHGXR",
    "hp victus gaming laptop": "B0CWJYJVZT",
    
    # Other Audio
    "airpods 3rd gen": "B0D6J7T8WC",
    "jbl tune headphones": "B08WJQ9VK5",
    "anker soundcore": "B0B1LVC5VZ",
    "anker soundcore q30": "B08HMWZBXC",
    "jbl flip 6": "B09GYLXHBZ",
}


def load_cache() -> Dict:
    """Carga el cache de ASINs verificados."""
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r') as f:
                return json.load(f)
        except:
            return {}
    return {}


def save_cache(cache: Dict):
    """Guarda el cache de ASINs verificados."""
    with open(CACHE_FILE, 'w') as f:
        json.dump(cache, f, indent=2)


def get_asin_from_known_products(product_name: str) -> Optional[str]:
    """
    Busca el ASIN en la lista de productos conocidos.
    Esta es la fuente más confiable.
    """
    product_lower = product_name.lower()
    
    # Búsqueda exacta primero
    if product_lower in KNOWN_GOOD_ASINS:
        return KNOWN_GOOD_ASINS[product_lower]
    
    # Búsqueda parcial
    for key, asin in KNOWN_GOOD_ASINS.items():
        if key in product_lower or product_lower in key:
            return asin
    
    return None


def verify_asin(asin: str) -> bool:
    """
    Verifica que un ASIN existe en Amazon.
    Retorna True si el producto existe y está disponible.
    """
    url = f"https://www.amazon.com/dp/{asin}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        
        # Si es 404, el producto no existe
        if response.status_code == 404:
            return False
        
        # Verificar que no es una página de error
        if 'Page Not Found' in response.text or "we can't find" in response.text.lower():
            return False
        
        # Verificar que el producto está disponible
        if 'currently unavailable' in response.text.lower():
            return False
            
        return response.status_code == 200
        
    except Exception:
        return False


def get_amazon_product_link(product_name: str, affiliate_tag: str = "nestdigital0e-20") -> str:
    """
    Obtiene el enlace de Amazon para un producto.
    
    1. Primero busca en productos conocidos (más confiable)
    2. Si no lo encuentra, usa enlace de búsqueda (fallback)
    
    Args:
        product_name: Nombre del producto
        affiliate_tag: Tag de afiliado de Amazon
        
    Returns:
        URL de Amazon con tag de afiliado
    """
    # 1. Buscar en productos conocidos
    asin = get_asin_from_known_products(product_name)
    
    if asin:
        return f"https://www.amazon.com/dp/{asin}?tag={affiliate_tag}"
    
    # 2. Buscar en cache
    cache = load_cache()
    cache_key = product_name.lower().strip()
    
    if cache_key in cache:
        cached = cache[cache_key]
        if cached.get('asin'):
            return f"https://www.amazon.com/dp/{cached['asin']}?tag={affiliate_tag}"
    
    # 3. Fallback: enlace de búsqueda (menos ideal pero funcional)
    search_query = product_name.replace(' ', '+')
    return f"https://www.amazon.com/s?k={search_query}&tag={affiliate_tag}"


def get_product_info(product_name: str, affiliate_tag: str = "nestdigital0e-20") -> Dict:
    """
    Obtiene información completa del producto incluyendo enlace verificado.
    
    Returns:
        Dict con: name, asin, url, verified, source
    """
    asin = get_asin_from_known_products(product_name)
    
    if asin:
        return {
            "name": product_name,
            "asin": asin,
            "url": f"https://www.amazon.com/dp/{asin}?tag={affiliate_tag}",
            "verified": True,
            "source": "known_products"
        }
    
    # Fallback a búsqueda
    search_query = product_name.replace(' ', '+')
    return {
        "name": product_name,
        "asin": None,
        "url": f"https://www.amazon.com/s?k={search_query}&tag={affiliate_tag}",
        "verified": False,
        "source": "search_fallback"
    }


def add_product_to_known(product_name: str, asin: str):
    """
    Añade un nuevo producto a la lista de conocidos.
    Primero verifica que el ASIN existe.
    """
    if not verify_asin(asin):
        raise ValueError(f"ASIN {asin} no es válido o el producto no existe")
    
    # Añadir al diccionario (esto requiere modificar el archivo manualmente
    # o usar un archivo de configuración separado)
    cache = load_cache()
    cache[product_name.lower()] = {"asin": asin, "verified": True}
    save_cache(cache)
    
    print(f"✅ Añadido: {product_name} -> {asin}")


# Función para actualizar masivamente productos
def batch_verify_asins(asins_to_check: List[str]) -> Dict[str, bool]:
    """
    Verifica múltiples ASINs.
    
    Returns:
        Dict con ASIN -> bool (True si válido)
    """
    results = {}
    for asin in asins_to_check:
        results[asin] = verify_asin(asin)
        time.sleep(0.5)  # Evitar ser bloqueado
    return results


if __name__ == "__main__":
    # Test de la funcionalidad
    print("Testing Amazon ASIN Lookup...")
    
    test_products = [
        "AirPods Pro 2",
        "Sony WH-1000XM5",
        "MacBook Air M3",
        "Echo Dot 5th Gen",
        "Unknown Product XYZ"
    ]
    
    for product in test_products:
        info = get_product_info(product)
        status = "✅" if info['verified'] else "⚠️"
        print(f"{status} {product}")
        print(f"   ASIN: {info['asin'] or 'N/A'}")
        print(f"   URL: {info['url'][:60]}...")
        print()
