import { MapPin } from 'lucide-react';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8 border-t border-card-border">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide text-text-primary">CABINET MOURAD GUELLATY</span>
                <span className="text-[10px] tracking-[0.2em] text-text-muted">MG & ASSOCIÉS</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-[280px]">
              Cabinet d'expertise comptable, d'audit et de conseil établi à La Marsa, Tunis. Fondé par Mourad Guellaty, ancien président de l'Ordre des Experts Comptables de Tunisie.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/cabinet-mourad-guellaty/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/p/Cabinet-Mourad-GUELLATY-100045481282074/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Liens utiles</h3>
            <ul className="space-y-3">
              {[{ label: 'Accueil', href: '#accueil' }, { label: 'À propos', href: '#about' }, { label: 'Nos services', href: '#services' }, { label: 'Secteurs', href: '#sectors' }, { label: 'Contact', href: '#contact' }].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-6">Contact</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Adresse</span>
                <span className="text-sm text-text-primary">45 Avenue de la République - 2078 Marsa Safsaf, Tunis</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Téléphone</span>
                <a href="tel:+21671740131" className="text-sm text-text-primary hover:text-accent transition-colors">+216 71 740 131</a>
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Email</span>
                <a href="mailto:contact@cabinetguellaty.com" className="text-sm text-text-primary hover:text-accent transition-colors">contact@cabinetguellaty.com</a>
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Fax</span>
                <span className="text-sm text-text-primary">+216 71 740 197</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Notre emplacement</h3>
            <a
              href="https://www.google.com/maps/place/45+Av.+de+la+R%C3%A9publique,+Site+arch%C3%A9ologique+de+Carthage/@36.8725441,10.3279552,875m/data=!3m1!1e3!4m6!3m5!1s0x12e2b49419c4ee1d:0x6b2b9ccb47218dc3!8m2!3d36.8721791!4d10.3322998!16s%2Fg%2F11jgrnzlq9?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-32 bg-card border border-card-border relative overflow-hidden flex items-center justify-center group hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-white/80 text-xs font-medium tracking-wide">
                  La Marsa, Tunis
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2026 Cabinet Mourad Guellaty (MG & Associés). Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
           </div>
        </div>

      </div>
    </footer>
  );
}
