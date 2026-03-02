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
    { url: `${BASE_URL}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/search`, lastModified: now, changeFrequency: 'daily', priority: 0.4 },
    // Category listing pages
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/software`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/gaming`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/audio`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/outdoor`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/deals`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
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

  // Hardcoded review pages (not in articles.json)
  const hardcodedReviews = [
    'best-blue-light-blocking-glasses-2025-protect-eyes-digital-strain',
    'best-desk-heaters-winter-2025',
    'best-desk-lamps-2025',
    'best-desk-organizers-productivity-2025',
    'best-document-scanners-home-office-2025',
    'best-ergonomic-mouse-pads-2025-wrist-pain-relief',
    'best-laptop-cooling-pads-2025-reviews',
    'best-mechanical-keyboards',
    'best-mechanical-keyboards-2025',
    'best-mechanical-keyboards-2025-ultimate-typing-experience',
    'best-microphones-podcasting',
    'best-monitor-risers-with-storage-2025',
    'best-noise-canceling-headphones',
    'best-noise-canceling-headphones-2025-ultimate-guide',
    'best-noise-machines-for-focus-2025',
    'best-office-chairs-under-300-2025',
    'best-portable-chargers-power-banks-2025',
    'best-smart-home-hubs',
    'best-smart-plugs-home-automation-2025',
    'best-standing-desks',
    'best-standing-desks-2025-workspace-health-guide',
    'best-usb-c-hubs-2025',
    'best-webcams',
    'best-webcams-2025',
    'best-webcams-remote-work-2025',
    'best-wireless-earbuds',
    'best-wireless-earbuds-2025-top-picks',
    'best-wireless-phone-chargers-desk-2025',
    'ultimate-cable-management-solutions-2025-workspace-organization',
    'ultimate-usb-c-hub-guide-2025-laptop-connectivity',
  ]
  const reviewPages: MetadataRoute.Sitemap = hardcodedReviews.map(slug => ({
    url: `${BASE_URL}/reviews/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Hardcoded gaming pages
  const hardcodedGaming = [
    'best-gaming-chairs-2025',
    'best-gaming-earbuds-mobile-2025-pro-level-audio',
    'best-gaming-headsets',
    'best-gaming-keyboards',
    'best-gaming-keyboards-2025-mechanical-competitive',
    'best-gaming-mice',
    'best-gaming-mice-2025-precision-competitive',
    'best-gaming-monitors-2025',
    'best-gaming-monitors-2025-ultimate-display-guide',
    'best-gaming-routers-low-latency-2025',
    'best-rgb-lighting-strips-gaming-setup-2025',
  ]
  const gamingPages: MetadataRoute.Sitemap = hardcodedGaming.map(slug => ({
    url: `${BASE_URL}/gaming/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Hardcoded software pages
  const hardcodedSoftware = [
    'ai-automation-tools-2025',
    'best-cloud-hosting-providers-2025-scalable-performance',
    'best-crm-2025',
    'best-password-managers',
    'best-project-management-tools',
    'best-project-management-tools-2025',
    'best-seo-tools',
    'best-seo-tools-2025-expert-tested-solutions',
    'best-video-editing-software-2025-professional-tools',
    'best-vpn-2025',
    'best-vpn-services-2025-privacy-protection-guide',
    'best-web-hosting',
    'best-website-builders-2025-no-coding-required',
    'email-marketing-comparison',
    'hosting-comparison-2025',
  ]
  const softwarePages: MetadataRoute.Sitemap = hardcodedSoftware.map(slug => ({
    url: `${BASE_URL}/software/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Hardcoded guides
  const guidesPages: MetadataRoute.Sitemap = [
    'best-ergonomic-setup',
    'complete-remote-work-setup',
    'home-office-setup-guide',
    'how-to-choose-laptop',
  ].map(slug => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog hardcoded
  const blogPages: MetadataRoute.Sitemap = [
    'ai-tools-comparison-2025',
    'state-of-remote-work-2025',
  ].map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Deals
  const dealsPages: MetadataRoute.Sitemap = [{
    url: `${BASE_URL}/deals/black-friday-tech-2025`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }]

  // Tools
  const toolsPages: MetadataRoute.Sitemap = [{
    url: `${BASE_URL}/tools/productivity-stack-calculator`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }]

  return [
    ...staticPages,
    ...articlePages,
    ...reviewPages,
    ...gamingPages,
    ...softwarePages,
    ...guidesPages,
    ...blogPages,
    ...dealsPages,
    ...toolsPages,
  ]
}
