import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 w-full items-center">

          <motion.div className="lg:col-span-7 lg:pr-12" {...fadeUp}>
            <span className="text-[#C8352E] text-xs font-semibold tracking-[0.18em] uppercase">
              Audit & Conseil
            </span>

            <h1 className="font-['Playfair_Display',serif] text-5xl sm:text-6xl lg:text-[72px] leading-[1.08] text-[#F5F5F5] mt-8 tracking-tight">
              L'expertise au service de votre{' '}
              <span className="italic text-[#C8352E]">performance</span>
            </h1>

            <p className="text-[#9C9C9C] text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
              Cabinet Mourad Guellaty (MG & Associés) accompagne les entreprises à chaque étape
              de leur développement avec rigueur, indépendance et engagement.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-[#C8352E] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#C8352E]/90 transition-all duration-300 group"
              >
                Découvrir nos services
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold tracking-wider uppercase text-[#9C9C9C] border border-[rgba(255,255,255,0.15)] hover:border-[#F5F5F5] hover:text-[#F5F5F5] transition-all duration-300"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative h-[400px] lg:h-[560px] hidden lg:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#151515]">
              <svg viewBox="0 0 500 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="heroGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="500" height="600" fill="url(#heroGrid)" />
                <rect x="40" y="40" width="420" height="520" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <rect x="60" y="60" width="380" height="480" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="500" y2="600" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <text
                  x="250" y="310"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.05)" fontFamily="serif"
                  fontSize="180" fontWeight="700" letterSpacing="8"
                >
                  MG
                </text>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
