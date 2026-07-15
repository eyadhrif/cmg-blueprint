'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const jobSchema = z.object({
  title: z.string().min(1, 'Titre requis').max(200),
  type: z.string().min(1, 'Type requis'),
  location: z.string().min(1, 'Lieu requis'),
  description: z.string().min(1, 'Description requise'),
  published: z.boolean().default(false),
});

export async function createJob(formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = jobSchema.parse({
    title: data.title,
    type: data.type,
    location: data.location,
    description: data.description,
    published: data.published === 'true',
  });

  await prisma.job.create({ data: parsed });

  revalidatePath('/admin/careers');
  revalidatePath('/');
}

export async function updateJob(id: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = jobSchema.parse({
    title: data.title,
    type: data.type,
    location: data.location,
    description: data.description,
    published: data.published === 'true',
  });

  const existing = await prisma.job.findUnique({ where: { id } });
  if (!existing) throw new Error('Job not found');

  await prisma.job.update({ where: { id }, data: parsed });

  revalidatePath('/admin/careers');
  revalidatePath('/');
}

export async function toggleJob(id: string, published: boolean) {
  await prisma.job.update({ where: { id }, data: { published } });
  revalidatePath('/admin/careers');
  revalidatePath('/');
}

export async function deleteJob(id: string) {
  await prisma.job.delete({ where: { id } });
  revalidatePath('/admin/careers');
  revalidatePath('/');
}
