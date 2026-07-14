import { motion } from 'framer-motion';

const companies = [
  'Société Générale Tunisie',
  'Banque de Tunisie',
  'Groupe Poulina',
  'SOTETEL',
  'Tunisie Telecom',
  'Air Liquide Tunisie',
  'Carthage Cement',
  'Vermeg',
  'Biat',
  'Amen Bank',
  'OPEL Tunisie',
  'ENIT',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Societies() {
  return (
    <section className="bg-[#0D0D0D] py-20 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <motion.div className="text-center" {...fadeUp}>
          <span className="text-[#9C9C9C] text-xs font-semibold tracking-[0.18em] uppercase">
            Ils nous ont fait confiance
          </span>
          <div className="w-8 h-px bg-[#C8352E]/50 mx-auto mt-4" />
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ gap: '3rem', animation: 'marquee 20s linear infinite' }}>
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center h-16 px-8 border border-[rgba(255,255,255,0.06)] bg-[#151515] shrink-0"
            >
              <span className="text-[#9C9C9C] text-sm font-medium tracking-wide">{name}</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
