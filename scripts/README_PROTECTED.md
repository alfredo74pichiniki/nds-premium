# 🔒 SISTEMA PROTEGIDO - NO MODIFICAR SIN PERMISO

Este directorio contiene el sistema de publicación de artículos.

## REGLA DE ORO

**NUNCA** sobrescribir `articles.json` completo.
Siempre hacer **MERGE** (cargar existentes + agregar nuevos).

## Archivos Críticos

- `populate_articles_json.py` - DEBE hacer MERGE (arreglado 2026-01-03)
- `../public/data/articles.json` - Índice de artículos (preservar siempre)
- `../public/data/articles/*.json` - Artículos individuales (no borrar)

## Antes de Modificar

1. PREGUNTAR al usuario
2. Hacer backup
3. Verificar que hace MERGE, no sobrescribe

Última actualización: 2026-01-03
