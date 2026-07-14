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
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover saturate-50 brightness-[0.72] contrast-[1.05]"
          src="/output.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-[#0D0D0D]/40 to-[#0D0D0D]/30" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full">

          <motion.div className="lg:col-span-12" {...fadeUp}>
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


        </div>
      </div>
    </section>
  );
}
