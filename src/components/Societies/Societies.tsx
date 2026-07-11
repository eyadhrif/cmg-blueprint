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

export default function Societies() {
  return (
    <section className="bg-dark border-t border-b border-card-border py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">ILS NOUS ONT FAIT CONFIANCE</span>
          <span className="w-8 h-[1px] bg-accent/50 mt-4" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee" style={{ gap: '4rem' }}>
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center h-20 px-8 border border-card-border bg-card shrink-0"
            >
              <span className="text-text-muted text-sm font-medium tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
