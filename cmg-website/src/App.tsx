import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Values from './components/Values/Values';
import Approach from './components/Approach/Approach';
import ClientSectors from './components/ClientSectors/ClientSectors';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TickMarks from './components/BlueprintFrame/TickMarks';

export default function App() {
  return (
    <>
      <TickMarks />
      <Nav />
      <Hero />
      <Overview />
      <Services />
      <WhyChooseUs />
      <Values />
      <Approach />
      <ClientSectors />
      <Contact />
      <Footer />
    </>
  );
}
