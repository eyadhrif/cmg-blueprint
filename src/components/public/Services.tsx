'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/services';

const fadeUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Services() {
  return (
    <section id="services" className="bg-gris py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="flex flex-col items-center text-center mb-16 lg:mb-24" {...fadeUp}>
          <span className="w-8 h-[1px] bg-accent mb-4" />
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-4">NOS SERVICES</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark tracking-tight max-w-2xl">
            Des solutions sur mesure pour accompagner votre croissance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="group relative surface mirror shadow-soft rounded-2xl p-7 lg:p-8 flex flex-col sm:flex-row items-start gap-6 hover:shadow-soft-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                {...fadeUp}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl lg:text-2xl text-text-dark mb-2.5 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-text-dark-muted hover:text-accent text-xs font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2"
                  >
                    EN SAVOIR PLUS <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
