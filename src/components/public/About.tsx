'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function About() {
  return (
    <section id="about" className="bg-light py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              À Propos
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark mt-6 tracking-tight">
              Un partenaire de confiance pour des décisions éclairées
            </h2>
            <div className="space-y-5 text-text-dark-muted text-base sm:text-lg leading-relaxed mt-8">
              <p>
                Le Cabinet Mourad Guellaty est un cabinet d&apos;expertise comptable, d&apos;audit et de conseil
                établi à La Marsa, Tunis. Fondé par Mourad Guellaty, ancien président de l&apos;Ordre des
                Experts Comptables de Tunisie, le cabinet accompagne les entreprises locales et
                internationales dans leurs enjeux financiers.
              </p>
              <p>
                Spécialisé en commissariat aux comptes, audit financier, conseil en gestion et advisory,
                nous mettons notre expertise au service de votre performance.
              </p>
            </div>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-text-dark text-text-dark px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-text-dark hover:text-light transition-all duration-300 mt-10 group"
            >
              Découvrir nos services
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative animate-float">
              <div
                className="aspect-[4/3] bg-[#E8E8E6] overflow-hidden"
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Bureau MG & Associés"
                  className="w-full h-full object-cover saturate-[0.4] contrast-[1.1]"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-32 h-32 border border-accent/30 -z-10" />
              <div className="absolute -top-2 -left-2 w-28 h-28 border border-accent/20 -z-10" />

              <div className="absolute -top-10 -right-2 w-20 h-20 bg-accent/25" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
              <div className="absolute top-6 -right-2 w-32 h-32 bg-accent/15" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
              <div className="absolute top-10 -right-7 w-20 h-20 bg-accent/10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
              <div className="absolute top-14 -right-10 w-12 h-12 bg-accent/8" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />

              <div className="absolute top-1/4 -left-5 w-16 h-16 bg-accent/20" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
              <div className="absolute top-2/5 -left-8 w-10 h-10 bg-accent/15" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }} />
              <div className="absolute top-3/5 -left-4 w-12 h-12 bg-accent/18" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
              <div className="absolute top-3/4 -left-6 w-8 h-8 bg-accent/12" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

              <div className="absolute bottom-16 -right-5 w-24 h-24 bg-accent/18" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
              <div className="absolute bottom-10 -right-8 w-14 h-14 bg-accent/12" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
              <div className="absolute bottom-4 -right-3 w-10 h-10 bg-accent/20" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />

              <div className="absolute -bottom-8 left-[10%] w-20 h-20 bg-accent/15" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
              <div className="absolute -bottom-12 left-[30%] w-12 h-12 bg-accent/12" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
              <div className="absolute -bottom-6 left-[55%] w-10 h-10 bg-accent/18" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />

              <div className="absolute -bottom-6 left-12 w-40 h-px bg-gradient-to-r from-accent/50 via-accent/25 to-transparent" />
              <div className="absolute -bottom-3 left-12 w-24 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            </div>

            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                33% { transform: translateY(-8px) rotate(0.5deg); }
                66% { transform: translateY(4px) rotate(-0.3deg); }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
