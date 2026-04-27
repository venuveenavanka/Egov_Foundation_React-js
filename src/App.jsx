import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Impact from './sections/Impact';
import Approaches from './sections/Approaches';
import Sustaining from './sections/Sustaining';
import LatestNews from './components/LatestNews';
import DIGIT from './sections/DIGIT';
import Supporters from './sections/Supporters';
import BackToTop from './components/BackToTop';

import './assets/css/style.css';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll Reveal Observer
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Impact />
        <Approaches />
        <Sustaining />
        <DIGIT />
        <LatestNews />
        <Supporters />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
