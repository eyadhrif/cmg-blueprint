import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EditorialStatement from './components/EditorialStatement/EditorialStatement';
import StatsBar from './components/StatsBar/StatsBar';
import About from './components/About/About';
import Societies from './components/Societies/Societies';
import Services from './components/Services/Services';
import Secteurs from './components/Secteurs/Secteurs';
import Team from './components/Team/Team';
import NousRejoindre from './components/NousRejoindre/NousRejoindre';
import Contact from './components/Contact/Contact';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';

export default function App() {
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
