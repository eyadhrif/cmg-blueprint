import Logo from '../Logo';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] bg-dark overflow-hidden">
      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-text-muted text-[10px] tracking-[0.3em] font-light uppercase">
        Scroll
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 pt-16 pb-24 lg:pt-20 lg:pb-28 grid lg:grid-cols-2 relative z-10 items-center">
        <div className="flex flex-col justify-center lg:pr-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase">AUDIT & CONSEIL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold text-text-primary mb-8 tracking-tight">
            L'expertise au service de votre performance
          </h1>

          <p className="text-text-muted text-base sm:text-lg mb-12 leading-relaxed">
            Cabinet Mourad Guellaty (MG & Associés) accompagne les entreprises à chaque étape de leur développement avec rigueur, indépendance et engagement.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#services" className="bg-accent text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-accent/90 transition-colors uppercase whitespace-nowrap focus-visible:outline-white">
              DÉCOUVRIR NOS SERVICES &rarr;
            </a>
            <a href="#contact" className="border border-white text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors uppercase whitespace-nowrap focus-visible:outline-accent">
              NOUS CONTACTER
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[160%] h-[160%] text-accent/45 pointer-events-none">
            <Logo className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
