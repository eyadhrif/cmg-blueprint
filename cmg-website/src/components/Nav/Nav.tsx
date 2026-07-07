import { useEffect, useState } from 'react';
import logoUrl from '../../assets/logo.png';
import styles from './Nav.module.css';

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why us' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

function getInitialTheme(): 'light' | 'dark' | null {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return null;
}

export default function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(getInitialTheme);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <div className={styles.brand}>
          <img src={logoUrl} alt="MG & Associés mark" />
          <div className={styles.brandText}>
            <div className={styles.name}>MG &amp; Associés</div>
            <div className={styles.tag}>Audit &amp; Advisory · Est. 1983</div>
          </div>
        </div>
        <div className={styles.navLinks}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </nav>
  );
}
