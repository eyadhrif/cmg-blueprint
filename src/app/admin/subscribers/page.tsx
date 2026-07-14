import { prisma } from '@/lib/prisma';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SubscriberActions } from '@/components/admin/SubscriberActions';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Abonnés</h1>
        <Button
          variant="outline"
          onClick={async () => {
            'use server';
            const csv = subscribers
              .map((s) => `${s.email},${s.createdAt.toISOString()}`)
              .join('\n');
            return new Response(csv, {
              headers: { 'Content-Type': 'text/csv' },
            });
          }}
        >
          Export CSV
        </Button>
      </div>

      <p className="text-text-muted text-sm mb-6">{subscribers.length} abonné(s)</p>

      <div className="border border-card-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Date d&apos;inscription</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-text-muted py-12">
                  Aucun abonné.
                </TableCell>
              </TableRow>
            ) : (
              subscribers.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium text-text-primary">{sub.email}</TableCell>
                  <TableCell className="text-text-muted">
                    {new Date(sub.createdAt).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
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
