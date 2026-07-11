import { Users, Building2, UserCheck, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, number: '15+', label: "Années d'expérience" },
  { icon: Building2, number: '200+', label: 'Clients accompagnés' },
  { icon: UserCheck, number: '40+', label: 'Experts à votre service' },
  { icon: CheckCircle, number: '100%', label: 'Engagement qualité' },
];

export default function StatsBar() {
  return (
    <section className="bg-dark border-t border-b border-card-border relative z-20">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-card-border">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-5 lg:px-8">
                <Icon size={32} className="text-accent shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-text-primary tracking-tight leading-none">{stat.number}</span>
                  <span className="text-sm text-text-muted/90 mt-1.5">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
