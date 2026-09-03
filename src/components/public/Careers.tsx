'use client';

import { useState } from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { ApplyModal } from './ApplyModal';

interface JobItem {
  id: string;
  title: string;
  titleEn?: string | null;
  type: string;
  typeEn?: string | null;
  location: string;
  locationEn?: string | null;
}

export default function Careers({ jobs = [] }: { jobs?: JobItem[] }) {
  const { t, isEn } = useLanguage();
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (jobs.length === 0) return null;

  return (
    <section id="careers" className="bg-ivoire py-24 lg:py-32 border-t border-black/6">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            {t('careers.kicker', 'Carrières')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark mt-6 tracking-tight">
            {t('careers.title', 'Rejoignez notre équipe')}
          </h2>
          <p className="text-text-dark-muted text-base sm:text-lg mt-6 leading-relaxed">
            {t('careers.description', 'MG & Associés recrute les talents de demain. Découvrez nos opportunités.')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job) => {
            const displayTitle = isEn && job.titleEn ? job.titleEn : job.title;
            const displayType = isEn && job.typeEn ? job.typeEn : job.type;
            const displayLocation = isEn && job.locationEn ? job.locationEn : job.location;

            return (
              <button
                key={job.id}
                type="button"
                onClick={() => {
                  setSelectedJobTitle(displayTitle);
                  setIsModalOpen(true);
                }}
                className="w-full text-left group block surface shadow-soft px-6 sm:px-8 py-5 sm:py-6 hover:shadow-soft-lg hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 rounded-xl cursor-pointer"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="w-10 h-10 rounded-lg bg-black/[0.03] group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                      <Briefcase size={18} className="text-text-dark-muted group-hover:text-accent transition-colors shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-text-dark group-hover:text-accent transition-colors">{displayTitle}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-text-dark-muted">
                        <span className="flex items-center gap-1.5"><MapPin size={13} /> {displayLocation}</span>
                        <span className="w-[1px] h-3 bg-black/10" />
                        <span>{displayType}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-dark-muted group-hover:text-accent font-semibold transition-colors">
                      {t('careers.apply', 'Postuler')}
                    </span>
                    <ArrowRight size={16} className="text-text-dark-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-dark-muted text-sm">
            {t('careers.notFound', "Vous ne trouvez pas l'offre idéale ?")}{' '}
            <button
              type="button"
              onClick={() => {
                setSelectedJobTitle(null);
                setIsModalOpen(true);
              }}
              className="text-accent hover:underline font-medium cursor-pointer"
            >
              {t('careers.spontaneous', 'Envoyez-nous une candidature spontanée')}
            </button>
          </p>
        </div>
      </div>

      <ApplyModal
        jobTitle={selectedJobTitle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
