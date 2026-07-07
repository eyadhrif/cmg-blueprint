import { values } from '../../data/values';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './Values.module.css';

export default function Values() {
  return (
    <section className={styles.values} id="values">
      <BlueprintFrame>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">§ &mdash; VALUES</div>
              <div className="sec-title">
                The principles that guide our work.
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {values.map((v) => (
              <div key={v.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.description}</p>
              </div>
            ))}
          </div>
          <p className={`mono ${styles.tagline}`}>
            &ldquo;Our prices are fair&hellip; we do not compromise on
            quality.&rdquo;
          </p>
        </div>
      </BlueprintFrame>
    </section>
  );
}
