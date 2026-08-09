# Plan de salto — NDS

*9 de agosto de 2026. Cada cifra de este plan está medida, no estimada.
Fuente: 90 días de Search Console, GA4, los 231 JSON del repo y producción en vivo.*

---

## El diagnóstico en una página

Llevas meses produciendo y no entra dinero. La causa no es una, son tres, y solo
una de ellas es la que de verdad bloquea:

| Pata | Estado medido | ¿Bloquea? |
|---|---|---|
| **Producir** | 231 artículos, media 3.959 palabras, 229 con FAQ schema | No. Esto sobra. |
| **Convertir** | 55 artículos no pueden cobrar; 90% depende de Amazon (3-4%, cookie 24h) | Sí, pero se arregla |
| **Que te encuentren** | Posición media 38.8. 97 de 231 artículos con **0 impresiones en 90 días** | **Este es el cuello** |

**Traducción sin adornos:** escribir el artículo 232 no cambia nada. Estás en la
página 4 de Google. En la página 4 no hay clics, y sin clics no hay comisiones por
buenos que sean los enlaces.

### El dato que decide la estrategia

Posición media por tema, 90 días de Search Console:

| Tema | Impresiones | Pos. media | En top 10 | Artículos |
|---|---:|---:|---:|---:|
| **Seguridad** | 379 | **24.0** | 4 | 56 |
| otros | 1211 | 37.6 | 13 | 60 |
| hogar/oficina | 344 | 45.0 | 2 | 16 |
| audio | 205 | 48.0 | 1 | 17 |
| hosting/web | 281 | 58.2 | 0 | 23 |
| saas/productividad | 229 | 60.6 | 0 | 46 |
| outdoor | 4 | 190.2 | 0 | 4 |

Seguridad es el **único** tema donde el sitio está cerca de competir. En hosting y
SaaS estás en posición 58-60: eso es la página 6, es no existir. Y ahí has metido
69 artículos y 280.000 palabras.

**Google ya te ha dicho de qué va tu sitio. La decisión es escucharlo o seguir
peleando siete batallas a la vez con un dominio sin autoridad.**

---

## Lo que ya está hecho y desplegado (9 ago)

| # | Qué | Resultado medido |
|---|---|---|
| 1 | Páginas estáticas (`generateStaticParams` en las 9 rutas) | 335 páginas pre-renderizadas. Un dato corrupto ya no se sirve como 500 a Googlebot |
| 2 | `robots.txt` desbloqueado | Google vuelve a poder leer el CSS/JS y las portadas |
| 3 | `image` en el schema Article | Los 231 pasan a poder optar a resultado enriquecido |
| 4 | Autores inventados fuera | 0 personas falsas y 0 enlaces a perfiles ajenos en las 335 páginas |
| 5 | 4 reviews monetizadas | Surfshark, Proton VPN, IPVanish, A2 Hosting: 3 CTA cada una, primer enlace al 5-9% del texto |
| 6 | Placeholder `a_aid=partner` corregido | 2 enlaces que parecían monetizados y pagaban 0 |
| 7 | **Mesh interno de seguridad** | Huérfanos del nicho **20 → 0**. Enlaces internos hacia el nicho **249 → 426** |
| 8 | Chat de la web | Llevaba roto desde junio sirviendo un mensaje enlatado con HTTP 200. Ahora falla visible y apunta al nicho |

---

## Las tres palancas, por orden de impacto real

### Palanca 1 — AUTORIDAD (la única que mueve la posición 38)

Nada de lo demás cambia el 38.8. Solo enlaces entrantes. Es lento y es la verdad.

| Jugada | Quién | Plazo honesto |
|---|---|---|
| Activo enlazable: un estudio con datos propios sobre seguridad que otros quieran citar | Yo produzco, tú apruebas | 2-4 semanas para tenerlo |
| Respuestas a periodistas (HARO y similares) en seguridad y privacidad | Tú (5-10 min/día) | Primer enlace en 3-6 semanas |
| Páginas de recursos y listados del sector | Yo preparo, tú envías | 4-8 semanas |

**Criterio honesto:** la autoridad no se ve en semanas. Si en 3 meses el bloque de
consultas de seguridad no mejora su posición media, el problema no es la
dispersión sino la calidad, y se replantea.

### Palanca 2 — CONVERTIR (lo que hace que el tráfico valga dinero)

Ya no dependen de mí: dependen de altas en programas. Prioridad por impresiones
reales.

| Artículo | Impr. 90d | Pos. | Programa a dar de alta |
|---|---:|---:|---|
| `bitwarden-review-2026` | 3 | **17.0** | Bitwarden |
| `notion-review-2026` | 8 | 36.2 | Notion |
| `quickbooks-review-2026` | 16 | 43.4 | QuickBooks (CJ) |
| `pcloud-review-2026` | 12 | 42.8 | pCloud (ya sale `partner.pcloud.com`, falta tu ID) |
| `mailchimp-review-2026` | 11 | 51.7 | Mailchimp |
| `figma-review-2026` | 2 | **11.0** | Figma (puede no tener programa) |
| `canva-review-2026` | 1 | **11.0** | Canva |
| `teachable-review-2026` | 1 | **5.0** | Teachable (Impact) |
| `zapier-review-2026` | 1 | **2.0** | Zapier (PartnerStack) |
| Hosting: siteground, hostinger, bluehost | — | — | Las tres pagan alto y faltan |
| Seguridad: expressvpn, cyberghost, 1password, dashlane | — | — | Nicho core, prioridad |

> Ojo con la lectura fácil: `zapier` en posición 2 y `teachable` en 5 suenan a oro,
> pero tienen **1 impresión en 90 días**. Es posición 2 en una búsqueda que casi
> nadie hace. No son la mina; son gratis de arreglar y punto.

### Palanca 3 — CONCENTRAR (dejar de diluir)

1. **Parar a Hermes fuera de seguridad.** Acción inmediata, no toca nada existente,
   deja de repartir esfuerzo en temas donde estás en posición 58.
2. **Profundizar los near-miss del nicho** (posición 8-40): `best-vpn-for-iphone`
   (pos 9.2), `best-vpn-for-gaming` (pos 10), `bitwarden-review` (pos 17),
   `best-indoor-security-cameras` (pos 17.8), `best-antivirus-vpn-bundle` (pos 23.2),
   `best-antivirus-software-2026` (pos 24.4, **424 impresiones, tu página nº1**).
3. **Los 97 artículos con 0 impresiones**: no borrar nada. Decidir si los más
   flojos fuera del nicho van a `noindex` para que dejen de diluir la señal
   temática. **Requiere tu OK explícito.**

---

## Qué hago yo (sin pedirte nada)

1. Profundizar `best-antivirus-software-2026`: es tu página nº1 real (424
   impresiones, pos 24.4) y la que más cerca está de dar el salto a página 1.
2. Subir el primer enlace de dinero en los 34 artículos que hoy lo ponen pasado el
   75% del texto.
3. Preparar el activo enlazable de seguridad para que tú solo tengas que aprobarlo.

## Qué necesito de ti (y no puedo hacer yo)

| # | Acción | Tiempo | Qué desbloquea |
|---|---|---|---|
| 1 | **Almacenamiento de Gmail** (se corta ≈20 ago) | 10 min | Sin correo no hay altas de afiliados ni avisos. Lo más urgente de todo |
| 2 | **Regenerar la GEMINI_API_KEY** en aistudio.google.com/apikey | 2 min | Arregla el chat **y** dispara `security/traducir_articulos_es.py`, que pasa a inglés los 6 artículos que Hermes escribió en español |
| 3 | **Search Console → VALIDAR CORRECCIÓN** del error 5xx | 2 min | Que Google re-rastree ya en vez de en semanas |
| 4 | **Tarjeta rechazada de Amazon Ads** | 10 min | Dos avisos sin resolver (16 y 30 jul) |
| 5 | **Altas en programas** de la tabla de la Palanca 2 | 1-2 h | Convierte los 55 artículos mudos en artículos que cobran |
| 6 | **Decidir:** ¿parar Hermes fuera de seguridad? ¿noindex a los off-niche flojos? | tu decisión | La concentración de nicho |

---

## Cómo sabremos si funciona (y cuándo dejar de insistir)

Se mide el CONJUNTO del nicho, no un artículo suelto. Cada mes, con
`security/weekly_report.py` y `security/nicho_concentracion.py`:

| Métrica | Hoy | Objetivo 3 meses |
|---|---:|---|
| Posición media del bloque seguridad | 24.0 | < 18 |
| Consultas de seguridad en top 10 | 4 | > 12 |
| `best-antivirus-software-2026` | pos 24.4 | top 10 |
| Artículos del nicho sin monetizar | 12 | 0 |
| Clics de afiliado (GA4) | 0 | > 0 de forma sostenida |

**Criterio de pivote, escrito antes de empezar para no engañarnos después:** si a
los 3 meses de concentrar y construir enlaces el bloque de seguridad no ha
mejorado su posición media ni ha subido consultas a top 10, el problema no es la
dispersión. Sería la autoridad off-page o la calidad percibida, y se replantea el
enfoque en vez de seguir empujando lo mismo.
