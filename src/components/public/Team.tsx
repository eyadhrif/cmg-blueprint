'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const team = [
  { name: 'Mourad Guellaty', role: 'Fondateur & Gérant', initials: 'MG' },
  { name: 'Ahmed Ben Salem', role: 'Associé — Audit', initials: 'AB' },
  { name: 'Sonia Trabelsi', role: 'Associée — Conseil', initials: 'ST' },
  { name: 'Karim Mejri', role: 'Directeur — Expertise Comptable', initials: 'KM' },
  { name: 'Leila Jebali', role: 'Directrice — Commissariat aux Comptes', initials: 'LJ' },
  { name: 'Mehdi Kallel', role: 'Senior Manager — Advisory', initials: 'MK' },
  { name: 'Ines Bouaziz', role: 'Responsable RH & Communication', initials: 'IB' },
  { name: 'Nizar Gharbi', role: 'Manager — Audit Financier', initials: 'NG' },
];

const placeholderColors = [
  'from-accent/80 to-accent/20',
  'from-gold/80 to-gold/20',
  'from-accent/60 to-gold/40',
  'from-gold/60 to-accent/30',
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCarousel, setActiveCarousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeCarousel + 1) % 4;
      setActiveCarousel(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeCarousel]);

  const displayedMembers = team.slice(activeCarousel * 2, activeCarousel * 2 + 2);
  if (displayedMembers.length < 2) {
    const remaining = team.slice(0, 2 - displayedMembers.length);
    displayedMembers.push(...remaining);
  }

  return (
    <section id="team" className="relative bg-gris py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,160,100,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        <motion.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Notre Équipe
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark mt-6 tracking-tight">
            Une équipe pluridisciplinaire au service de votre performance
          </h2>
          <p className="text-text-dark-muted text-base sm:text-lg mt-8 leading-relaxed">
            MG & Associés réunit des experts-comptables, commissaires aux comptes et conseillers spécialisés,
            capables d&apos;intervenir sur l&apos;ensemble des métiers de la finance, de l&apos;audit et du conseil.
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass mirror aspect-square mb-5 overflow-hidden group-hover:border-accent/30 transition-all duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i % placeholderColors.length]} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-text-dark/30 group-hover:text-text-dark/50 transition-colors duration-500 select-none">
                    {member.initials}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
                  animate={hoveredIndex === i ? { y: 0, opacity: 1 } : { y: 4, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs text-accent font-semibold tracking-wider uppercase">{member.role}</p>
                </motion.div>
              </div>
              <h3 className="font-serif text-lg text-text-dark group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-text-dark-muted text-xs tracking-wider uppercase mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden mt-20">
          <div className="relative overflow-hidden">
            <div className="flex justify-center gap-6">
              <motion.div
                key={activeCarousel}
                className="flex justify-center gap-6 w-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                {displayedMembers.map((member) => (
                  <div key={member.name} className="w-[45%]">
                    <div className="glass mirror aspect-square mb-4 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[team.indexOf(member) % placeholderColors.length]} opacity-40`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-3xl text-text-dark/30 select-none">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-base text-text-dark text-center">{member.name}</h3>
                    <p className="text-text-dark-muted text-[11px] tracking-wider uppercase text-center mt-1">{member.role}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveCarousel(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCarousel === i ? 'bg-accent w-6' : 'bg-black/20'
                }`}
                aria-label={`Voir les membres ${i * 2 + 1}-${Math.min(i * 2 + 2, team.length)}`}
              />
            ))}
          </div>
        </div>

        <motion.div className="max-w-3xl mx-auto mt-24 pt-16 border-t border-black/10 text-center" {...fadeUp}>
          <span className="font-serif text-[80px] leading-none text-accent/10 select-none block">
            &ldquo;
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl leading-[1.2] text-text-dark -mt-10 tracking-tight">
            Notre force réside dans la diversité de nos expertises
            <br />
            et notre engagement collectif pour l&apos;excellence.
          </blockquote>
          <div className="mt-8">
            <div className="w-10 h-px bg-accent mx-auto mb-4" />
            <cite className="text-sm text-text-dark-muted not-italic">
              L&apos;équipe MG & Associés
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
