import { motion } from 'framer-motion';

const stats = [
  { number: '15+', label: "Années d'expérience" },
  { number: '200+', label: 'Clients accompagnés' },
  { number: '40+', label: 'Experts à votre service' },
  { number: '100%', label: 'Engagement qualité' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function StatsBar() {
  return (
    <section className="bg-[#151515] border-t border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-[rgba(255,255,255,0.06)]">
          {stats.map((stat, i) => (
            <motion.div key={i} className="text-center lg:px-10" {...fadeUp}>
              <span className="font-['Playfair_Display',serif] text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight leading-none">
                {stat.number}
              </span>
              <p className="text-[#9C9C9C] text-sm mt-3 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
