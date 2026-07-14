'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Team() {
  return (
    <section id="team" className="bg-dark py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeUp}>
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Notre Équipe
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-primary mt-6 tracking-tight">
            Une équipe pluridisciplinaire au service de votre performance
          </h2>
          <p className="text-text-muted text-base sm:text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            MG & Associés réunit des experts-comptables, commissaires aux comptes et conseillers spécialisés,
            capables d&apos;intervenir sur l&apos;ensemble des métiers de la finance, de l&apos;audit et du conseil.
            Notre équipe combine rigueur technique et vision stratégique pour accompagner les entreprises
            dans tous leurs enjeux.
          </p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-white/6" {...fadeUp}>
          <span className="font-serif text-[100px] leading-none text-accent/10 select-none block text-center">
            &ldquo;
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.2] text-text-primary -mt-14 text-center tracking-tight">
            Notre force réside dans la diversité de nos expertises
            <br />
            et notre engagement collectif pour l&apos;excellence.
          </blockquote>
          <div className="mt-8 text-center">
            <div className="w-10 h-px bg-accent mx-auto mb-4" />
            <cite className="text-sm text-text-muted not-italic">
              L&apos;équipe MG & Associés
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
