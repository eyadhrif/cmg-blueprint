import { motion } from 'framer-motion';

const secteurs = [
  { title: 'Services & Finance', desc: 'Banques, assurances, sociétés de services et institutions financières.' },
  { title: 'Industrie & Manufacture', desc: 'Industries manufacturières, agroalimentaires et unités de production.' },
  { title: 'Santé & Pharmacie', desc: 'Cliniques, laboratoires, pharmacies et établissements de santé.' },
  { title: 'Éducation & Formation', desc: 'Institutions académiques, centres de formation et organismes éducatifs.' },
  { title: 'Transport & Logistique', desc: 'Transport maritime, aérien, terrestre et chaînes logistiques.' },
  { title: 'Immobilier & BTP', desc: 'Promotion immobilière, construction, et aménagement urbain.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Secteurs() {
  return (
    <section id="sectors" className="bg-[#F5F5F3] py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="mb-20" {...fadeUp}>
          <span className="text-[#C8352E] text-xs font-semibold tracking-[0.18em] uppercase">
            Secteurs d'Activité
          </span>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-[#1A1A1A] mt-6 tracking-tight max-w-3xl">
            Une expertise multisectorielle reconnue
          </h2>
        </motion.div>

        <div className="space-y-px bg-[rgba(0,0,0,0.08)]">
          {secteurs.map((s, i) => (
            <motion.div
              key={i}
              className="bg-[#F5F5F3] py-8 lg:py-10 group hover:bg-white transition-all duration-500"
              {...fadeUp}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <span className="font-['Playfair_Display',serif] text-[#1A1A1A]/10 text-4xl lg:col-span-1 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="font-['Playfair_Display',serif] text-2xl lg:text-3xl text-[#1A1A1A] tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#6B6B6B] text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
