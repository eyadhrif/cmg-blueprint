import { motion } from 'framer-motion';

const services = [
  {
    title: 'Audit légal',
    desc: 'Commissariat aux comptes et audit légal dans le respect des normes en vigueur.',
  },
  {
    title: 'Conseil fiscal',
    desc: "Optimisation fiscale, déclarations et assistance dans vos relations avec l'administration.",
  },
  {
    title: 'Expertise comptable',
    desc: 'Tenue et révision comptable, états financiers et reporting fiable pour une meilleure prise de décision.',
  },
  {
    title: 'Conseil juridique',
    desc: 'Accompagnement juridique des entreprises et sécurisation de vos opérations.',
  },
  {
    title: 'Conseil en gestion',
    desc: 'Analyse financière, tableaux de bord et accompagnement à la performance.',
  },
  {
    title: 'Transactions & due diligence',
    desc: "Évaluation, audit d'acquisition et accompagnement dans vos opérations stratégiques.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0D0D0D] py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="mb-20" {...fadeUp}>
          <span className="text-[#C8352E] text-xs font-semibold tracking-[0.18em] uppercase">
            Nos Services
          </span>
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-[#F5F5F5] mt-6 tracking-tight max-w-3xl">
            Des solutions sur mesure pour accompagner votre croissance
          </h2>
        </motion.div>

        <div className="space-y-px bg-[rgba(255,255,255,0.06)]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-[#0D0D0D] py-8 lg:py-10 group hover:bg-[#151515] transition-all duration-500 px-0"
              {...fadeUp}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <span className="font-['Playfair_Display',serif] text-[#9C9C9C]/30 text-4xl lg:col-span-1 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="font-['Playfair_Display',serif] text-2xl lg:text-3xl text-[#F5F5F5] tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#9C9C9C] text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <a
                    href="#contact"
                    className="text-[#9C9C9C] text-xs font-semibold tracking-[0.2em] uppercase group-hover:text-[#C8352E] transition-colors inline-flex items-center gap-2"
                  >
                    Contact
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
