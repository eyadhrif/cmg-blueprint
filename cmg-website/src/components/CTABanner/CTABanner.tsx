import { Calendar } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-accent py-20">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
          <Calendar size={52} className="text-white shrink-0" strokeWidth={2} />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Prenons rendez-vous</h2>
            <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed">
              Discutons de vos enjeux et construisons ensemble des solutions adaptées.
            </p>
          </div>
        </div>

        <a href="#contact" className="shrink-0 inline-block border border-white text-white px-9 py-4 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors uppercase focus-visible:outline-white self-start lg:self-auto">
          PRENDRE RENDEZ-VOUS &rarr;
        </a>

      </div>
    </section>
  );
}
