import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function EditorialStatement() {
  return (
    <section className="bg-[#0D0D0D] py-32 lg:py-40 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeUp}>
          <span className="font-['Playfair_Display',serif] text-[140px] leading-none text-[#C8352E]/10 select-none block">
            &ldquo;
          </span>
          <blockquote className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-[#F5F5F5] -mt-20 tracking-tight">
            La confiance ne se décrète pas.
            <br />
            Elle se construit, année après année,
            <br />
            au service de nos clients et de l'excellence.
          </blockquote>
          <div className="mt-10">
            <div className="w-12 h-px bg-[#C8352E] mx-auto mb-5" />
            <cite className="font-['Playfair_Display',serif] text-base text-[#9C9C9C] not-italic">
              Mourad Guellaty
              <span className="block text-[11px] tracking-[0.15em] uppercase mt-1 text-[#6B6B6B]">
                Fondateur
              </span>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
