'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const navLinks = [
    { label: t('header.nav.home', 'ACCUEIL'), href: '/#accueil', sectionId: 'accueil' },
    { label: t('header.nav.direction', 'DIRECTION'), href: '/#fondateur', sectionId: 'fondateur' },
    { label: t('header.nav.about', 'À PROPOS'), href: '/#about', sectionId: 'about' },
    { label: t('header.nav.services', 'SERVICES'), href: '/#services', sectionId: 'services' },
    { label: t('header.nav.sectors', 'SECTEURS'), href: '/#sectors', sectionId: 'sectors' },
    { label: t('header.nav.team', 'ÉQUIPE'), href: '/#team', sectionId: 'team' },
    { label: t('header.nav.articles', 'ARTICLES'), href: '/#articles', sectionId: 'articles' },
    { label: t('header.nav.careers', 'CARRIÈRES'), href: '/#careers', sectionId: 'careers' },
    { label: t('header.nav.contact', 'CONTACT'), href: '/#contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

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
  }, [isHome]);

  useEffect(() => {
    setIsScrolled(window.scrollY > 20 || !isHome);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-black/10 shadow-sm'
          : 'bg-white/75 backdrop-blur-lg border-black/5'
      }`}
    >
      <div className="hidden lg:block bg-accent">
        <div className="max-w-[1280px] mx-auto px-6 py-2 flex justify-end items-center gap-6 text-[11px] uppercase tracking-[0.15em] text-white">
          <a href="tel:+21671740131" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Phone size={11} /> +216 71 740 131
          </a>
          <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Mail size={11} /> contact@cabinetguellaty.com
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-3 xl:gap-6">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img src="/logo.png" alt="CMG" className="w-9 h-9 group-hover:opacity-90 transition-opacity" />
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-sm tracking-wide text-text-dark whitespace-nowrap">CABINET MOURAD GUELLATY</span>
            <span className="text-[10px] tracking-[0.2em] text-text-dark-muted">MG & ASSOCIÉS</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-x-4 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative text-[11px] font-medium tracking-[0.08em] uppercase whitespace-nowrap transition-colors duration-300 py-1
                ${activeSection === link.sectionId ? 'text-text-dark' : 'text-text-dark-muted hover:text-text-dark'}
              `}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500 ease-out ${
                  activeSection === link.sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-black/10 p-0.5 bg-black/[0.03] text-[11px] font-semibold">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === 'fr'
                  ? 'bg-accent text-white shadow-xs'
                  : 'text-text-dark-muted hover:text-text-dark'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === 'en'
                  ? 'bg-accent text-white shadow-xs'
                  : 'text-text-dark-muted hover:text-text-dark'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center bg-accent text-white px-5 py-2.5 text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(168,24,40,0.55)] transition-all duration-300"
          >
            {t('header.cta', 'PRENDRE RENDEZ-VOUS')}
          </Link>
          <button
            className="xl:hidden text-text-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-black/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase ${
                activeSection === link.sectionId ? 'text-accent' : 'text-text-dark'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => {
                setLanguage('fr');
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                language === 'fr' ? 'bg-accent text-white' : 'bg-black/5 text-text-dark'
              }`}
            >
              Français
            </button>
            <button
              onClick={() => {
                setLanguage('en');
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                language === 'en' ? 'bg-accent text-white' : 'bg-black/5 text-text-dark'
              }`}
            >
              English
            </button>
          </div>
          <Link
            href="/#contact"
            className="bg-accent text-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('header.cta', 'PRENDRE RENDEZ-VOUS')}
          </Link>
          <div className="flex flex-col gap-2 mt-2 text-xs text-text-dark-muted border-t border-black/10 pt-4">
            <a href="tel:+21671740131" className="flex items-center gap-2"><Phone size={14} /> +216 71 740 131</a>
            <a href="mailto:contact@cabinetguellaty.com" className="flex items-center gap-2"><Mail size={14} /> contact@cabinetguellaty.com</a>
          </div>
        </div>
      )}
    </header>
  );
}
