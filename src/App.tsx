import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Background from './components/Background';

// import { ThemeProvider } from './contexts/ThemeContext';




function App() {
  return (
    <>
      <Navbar />
      <main>
        <Background />
        <Hero />
        <Services />
{/*         <About /> */}
        <Portfolio />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
