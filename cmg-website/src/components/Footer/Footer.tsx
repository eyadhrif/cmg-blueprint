import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className="mono">
        © {year} MG &amp; Associés — Prototype for review, not for
        publication
      </span>
      <span className="mono">DRAFT v0.1 — PROTOTYPE</span>
    </footer>
  );
}
