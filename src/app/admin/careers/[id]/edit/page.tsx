import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { EditJobForm } from '@/components/admin/EditJobForm';

export const dynamic = 'force-dynamic';

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) notFound();

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-text-primary mb-8">Modifier l&apos;offre</h1>
      <EditJobForm job={job} />
    </div>
  );
}
