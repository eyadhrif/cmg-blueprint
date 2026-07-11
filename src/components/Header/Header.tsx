import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const navLinks = [
  { label: 'ACCUEIL', href: '#', sectionId: 'accueil' },
  { label: 'À PROPOS', href: '#about', sectionId: 'about' },
  { label: 'NOS SERVICES', href: '#services', sectionId: 'services' },
  { label: 'SECTEURS', href: '#sectors', sectionId: 'sectors' },
  { label: 'NOTRE ÉQUIPE', href: '#team', sectionId: 'team' },
  { label: 'CONTACT', href: '#contact', sectionId: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const offset = 150;
      let current = 'accueil';
      for (const link of navLinks) {
        const el = document.getElementById(link.sectionId);
        if (el && el.offsetTop <= window.scrollY + offset) {
          current = link.sectionId;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-md' : 'bg-dark'}`}>
      <div className="hidden lg:block border-b border-card-border">
        <div className="max-w-[1280px] mx-auto px-6 py-2 flex justify-end items-center gap-6 text-[11px] uppercase tracking-[0.15em] text-text-muted">
          <a href="tel:+21671740131" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={12} /> +216 71 740 131
          </a>
          <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={12} /> contact@cabinetguellaty.com
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between gap-4 lg:gap-6">
        <a href="#" className="flex items-center gap-4 group shrink-0 focus-visible:outline-accent">
          <img src={logoImg} alt="CMG" className="w-10 h-10 group-hover:opacity-90 transition-opacity" />
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-sm tracking-wide text-text-primary whitespace-nowrap">CABINET MOURAD GUELLATY</span>
            <span className="text-[10px] tracking-[0.2em] text-text-muted">MG & ASSOCIÉS</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-4 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors relative py-2 focus-visible:outline-accent
                ${activeSection === link.sectionId ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}
              `}
            >
              {link.label}
              {activeSection === link.sectionId && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-accent text-white px-7 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-accent/90 hover:brightness-110 hover:scale-[1.04] hover:shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-200 focus-visible:outline-white whitespace-nowrap"
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <button
            className="lg:hidden text-text-primary p-2 focus-visible:outline-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-dark border-t border-card-border p-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase focus-visible:outline-accent ${activeSection === link.sectionId ? 'text-accent' : 'text-text-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-center mt-4 focus-visible:outline-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <div className="flex flex-col gap-2 mt-4 text-xs text-text-muted border-t border-card-border pt-4">
            <a href="tel:+21671740131" className="flex items-center gap-2 focus-visible:outline-accent"><Phone size={14} /> +216 71 740 131</a>
            <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2 focus-visible:outline-accent"><Mail size={14} /> contact@cabinetguellaty.com</a>
          </div>
        </div>
      )}
    </header>
  );
}
