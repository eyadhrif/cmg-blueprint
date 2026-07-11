import { MapPin, Phone, Mail, Clock, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-light py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-bold tracking-[0.15em] uppercase">CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-text-dark mb-8 tracking-tight">
            Discutons de votre projet
          </h2>

          <p className="text-text-dark-muted text-base sm:text-lg mb-12 leading-relaxed">
            Que ce soit pour un audit, un conseil fiscal ou un accompagnement stratégique, notre équipe est à votre écoute.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-text-dark-muted uppercase mb-1">Adresse</span>
                <span className="text-text-dark text-sm">45 Avenue de la République, 2078 Marsa Safsaf, Tunis</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-text-dark-muted uppercase mb-1">Téléphone</span>
                <a href="tel:+21671740131" className="text-text-dark text-sm hover:text-accent transition-colors">+216 71 740 131</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-text-dark-muted uppercase mb-1">Email</span>
                <a href="mailto:contact@cabinetguellaty.com" className="text-text-dark text-sm hover:text-accent transition-colors">contact@cabinetguellaty.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-text-dark-muted uppercase mb-1">Horaires</span>
                <span className="text-text-dark text-sm">Lun – Ven : 08h30 – 17h30</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileText size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-text-dark-muted uppercase mb-1">Fax</span>
                <span className="text-text-dark text-sm">+216 71 740 197</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-xs font-bold text-text-dark-muted uppercase tracking-wide mb-2">Nom complet</label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full bg-white border border-card-border/40 text-text-dark text-sm px-5 py-4 placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-text-dark-muted uppercase tracking-wide mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="votre@email.com"
                className="w-full bg-white border border-card-border/40 text-text-dark text-sm px-5 py-4 placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-text-dark-muted uppercase tracking-wide mb-2">Téléphone</label>
              <input
                type="tel"
                id="phone"
                placeholder="+216 XX XXX XXX"
                className="w-full bg-white border border-card-border/40 text-text-dark text-sm px-5 py-4 placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-xs font-bold text-text-dark-muted uppercase tracking-wide mb-2">Sujet</label>
              <select
                id="subject"
                className="w-full bg-white border border-card-border/40 text-text-dark text-sm px-5 py-4 focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="audit">Audit & Commissariat</option>
                <option value="fiscal">Conseil fiscal</option>
                <option value="comptable">Expertise comptable</option>
                <option value="juridique">Conseil juridique</option>
                <option value="gestion">Conseil en gestion</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-bold text-text-dark-muted uppercase tracking-wide mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message..."
                className="w-full bg-white border border-card-border/40 text-text-dark text-sm px-5 py-4 placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-accent text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-accent/90 transition-colors focus-visible:outline-white"
              >
                ENVOYER VOTRE MESSAGE &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
