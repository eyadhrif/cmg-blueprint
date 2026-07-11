import { Globe, Users, MessageCircle, Send, MapPin } from 'lucide-react';
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
              Cabinet d'audit et de conseil basé à Tunis, au service des entreprises et des organisations depuis plus de 40 ans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
                <Users size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors" aria-label="Facebook">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors" aria-label="Twitter">
                <Send size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors" aria-label="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Liens utiles</h3>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Nos services', 'Secteurs', 'Actualités', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6">Nos services</h3>
            <ul className="space-y-3">
              {[
                'Audit légal',
                'Conseil fiscal',
                'Expertise comptable',
                'Conseil juridique',
                'Conseil en gestion',
                'Transactions & due diligence'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Contact</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Adresse</span>
                <span className="text-sm text-text-primary">Rue du Lac X, Les Berges du Lac<br />1053 Tunis, Tunisie</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Téléphone</span>
                <a href="tel:+21671123456" className="text-sm text-text-primary hover:text-accent transition-colors">+216 71 123 456</a>
              </div>
              <div>
                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Email</span>
                <a href="mailto:contact@cmg.tn" className="text-sm text-text-primary hover:text-accent transition-colors">contact@cmg.tn</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Notre emplacement</h3>
            <div className="w-full h-32 bg-card border border-card-border relative overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-zinc-800/80 group-hover:bg-zinc-800/60 transition-colors z-10 flex items-center justify-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-white/80 text-xs font-medium tracking-wide">
                  Les Berges du Lac, Tunis
                </span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2026 Cabinet Mourad Guellaty (MG & Associés). Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-xs text-text-muted hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
