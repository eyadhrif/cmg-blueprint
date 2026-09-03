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

export function ArticlesListClient({ articles = [] }: { articles: ArticleItem[] }) {
  const { t, isEn } = useLanguage();

  return (
    <div className="min-h-screen bg-light py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300 mb-12 group"
        >
          <span>&larr;</span> {t('articlesList.back', 'Retour')}
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark tracking-tight mb-4">
          {t('articlesList.title', 'Articles & Analyses')}
        </h1>
        <p className="text-text-dark-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
          {t('articlesList.subtitle', "Découvrez nos publications et analyses sur l'actualité fiscale, juridique et économique en Tunisie.")}
        </p>

        {articles.length === 0 ? (
          <p className="text-text-dark-muted">{t('articlesList.empty', 'Aucun article publié pour le moment.')}</p>
        ) : (
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
                  <div className="p-6 min-h-[110px] flex flex-col justify-center">
                    <h2 className="font-serif text-lg text-black leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                      {displayTitle}
                    </h2>
                    {displaySubtitle && (
                      <p className="text-black/60 text-sm leading-relaxed mt-1.5 line-clamp-2">
                        {displaySubtitle}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
