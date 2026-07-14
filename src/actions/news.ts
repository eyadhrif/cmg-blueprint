'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const newsSchema = z.object({
  title: z.string().min(1, 'Titre requis').max(200),
  summary: z.string().min(1, 'Résumé requis').max(500),
  content: z.string().min(1, 'Contenu requis'),
  coverImage: z.string().optional(),
  published: z.boolean().default(false),
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export async function createNews(formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = newsSchema.parse({
    title: data.title,
    summary: data.summary,
    content: data.content,
    coverImage: data.coverImage || undefined,
    published: data.published === 'true',
  });

  const slug = slugify(parsed.title);
  const existing = await prisma.news.findUnique({ where: { slug } });
  const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

  await prisma.news.create({
    data: {
      ...parsed,
      slug: finalSlug,
      publishedAt: parsed.published ? new Date() : null,
    },
  });

  revalidatePath('/admin/news');
  revalidatePath('/news');
}

export async function updateNews(id: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = newsSchema.parse({
    title: data.title,
    summary: data.summary,
    content: data.content,
    coverImage: data.coverImage || undefined,
    published: data.published === 'true',
  });

  const existing = await prisma.news.findUnique({ where: { id } });
  if (!existing) throw new Error('Article not found');

  const slug = slugify(parsed.title);
  const slugExists = await prisma.news.findFirst({
    where: { slug, NOT: { id } },
  });
  const finalSlug = slugExists ? `${slug}-${Date.now()}` : slug;

  await prisma.news.update({
    where: { id },
    data: {
      ...parsed,
      slug: finalSlug,
      publishedAt: parsed.published && !existing.published ? new Date() : existing.publishedAt,
    },
  });

  revalidatePath('/admin/news');
  revalidatePath('/news');
}

export async function toggleNews(id: string, published: boolean) {
  await prisma.news.update({
    where: { id },
    data: {
      published,
      publishedAt: published ? new Date() : null,
    },
  });
  revalidatePath('/admin/news');
  revalidatePath('/news');
}

export async function deleteNews(id: string) {
  await prisma.news.delete({ where: { id } });
  revalidatePath('/admin/news');
  revalidatePath('/news');
}
