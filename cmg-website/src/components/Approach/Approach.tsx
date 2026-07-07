import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './Approach.module.css';

export default function Approach() {
  return (
    <section className={styles.approach} id="approach">
      <BlueprintFrame crosshairs={['tl', 'tr', 'bl', 'br']}>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">§ 03 — APPROACH</div>
              <div className="sec-title">
                One methodology, adapted every time.
              </div>
            </div>
          </div>
          <div className={styles.approachGrid}>
            <div>
              <p className={styles.quote}>
                &ldquo;Our expertise, the quality of our teams, and the
                trust-based relationship we build are the guarantees of our
                quality standards.&rdquo;
              </p>
              <p className={styles.attribution}>
                &mdash; Walid Moussa, Partner
              </p>
            </div>
            <p>
              Our professionals are involved with major international companies,
              SMEs and family groups, across industry, commerce and financial
              services. That range is what shapes our Anglo-Saxon approach:
              rigorous by default, but never applied as a one-size-fits-all
              template.
            </p>
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
