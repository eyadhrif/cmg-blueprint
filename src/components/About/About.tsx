import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function About() {
  return (
    <section id="about" className="bg-[#F5F5F3] py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          <motion.div className="lg:col-span-6" {...fadeUp}>
            <span className="text-[#C8352E] text-xs font-semibold tracking-[0.18em] uppercase">
              À Propos
            </span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-[#1A1A1A] mt-6 tracking-tight">
              Un partenaire de confiance pour des décisions éclairées
            </h2>
            <div className="space-y-5 text-[#6B6B6B] text-base sm:text-lg leading-relaxed mt-8">
              <p>
                Le Cabinet Mourad Guellaty est un cabinet d'expertise comptable, d'audit et de conseil
                établi à La Marsa, Tunis. Fondé par Mourad Guellaty, ancien président de l'Ordre des
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
              className="inline-flex items-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#1A1A1A] hover:text-[#F5F5F3] transition-all duration-300 mt-10 group"
            >
              Découvrir nos services
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] bg-[#E8E8E6] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Bureau MG & Associés"
                className="w-full h-full object-cover saturate-[0.4] contrast-[1.1]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
