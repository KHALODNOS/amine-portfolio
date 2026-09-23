import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Qualification } from './components/Qualification';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CalloutBanner } from './components/CalloutBanner';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-[#1C1E26] dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <CalloutBanner />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
