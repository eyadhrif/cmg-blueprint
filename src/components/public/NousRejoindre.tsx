'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.2, ease },
};

const faqs = [
  { q: 'Comment se déroule le recrutement ?', a: "Notre processus se déroule en plusieurs étapes : étude de votre candidature, entretien avec les RH, puis rencontre avec l'équipe concernée. Nous veillons à vous offrir une expérience transparente et respectueuse de votre temps." },
  { q: 'Quels profils recherchez-vous ?', a: "Nous recherchons des talents passionnés, rigoureux et animés par l'excellence. Experts-comptables, auditeurs, conseillers fiscaux et juristes, mais aussi des profils juniors en début de carrière." },
  { q: 'Les stages sont-ils rémunérés ?', a: 'Oui, tous nos stages sont rémunérés conformément à la réglementation en vigueur. Nous offrons un environnement propice à l\'apprentissage et à la montée en compétences.' },
  { q: 'Où se déroulent les missions ?', a: "Nos missions se déroulent principalement dans nos bureaux de La Marsa, Tunis, ainsi que chez nos clients sur l'ensemble du territoire tunisien." },
  { q: 'Puis-je envoyer une candidature spontanée ?', a: 'Absolument. Nous sommes toujours à la recherche de talents. Vous pouvez nous adresser votre candidature à contact@cabinetguellaty.com, nous l\'étudierons avec attention.' },
];

const jobs = [
  { title: 'Expert-comptable', type: 'CDI', location: 'La Marsa, Tunis', desc: "Vous assurez la tenue comptable, les révisions et les déclarations fiscales d'un portefeuille clients." },
  { title: 'Auditeur junior', type: 'CDI', location: 'La Marsa, Tunis', desc: 'Vous participez aux missions d\'audit légal et contractuel auprès de nos clients.' },
  { title: 'Assistant comptable', type: 'CDD', location: 'La Marsa, Tunis', desc: "Vous assistez l'équipe comptable dans les opérations courantes et la préparation des bilans." },
  { title: 'Stagiaire', type: 'Stage', location: 'La Marsa, Tunis', desc: 'Vous découvrez le métier au sein d\'une équipe expérimentée et participez à des missions réelles.' },
];

export default function NousRejoindre() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="nous-rejoindre" className="bg-[#0B0B0C]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 min-h-screen items-center py-20 lg:py-32">
          <motion.div className="col-span-12 lg:col-span-7" {...fadeUp}>
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">Carrières</span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-text-primary mt-10 tracking-tight">
              Construisons ensemble<br />
              l&apos;avenir de la{' '}
              <span className="text-gold italic">confiance</span>.
            </h1>
            <p className="text-text-muted text-base sm:text-lg mt-8 max-w-lg leading-relaxed">
              MG & Associés recrute les talents de demain. Rejoignez un cabinet d&apos;exception où rigueur,
              excellence et impact se conjuguent au quotidien.
            </p>
            <div className="flex flex-wrap gap-5 mt-12">
              <a href="#positions" className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-accent/90 transition-all duration-300 group">
                Découvrir les offres
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#culture" className="inline-flex items-center px-8 py-4 text-sm font-semibold tracking-wider uppercase text-text-muted border border-white/15 hover:border-text-primary hover:text-text-primary transition-all duration-300">
                Notre culture
              </a>
            </div>
          </motion.div>

          <motion.div className="col-span-12 lg:col-span-5 relative h-[400px] lg:h-[600px] overflow-hidden" {...fadeIn}>
            <div className="absolute inset-0 bg-card">
              <svg viewBox="0 0 500 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="rejoindreGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="500" height="600" fill="url(#rejoindreGrid)" />
                <line x1="0" y1="0" x2="500" y2="600" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="100" y1="0" x2="600" y2="600" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                <rect x="60" y="60" width="380" height="480" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <rect x="80" y="80" width="340" height="440" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div id="culture" className="max-w-[1200px] mx-auto px-6 py-32 lg:py-44">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeUp}>
          <span className="font-serif text-[120px] leading-none text-gold/20 select-none">&ldquo;</span>
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-text-primary -mt-16 tracking-tight">
            Rejoindre MG & Associés,<br />
            c&apos;est intégrer une équipe exigeante,<br />
            humaine et tournée vers l&apos;impact.
          </blockquote>
          <div className="mt-10">
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
            <cite className="font-serif text-lg text-text-muted not-italic">
              Mourad Guellaty
              <span className="block text-xs tracking-[0.15em] uppercase mt-1 text-text-dark-muted">Fondateur</span>
            </cite>
          </div>
        </motion.div>
      </div>

      <div className="bg-card py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <span className="text-text-muted text-xs font-semibold tracking-[0.18em] uppercase">FAQ</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mt-6 tracking-tight">Vous vous posez des questions ?</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="border-b border-white/6" {...fadeUp}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left group">
                  <span className="text-text-primary text-base sm:text-lg font-medium pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-text-muted text-sm sm:text-base leading-relaxed pb-6 pr-8">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div id="positions" className="max-w-[1200px] mx-auto px-6 py-32 lg:py-40">
        <motion.div className="text-center mb-20" {...fadeUp}>
          <span className="text-text-muted text-xs font-semibold tracking-[0.18em] uppercase">Carrières</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-text-primary mt-6 tracking-tight">Nos opportunités</h2>
        </motion.div>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.a
              key={i}
              href={`mailto:contact@cabinetguellaty.com?subject=Candidature%20-%20${encodeURIComponent(job.title)}`}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="group block bg-card border border-white/6 px-8 py-6 hover:border-accent/40 transition-all duration-300"
              {...fadeUp}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <Briefcase size={18} className="text-text-muted shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5"><MapPin size={13} /> {job.location}</span>
                      <span className="w-[1px] h-3 bg-white/6" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">Postuler</span>
                  <ArrowRight size={16} className="text-text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="bg-card py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div className="max-w-2xl mx-auto text-center" {...fadeUp}>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary tracking-tight leading-[1.15]">Vous ne trouvez pas<br />l&apos;offre idéale ?</h2>
            <p className="text-text-muted text-base sm:text-lg mt-6 leading-relaxed">Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents passionnés.</p>
            <a href="mailto:contact@cabinetguellaty.com" className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 text-sm font-semibold tracking-wider uppercase hover:bg-accent/90 transition-all duration-300 group mt-12">
              Envoyer une candidature spontanée
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="text-text-dark-muted text-sm mt-6">ou écrivez-nous à <a href="mailto:contact@cabinetguellaty.com" className="text-gold hover:underline">contact@cabinetguellaty.com</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
