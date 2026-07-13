import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, FileText } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F5F3] py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          <motion.div className="lg:col-span-5" {...fadeUp}>
            <span className="text-[#C8352E] text-xs font-semibold tracking-[0.18em] uppercase">
              Contact
            </span>
            <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#1A1A1A] mt-6 tracking-tight">
              Discutons de votre projet
            </h2>
            <p className="text-[#6B6B6B] text-base sm:text-lg mt-6 leading-relaxed max-w-md">
              Que ce soit pour un audit, un conseil fiscal ou un accompagnement stratégique, notre équipe
              est à votre écoute.
            </p>

            <div className="space-y-5 mt-12">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#C8352E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-1">Adresse</span>
                  <span className="text-[#1A1A1A] text-sm">45 Avenue de la République, 2078 Marsa Safsaf, Tunis</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#C8352E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-1">Téléphone</span>
                  <a href="tel:+21671740131" className="text-[#1A1A1A] text-sm hover:text-[#C8352E] transition-colors">+216 71 740 131</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-[#C8352E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-1">Email</span>
                  <a href="mailto:contact@cabinetguellaty.com" className="text-[#1A1A1A] text-sm hover:text-[#C8352E] transition-colors">contact@cabinetguellaty.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-[#C8352E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-1">Horaires</span>
                  <span className="text-[#1A1A1A] text-sm">Lun – Ven : 08h30 – 17h30</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText size={18} className="text-[#C8352E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-1">Fax</span>
                  <span className="text-[#1A1A1A] text-sm">+216 71 740 197</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" {...fadeUp}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom"
                  className="w-full bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1A1A] text-sm px-5 py-4 placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8352E] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    className="w-full bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1A1A] text-sm px-5 py-4 placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8352E] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+216 XX XXX XXX"
                    className="w-full bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1A1A] text-sm px-5 py-4 placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8352E] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">Sujet</label>
                <select
                  id="subject"
                  className="w-full bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1A1A] text-sm px-5 py-4 focus:outline-none focus:border-[#C8352E] transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="audit">Audit & Commissariat</option>
                  <option value="fiscal">Conseil fiscal</option>
                  <option value="comptable">Expertise comptable</option>
                  <option value="juridique">Conseil juridique</option>
                  <option value="gestion">Conseil en gestion</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-white border border-[rgba(0,0,0,0.1)] text-[#1A1A1A] text-sm px-5 py-4 placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#C8352E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8352E] text-white px-8 py-5 text-sm font-semibold tracking-wider uppercase hover:bg-[#C8352E]/90 transition-all duration-300 group"
              >
                Envoyer votre message{' '}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
