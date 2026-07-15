import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JobActions } from '@/components/admin/JobActions';

export const dynamic = 'force-dynamic';

export default async function CareersList() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Offres d&apos;emploi</h1>
        <Link href="/admin/careers/create">
          <Button>Nouvelle offre</Button>
        </Link>
      </div>

      <div className="border border-card-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Lieu</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-text-muted py-12">
                  Aucune offre pour le moment.
                </TableCell>
              </TableRow>
            ) : (
              jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium text-text-primary">{job.title}</TableCell>
                  <TableCell className="text-text-muted">{job.type}</TableCell>
                  <TableCell className="text-text-muted">{job.location}</TableCell>
                  <TableCell>
                    <Badge variant={job.published ? 'success' : 'muted'}>
                      {job.published ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-text-muted">
                    {new Date(job.createdAt).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <JobActions job={{ id: job.id, published: job.published, title: job.title }} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
