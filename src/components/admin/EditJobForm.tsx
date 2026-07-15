'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { updateJob } from '@/actions/jobs';

interface EditJobFormProps {
  job: {
    id: string;
    title: string;
    type: string;
    location: string;
    description: string;
    published: boolean;
  };
}

export function EditJobForm({ job }: EditJobFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await updateJob(job.id, formData);
      router.push('/admin/careers');
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Titre du poste</Label>
        <Input id="title" name="title" defaultValue={job.title} required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="type">Type de contrat</Label>
          <Input id="type" name="type" defaultValue={job.type} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Lieu</Label>
          <Input id="location" name="location" defaultValue={job.location} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={job.description} required rows={5} />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-text-muted">
          <input type="checkbox" name="published" value="true" defaultChecked={job.published} />
          Publié
        </label>
      </div>
      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          Annuler
        </Button>
      </div>
    </form>
  );
}
