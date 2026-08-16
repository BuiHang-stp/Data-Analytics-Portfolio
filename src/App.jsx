import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import DataWorkflow from './components/DataWorkflow';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      
      <Navbar />
      
      <main className="container">
        <AboutMe />
        <Education />
        <Projects />
        <DataWorkflow />
        <Certifications />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
        <p>Copyright © {new Date().getFullYear()} · Bùi Thu Hằng</p>
      </footer>
    </>
  );
}

export default App;
