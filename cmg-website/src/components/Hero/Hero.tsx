import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import logoUrl from '../../assets/logo.png';
import styles from './Hero.module.css';

const taglineWords = [
  'Foresight',
  'Big picture',
  'Added value',
  'Expertise',
  'Passion',
];

export default function Hero() {
  return (
    <header className={styles.hero}>
      <BlueprintFrame crosshairs={['tl', 'tr']}>
        <div className={styles.heroGrid}>
          <div>
            <div className="eyebrow mono">
              Gabès &amp; Tunis — Tunisia
            </div>
            <h1>
              Independent judgment,<br />
              <em>since 1983.</em>
            </h1>
            <p className={styles.lede}>
              MG &amp; Associés is an audit and consulting firm supporting
              industrial groups, SMEs and family enterprises across Tunisia —
              with an Anglo-Saxon methodology adapted, case by case, to the
              entity in front of us.
            </p>
            <div className={styles.ctaRow}>
              <a href="#services" className="btn btn-primary">
                View our services →
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>
          </div>
          <div className={styles.heroMark}>
            <img
              src={logoUrl}
              alt="MG & Associés logo — schematic mark"
            />
            <div className={`${styles.cap} mono`}>FIG. 01 — FIRM MARK</div>
          </div>
        </div>
        <div className={styles.taglineStrip}>
          {taglineWords.map((word, i) => (
            <span key={word}>
              {word}
              {i < taglineWords.length - 1 && (
                <span className={styles.dot} aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </BlueprintFrame>
    </header>
  );
}
