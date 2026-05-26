import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dwac.net'

  const routes = [
    '', '/about/', '/charter/', '/contact/',
    '/dispute/', '/how-to-apply/', '/rules/', '/fees/',
    '/fee-calculator/', '/model-clause/', '/virtual-hearing/',
    '/arbitration/', '/digital-tribunal/', '/club/',
    '/arbitrators/', '/privacy/', '/terms/',
    '/resources/law/', '/cases/',
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : route === '/about/' ? 0.9 : 0.7,
    })
    // Add zh-cn and zh-tw variants
    entries.push({
      url: `${baseUrl}/zh-cn${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 0.9 : 0.6,
    })
    entries.push({
      url: `${baseUrl}/zh-tw${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 0.9 : 0.6,
    })
  }

  return entries
}
