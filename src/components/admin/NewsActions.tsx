'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toggleNews, deleteNews } from '@/actions/news';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface NewsActionsProps {
  article: {
    id: string;
    published: boolean;
    title: string;
  };
}

export function NewsActions({ article }: NewsActionsProps) {
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function handleToggle() {
    await toggleNews(article.id, !article.published);
    router.refresh();
  }

  async function handleDelete() {
    await deleteNews(article.id);
    setDeleteOpen(false);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={`/admin/news/${article.id}/edit`}>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </Link>
      <Button variant="ghost" size="sm" onClick={handleToggle}>
        {article.published ? 'Unpublish' : 'Publish'}
      </Button>
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer &ldquo;{article.title}&rdquo; ? Cette action est irréversible.
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
    </div>
  );
}
