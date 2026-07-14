import { prisma } from '@/lib/prisma';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MessageDetail } from '@/components/admin/MessageDetail';

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-8">Messages</h1>
      <p className="text-text-muted text-sm mb-6">
        {messages.filter((m) => !m.isRead).length} message(s) non lu(s)
      </p>

      <div className="border border-card-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Sujet</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-text-muted py-12">
                  Aucun message.
                </TableCell>
              </TableRow>
            ) : (
              messages.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell className="font-medium text-text-primary">{msg.name}</TableCell>
                  <TableCell className="text-text-muted">{msg.email}</TableCell>
                  <TableCell className="text-text-muted">{msg.subject}</TableCell>
                  <TableCell className="text-text-muted">
                    {new Date(msg.createdAt).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <Badge variant={msg.isRead ? 'muted' : 'warning'}>
                      {msg.isRead ? 'Lu' : 'Non lu'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <MessageDetail message={msg} />
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
