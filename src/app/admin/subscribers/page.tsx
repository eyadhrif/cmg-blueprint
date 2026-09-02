import { prisma } from '@/lib/prisma';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SubscriberActions } from '@/components/admin/SubscriberActions';
import { Download, Users, Mail } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Abonnés Newsletter</h1>
          <p className="text-text-muted text-sm mt-1">
            Liste des personnes inscrites pour recevoir les publications et analyses de MG & Associés.
          </p>
        </div>
        <a href="/admin/subscribers/export" download>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={16} />
            Exporter en CSV ({subscribers.length})
          </Button>
        </a>
      </div>

      <div className="flex items-center gap-2 text-text-muted text-sm bg-card border border-card-border px-4 py-2.5 rounded-lg w-fit">
        <Users size={16} className="text-accent" />
        <span className="font-semibold text-text-primary">{subscribers.length}</span> abonné(s) au total
      </div>

      <div className="border border-card-border rounded-xl overflow-hidden bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-card-border hover:bg-transparent">
              <TableHead className="text-text-muted font-semibold">Email</TableHead>
              <TableHead className="text-text-muted font-semibold">Date d&apos;inscription</TableHead>
              <TableHead className="text-right text-text-muted font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-text-muted py-16">
                  <div className="flex flex-col items-center gap-2">
                    <Mail size={32} className="text-text-muted/40" />
                    <span>Aucun abonné enregistré pour le moment.</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              subscribers.map((sub) => (
                <TableRow key={sub.id} className="border-card-border hover:bg-card-border/30">
                  <TableCell className="font-medium text-text-primary">{sub.email}</TableCell>
                  <TableCell className="text-text-muted">
                    {new Date(sub.createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <SubscriberActions id={sub.id} email={sub.email} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
