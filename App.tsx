import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophySection from './components/AboutSection';
import ModelsSection from './components/FeaturedListings';
import SpecsSection from './components/SpecsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-textMain font-sans">
      <Navbar />
      <main className="w-full">
        <Hero />
        <PhilosophySection />
        <ModelsSection />
        <SpecsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;