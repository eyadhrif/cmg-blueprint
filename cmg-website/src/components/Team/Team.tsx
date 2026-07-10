const team = [
  {
    name: 'Mourad Guellaty',
    role: 'Fondateur & Expert-comptable\nCommissaire aux comptes',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop', // Placeholder
  },
  {
    name: '[PLACEHOLDER]',
    role: 'Associée\nAudit & Conseil',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', // Placeholder
  },
  {
    name: '[PLACEHOLDER]',
    role: 'Responsable\nConseil Fiscal',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop', // Placeholder
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-light py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase">NOTRE ENGAGEMENT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] font-bold text-text-dark mb-8 tracking-tight">
            Une équipe d'experts à vos côtés
          </h2>
          
          <p className="text-text-dark-muted text-base sm:text-lg mb-10 leading-relaxed max-w-md">
            MG & Associés, c'est une équipe pluridisciplinaire de professionnels engagés, animés par l'excellence, l'intégrité et la volonté de créer de la valeur durable pour nos clients.
          </p>

          <a href="#team" className="inline-block border border-text-dark text-text-dark px-8 py-4 text-sm font-bold tracking-wider hover:bg-black/5 transition-colors uppercase focus-visible:outline-accent">
            DÉCOUVRIR L'ÉQUIPE &rarr;
          </a>
        </div>

        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col group overflow-hidden bg-white shadow-[0_24px_50px_-32px_rgba(13,13,13,0.15)]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`Photo de ${member.name}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-lg font-bold text-text-dark mb-2">{member.name}</h3>
                  <p className="text-sm text-text-dark-muted leading-relaxed whitespace-pre-line">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-2 h-2 rounded-full bg-text-dark-muted/30" />
            <span className="w-2 h-2 rounded-full bg-text-dark-muted/30" />
          </div>
        </div>

      </div>
    </section>
  );
}
