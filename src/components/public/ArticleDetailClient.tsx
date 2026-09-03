'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

interface ArticleData {
  id: string;
  slug: string;
  title: string;
  titleEn?: string | null;
  subtitle?: string | null;
  subtitleEn?: string | null;
  coverImage?: string | null;
  pdfUrl?: string | null;
  publishedAt?: Date | string | null;
}

export function ArticleDetailClient({ article }: { article: ArticleData }) {
  const { t, isEn } = useLanguage();

  const displayTitle = isEn && article.titleEn ? article.titleEn : article.title;
  const displaySubtitle = isEn && article.subtitleEn ? article.subtitleEn : article.subtitle;

  return (
    <div className="max-w-[960px] mx-auto px-6 py-16 lg:py-24">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300 mb-10 group"
      >
        <span>&larr;</span> {t('articleDetail.back', 'Retour aux articles')}
      </Link>

      <div className="mb-4 text-text-dark-muted text-sm">
        {article.publishedAt &&
          new Date(article.publishedAt).toLocaleDateString(isEn ? 'en-GB' : 'fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl lg:text-[48px] leading-[1.1] text-text-dark tracking-tight">
        {displayTitle}
      </h1>

      {displaySubtitle && (
        <p className="text-text-dark-muted text-lg leading-relaxed mt-4 max-w-2xl">
          {displaySubtitle}
        </p>
      )}

      {article.pdfUrl && (
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            {t('articleDetail.readDoc', 'Lire le document')}
          </a>
          <a
            href={article.pdfUrl}
            download
            className="inline-flex items-center gap-3 border border-text-dark text-text-dark px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-text-dark hover:text-light transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {t('articleDetail.downloadPdf', 'Télécharger le PDF')}
          </a>
        </div>
      )}

      {article.pdfUrl && (
        <div className="mt-12 border border-black/10">
          <iframe
            src={article.pdfUrl}
            className="w-full h-[90vh]"
            title={displayTitle}
          />
        </div>
      )}
    </div>
  );
}
