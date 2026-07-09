import { MouseEvent } from 'react';
import { personalInfo } from '../data';
import { Mail, MessageSquare, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-900">
          
          {/* Logo Brand area */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/50">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-sans font-bold text-base text-white tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[9px] text-gray-500 block">
                WordPress Specialist
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Icon list */}
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${personalInfo.phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-green-400 hover:border-green-500/20 transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/20 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

        </div>

        {/* Copy area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-xs text-gray-500 font-mono">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </span>
          <span className="text-xs text-gray-600 font-mono flex items-center gap-1">
            <Globe size={11} />
            Built with speed, responsive designs, & high fidelity animations.
          </span>
        </div>

      </div>
    </footer>
  );
}
