'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { createNews } from '@/actions/news';

export default function CreateNews() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set('content', content);

    try {
      await createNews(formData);
      router.push('/admin/news');
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-text-primary mb-8">Nouvel article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Titre</Label>
          <Input id="title" name="title" placeholder="Titre de l'article" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Résumé <span className="text-text-muted text-xs">(optionnel)</span></Label>
          <Textarea id="summary" name="summary" placeholder="Brève description..." />
        </div>
        <div className="space-y-2">
          <Label>Image de couverture</Label>
          <ImageUpload value={coverImage} onChange={setCoverImage} />
        </div>
        <div className="space-y-2">
          <Label>Contenu</Label>
          <RichTextEditor content="" onChange={setContent} />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-text-muted">
            <input type="checkbox" name="published" value="true" />
            Publier immédiatement
          </label>
        </div>
        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Création...' : 'Créer l\'article'}
          </Button>
          <Button type="button" variant="ghost" onClick={() => router.back()}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
}
