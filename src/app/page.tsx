import { prisma } from '@/lib/prisma';
import Header from '@/components/public/Header';
import Hero from '@/components/public/Hero';
import StatsBar from '@/components/public/StatsBar';
import MerciMourad from '@/components/public/MerciMourad';
import About from '@/components/public/About';
import Societies from '@/components/public/Societies';
import Services from '@/components/public/Services';
import Secteurs from '@/components/public/Secteurs';
import Team from '@/components/public/Team';
import Articles from '@/components/public/Articles';
import Careers from '@/components/public/Careers';
import Contact from '@/components/public/Contact';
import NewsletterSection from '@/components/public/NewsletterSection';
import CTABanner from '@/components/public/CTABanner';
import Footer from '@/components/public/Footer';

export const revalidate = 60;

export default async function Home() {
  const [articles, jobs] = await Promise.all([
    prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: 8,
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        subtitle: true,
        subtitleEn: true,
        coverImage: true,
      },
    }).catch(() => []),
    prisma.job.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        titleEn: true,
        type: true,
        typeEn: true,
        location: true,
        locationEn: true,
      },
    }).catch(() => []),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <MerciMourad />
        <About />
        <Services />
        <Secteurs />
        <Societies />
        <Team />
        <Articles articles={articles} />
        <Careers jobs={jobs} />
        <Contact />
        <NewsletterSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
