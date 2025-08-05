import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import PricingSection from './components/PricingSection';
import ResultsSection from './components/ResultsSection';
import ServisesSection from './components/ServisesSection';
import './index.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServisesSection />
        <ResultsSection/>
        <PricingSection/>
        <ImageSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
