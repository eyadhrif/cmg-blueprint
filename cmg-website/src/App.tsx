import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StatsBar from './components/StatsBar/StatsBar';
import About from './components/About/About';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Team />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
