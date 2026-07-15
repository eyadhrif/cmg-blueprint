'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const milestones = [
  { year: '1992', text: 'Fondation du cabinet Mourad Guellaty' },
  { year: '2001', text: 'Nommé président de l\'Ordre des Experts Comptables de Tunisie' },
  { year: '2005', text: 'Consolidation du département audit financier' },
  { year: '2010', text: 'Développement du conseil en Stratégie et Gouvernance' },
  { year: '2015', text: 'MG & Associés — élargissement de l\'équipe pluridisciplinaire' },
  { year: '2020', text: 'Accompagnement des transformations numériques et réglementaires' },
];

export default function MerciMourad() {
  return (
    <section id="merci-mourad" className="relative bg-dark py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,160,100,0.04)_0%,transparent_50%)]" />

      <div className="absolute top-0 right-0 w-96 h-96 border-r border-t border-white/5" />
      <div className="absolute top-20 right-20 w-64 h-64 border-r border-t border-white/[0.03]" />

      <div className="absolute left-0 bottom-0 w-80 h-80 border-l border-b border-white/5" />
      <div className="absolute left-16 bottom-16 w-48 h-48 border-l border-b border-white/[0.03]" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <motion.div className="text-center mb-20" {...fadeUp}>
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Hommage
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-primary mt-6 tracking-tight">
            Merci, Monsieur{' '}
            <span className="text-accent">Mourad</span>
          </h2>
          <div className="w-16 h-px bg-accent/50 mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24">
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-gold/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  <span className="font-serif text-5xl sm:text-6xl text-text-muted/20 select-none">MG</span>
                </div>
                <div className="absolute -inset-2 rounded-full border border-accent/10 -z-10" />
                <div className="absolute -inset-4 rounded-full border border-accent/5 -z-10" />
              </div>
              <div className="space-y-6">
                <p className="font-serif text-2xl sm:text-3xl leading-[1.3] text-light italic">
                  &ldquo;Bâtir un cabinet d&apos;excellence, c&apos;est avant tout bâtir des hommes et des femmes
                  de confiance.&rdquo;
                </p>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  Mourad Guellaty a consacré sa vie à l&apos;expertise comptable et à l&apos;audit en Tunisie.
                  Ancien président de l&apos;Ordre des Experts Comptables de Tunisie, il a porté les valeurs
                  de rigueur, d&apos;indépendance et d&apos;engagement qui font aujourd&apos;hui la réputation du cabinet.
                </p>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  Son leadership visionnaire a permis au cabinet de rayonner bien au-delà des frontières,
                  accompagnant les plus grandes entreprises tunisiennes et internationales dans leurs
                  enjeux les plus stratégiques.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="bg-white/[0.03] border border-white/10 p-8 lg:p-10">
                <h3 className="font-serif text-xl text-light mb-8 tracking-tight">Parcours & Engagements</h3>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <span className="text-accent text-xs font-bold tracking-wider whitespace-nowrap pt-0.5 group-hover:text-light transition-colors">
                          {m.year}
                        </span>
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                        )}
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed pt-0.5 group-hover:text-text-primary transition-colors">
                        {m.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-full h-full border border-accent/10 -z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div className="max-w-4xl mx-auto text-center" {...fadeUp}>
          <span className="font-serif text-[140px] leading-none text-accent/10 select-none block">
            &ldquo;
          </span>
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-light -mt-20 tracking-tight">
            La confiance ne se d&eacute;cr&egrave;te pas.
            <br />
            Elle se construit, ann&eacute;e apr&egrave;s ann&eacute;e,
            <br />
            au service de nos clients et de l&apos;excellence.
          </blockquote>
          <div className="mt-10">
            <div className="w-12 h-px bg-accent mx-auto mb-5" />
            <cite className="font-serif text-base text-text-muted not-italic">
              Mourad Guellaty
              <span className="block text-[11px] tracking-[0.15em] uppercase mt-1 text-text-dark-muted">
                Fondateur
              </span>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
