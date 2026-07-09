import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AnimatedBackground from './components/AnimatedBackground';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for section activation

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependencies represent primitive values and are stable

  return (
    <div className="min-h-screen bg-slate-950 text-white relative font-sans selection:bg-purple-500/30 selection:text-white antialiased">
      {/* Absolute Dynamic Particle Glow Background */}
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Core Layout Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Portfolio onSelectProject={setSelectedProject} />
          <ExperienceEducation />
          <Contact />
        </main>

        {/* Sticky Footers */}
        <Footer />
      </div>

      {/* Floating Interactive Elements */}
      <WhatsAppWidget />

      {/* Detail Showcase Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
