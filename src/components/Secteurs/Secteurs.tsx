import { Building2, Factory, Stethoscope, GraduationCap, Ship, Wallet } from 'lucide-react';

const secteurs = [
  {
    icon: Building2,
    title: 'Services & Finance',
    desc: 'Banques, assurances, sociétés de services et institutions financières.',
  },
  {
    icon: Factory,
    title: 'Industrie & Manufacture',
    desc: 'Industries manufacturières, agroalimentaires et unités de production.',
  },
  {
    icon: Stethoscope,
    title: 'Santé & Pharmacie',
    desc: 'Cliniques, laboratoires, pharmacies et établissements de santé.',
  },
  {
    icon: GraduationCap,
    title: 'Éducation & Formation',
    desc: 'Institutions académiques, centres de formation et organismes éducatifs.',
  },
  {
    icon: Ship,
    title: 'Transport & Logistique',
    desc: 'Transport maritime, aérien, terrestre et chaînes logistiques.',
  },
  {
    icon: Wallet,
    title: 'Immobilier & BTP',
    desc: 'Promotion immobilière, construction, et aménagement urbain.',
  },
];

export default function Secteurs() {
  return (
    <section id="sectors" className="bg-light py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="w-8 h-[1px] bg-accent mb-4" />
          <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-4">SECTEURS D'ACTIVITÉ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-text-dark tracking-tight max-w-2xl">
            Une expertise multisectorielle reconnue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secteurs.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white border border-card-border/20 p-10 flex flex-col items-center text-center group hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300">
                <Icon size={42} className="text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-text-dark mb-4">{s.title}</h3>
                <p className="text-text-dark-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
