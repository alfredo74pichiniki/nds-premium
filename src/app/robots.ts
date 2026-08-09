import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // /_next/ NO se bloquea: contiene el CSS y el JS. Bloquearlo impide a Google
        // renderizar la pagina y evaluarla bien (el sitio pinta gran parte en cliente).
        // /api/og tampoco: es la imagen de portada de CADA articulo (openGraph + schema).
        allow: ['/', '/api/og'],
        disallow: [
          '/api/',
          '/checkout/',   // pasarela de pago, nada que indexar
        ],
      },
    ],
    sitemap: 'https://nestdigitalstudio.com/sitemap.xml',
  }
}
