'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

const secteurs = [
  { key: 'financier', title: 'Banques & institutions financières', desc: 'Banques, assurances et institutions financières.', img: '/images/sectors/financier.jpg' },
  { key: 'btp', title: 'Bâtiments et travaux publics', desc: 'Construction, BTP et aménagement urbain.', img: '/images/sectors/btp.jpg' },
  { key: 'cliniques', title: 'Cliniques et des soins de santé', desc: 'Cliniques, laboratoires et établissements de soins.', img: '/images/sectors/cliniques.jpg' },
  { key: 'agroalimentaire', title: 'Industrie agroalimentaire', desc: 'Industries agroalimentaires et unités de production.', img: '/images/sectors/agroalimentaire.jpg' },
  { key: 'chimique', title: 'Industrie chimique', desc: 'Industries chimiques et unités de transformation.', img: '/images/sectors/chimique.jpg' },
  { key: 'hygiene', title: 'Industrie d\'hygiène', desc: 'Produits d\'hygiène, cosmétiques et détergents.', img: '/images/sectors/hygiene.jpg' },
  { key: 'mecanique', title: 'Industrie mécanique', desc: 'Industries mécaniques et unités de fabrication.', img: '/images/sectors/mecanique.jpg' },
  { key: 'petrolier', title: 'Industrie pétrolière', desc: 'Industrie pétrolière, raffinage et distribution.', img: '/images/sectors/petrolier.jpg' },
  { key: 'pharmaceutique', title: 'Industrie pharmaceutique', desc: 'Laboratoires pharmaceutiques et établissements de santé.', img: '/images/sectors/pharmaceutique.jpg' },
  { key: 'materiauxConstruction', title: 'Industries des matériaux de construction', desc: 'Matériaux de construction et unités de production.', img: '/images/sectors/materiaux-construction.jpg' },
  { key: 'textile', title: 'Industries textiles et habillement', desc: 'Textiles, habillement et filières de production.', img: '/images/sectors/textile.jpg' },
  { key: 'immobiliere', title: 'Promotion immobilière', desc: 'Promotion immobilière et développement foncier.', img: '/images/sectors/immobiliere.jpg' },
  { key: 'agricole', title: 'Secteur agricole', desc: 'Exploitations agricoles et filières agro-industrielles.', img: '/images/sectors/agricole.jpg' },
  { key: 'commercial', title: 'Secteur commercial', desc: 'Grande distribution, commerces et surfaces de vente.', img: '/images/sectors/commercial.jpg' },
  { key: 'telecom', title: 'Secteur de télécommunication', desc: 'Télécommunications et technologies de l\'information.', img: '/images/sectors/telecom.jpg' },
  { key: 'hotelier', title: 'Secteur hôtelier', desc: 'Hôtels, resorts et établissements touristiques.', img: '/images/sectors/hotelier.jpg' },
  { key: 'logistique', title: 'Secteur logistique', desc: 'Logistique, transport et chaînes d\'approvisionnement.', img: '/images/sectors/logistique.jpg' },
  { key: 'startups', title: 'Startups', desc: 'Startups et entreprises innovantes.', img: '/images/sectors/startups.jpg' },
  { key: 'energiesRenouvelables', title: 'Énergies renouvelables', desc: 'Énergies vertes et transition énergétique.', img: '/images/sectors/energies-renouvelables.jpg' },
  { key: 'technologies', title: 'Secteur des technologies', desc: 'Technologies de l\'information et innovation.', img: '/images/sectors/technologies.jpg' },
];

const fadeUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Secteurs() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="bg-ivoire py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="mb-16" {...fadeUp}>
          <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            {t('secteurs.kicker', "Secteurs d'Activité")}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-text-dark mt-6 tracking-tight max-w-3xl">
            {t('secteurs.title', 'Une expertise multisectorielle reconnue')}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {secteurs.map((s, i) => (
            <motion.div
              key={i}
              className="group relative h-[210px] sm:h-[215px] xl:h-[220px] overflow-hidden rounded-2xl bg-dark/20 border border-black/[0.06] shadow-soft hover:shadow-soft-lg hover:border-accent/30 transition-all duration-300 cursor-pointer"
              {...fadeUp}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="relative z-10 flex flex-col justify-end h-full p-5">
                <h3 className="font-serif text-base sm:text-lg font-medium text-white mb-1.5 leading-snug tracking-tight group-hover:text-accent-crystal transition-colors">
                  {t(`secteurs.items.${s.key}.title`, s.title)}
                </h3>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                  {t(`secteurs.items.${s.key}.desc`, s.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
