'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ExternalLink, Copy, Check, Briefcase } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useLanguage } from '@/lib/i18n';

interface ApplyModalProps {
  jobTitle: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const RECIPIENT_EMAIL = 'contact@cabinetguellaty.com';

export function ApplyModal({ jobTitle, isOpen, onClose }: ApplyModalProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.stop();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        lenis?.start();
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const displayJobTitle = jobTitle || t('careers.spontaneousTitle', 'Candidature spontanée');
  const subject = `${t('careers.mailSubject', 'Candidature')} - ${displayJobTitle}`;
  const body = t('careers.modalSubtitle', 'Transmettez votre CV et lettre de motivation directement à notre équipe.');

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT_EMAIL)}&su=${encodeURIComponent(subject)}`;
  const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RECIPIENT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore clipboard error
    }
  };

  const handleDefaultMailClick = () => {
    window.location.href = mailtoUrl;
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content asChild>
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative w-full max-w-lg bg-ivoire border border-black/10 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
                >
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    aria-label={t('careers.close', 'Fermer')}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/5 hover:bg-accent hover:text-white flex items-center justify-center text-text-dark transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-accent text-[11px] font-semibold tracking-[0.18em] uppercase">
                      {t('careers.kicker', 'Carrières')}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-text-dark tracking-tight pr-8">
                    {displayJobTitle}
                  </h3>

                  <p className="text-text-dark-muted text-sm mt-2 leading-relaxed">
                    {t('careers.modalSubtitle', 'Transmettez votre CV et lettre de motivation directement à notre équipe.')}
                  </p>

                  {/* Meta box */}
                  <div className="mt-6 bg-white/70 border border-black/[0.06] rounded-xl p-4 space-y-2.5 text-xs text-text-dark-muted">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-text-dark">{t('careers.destEmail', 'Destinataire')} :</span>
                      <span className="font-mono text-text-dark font-medium text-[11px] sm:text-xs">{RECIPIENT_EMAIL}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 border-t border-black/5 pt-2.5">
                      <span className="font-medium text-text-dark">{t('careers.subjectLabel', 'Objet')} :</span>
                      <span className="text-right text-text-dark font-medium line-clamp-1">{subject}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-6 space-y-3">
                    {/* Primary: Gmail fallback */}
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-5 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent/90 shadow-soft hover:shadow-soft-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span>{t('careers.openGmail', 'Ouvrir avec Gmail')}</span>
                      </div>
                      <span className="text-xs bg-white/20 px-2.5 py-1 rounded text-white group-hover:bg-white group-hover:text-accent font-semibold transition-colors">
                        Webmail
                      </span>
                    </a>

                    {/* Secondary: Default mail client */}
                    <button
                      type="button"
                      onClick={handleDefaultMailClick}
                      className="w-full flex items-center justify-between px-5 py-3.5 bg-white border border-black/10 text-text-dark rounded-xl font-medium text-sm hover:border-accent hover:text-accent hover:bg-white/90 shadow-soft transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-text-dark-muted group-hover:text-accent transition-colors" />
                        <span>{t('careers.openDefaultMail', 'Application par défaut (Outlook, Apple Mail...)')}</span>
                      </div>
                    </button>

                    {/* Tertiary: Copy address */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-transparent hover:bg-black/5 text-text-dark-muted hover:text-text-dark rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors duration-200"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">{t('careers.copied', 'Adresse copiée !')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{t('careers.copyEmail', "Copier l'adresse email")}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
