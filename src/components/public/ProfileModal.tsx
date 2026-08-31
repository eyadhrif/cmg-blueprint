'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useEffect, useRef } from 'react';

interface TeamMember {
  name: string;
  role?: string;
  photo?: string;
  pool?: string;
  description?: string;
  email?: string;
  linkedin?: string;
  phone?: string;
}

interface ProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const SCROLLBAR_STYLES = `
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #A81828; border-radius: 3px; opacity: 0.5; transition: opacity 0.2s; }
  ::-webkit-scrollbar-thumb:hover { opacity: 1; }
  ::-webkit-scrollbar-corner { background: transparent; }
`;

export function ProfileModal({ member, isOpen, onClose }: ProfileModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const style = document.createElement('style');
      style.textContent = SCROLLBAR_STYLES;
      document.head.appendChild(style);
      document.body.style.overflow = 'hidden';
      return () => {
        document.head.removeChild(style);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
          <DialogPrimitive.Portal>
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <DialogPrimitive.Overlay
                className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                onClick={onClose}
              />
              
              <motion.div
                ref={contentRef}
                className="relative w-full max-w-[900px] max-h-[90vh] rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(10,10,10,0.15)] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="profile-title"
              >
                <button
                  className="absolute right-6 top-6 z-10 rounded-full p-2 bg-white/90 backdrop-blur-sm text-text-dark/50 hover:text-text-dark hover:bg-white transition-all duration-300 shadow-soft focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  onClick={onClose}
                  aria-label="Fermer le profil"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col lg:flex-row min-h-[500px]">
                  <motion.div
                    className="relative lg:w-2/5 w-full min-h-[300px] lg:min-h-[500px] shrink-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="absolute inset-0 bg-cover bg-[position:50%_8%]" 
                         style={{ backgroundImage: member.photo ? `url(${member.photo})` : undefined }} />
                    {!member.photo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gris to-[#E5E5E5]">
                        <span className="font-serif text-8xl text-accent/30 select-none">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-black/30 lg:via-black/10 lg:to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 text-white">
                      <p className="text-accent text-[10px] tracking-[0.18em] uppercase font-semibold mb-2">
                        {member.pool || member.role || 'Équipe'}
                      </p>
                      <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                        {member.name}
                      </h2>
                    </div>
                  </motion.div>

                  <motion.div
                    className="lg:w-3/5 w-full p-8 lg:p-10 overflow-y-auto max-h-[90vh] lg:max-h-[500px] bg-white"
                    ref={scrollAreaRef}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#A81828 transparent',
                    }}
                  >
                    <div className="pr-2 lg:pr-0">
                      <div className="mb-8 lg:mb-10">
                        <h1 id="profile-title" className="font-serif text-2xl lg:text-3xl text-text-dark leading-tight mb-2">
                          {member.name}
                        </h1>
                        {(member.pool || member.role) && (
                          <p className="text-accent text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
                            {member.pool || member.role}
                          </p>
                        )}
                        <div className="w-16 h-px bg-accent" />
                      </div>

                      {member.description && (
                        <div className="prose prose-text-dark max-w-none mb-10">
                          <p className="text-text-dark/80 leading-relaxed text-base lg:text-lg mb-6">
                            {member.description.split('\n\n')[0]}
                          </p>
                          {member.description.split('\n\n').slice(1).map((paragraph, i) => (
                            <p key={i} className="text-text-dark/70 leading-relaxed text-base lg:text-lg mb-6">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {(member.email || member.linkedin || member.phone) && (
                        <div className="pt-6 border-t border-black/10">
                          <h3 className="font-serif text-lg text-text-dark mb-4">Contact</h3>
                          <div className="flex flex-wrap items-center gap-4">
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="flex items-center gap-2 text-text-dark/70 hover:text-accent transition-colors duration-300"
                              >
                                <Mail className="w-4 h-4 text-accent/70" />
                                <span className="text-sm">{member.email}</span>
                              </a>
                            )}
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-text-dark/70 hover:text-accent transition-colors duration-300"
                              >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                <span className="text-sm">LinkedIn</span>
                              </a>
                            )}
                            {member.phone && (
                              <a
                                href={`tel:${member.phone}`}
                                className="flex items-center gap-2 text-text-dark/70 hover:text-accent transition-colors duration-300"
                              >
                                <Phone className="w-4 h-4 text-accent/70" />
                                <span className="text-sm">{member.phone}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </AnimatePresence>
  );
}