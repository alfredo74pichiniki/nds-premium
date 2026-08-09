# Auditoría del negocio de afiliados — Nest Digital Studio

*Fecha: 9 de agosto de 2026. Todos los números de este informe están medidos sobre el
repo real y sobre producción. Ninguno es una estimación.*

---

## 0. Resumen en una frase

El motor de contenido funciona (231 artículos, media de 3.959 palabras, 229 con FAQ
schema) y la infraestructura de monetización está bien construida, pero **el 26% del
catálogo no puede ganar un euro**, el sitio lleva meses **bloqueando su propio CSS a
Google**, y ningún artículo podía optar a resultado enriquecido. El negocio no tiene un
problema de producción: tiene un problema de conexión entre lo que produce y lo que cobra.

**Números duros de esta semana (Search Console + GA4, 31 jul → 6 ago):**

| Métrica | Valor |
|---|---|
| Impresiones en Google | 804 (▲ +13%) |
| Clics desde Google | 3 |
| Posición media | 38.8 (empeora desde 34.2) |
| Sesiones GA4 | 89 |
| Sesiones reales (≥30s de media) | **0 de 89** |
| Clics a enlaces de afiliado | **0** |
| Ingresos atribuibles | **0 €** |

---

## 1. Lo que decían los emails de Google, y qué era de verdad

### 1.1 «Error de servidor (5xx)» — Search Console, 7 y 8 de agosto

**Diagnóstico:** rastreé las 240 URLs del sitemap identificándome como Googlebot y con
parámetro anti-caché. **Las 240 devuelven 200.** El error existió pero ya estaba
corregido cuando llegó el aviso.

Causa real, confirmada en los logs de Vercel:

```
TypeError: a.schema.isBasedOn.map is not a function
count=30  users=19  routes=/software/[slug]
first=2026-07-07  last=2026-08-05T12:32:18Z
```

El fix (commit `0f6a849`) se desplegó el 5 de agosto a las 14:31; el último error fue a
las 12:32 del mismo día. **Search Console avisa con retraso: el email describe rastreos
anteriores al arreglo.**

**Lo que falta hacer (solo lo puedes hacer tú, es la interfaz web):** entrar en Search
Console → Indexación → Páginas → «Error de servidor (5xx)» → botón **VALIDAR CORRECCIÓN**.
Sin ese botón Google puede tardar semanas en revisar por su cuenta.

### 1.2 La causa de fondo, que sí he arreglado

El error de arriba es un síntoma. La enfermedad era esta: **ninguna de las 9 rutas de
artículo pre-renderizaba nada**. Cada uno de los 231 artículos se generaba en el servidor
en cada petición, leyendo un JSON de 1 MB.

Consecuencia: cualquier dato mal formado que escriba Hermes (el generador) no rompe el
build, donde lo verías: **se convierte en un error 500 servido directamente a Googlebot**.
Es exactamente lo que pasó, y volverá a pasar con el siguiente campo raro.

**Arreglado.** Añadido `generateStaticParams` a las 9 rutas. Verificado con `next build`:

```
● /software/[slug]   →  134 rutas pre-renderizadas
TOTAL rutas estáticas: 328
audio 10 · blog 5 · deals 2 · gaming 19 · guides 24
home 27 · outdoor 5 · reviews 52 · software 149
```

Ahora un dato corrupto **revienta el build antes de publicar**, en vez de servir un 500 a
Google. Y de paso las páginas pasan de renderizarse en servidor a servirse como HTML
estático: mejor TTFB, mejor Core Web Vitals, menos gasto en Vercel.

### 1.3 Los otros emails de Google que sí son urgentes

| Email | Fecha | Riesgo real |
|---|---|---|
| **«Tu almacenamiento de Gmail está lleno»** | 3 ago | **El más grave de todos.** Dice que el correo deja de funcionar en 17 días (≈ 20 de agosto). Cancelaste Google One el 2 de julio. Si Gmail deja de recibir, pierdes altas de programas de afiliados, avisos de Search Console y notificaciones de pago de Amazon. Sin correo no hay negocio. |
| **OAuth clients inactivos se borran** | 13-14 jul | Afecta al proyecto `n8n-kdp-automation`. No toca la cuenta de servicio de NDS (`google-sa.json` sigue funcionando: he sacado datos frescos de Search Console y GA4 con ella hoy). Puede romper una automatización de n8n. |
| **Modelos Imagen 4 se retiran el 17 ago** | 18 jun | Afecta al pipeline de imágenes de FBP, no a este sitio. Quedan 8 días. |
| **«Action required: payment declined» (Amazon Ads)** | 16 y 30 jul | Dos avisos de tarjeta rechazada sin resolver. No es Google pero es dinero: si la tarjeta sigue rechazada, las campañas se paran. |

---

## 2. El agujero de dinero: 59 artículos que no pueden facturar

Esto es lo más caro del informe.

**59 de 231 artículos (26%) no tienen ni un solo enlace que genere comisión.
Suman 244.056 palabras.**

Y no son artículos cualquiera: son justo las reviews de producto único, las de mayor
intención de compra, en los verticales que mejor pagan (VPN, antivirus, gestores de
contraseñas, hosting, SaaS). Ejemplos verificados en producción:

| Artículo | Palabras | Enlaces salientes | Comisión |
|---|---|---|---|
| `norton-360-review-2026` | 3.774 | 6 a norton.com, planos | 0 € |
| `figma-review-2026` | 7.283 | **ninguno** | 0 € |
| `cyberghost-vpn-review-2026` | 5.595 | **ninguno** | 0 € |
| `dropbox-review-2026` | 5.671 | 1 plano | 0 € |
| `grammarly-review-2026` | 5.502 | 1 plano | 0 € |
| `1password-review-2026` | 4.168 | 1 plano | 0 € |
| `surfshark-review-2026` | 3.373 | **ninguno** | 0 € |
| `protonvpn-review-2026` | 3.324 | **ninguno** | 0 € |

Comprobado en la web en vivo (`/software/norton-360-review-2026`): 0 apariciones de
`nestdigital-20`, 0 de `rel="sponsored"`, 6 enlaces a `norton.com`.

**26 de los 59 no tienen ningún enlace saliente.** Son reviews de 3.000-7.000 palabras que
nunca le dicen al lector dónde comprar. Aunque Google los posicionara mañana, ingresarían 0.

### 2.1 Cuatro se arreglan hoy mismo, con IDs que ya tienes

Estos cuatro están en tu `AFFILIATE_IDS.md` como verificados y en uso en otras páginas:

| Artículo | ID que ya tienes | Uso actual en el sitio |
|---|---|---|
| `surfshark-review-2026` | `aff_id=45353` | 51 enlaces en otros artículos |
| `protonvpn-review-2026` | `aff_id=17015`, offer 7 | 64 enlaces en otros artículos |
| `ipvanish-review-2026` | `aff_id=4825` | 29 enlaces en otros artículos |
| `a2-hosting-review-2026` | `aid=nestdigitalstudio` | ya en uso |

Es decir: la review propia de Surfshark no monetiza, mientras que otros 51 enlaces a
Surfshark repartidos por el sitio sí. La tubería existe; falta enchufarla.

### 2.2 Dónde está el primer enlace de dinero

| Situación | Artículos |
|---|---|
| Primer enlace en el primer 25% del texto | 105 |
| Después del 50% (el lector ya se fue) | 49 |
| Después del 75% | 34 |

Mediana: 20%. La mitad superior está bien; los 34 que ponen el primer enlace pasado el
75% del artículo están regalando el clic.

### 2.3 Concentración de riesgo

| Fuente | Enlaces monetizados |
|---|---|
| Amazon Associates | 2.474 (**90%**) |
| Todo lo demás junto | 247 |

Los 247 se reparten así: Proton 64, Surfshark 51, NordVPN 51, IPVanish 29, RoboForm 18,
NordPass 18, Kinsta 16.

**90% del negocio depende de un solo programa** que paga 3-4% y cuya cookie dura 24 horas.
Los programas de SaaS y VPN que ya tienes pagan entre 30% y 100% del primer pago y tienen
cookies de 30-90 días. El desequilibrio no es de contenido: es de dónde se pone el enlace.

Además, 69 enlaces salen a la competencia directa (TechRadar 16, Tom's Guide 12, PCMag 11,
RTINGS 9) sin monetizar y, en muchos casos, sin `rel` que los cualifique.

---

## 3. Defectos técnicos encontrados y reparados hoy

### 3.1 robots.txt bloqueaba el CSS y el JS del propio sitio

En vivo antes del arreglo:

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
```

`/_next/` contiene **todo el CSS y el JavaScript**. Google avisa explícitamente de que
bloquear esos recursos le impide renderizar y evaluar la página. Y este sitio pinta una
parte importante en cliente.

`/api/` bloqueaba además `/api/og`, que es la **imagen de portada de cada uno de los 231
artículos** (se usa en Open Graph y ahora también en el schema). Verificado: ese endpoint
funciona (200, image/png, 116 KB) pero Google tenía prohibido pedirlo.

**Arreglado.** Ahora se permite `/_next/` y `/api/og`; se sigue bloqueando el resto de
`/api/` y se añade `/checkout/`.

### 3.2 Ningún artículo podía salir como resultado enriquecido

El schema `Article` no incluía el campo `image`, que Google exige para mostrar rich
result. Faltaba en los 231.

**Arreglado** en `ServerJsonLd.tsx`. Verificado en el HTML estático generado:

```
"image":              1
"@type":"Article"     1
"@type":"FAQPage"     1
"@type":"BreadcrumbList" 1
```

Con 229 artículos que ya tienen FAQ schema, esto desbloquea la posibilidad de ocupar más
espacio en la página de resultados sin escribir nada nuevo.

### 3.3 Estado de salud general (lo que SÍ está bien)

Conviene decirlo, porque es trabajo bien hecho y no hay que tocarlo:

- 231 de 231 JSON válidos, 0 rotos.
- 0 enlaces de Amazon sin el tag `nestdigital-20`.
- 0 artículos con categoría sin ruta (el 404 de `productivity` está resuelto).
- Divulgación FTC presente y por encima del pliegue.
- `rel="sponsored nofollow"` funcionando donde hay enlaces.
- Solo 1 grupo de canibalización real: `best-microphones-podcasting-2026` vs
  `best-microphones-streaming-podcasting-2026`.
- Las 4 páginas legacy de 2025 que revisé redirigen con 308 correctamente.
- Solo 6 artículos por debajo de 1.500 palabras.

---

## 4. Riesgo de E-E-A-T: los autores no existen

**Esto necesita una decisión tuya y no la tomo yo.**

`src/data/authors.ts` define cinco personas con nombre, cargo, foto, credenciales y
perfiles sociales:

- **Alex Chen**, Senior Tech Editor, «Former Best Buy technology consultant», 500+ productos
- **Sarah Miller**, Audio Specialist, «Professional audio engineer», 8 años
- **Michael Torres**, Gaming Editor, «Former semi-pro CS:GO player»
- **Emily Watson**, Software Editor, «Former software developer»
- **David Kim**, Deals Editor, «$2M+ saved for readers»

Verificado en producción (`/software/norton-360-review-2026`): «Emily Watson» aparece 4
veces, con enlace a `linkedin.com/in/emilywatsontech` y `twitter.com/emilywatson_tech`.
Se renderiza **dos veces por artículo** (cabecera y pie), en los 231.

Tres problemas, por orden de gravedad:

1. **Enlazas a perfiles sociales de terceros.** `linkedin.com/in/alexchen` es casi con
   seguridad una persona real que no tiene nada que ver contigo. Atribuir contenido
   comercial a la identidad de un desconocido es el riesgo más serio de los tres.
2. **Política de Google.** Credenciales inventadas para dar confianza a contenido de
   afiliados es justo lo que apunta el sistema de contenido útil y las políticas de abuso
   de reputación.
3. **Incoherencia.** El JSON-LD declara `author: Organization "Nest Digital Studio"`
   mientras la página muestra una persona física. Google ve las dos cosas y no cuadran.

**Opciones (elige tú):**

| Opción | Qué implica | Coste | Riesgo |
|---|---|---|---|
| **A. Marca editorial** (recomendada) | Sustituir las 5 personas por «Nest Digital Studio Editorial Team», sin fotos ni perfiles sociales falsos. Coincide con lo que ya dicen los propios artículos (`author: "Nest Digital Studio Team"` en 230 de 231) y con el JSON-LD actual. | ~1 hora | Nulo |
| **B. Tú como autor real** | Alfredo Ocaña como editor, con tu LinkedIn real y una bio honesta. Es lo que más E-E-A-T da: una persona verificable que responde por el contenido. | ~2 horas | Nulo. Expone tu nombre. |
| **C. No tocar** | Se queda como está. | 0 | Enlazas a perfiles ajenos y sostienes credenciales inventadas. |

No he tocado nada de esto. Dime A, B o C.

---

## 5. El problema estratégico: 231 artículos y ninguna autoridad

Los datos, no la opinión:

- Posición media **38.8** y empeorando (34.2 la semana anterior).
- **804 impresiones, 3 clics.** Posición 38 es la página 4: nadie llega.
- **0 sesiones de 89 duran 30 segundos o más.** El 90% del tráfico es humo.
- El canal de IA lleva prácticamente en cero desde marzo (84 en marzo → 1 esta semana).

Producir más artículos no mueve esto. La posición 38 no es un problema de contenido: es
un problema de autoridad de dominio, y la autoridad no se escribe, se gana con enlaces.

**Dispersión medida:** 44 artículos de seguridad (19%) frente a 187 fuera de ese nicho
(81%), repartidos en 9 categorías: software 135, home 27, reviews 22, guides 20, audio 10,
gaming 8, outdoor 5, blog 3, deals 1. Compites a la vez contra Wirecutter en sillas de
oficina, contra RTINGS en auriculares y contra PCMag en antivirus. Con un dominio sin
autoridad, esas tres batallas se pierden igual.

Search Console dice dónde hay tracción real: las consultas que aparecen son de seguridad
(`antivirus test 2026`, `best 2fa authenticator apps 2026`, `best vpn for business 2026`,
que es además el **único clic con conversión de posición** de la semana).

**Decisión que te corresponde a ti:** concentrar el sitio en seguridad (antivirus + VPN +
gestores de contraseñas), que es donde hay señal y donde están las comisiones altas, o
seguir cubriendo nueve categorías. **No he tocado ni un artículo.** Si dices que sí,
el primer paso no es borrar nada: es dejar de producir fuera del nicho y enlazar los 44
existentes entre sí.

---

## 6. Plan por orden de impacto

### Esta semana (dinero y supervivencia)

1. **Resolver el almacenamiento de Gmail.** Fecha límite ≈ 20 de agosto. Sin correo no
   hay negocio. *(Solo tú)*
2. **Pulsar VALIDAR CORRECCIÓN en Search Console** para el error 5xx. *(Solo tú)*
3. **Monetizar los 4 artículos con IDs que ya tienes.** *(Lo hago yo con tu OK)*
4. **Arreglar la tarjeta rechazada de Amazon Ads.** *(Solo tú)*

### Próximas dos semanas (cerrar el agujero)

5. **Los 55 artículos restantes sin monetizar.** Requiere decidir a qué programas te das
   de alta. Los que faltan y más pagan: SiteGround, Hostinger, Bluehost, más
   ExpressVPN, CyberGhost, 1Password, Bitwarden, Dashlane, Grammarly, Semrush, Figma.
6. **Los 34 artículos con el primer enlace pasado el 75% del texto:** subirlo arriba.
7. **Decidir A / B / C sobre los autores.**

### Mes siguiente (la única palanca que mueve la posición 38)

8. **Enlaces entrantes.** Es lo único que cambia el número 38. Nada de lo anterior lo hace.
9. **Decidir sobre la concentración de nicho.**

---

## 7. Qué se ha cambiado exactamente (y qué no)

### Commit `41b4c9a` — SEO técnico

| Archivo | Cambio |
|---|---|
| `src/lib/articles.ts` | Nueva función `getSlugsForCategory()` |
| `src/app/{9 categorías}/[slug]/page.tsx` | `generateStaticParams` en las 9 rutas |
| `src/app/robots.ts` | Desbloqueado `/_next/` y `/api/og` |
| `src/components/seo/ServerJsonLd.tsx` | Campo `image` en el schema Article |

### Commit `882818a` — E-E-A-T y monetización (opción A + los 4 con ID)

| Archivo | Cambio |
|---|---|
| `src/data/authors.ts` | Las 5 personas inventadas sustituidas por una identidad editorial única, sin foto ni perfiles sociales |
| `surfshark-review-2026.json` | 3 CTA con `aff_id=45353` |
| `protonvpn-review-2026.json` | 3 CTA con `aff_id=17015` (offer 7) |
| `ipvanish-review-2026.json` | 3 CTA con `aff_id=4825` + 2 enlaces `a_aid=partner` (placeholder que pagaba 0) corregidos |
| `a2-hosting-review-2026.json` | 3 CTA con `aid=nestdigitalstudio` |

### Verificación en producción (no en local: en la web en vivo)

| Comprobación | Resultado |
|---|---|
| `tsc --noEmit` / `next build` | exit 0 / exit 0, 335 páginas generadas |
| Personas inventadas en las 335 páginas del build | **0** |
| Enlaces a perfiles sociales de terceros | **0** |
| Páginas firmadas por el equipo editorial | 230 |
| Los 4 artículos, enlaces de afiliado en vivo | 3 cada uno, con `rel="sponsored"` |
| Posición del primer enlace de dinero | entre el 5% y el 9% del texto (antes: no existía) |
| `robots.txt` en vivo | ya no bloquea `/_next/`; permite `/api/og` |
| Campo `image` en el schema | presente en los artículos comprobados |
| Placeholders `a_aid=partner` restantes en los 231 | **0** |

**NO se ha cambiado, porque son decisiones abiertas:** los otros 55 artículos sin
monetizar (requieren altas en programas), los 34 con el enlace muy abajo, la estructura
de categorías y la concentración de nicho.

**El agujero pasa de 59 artículos sin monetizar a 55.** Los 4 cerrados son los que se
podían cerrar sin darse de alta en nada nuevo.
