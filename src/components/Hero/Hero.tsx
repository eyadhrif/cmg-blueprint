import { Shield, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[calc(100vh-96px)] bg-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(179,37,9,0.03),transparent_40%)]" />

      {/* Full‑width video background behind everything */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden border border-accent-crystal/10">
        <video
          className="absolute inset-0 h-full w-full object-cover filter saturate-50 brightness-[0.72] contrast-[1.05]"
          src="/output.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-dark/30" />
        <div className="absolute inset-0 bg-[linear-gradient(220deg,rgba(179,37,9,0.10)_0%,transparent_18%),linear-gradient(160deg,rgba(255,255,255,0.04)_0%,transparent_28%)]" />
        <div className="absolute inset-0 pointer-events-none border border-accent-crystal/10" />

        {/* Diagonal corner glow */}
        <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(179,37,9,0.18) 0%, rgba(179,37,9,0.05) 35%, transparent 55%)' }} />
          <div className="absolute top-2 left-0 w-56 h-px bg-gradient-to-r from-accent-crystal/25 via-accent-crystal/8 to-transparent -rotate-45 origin-top-left" />
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 pt-24 pb-24 lg:pt-32 lg:pb-28 grid lg:grid-cols-2 relative z-10 items-center">
        <div className="relative flex flex-col justify-center lg:pr-12">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 320 320\'><polyline points=\'20,280 120,120 220,260\' fill=\'none\' stroke=\'%23C8352E\' stroke-width=\'1\' opacity=\'0.18\'/><polyline points=\'40,240 120,120 180,220\' fill=\'none\' stroke=\'%23C8352E\' stroke-width=\'1\' opacity=\'0.12\'/><polyline points=\'10,260 80,170 150,260\' fill=\'none\' stroke=\'%23C8352E\' stroke-width=\'1\' opacity=\'0.08\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom', backgroundSize: '220px' }} />
          <div className="pointer-events-none absolute inset-0 z-0 opacity-4" style={{ backgroundImage: 'radial-gradient(circle at 8% 12%, rgba(179,37,9,0.14) 1px, transparent 4px), radial-gradient(circle at 78% 18%, rgba(179,37,9,0.1) 1px, transparent 7px)', backgroundSize: '30px 30px, 48px 48px', backgroundRepeat: 'repeat' }} />

          {/* Eyebrow tag */}
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <span className="w-8 h-[1px] bg-accent-crystal" />
            <span className="text-accent-crystal text-xs font-bold tracking-[0.2em] uppercase relative">
              AUDIT & CONSEIL
              <span className="absolute left-0 -bottom-2 h-px w-full bg-accent-crystal/30" />
            </span>
          </div>

          {/* Headline - serif display with line-by-line color/weight variation */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] mb-8 tracking-tight relative z-10">
            <span className="font-['Playfair_Display',serif] font-bold text-text-primary">L'expertise au</span>
            <br />
            <span className="font-['Playfair_Display',serif] italic font-semibold text-accent-crystal">service de votre</span>
            <br />
            <span className="font-['Playfair_Display',serif] font-bold text-text-primary">performance</span>
          </h1>

          <p className="text-text-muted text-base sm:text-lg mb-12 leading-relaxed relative z-10">
            Cabinet Mourad Guellaty (MG & Associés) accompagne les entreprises à chaque étape de leur développement avec rigueur, indépendance et engagement.
          </p>

          {/* CTAs - red stays primary action */}
          <div className="flex flex-nowrap items-center gap-4 relative z-10">
            <a href="#services" className="shrink-0 bg-accent border border-white/10 text-white px-8 py-4 text-sm font-bold tracking-wider uppercase whitespace-nowrap focus-visible:outline-white transition-all duration-200">
              DÉCOUVRIR NOS SERVICES &rarr;
            </a>
            <a href="#contact" className="shrink-0 border border-white/25 text-white px-8 py-4 text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 hover:bg-white/10 focus-visible:outline-accent">
              NOUS CONTACTER
            </a>
          </div>

          {/* Trust badges row */}
          <div className="mt-12 relative z-10 border border-white/10 rounded-sm bg-dark/70 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x lg:divide-y lg:divide-x-0 xl:divide-y-0 xl:divide-x divide-white/10">
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-accent-crystal/40 rounded-sm">
                  <Shield size={14} className="text-accent-crystal" />
                </div>
                <div>
                  <span className="text-white/80 text-xs font-semibold">Rigueur</span>
                  <p className="text-white/40 text-[10px] leading-tight mt-0.5">Des standards exigeants</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-accent-crystal/40 rounded-sm">
                  <Users size={14} className="text-accent-crystal" />
                </div>
                <div>
                  <span className="text-white/80 text-xs font-semibold">Indépendance</span>
                  <p className="text-white/40 text-[10px] leading-tight mt-0.5">Un regard objectif et impartial</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-accent-crystal/40 rounded-sm">
                  <TrendingUp size={14} className="text-accent-crystal" />
                </div>
                <div>
                  <span className="text-white/80 text-xs font-semibold">Engagement</span>
                  <p className="text-white/40 text-[10px] leading-tight mt-0.5">Votre réussite, notre priorité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
