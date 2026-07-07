import { services } from '../../data/services';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services">
      <BlueprintFrame>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">§ 02 — SERVICES</div>
              <div className="sec-title">What the firm offers.</div>
            </div>
          </div>
          <div className={styles.serviceList}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceRow}>
                <div className={styles.idx}>
                  {String(service.id).padStart(2, '0')}
                </div>
                <h3>{service.title}</h3>
                <div>
                  <p>{service.description}</p>
                  {service.details && (
                    <ul className={styles.details}>
                      {service.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
