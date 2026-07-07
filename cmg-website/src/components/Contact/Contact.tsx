import { useState, type FormEvent } from 'react';
import BlueprintFrame from '../BlueprintFrame/BlueprintFrame';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  org: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    org: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <BlueprintFrame crosshairs={['tl', 'tr', 'bl', 'br']}>
        <div className="section-inner">
          <div className="sec-head">
            <div>
              <div className="sec-label mono">§ 04 — CONTACT</div>
              <div className="sec-title">
                Start a conversation with the firm.
              </div>
            </div>
          </div>
          <div className={styles.contactGrid}>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="org">Organization</label>
                <input
                  id="org"
                  type="text"
                  placeholder="Company or entity"
                  value={form.org}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your audit or advisory need"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Send message
              </button>
              {submitted && (
                <p className={`mono ${styles.confirmation}`}>
                  Message ready — prototype only, not yet connected.
                </p>
              )}
            </form>
            <div className={styles.contactInfo}>
              <div className={styles.row}>
                <div className={`${styles.k} mono`}>Location</div>
                <div className={styles.v}>Gabès &amp; Tunis, Tunisia</div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.k} mono`}>Industry</div>
                <div className={styles.v}>Accounting, Audit &amp; Advisory</div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.k} mono`}>Founded</div>
                <div className={styles.v}>1983</div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.k} mono`}>Managing Partner</div>
                <div className={styles.v}>
                  Walid Moussa
                  <br />
                  <span className={styles.contactDetail}>
                    walid.moussa@cabinetguellaty.com
                  </span>
                  <br />
                  <span className={styles.contactDetail}>
                    Mobile: 29 50 70 50
                  </span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.k} mono`}>Team</div>
                <div className={styles.v}>11–50 employees</div>
              </div>
              <div className="placeholder-note">
                PLACEHOLDER — insert firm&apos;s real phone, email and office
                address here before publishing. Contact form above is not yet
                wired to a mail service.
              </div>
            </div>
          </div>
        </div>
      </BlueprintFrame>
    </section>
  );
}
