'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const containerFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.3 },
};

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen bg-dark overflow-hidden">
      <div className="absolute inset-0 overflow-hidden hero-video-wrapper">
        <video
          className="absolute inset-0 h-full w-full object-cover saturate-50 brightness-[0.72] contrast-[1.05] hero-video"
          src="/hero-video.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <style>{`
        .hero-video-wrapper {
          will-change: transform;
        }
        .hero-video {
          will-change: transform;
          animation: heroFloat 14s ease-in-out infinite;
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.015); }
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full">
          <motion.div className="max-w-3xl" {...fadeUp}>
            <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Audit & Conseil
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.08] text-text-primary mt-8 tracking-tight">
              L&apos;expertise au service de votre{' '}
              <span className="italic text-accent">performance</span>
            </h1>
            <p className="text-text-muted text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
              Cabinet Mourad Guellaty (MG & Associés) accompagne les entreprises à chaque étape
              de leur développement avec rigueur, indépendance et engagement.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-accent/90 transition-all duration-300 group"
              >
                Découvrir nos services
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold tracking-wider uppercase text-text-muted border border-white/15 hover:border-text-primary hover:text-text-primary transition-all duration-300"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
