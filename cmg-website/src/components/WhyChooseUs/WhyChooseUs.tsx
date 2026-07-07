import { reasons } from '../../data/whyChooseUs';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <BlueprintFrame>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">
                § &mdash; WHY CHOOSE US
              </div>
              <div className="sec-title">
                What sets MG &amp; Associ&eacute;s apart.
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {reasons.map((r) => (
              <div key={r.id} className={styles.card}>
                <div className={`${styles.num} mono`}>
                  {String(r.id).padStart(2, '0')}
                </div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
