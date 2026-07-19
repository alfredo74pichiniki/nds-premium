import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://nestdigitalstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/editorial-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/security`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  // Dynamic articles from articles.json — la URL se construye con category + slug.
  // (Los 196 articulos usan category+slug, NO href; el filtro anterior `if (article.href)`
  //  descartaba el 99% del contenido y por eso Google no lo indexaba.)
  const CAT_MAP: Record<string, string> = { productivity: 'software' } // categorias sin ruta propia
  const articlePages: MetadataRoute.Sitemap = []
  try {
    const articlesPath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
    const seen = new Set<string>()
    for (const article of articles) {
      const slug = article.slug
      const category = CAT_MAP[article.category] || article.category
      const urlPath = article.href || (slug && category ? `/${category}/${slug}` : null)
      if (!urlPath || seen.has(urlPath)) continue
      seen.add(urlPath)
      let lastModified = now
      if (article.date) {
        const d = new Date(article.date)
        if (!isNaN(d.getTime())) lastModified = d.toISOString()
      }
      articlePages.push({
        url: `${BASE_URL}${urlPath}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: article.featured ? 0.9 : 0.7,
      })
    }
  } catch {
    // articles.json not found - skip dynamic articles
  }

  return [
    ...staticPages,
    ...articlePages,
  ]
}
