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
- **Nada de autores inventados** (decidido 9 ago 2026, opción A). En `src/data/authors.ts`
  había cinco personas con credenciales fabricadas y enlaces a perfiles de LinkedIn y
  Twitter de terceros reales. Ahora firma una identidad editorial única, sin foto ni
  redes. Si algún día se añade una persona, tiene que existir de verdad.
- **Antes de dar por bueno un enlace de afiliado, comprobar el parámetro.**
  `ipvanish-review-2026` llevaba `a_aid=partner`: parecía monetizado y pagaba 0. Las URLs
  buenas se copian de las que ya funcionan en otros artículos, no se construyen a mano.
- **Proton: el `offer_id` varía por producto** (Pass=43, VPN=7, Mail=26, Unlimited=50).
  Unificarlos rompe ventas.
- Las IDs de afiliado verificadas están en `AFFILIATE_IDS.md` (no se sube a GitHub).
- **El sitio es en INGLÉS y compite en EE.UU.** (tag `nestdigital-20` = amazon.com).
  Hermes ha escrito artículos en español al menos una vez (6 el 9 ago 2026). No es solo
  el `content`: también `title`, `excerpt`, `schema` y `faqSchema`. Herramientas para
  detectarlo y arreglarlo: `security/traducir_articulos_es.py` y
  `security/traducir_metadatos_es.py` (ambas con `--dry-run`).
- **Para tareas de IA se usa Claude, no Gemini** (decidido 9 ago 2026). La clave de
  Gemini lleva invalidada desde junio y tenía el chat de la web caído sin que se notara.
  `ANTHROPIC_API_KEY` vive en `super-agent-factory/.env`.
- **Al traducir o reescribir, el texto de los enlaces internos NO se toca en masa.** El
  9 ago un barrido reescribió 442 anclas en 121 artículos cuando solo había que corregir
  5. Se revirtió. Corregir solo las anclas cuyo destino cambió de título.

## Estado del negocio (9 ago 2026)

- Posición media en Google **38.8**, 804 impresiones, 3 clics, **0 € de ingresos**.
- **55 de 231 artículos no tienen ningún enlace que genere comisión** (eran 59; los 4 que
  se podían cerrar con IDs ya verificadas se cerraron el 9 ago). Son las reviews de
  producto único: las de mayor intención de compra.
- **90% de los enlaces monetizados son de Amazon**, que paga 3-4% con cookie de 24h.
- Auditoría completa con los números: `AUDITORIA_NEGOCIO_2026-08-09.md`.

## Decisiones ABIERTAS que solo decide Alfredo

- **Concentración de nicho**: 44 artículos de seguridad frente a 187 fuera del nicho.
- A qué programas de afiliados darse de alta para cerrar los 55 artículos restantes.
  Los que faltan y más pagan: SiteGround, Hostinger, Bluehost, ExpressVPN, CyberGhost,
  1Password, Bitwarden, Dashlane, Grammarly, Semrush, Figma.
- Los 34 artículos que ponen el primer enlace de dinero pasado el 75% del texto.

## Reglas de trabajo en este repo

- **No hacer push sin OK explícito de Alfredo**: push a `main` despliega a producción.
- Verificar siempre con `npx tsc --noEmit` **y** `npx next build` antes de dar algo por
  hecho. El build es ahora quien detecta los datos corruptos.
- Datos reales de tráfico: `python security/weekly_report.py` (Search Console + GA4 con
  `security/google-sa.json`). Requiere `google-api-python-client google-auth
  google-analytics-data`.
- Salud del sitio: `python security/site_health.py`.
- Nunca afirmar que algo se arregló sin comprobarlo contra producción o contra el build.
