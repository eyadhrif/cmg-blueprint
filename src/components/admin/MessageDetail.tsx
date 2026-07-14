'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { markAsRead, deleteMessage } from '@/actions/messages';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface MessageDetailProps {
  message: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
  };
}

export function MessageDetail({ message }: MessageDetailProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function handleMarkRead() {
    await markAsRead(message.id);
    router.refresh();
  }

  async function handleDelete() {
    await deleteMessage(message.id);
    setDeleteOpen(false);
    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card border-card-border">
          <DropdownMenuItem onSelect={() => setOpen(true)} className="text-text-primary cursor-pointer">
            Voir
          </DropdownMenuItem>
          {!message.isRead && (
            <DropdownMenuItem onSelect={handleMarkRead} className="text-text-primary cursor-pointer">
              Marquer comme lu
            </DropdownMenuItem>
          )}
          <DropdownMenuItem
            onSelect={() => setDeleteOpen(true)}
            className="text-red-400 cursor-pointer"
          >
            Supprimer
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{message.subject}</DialogTitle>
            <DialogDescription>
              De {message.name} &lt;{message.email}&gt;
              {message.phone && ` — ${message.phone}`}
              <br />
              {new Date(message.createdAt).toLocaleString('fr-FR')}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-text-primary text-sm leading-relaxed whitespace-pre-wrap">
            {message.message}
          </div>
          <DialogFooter>
            {!message.isRead && (
              <Button variant="outline" onClick={handleMarkRead}>
                Marquer comme lu
              </Button>
            )}
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Supprimer le message de {message.name} ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeleteOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
