'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toggleJob, deleteJob } from '@/actions/jobs';
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

interface JobActionsProps {
  job: {
    id: string;
    published: boolean;
    title: string;
  };
}

export function JobActions({ job }: JobActionsProps) {
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);

  async function handleToggle() {
    await toggleJob(job.id, !job.published);
    router.refresh();
  }

  async function handleDelete() {
    await deleteJob(job.id);
    setDeleteOpen(false);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">
      <Link href={`/admin/careers/${job.id}/edit`}>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </Link>
      <Button variant="ghost" size="sm" onClick={handleToggle}>
        {job.published ? 'Unpublish' : 'Publish'}
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
              Êtes-vous sûr de vouloir supprimer &ldquo;{job.title}&rdquo; ? Cette action est irréversible.
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
