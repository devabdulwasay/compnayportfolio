import React, { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Handle preloader
    const preloader = document.getElementById('preloader');
    const fadeOutPreloader = () => {
      if (preloader) {
        preloader.style.transition = 'opacity 0.3s ease-out';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          document.documentElement.classList.remove('cl-preload');
          document.documentElement.classList.add('cl-loaded');
          initScrollReveal();
        }, 300);
      } else {
        document.documentElement.classList.remove('cl-preload');
        document.documentElement.classList.add('cl-loaded');
        initScrollReveal();
      }
    };

    document.documentElement.classList.add('cl-preload');

    if (document.readyState === 'complete') {
      fadeOutPreloader();
    } else {
      window.addEventListener('load', fadeOutPreloader);
      return () => window.removeEventListener('load', fadeOutPreloader);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Stats />
      <Experience />
      <Services />
      <Expertise />
      <Process />
      <Works />
      {/* <Clients /> */}
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

function initScrollReveal() {
  // Select all elements that have data-aos attribute
  const elements = document.querySelectorAll('[data-aos]');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    el.classList.add('aos-init');
    observer.observe(el);
  });
}

export default App;
