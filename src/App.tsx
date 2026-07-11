import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StatsBar from './components/StatsBar/StatsBar';
import About from './components/About/About';
import Societies from './components/Societies/Societies';
import Services from './components/Services/Services';
import Secteurs from './components/Secteurs/Secteurs';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Societies />
        <Services />
        <Secteurs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
