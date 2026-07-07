import { stats } from '../../data/overview';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './Overview.module.css';

export default function Overview() {
  return (
    <section className={styles.overview} id="overview">
      <BlueprintFrame>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">§ 01 — OVERVIEW</div>
              <div className="sec-title">
                More than 40 years of audit and advisory work.
              </div>
            </div>
          </div>
          <div className={styles.overviewGrid}>
            <div className={styles.statCol}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={`${styles.num} mono`}>{stat.value}</div>
                  <div className={styles.lbl}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div>
              <p>
                In Audit &amp; Advisory, MG &amp; Associés brings its full
                expertise to clients of all sizes, across every industry — from
                major international companies to SMEs and family groups. Our
                professionals work alongside industrial, commercial and
                financial-services clients on the problems that matter most to
                them.
              </p>
              <p>
                With a rich heritage of know-how, the firm adopts an Anglo-Saxon
                approach in its interventions. Every economic entity is treated
                as a unique case: our methodology is reasonably adapted each
                time to reflect the specific features of that case, rather than
                applied as a fixed formula.
              </p>
              <p>
                Our team is composed of 70% Expert Accountants or professionals
                on track to become one, and more than 60% of our staff bring
                significant prior experience — ensuring rigorous delivery on
                every engagement.
              </p>
            </div>
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
