'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { updateNews } from '@/actions/news';

interface EditNewsFormProps {
  article: {
    id: string;
    title: string;
    summary: string;
    content: string;
    coverImage: string | null;
    published: boolean;
  };
}

export function EditNewsForm({ article }: EditNewsFormProps) {
  const router = useRouter();
  const [content, setContent] = useState(article.content);
  const [coverImage, setCoverImage] = useState(article.coverImage || '');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set('content', content);

    try {
      await updateNews(article.id, formData);
      router.push('/admin/news');
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Titre</Label>
        <Input id="title" name="title" defaultValue={article.title} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Résumé</Label>
        <Textarea id="summary" name="summary" defaultValue={article.summary} required />
      </div>
        <div className="space-y-2">
          <Label>Image de couverture</Label>
          <ImageUpload value={coverImage} onChange={setCoverImage} />
        </div>
      <div className="space-y-2">
        <Label>Contenu</Label>
        <RichTextEditor content={content} onChange={setContent} />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-text-muted">
          <input type="checkbox" name="published" value="true" defaultChecked={article.published} />
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
