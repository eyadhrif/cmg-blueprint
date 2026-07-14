import Header from '@/components/public/Header';
import Hero from '@/components/public/Hero';
import EditorialStatement from '@/components/public/EditorialStatement';
import StatsBar from '@/components/public/StatsBar';
import About from '@/components/public/About';
import Societies from '@/components/public/Societies';
import Services from '@/components/public/Services';
import Secteurs from '@/components/public/Secteurs';
import Team from '@/components/public/Team';
import NousRejoindre from '@/components/public/NousRejoindre';
import Contact from '@/components/public/Contact';
import CTABanner from '@/components/public/CTABanner';
import Footer from '@/components/public/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EditorialStatement />
        <StatsBar />
        <About />
        <Societies />
        <Services />
        <Secteurs />
        <Team />
        <NousRejoindre />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
