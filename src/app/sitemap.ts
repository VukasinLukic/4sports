import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/en', priority: 1 },
    { path: '/sr', priority: 1 },
    { path: '/en/privacy-policy', priority: 0.5 },
    { path: '/sr/privacy-policy', priority: 0.5 },
    { path: '/en/terms', priority: 0.5 },
    { path: '/sr/terms', priority: 0.5 },
    { path: '/en/support', priority: 0.6 },
    { path: '/sr/support', priority: 0.6 },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.priority === 1 ? 'weekly' : 'monthly',
    priority: page.priority,
  }));
}
