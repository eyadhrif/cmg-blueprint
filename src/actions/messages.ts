'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const messageSchema = z.object({
  name: z.string().min(1, 'Nom requis').max(100),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Sujet requis').max(200),
  message: z.string().min(1, 'Message requis').max(2000),
});

export async function sendMessage(formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = messageSchema.parse({
    name: data.name,
    email: data.email,
    phone: data.phone || undefined,
    subject: data.subject,
    message: data.message,
  });

  await prisma.message.create({ data: parsed });
  return { success: true };
}

export async function markAsRead(id: string) {
  await prisma.message.update({
    where: { id },
    data: { isRead: true },
  });
  revalidatePath('/admin/messages');
}

export async function deleteMessage(id: string) {
  await prisma.message.delete({ where: { id } });
  revalidatePath('/admin/messages');
}
