import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const navLinks = [
  { label: 'ACCUEIL', href: '#', sectionId: 'accueil' },
  { label: 'À PROPOS', href: '#about', sectionId: 'about' },
  { label: 'SERVICES', href: '#services', sectionId: 'services' },
  { label: 'SECTEURS', href: '#sectors', sectionId: 'sectors' },
  { label: 'ÉQUIPE', href: '#team', sectionId: 'team' },
  { label: 'CARRIÈRES', href: '#nous-rejoindre', sectionId: 'nous-rejoindre' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md' : 'bg-[#0D0D0D]'
      }`}
    >
      <div className="hidden lg:block border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1280px] mx-auto px-6 py-2 flex justify-end items-center gap-6 text-[11px] uppercase tracking-[0.15em] text-[#9C9C9C]">
          <a href="tel:+21671740131" className="flex items-center gap-2 hover:text-[#F5F5F5] transition-colors">
            <Phone size={11} /> +216 71 740 131
          </a>
          <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2 hover:text-[#F5F5F5] transition-colors">
            <Mail size={11} /> contact@cabinetguellaty.com
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-4 lg:gap-6">
        <a href="#" className="flex items-center gap-4 group shrink-0">
          <img src={logoImg} alt="CMG" className="w-9 h-9 group-hover:opacity-90 transition-opacity" />
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-sm tracking-wide text-[#F5F5F5] whitespace-nowrap">CABINET MOURAD GUELLATY</span>
            <span className="text-[10px] tracking-[0.2em] text-[#9C9C9C]">MG & ASSOCIÉS</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[11px] font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 py-1
                ${activeSection === link.sectionId ? 'text-[#F5F5F5]' : 'text-[#9C9C9C] hover:text-[#F5F5F5]'}
              `}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#C8352E] transition-all duration-500 ease-out ${
                  activeSection === link.sectionId ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#C8352E] text-white px-6 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-[#C8352E]/90 transition-all duration-300"
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <button
            className="lg:hidden text-[#F5F5F5] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0D0D] border-t border-[rgba(255,255,255,0.06)] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase ${
                activeSection === link.sectionId ? 'text-[#C8352E]' : 'text-[#F5F5F5]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#C8352E] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRENDRE RENDEZ-VOUS
          </a>
          <div className="flex flex-col gap-2 mt-4 text-xs text-[#9C9C9C] border-t border-[rgba(255,255,255,0.06)] pt-4">
            <a href="tel:+21671740131" className="flex items-center gap-2"><Phone size={14} /> +216 71 740 131</a>
            <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2"><Mail size={14} /> contact@cabinetguellaty.com</a>
          </div>
        </div>
      )}
    </header>
  );
}
