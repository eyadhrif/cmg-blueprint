import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { EditNewsForm } from '@/components/admin/EditNewsForm';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditNews({ params }: Props) {
  const { id } = await params;
  const article = await prisma.news.findUnique({ where: { id } });

  if (!article) notFound();

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-text-primary mb-8">Modifier l&apos;article</h1>
      <EditNewsForm article={article} />
    </div>
  );
}
