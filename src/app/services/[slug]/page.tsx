import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { ServiceDetailClient } from '@/components/public/ServiceDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service non trouvé',
    };
  }

  const title = `${service.title} | Expertise & Conseil`;
  const description = service.desc;
  const url = `https://www.cabinetguellaty.com/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    provider: {
      '@type': 'AccountingService',
      name: 'Cabinet Mourad Guellaty — MG & Associés',
      url: 'https://www.cabinetguellaty.com',
      telephone: '+216 71 740 131',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '45 Avenue de la République',
        addressLocality: 'La Marsa',
        postalCode: '2078',
        addressCountry: 'TN',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tunisie',
    },
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen bg-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailClient
        service={{
          slug: service.slug,
          title: service.title,
          desc: service.desc,
          content: service.content,
        }}
      />
    </div>
  );
}
