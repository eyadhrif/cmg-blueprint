import { prisma } from '@/lib/prisma';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MessageDetail } from '@/components/admin/MessageDetail';
import { Mail, MailOpen, Inbox } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;
  const readCount = messages.length - unreadCount;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Messages Contact</h1>
          <p className="text-text-muted text-sm mt-1">
            Demandes de contact, questions et prises de rendez-vous reçues depuis le formulaire du site.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm bg-card border border-card-border px-4 py-2 rounded-lg">
          <Inbox size={16} className="text-accent" />
          <span className="text-text-muted">Total :</span>
          <span className="font-bold text-text-primary">{messages.length}</span>
        </div>
        <div className="flex items-center gap-2 text-sm bg-card border border-card-border px-4 py-2 rounded-lg">
          <Mail size={16} className="text-amber-500" />
          <span className="text-text-muted">Non lus :</span>
          <span className="font-bold text-amber-400">{unreadCount}</span>
        </div>
        <div className="flex items-center gap-2 text-sm bg-card border border-card-border px-4 py-2 rounded-lg">
          <MailOpen size={16} className="text-emerald-500" />
          <span className="text-text-muted">Traités :</span>
          <span className="font-bold text-emerald-400">{readCount}</span>
        </div>
      </div>

      <div className="border border-card-border rounded-xl overflow-hidden bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-card-border hover:bg-transparent">
              <TableHead className="text-text-muted font-semibold">Nom & Expéditeur</TableHead>
              <TableHead className="text-text-muted font-semibold">Email & Contact</TableHead>
              <TableHead className="text-text-muted font-semibold">Sujet</TableHead>
              <TableHead className="text-text-muted font-semibold">Date de réception</TableHead>
              <TableHead className="text-text-muted font-semibold">Statut</TableHead>
              <TableHead className="text-right text-text-muted font-semibold">Détails</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-text-muted py-16">
                  <div className="flex flex-col items-center gap-2">
                    <Mail size={32} className="text-text-muted/40" />
                    <span>Aucun message reçu pour le moment.</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              messages.map((msg) => (
                <TableRow
                  key={msg.id}
                  className={`border-card-border hover:bg-card-border/30 transition-colors ${
                    !msg.isRead ? 'bg-accent/5' : ''
                  }`}
                >
                  <TableCell className="font-medium text-text-primary">
                    <div className="flex items-center gap-2">
                      {!msg.isRead && (
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" title="Non lu" />
                      )}
                      <span>{msg.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-text-muted">
                    <div>
                      <span>{msg.email}</span>
                      {msg.phone && (
                        <span className="block text-xs text-text-muted/70 mt-0.5">{msg.phone}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-text-muted font-medium max-w-[200px] truncate">
                    {msg.subject || 'Sans objet'}
                  </TableCell>
                  <TableCell className="text-text-muted text-xs whitespace-nowrap">
                    {new Date(msg.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge variant={msg.isRead ? 'muted' : 'warning'}>
                      {msg.isRead ? 'Lu' : 'Non lu'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
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
