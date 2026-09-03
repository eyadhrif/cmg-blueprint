import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { ArticlesListClient } from '@/components/public/ArticlesListClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Articles & Analyses Fiscales et Juridiques',
  description:
    'Découvrez les publications, analyses fiscales, commentaires de lois de finances et études juridiques du Cabinet Mourad Guellaty & Associés.',
  alternates: { canonical: '/articles' },
  openGraph: {
    title: 'Articles & Analyses Fiscales et Juridiques | MG & Associés',
    description:
      'Publications, analyses fiscales, commentaires de lois de finances et études juridiques en Tunisie.',
    url: 'https://www.cabinetguellaty.com/articles',
  },
};

export default async function ArticlesList() {
  let articles: Array<{
    id: string;
    slug: string;
    title: string;
    titleEn?: string | null;
    subtitle: string | null;
    subtitleEn?: string | null;
    coverImage: string | null;
  }> = [];

  try {
    articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        subtitle: true,
        subtitleEn: true,
        coverImage: true,
      },
    });
  } catch {
    // DB unavailable
  }

  return <ArticlesListClient articles={articles} />;
}
