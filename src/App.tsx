import React from 'react';
import { BackgroundGrid } from './components/UI/BackgroundGrid';
import { CustomCursor } from './components/UI/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { WhatIBuild } from './components/WhatIBuild/WhatIBuild';
import { Skills } from './components/Skills/Skills';
import { ImpactNumbers } from './components/Impact/ImpactNumbers';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Leadership } from './components/Leadership/Leadership';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Clean Organic Nature Background */}
      <BackgroundGrid />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <ImpactNumbers />
        <Projects />
        <Experience />
        <Leadership />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
