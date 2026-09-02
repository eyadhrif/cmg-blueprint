import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { services } from '@/lib/services';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://www.cabinetguellaty.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let articles: Array<{ slug: string; updatedAt: Date; publishedAt: Date | null }> = [];
  try {
    articles = await prisma.article.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, publishedAt: true },
    });
  } catch {
    // DB fallback during static analysis
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: article.publishedAt || article.updatedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
