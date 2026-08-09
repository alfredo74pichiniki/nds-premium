# NDS Premium — memoria del proyecto

Sitio de marketing de afiliados **nestdigitalstudio.com**. Next.js 16 + React 19,
desplegado en Vercel (proyecto `nds-premium`, team `alfredo74pichinikis-projects`).
Repo: `github.com/alfredo74pichiniki/nds-premium`. Push a `main` = deploy a producción.

## Cómo está montado (verificado, no asumido)

- **Los artículos NO están en el código.** Viven en `public/data/articles/{slug}.json`
  (231 ficheros) más el índice `public/data/articles.json`. Las páginas leen el fichero
  individual; el índice solo alimenta listados y sitemap.
- **Una ruta `[slug]` por categoría**, 9 en total: `audio, blog, deals, gaming, guides,
  home, outdoor, reviews, software`. Las nueve son idénticas salvo la constante
  `CATEGORY` y el `client.tsx` que importan.
- Un artículo con una `category` que no sea una de esas nueve **da 404**. `productivity`
  se remapea a `software` en `CAT_MAP` (existe en `lib/articles.ts` y en `sitemap.ts`:
  si cambias uno, cambia el otro).
- Los artículos los escribe el agente **Hermes**, que commitea directo a `main`.
- Existen páginas estáticas legacy de 2025 (`/software/best-vpn-2025`, etc.). Están
  redirigidas con 308 desde `legacy-redirects.ts`. No son alcanzables, no las revivas.

## Decisiones tomadas (no re-litigar)

- **Los artículos se pre-renderizan en el build** (`generateStaticParams` en las 9 rutas,
  9 ago 2026). Motivo: sin eso, un dato mal formado de Hermes se servía como **error 500
  a Googlebot** en vez de romper el build. Pasó de verdad con `schema.isBasedOn` y acabó
  en un aviso de Search Console. `dynamicParams` sigue activo, así que un slug nuevo se
  sirve igual sin esperar al build.
- **`schema.isBasedOn` llega en tres formatos** (lista, objeto suelto, cadena).
  `normalizarFuentes()` en `ServerJsonLd.tsx` acepta los tres. No lo "simplifiques".
- **robots.txt NO debe bloquear `/_next/`** (es el CSS y el JS) **ni `/api/og`** (es la
  imagen de portada de cada artículo). Se bloqueó durante meses; corregido el 9 ago 2026.
- **El tag de Amazon es `nestdigital-20`.** Nunca `nestdigital0e-20`, que no existe.
- **Proton: el `offer_id` varía por producto** (Pass=43, VPN=7, Mail=26, Unlimited=50).
  Unificarlos rompe ventas.
- Las IDs de afiliado verificadas están en `AFFILIATE_IDS.md` (no se sube a GitHub).

## Estado del negocio (9 ago 2026)

- Posición media en Google **38.8**, 804 impresiones, 3 clics, **0 € de ingresos**.
- **59 de 231 artículos no tienen ningún enlace que genere comisión** (244.056 palabras).
  Son las reviews de producto único: las de mayor intención de compra.
- **90% de los enlaces monetizados son de Amazon**, que paga 3-4% con cookie de 24h.
- Auditoría completa con los números: `AUDITORIA_NEGOCIO_2026-08-09.md`.

## Decisiones ABIERTAS que solo decide Alfredo

- **Autores inventados** (`src/data/authors.ts`): cinco personas con credenciales falsas y
  enlaces a perfiles de LinkedIn/Twitter de terceros, renderizadas 2 veces en cada
  artículo. Opciones A (marca editorial) / B (Alfredo como autor real) / C (no tocar).
- **Concentración de nicho**: 44 artículos de seguridad frente a 187 fuera del nicho.
- A qué programas de afiliados darse de alta para cerrar los 55 artículos restantes.

## Reglas de trabajo en este repo

- **No hacer push sin OK explícito de Alfredo**: push a `main` despliega a producción.
- Verificar siempre con `npx tsc --noEmit` **y** `npx next build` antes de dar algo por
  hecho. El build es ahora quien detecta los datos corruptos.
- Datos reales de tráfico: `python security/weekly_report.py` (Search Console + GA4 con
  `security/google-sa.json`). Requiere `google-api-python-client google-auth
  google-analytics-data`.
- Salud del sitio: `python security/site_health.py`.
- Nunca afirmar que algo se arregló sin comprobarlo contra producción o contra el build.
