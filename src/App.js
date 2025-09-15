import { useRef, useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import PricingSection from './components/PricingSection';
import ResultsSection from './components/ResultsSection';
import ServicesSection from './components/ServicesSection';
import './index.css';

function App() {
  
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const resultsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

   const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <Header refs={[aboutRef, servicesRef, resultsRef, pricingRef, contactRef]} />
      <main>
        <HeroSection modal={[showModal, openModal, closeModal]} />
        <AboutSection aboutRef={aboutRef}/>
        <ServicesSection servicesRef={servicesRef} openModal={openModal} />
        <ResultsSection resultsRef={resultsRef}/>
        <PricingSection pricingRef={pricingRef}/>
        <ImageSection />
        <ContactSection contactRef={contactRef}/>
      </main> 
      <Footer/>
    </>
  );
}

export default App;
