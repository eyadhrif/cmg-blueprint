import { clientSectors } from '../../data/clients';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './ClientSectors.module.css';

export default function ClientSectors() {
  return (
    <section className={styles.clientSectors} id="clients">
      <BlueprintFrame>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">
                § &mdash; CLIENTS &amp; SECTORS
              </div>
              <div className="sec-title">
                Who we work with.
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {clientSectors.map((sector) => (
              <div key={sector.name} className={styles.sector}>
                <h3 className={styles.sectorName}>{sector.name}</h3>
                <ul className={styles.clientList}>
                  {sector.clients.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
