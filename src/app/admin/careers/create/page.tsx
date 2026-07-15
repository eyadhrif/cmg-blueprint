'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { createJob } from '@/actions/jobs';

export default function CreateJob() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await createJob(new FormData(e.currentTarget));
      router.push('/admin/careers');
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-text-primary mb-8">Nouvelle offre d&apos;emploi</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Titre du poste</Label>
          <Input id="title" name="title" placeholder="Expert-comptable" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type de contrat</Label>
            <Input id="type" name="type" placeholder="CDI, CDD, Stage..." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Lieu</Label>
            <Input id="location" name="location" placeholder="La Marsa, Tunis" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" placeholder="Description du poste et des missions..." required rows={5} />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-text-muted">
            <input type="checkbox" name="published" value="true" />
            Publier immédiatement
          </label>
        </div>
        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Création...' : 'Créer l\'offre'}
          </Button>
          <Button type="button" variant="ghost" onClick={() => router.back()}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
}
