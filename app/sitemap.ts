import { MetadataRoute } from 'next'
import { GOOGLE_ADS_PAGES } from '@/lib/google-ads-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.getleadlocal.com'
  
  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Google Ads landing pages
  const googleAdsPages = GOOGLE_ADS_PAGES.map(page => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Industry pages
  const industries = [
    'plumbing',
    'roofing',
    'flooring',
    'construction',
    'hvac',
    'electrical',
    'solar',
    'landscaping'
  ]
  
  const industryPages = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...routes, ...googleAdsPages, ...industryPages]
}
