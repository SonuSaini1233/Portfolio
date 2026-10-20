import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-[#F4F4F4] selection:bg-[#DEB084]/30 selection:text-white font-sans antialiased">
      {/* 5-Second Cinematic Loading Experience */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} duration={5000} />
        )}
      </AnimatePresence>

      {/* Scroll-driven progress indicator (CSS scroll-timeline with progressive enhancement) */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main landmark for accessibility */}
      <main id="main-content" tabIndex="-1" className="focus:outline-none">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Journey (Education, Participation, LeetCode) */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
