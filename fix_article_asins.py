#!/usr/bin/env python3
"""
SCRIPT PARA ARREGLAR ARTÍCULO january-2026-best-tech-deals.json
Busca ASINs REALES de cada producto y actualiza el archivo.
"""

import json
import re
import time
import sys
sys.path.insert(0, '.')
from amazon_asin_lookup import get_amazon_asin

# Mapa de productos del artículo con sus nombres para búsqueda
PRODUCTOS_DEL_ARTICULO = [
    # Top Picks
    ("AirPods Pro 2nd Generation USB-C", "B0CP4CG1ZB"),  # Actual
    ("Amazon Fire TV Stick 4K 2023", "B0CJM1GNFQ"),
    ("Bose QuietComfort Headphones 2024", "B0CHX91Y2Z"),
    
    # Laptops & Computers
    ("Apple MacBook Air 13 M3 256GB", "B0CX23V2ZK"),
    ("Lenovo IdeaPad Slim 3 15 Ryzen 5", "B0D5L97D6D"),
    ("ASUS Chromebook Plus CX34", "B0CG29SC8S"),
    ("Apple Mac mini M2 256GB", "B0BSHGHGXR"),
    ("HP Victus 15 Gaming Laptop RTX 4050", "B0CWJYJVZT"),
    
    # Headphones & Audio
    ("Sony WH-1000XM5 headphones", "B09XS7JWHH"),
    ("Apple AirPods 3rd Generation", "B0D6J7T8WC"),
    ("Samsung Galaxy Buds3 Pro", "B0D64K7VQP"),
    ("JBL Tune 760NC Wireless Headphones", "B08WJQ9VK5"),
    ("Soundcore by Anker Space A40 Earbuds", "B0B1LVC5VZ"),
    ("Sonos Era 100", "B0BW34LCJ6"),
    
    # Smart Home
    ("Amazon Echo Show 8 3rd Gen 2024", "B0BLS3Y632"),
    ("Ring Video Doorbell 2nd Gen", "B08N5NQ869"),
    ("Google Nest Thermostat", "B08HRPDYTP"),
    ("Philips Hue Starter Kit 4 bulbs Bridge", "B096YFWVVS"),
    ("eufy Security S350 Dual Camera", "B0CDGCKGWB"),
    ("Amazon Echo Dot 5th Gen", "B09B8V1LZ3"),
    
    # Gaming
    ("PlayStation 5 Slim Console Disc", "B0CL61F39H"),
    ("Xbox Wireless Controller", "B0BY3GFDQ7"),
    ("Nintendo Switch OLED Model", "B098RKWHHZ"),
    ("SteelSeries Arctis Nova 7 Wireless", "B0B15QM2R2"),
    ("Razer DeathAdder V3 Mouse", "B0BT7CWD7D"),
    ("SanDisk 1TB microSD Nintendo Switch", "B0B7NXH5C7"),
    
    # Tablets & E-Readers
    ("Apple iPad 10th Gen 64GB", "B0BJLT98Q7"),
    ("Amazon Kindle Paperwhite 16GB 2024", "B0CFPJYX7P"),
    ("Samsung Galaxy Tab S9 FE 128GB", "B0CCX11R2J"),
    ("Amazon Fire HD 10 2023", "B0B1VQ1ZQY"),
    ("Apple Pencil 2nd Generation", "B07K1WWBJK"),
    
    # Wearables & Fitness
    ("Apple Watch SE 2nd Gen 40mm", "B0CHX9N594"),
    ("Fitbit Charge 6", "B0CCJFLS8B"),
    ("Garmin Forerunner 265", "B0BS1V2W1N"),
    ("Samsung Galaxy Watch 6 40mm", "B0C79MJGJF"),
    ("Oura Ring Gen 3 Heritage", "B0CS56MMMW"),
]


def buscar_asins_reales():
    """Busca ASINs reales para cada producto."""
    print("="*60)
    print("BUSCANDO ASINs REALES PARA CADA PRODUCTO")
    print("="*60)
    print()
    
    resultados = {}
    total = len(PRODUCTOS_DEL_ARTICULO)
    
    for i, (producto, asin_actual) in enumerate(PRODUCTOS_DEL_ARTICULO, 1):
        print(f"[{i}/{total}] {producto}")
        
        # Buscar ASIN real en Amazon
        asin_real = get_amazon_asin(producto)
        
        if asin_real:
            if asin_real == asin_actual:
                print(f"         ✅ OK: {asin_real}")
            else:
                print(f"         🔄 CAMBIO: {asin_actual} -> {asin_real}")
            resultados[asin_actual] = asin_real
        else:
            print(f"         ⚠️ No encontrado, manteniendo: {asin_actual}")
            resultados[asin_actual] = asin_actual
        
        # Pausa para evitar bloqueo de Amazon
        if i < total:
            time.sleep(1.5)
    
    return resultados


def actualizar_articulo(reemplazos):
    """Actualiza el artículo con los ASINs correctos."""
    archivo = "public/data/articles/january-2026-best-tech-deals.json"
    
    with open(archivo, 'r', encoding='utf-8') as f:
        content = f.read()
    
    cambios = 0
    for old_asin, new_asin in reemplazos.items():
        if old_asin != new_asin and old_asin in content:
            content = content.replace(old_asin, new_asin)
            cambios += 1
            print(f"  ✅ Reemplazado: {old_asin} -> {new_asin}")
    
    with open(archivo, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n📝 Total cambios aplicados: {cambios}")
    return cambios


if __name__ == "__main__":
    print("\n" + "="*60)
    print("ARREGLANDO ARTÍCULO january-2026-best-tech-deals.json")
    print("="*60 + "\n")
    
    # Paso 1: Buscar ASINs reales
    reemplazos = buscar_asins_reales()
    
    print("\n" + "="*60)
    print("APLICANDO CAMBIOS AL ARTÍCULO")
    print("="*60 + "\n")
    
    # Paso 2: Actualizar artículo
    cambios = actualizar_articulo(reemplazos)
    
    if cambios > 0:
        print("\n✅ Artículo actualizado con ASINs reales!")
    else:
        print("\n✅ Todos los ASINs ya eran correctos!")
