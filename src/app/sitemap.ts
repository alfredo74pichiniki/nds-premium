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
  ]

  // Dynamic articles from articles.json
  const articlePages: MetadataRoute.Sitemap = []
  try {
    const articlesPath = path.join(process.cwd(), 'public', 'data', 'articles.json')
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'))
    for (const article of articles) {
      if (article.href) {
        articlePages.push({
          url: `${BASE_URL}${article.href}`,
          lastModified: article.date ? new Date(article.date).toISOString() : now,
          changeFrequency: 'monthly',
          priority: article.featured ? 0.9 : 0.7,
        })
      }
    }
  } catch {
    // articles.json not found - skip dynamic articles
  }

  return [
    ...staticPages,
    ...articlePages,
  ]
}
