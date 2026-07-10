export default function About() {
  return (
    <section id="about" className="bg-light py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase">À PROPOS DU CABINET</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-text-dark mb-8 tracking-tight">
            Un partenaire de confiance pour des décisions éclairées
          </h2>
          
          <div className="space-y-6 text-text-dark-muted text-base sm:text-lg mb-10 leading-relaxed">
            <p>
              Fondé par Monsieur Mourad Guellaty, expert-comptable et commissaire aux comptes, le cabinet MG & Associés s'est imposé comme une référence en audit, conseil et expertise comptable en Tunisie.
            </p>
            <p>
              Notre approche repose sur l'écoute, la confidentialité et la recherche de solutions adaptées aux enjeux spécifiques de chaque client.
            </p>
          </div>

          <a href="#services" className="inline-block border border-accent text-accent px-8 py-4 text-sm font-bold tracking-wider hover:bg-accent/10 transition-colors uppercase focus-visible:outline-accent">
            EN SAVOIR PLUS &rarr;
          </a>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/3] overflow-hidden bg-slate-100 shadow-[0_32px_80px_-48px_rgba(13,13,13,0.45)]">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office reception" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
