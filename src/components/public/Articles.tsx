'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string | null;
  subtitle?: string | null;
  subtitleEn?: string | null;
  coverImage?: string | null;
}

export default function Articles({ articles = [] }: { articles?: ArticleItem[] }) {
  const { t, isEn } = useLanguage();

  if (articles.length === 0) return null;

  return (
    <section id="articles" className="bg-gris py-24 lg:py-32 border-t border-black/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              {t('articles.kicker', 'Publications')}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark mt-6 tracking-tight">
              {t('articles.title', 'Articles & Analyses')}
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300 shrink-0 group"
          >
            {t('articles.viewAll', 'Voir tous les articles')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => {
            const displayTitle = isEn && article.titleEn ? article.titleEn : article.title;
            const displaySubtitle = isEn && article.subtitleEn ? article.subtitleEn : article.subtitle;

            return (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group block bg-white rounded-2xl border border-black/[0.06] shadow-soft overflow-hidden hover:shadow-soft-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#F0F0F0]">
                  {article.coverImage ? (
                    <img
                      src={article.coverImage}
                      alt=""
                      className="w-full h-full object-cover object-[50%_65%] group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#F2F2F2] to-[#E5E5E5]" />
                  )}
                </div>
                <div className="p-6 min-h-[120px] flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-black leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                    {displayTitle}
                  </h3>
                  {displaySubtitle && (
                    <p className="text-black/60 text-sm leading-relaxed mt-2 line-clamp-2">
                      {displaySubtitle}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
