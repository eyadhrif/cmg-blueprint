import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ArticleDetailClient } from '@/components/public/ArticleDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
  });

  if (!article) {
    return {
      title: 'Publication non trouvée',
    };
  }

  const title = article.title;
  const description = article.subtitle || `Consultez l'article "${article.title}" par le Cabinet Mourad Guellaty & Associés.`;
  const url = `https://www.cabinetguellaty.com/articles/${slug}`;
  const images = article.coverImage ? [article.coverImage] : ['/og-image.jpg'];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      publishedTime: article.publishedAt ? new Date(article.publishedAt).toISOString() : undefined,
      images,
      authors: ['Cabinet Mourad Guellaty'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
  });

  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle || article.title,
    image: article.coverImage ? [article.coverImage] : ['https://www.cabinetguellaty.com/og-image.jpg'],
    datePublished: article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date(article.createdAt).toISOString(),
    dateModified: new Date(article.updatedAt).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Cabinet Mourad Guellaty & Associés',
      url: 'https://www.cabinetguellaty.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cabinet Mourad Guellaty — MG & Associés',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cabinetguellaty.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.cabinetguellaty.com/articles/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleDetailClient article={article} />
    </div>
  );
}
