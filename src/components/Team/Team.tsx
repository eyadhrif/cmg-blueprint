export default function Team() {
  return (
    <section id="team" className="bg-dark py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className="w-8 h-[1px] bg-accent mb-4" />
          <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase mb-4">NOTRE ÉQUIPE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-text-primary tracking-tight max-w-3xl">
            Une équipe pluridisciplinaire au service de votre performance
          </h2>
          <p className="text-text-muted text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
            MG & Associés réunit des experts-comptables, commissaires aux comptes et conseillers spécialisés, capables d'intervenir sur l'ensemble des métiers de la finance, de l'audit et du conseil. Notre équipe combine rigueur technique et vision stratégique pour accompagner les entreprises dans tous leurs enjeux.
          </p>
        </div>
      </div>
    </section>
  );
}
