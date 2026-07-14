import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, CheckCircle, Users, Mail } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const [totalNews, publishedNews, totalSubscribers, unreadMessages] = await Promise.all([
    prisma.news.count(),
    prisma.news.count({ where: { published: true } }),
    prisma.subscriber.count(),
    prisma.message.count({ where: { isRead: false } }),
  ]);

  const cards = [
    { label: 'Articles', value: totalNews, icon: Newspaper },
    { label: 'Publiés', value: publishedNews, icon: CheckCircle },
    { label: 'Abonnés', value: totalSubscribers, icon: Users },
    { label: 'Messages non lus', value: unreadMessages, icon: Mail },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-text-muted">{card.label}</CardTitle>
                <Icon size={18} className="text-accent" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-text-primary">{card.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
