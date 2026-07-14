'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email('Email invalide'),
});

export async function subscribe(email: string) {
  const parsed = subscribeSchema.parse({ email });

  const existing = await prisma.subscriber.findUnique({
    where: { email: parsed.email },
  });

  if (existing) {
    return { error: 'Cet email est déjà inscrit.' };
  }

  await prisma.subscriber.create({
    data: { email: parsed.email },
  });

  revalidatePath('/admin/subscribers');
  return { success: true };
}

export async function deleteSubscriber(id: string) {
  await prisma.subscriber.delete({ where: { id } });
  revalidatePath('/admin/subscribers');
}

export async function searchSubscribers(query: string) {
  return prisma.subscriber.findMany({
    where: {
      email: { contains: query, mode: 'insensitive' },
    },
    orderBy: { createdAt: 'desc' },
  });
}
