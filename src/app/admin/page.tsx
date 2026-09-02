import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Newspaper,
  Briefcase,
  Users,
  Mail,
  Plus,
  ArrowUpRight,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { MessageDetail } from '@/components/admin/MessageDetail';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const [
    totalArticles,
    publishedArticles,
    totalNews,
    publishedNews,
    totalJobs,
    activeJobs,
    totalSubscribers,
    totalMessages,
    unreadMessages,
    recentArticles,
    recentMessages,
    recentSubscribers,
  ] = await Promise.all([
    prisma.article.count(),
    prisma.article.count({ where: { published: true } }),
    prisma.news.count(),
    prisma.news.count({ where: { published: true } }),
    prisma.job.count(),
    prisma.job.count({ where: { published: true } }),
    prisma.subscriber.count(),
    prisma.message.count(),
    prisma.message.count({ where: { isRead: false } }),
    prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ]);

  const stats = [
    {
      label: 'Publications (PDF)',
      value: totalArticles,
      subValue: `${publishedArticles} en ligne`,
      icon: FileText,
      href: '/admin/articles',
      accentColor: 'text-accent',
    },
    {
      label: 'Actualités',
      value: totalNews,
      subValue: `${publishedNews} publiées`,
      icon: Newspaper,
      href: '/admin/news',
      accentColor: 'text-amber-500',
    },
    {
      label: 'Offres d’emploi',
      value: totalJobs,
      subValue: `${activeJobs} ouvertes`,
      icon: Briefcase,
      href: '/admin/careers',
      accentColor: 'text-blue-500',
    },
    {
      label: 'Abonnés Newsletter',
      value: totalSubscribers,
      subValue: 'Total inscrits',
      icon: Users,
      href: '/admin/subscribers',
      accentColor: 'text-emerald-500',
    },
    {
      label: 'Messages Contact',
      value: totalMessages,
      subValue: `${unreadMessages} non lu(s)`,
      icon: Mail,
      href: '/admin/messages',
      badge: unreadMessages > 0 ? `${unreadMessages} nouveau(x)` : undefined,
      accentColor: 'text-accent',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome and Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">Tableau de bord</h1>
          <p className="text-text-muted text-sm mt-1">
            Gérez l’ensemble des contenus, recrutements et interactions de MG & Associés.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/articles/create">
            <Button className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2 shadow-sm">
              <Plus size={16} />
              Nouvelle publication
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div className="bg-card border border-card-border p-4 rounded-xl flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
          Actions rapides :
        </span>
        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="/admin/articles/create">
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 h-8">
              <Plus size={14} /> Publication PDF
            </Button>
          </Link>
          <Link href="/admin/news/create">
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 h-8">
              <Plus size={14} /> Actualité
            </Button>
          </Link>
          <Link href="/admin/careers/create">
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 h-8">
              <Plus size={14} /> Offre d’emploi
            </Button>
          </Link>
          <a href="/admin/subscribers/export" download>
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 h-8">
              <Download size={14} /> Exporter abonnés
            </Button>
          </a>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {stats.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.label} href={card.href} className="group">
              <Card className="h-full hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {card.label}
                  </CardTitle>
                  <div className="w-8 h-8 rounded-lg bg-card-border/60 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon size={16} className={card.accentColor} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <p className="text-2xl sm:text-3xl font-bold text-text-primary">{card.value}</p>
                    {card.badge && (
                      <span className="text-[10px] font-semibold bg-accent/20 text-accent border border-accent/30 px-1.5 py-0.5 rounded-full">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-muted mt-1.5 flex items-center gap-1">
                    <span>{card.subValue}</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Two-Column Section: Recent Publications & Recent Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Publications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b border-card-border pb-4">
            <div>
              <CardTitle className="text-base font-bold text-text-primary">Dernières publications PDF</CardTitle>
              <CardDescription>Les publications récemment ajoutées au catalogue</CardDescription>
            </div>
            <Link href="/admin/articles">
              <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 text-accent hover:text-accent">
                Voir tout <ArrowUpRight size={14} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="pt-4">
            {recentArticles.length === 0 ? (
              <p className="text-text-muted text-sm py-8 text-center">Aucune publication pour le moment.</p>
            ) : (
              <div className="divide-y divide-card-border">
                {recentArticles.map((article) => (
                  <div key={article.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded bg-card-border shrink-0 overflow-hidden flex items-center justify-center">
                        {article.coverImage ? (
                          <img src={article.coverImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <FileText size={16} className="text-text-muted" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">{article.title}</p>
                        <p className="text-xs text-text-muted flex items-center gap-1.5 mt-0.5">
                          <Calendar size={12} />
                          {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant={article.published ? 'success' : 'muted'}>
                        {article.published ? 'Publié' : 'Brouillon'}
                      </Badge>
                      <Link href={`/admin/articles/${article.id}/edit`}>
                        <Button variant="ghost" size="sm" className="h-7 text-xs px-2 text-text-muted hover:text-text-primary">
                          Éditer
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b border-card-border pb-4">
            <div>
              <CardTitle className="text-base font-bold text-text-primary">Derniers messages reçus</CardTitle>
              <CardDescription>Demandes de contact envoyées depuis le site</CardDescription>
            </div>
            <Link href="/admin/messages">
              <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 text-accent hover:text-accent">
                Voir tout <ArrowUpRight size={14} />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="pt-4">
            {recentMessages.length === 0 ? (
              <p className="text-text-muted text-sm py-8 text-center">Aucun message reçu.</p>
            ) : (
              <div className="divide-y divide-card-border">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-text-primary truncate">{msg.name}</p>
                        {!msg.isRead && (
                          <span className="w-2 h-2 rounded-full bg-accent shrink-0" title="Non lu" />
                        )}
                      </div>
                      <p className="text-xs text-text-muted truncate mt-0.5">{msg.subject || msg.email}</p>
                      <p className="text-[11px] text-text-muted/70 mt-0.5">
                        {new Date(msg.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant={msg.isRead ? 'muted' : 'warning'}>
                        {msg.isRead ? 'Lu' : 'Nouveau'}
                      </Badge>
                      <MessageDetail message={msg} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Subscribers List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-card-border pb-4">
          <div>
            <CardTitle className="text-base font-bold text-text-primary">Derniers abonnés à la newsletter</CardTitle>
            <CardDescription>Utilisateurs inscrits aux actualités et publications</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <a href="/admin/subscribers/export" download>
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5 h-8">
                <Download size={14} /> Exporter CSV
              </Button>
            </a>
            <Link href="/admin/subscribers">
              <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 text-accent hover:text-accent">
                Voir tout <ArrowUpRight size={14} />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          {recentSubscribers.length === 0 ? (
            <p className="text-text-muted text-sm py-6 text-center">Aucun abonné enregistré.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {recentSubscribers.map((sub) => (
                <div key={sub.id} className="p-3 bg-card-border/30 rounded-lg border border-card-border/50">
                  <p className="text-xs font-medium text-text-primary truncate">{sub.email}</p>
                  <p className="text-[11px] text-text-muted mt-1">
                    {new Date(sub.createdAt).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
