import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Download, CheckCircle2, Award, Zap, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';
import SafeImage from './SafeImage';

export default function Hero() {
  const handleScrollToProjects = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = portfolioSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pre-formatted link to WhatsApp with professional Pakistan layout text
  const whatsappLink = `https://wa.me/${personalInfo.phone.replace('+', '')}?text=Hi%20Iqra,%20I%20am%20interested%20in%20hiring%20your%20services%20as%20a%20Web/WordPress%20developer.`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-6"
            >
              <Zap size={12} className="animate-pulse" />
              <span>Available for Freelance & Custom Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4"
            >
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans font-semibold text-xl sm:text-2xl text-purple-300 tracking-wide mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.tagline} {personalInfo.about}
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <MessageSquare size={18} className="transition-transform group-hover:scale-110" />
                <span>Let's Discuss on WhatsApp</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <Linkedin size={18} className="transition-transform group-hover:scale-110" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={handleScrollToProjects}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-slate-900 border border-slate-700 hover:border-purple-500 hover:bg-slate-900/50 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Explore Work</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Key Metrics Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">{personalInfo.experienceYears}</span>
                <span className="block text-xs text-gray-400 font-mono mt-1">Years Experience</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">{personalInfo.completedProjects}</span>
                <span className="block text-xs text-gray-400 font-mono mt-1">Websites Delivered</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">{personalInfo.clientSatisfaction}</span>
                <span className="block text-xs text-gray-400 font-mono mt-1">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right: Profile Image Frame with orbit elements */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Spinning outer abstract elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 p-2"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-indigo-500/20 p-4"
              />

              {/* Colorful light accents on borders */}
              <div className="absolute inset-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-[40px] opacity-35" />

              {/* Floating Skill Badges Orbiting */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-mono text-[10px] font-semibold text-white">Elementor Pro</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -right-4 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-mono text-[10px] font-semibold text-white">WooCommerce</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-10 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="font-mono text-[10px] font-semibold text-white">WordPress CMS</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-12 -left-8 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/60 shadow-lg flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-mono text-[10px] font-semibold text-white">Tailwind CSS</span>
              </motion.div>

              {/* Actual Avatar Frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(168,85,247,0.2)] bg-slate-900 group"
              >
                <SafeImage
                  src={personalInfo.avatarUrl}
                  fallbackSrc={personalInfo.fallbackAvatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle sheen layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/0 to-indigo-500/10" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border-2 border-slate-700 flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}
