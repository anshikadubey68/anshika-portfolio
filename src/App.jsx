import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Global3DCanvas from './components/Global3DCanvas';
import { ScrollProgressHUD } from './components/ScrollReveal';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#e2e8f0] selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Ambient Lighting Mesh Glow */}
      <Global3DCanvas />
      <div className="fixed inset-0 glow-mesh pointer-events-none z-0" />

      {/* Live depth indicator for the scroll-led experience */}
      <ScrollProgressHUD />

      {/* Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Preloader (< 2s) */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Content Layout */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          loadingComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

