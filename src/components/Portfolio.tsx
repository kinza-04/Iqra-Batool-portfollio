import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Eye, ArrowUpRight, Tag } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data';
import SafeImage from './SafeImage';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All' | 'WordPress' | 'E-Commerce' | 'Front-End' | 'SEO & Performance';

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = ['All', 'WordPress', 'E-Commerce', 'Front-End', 'SEO & Performance'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-950/30">
      
      {/* Background visual element */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Briefcase size={12} />
            <span>My Works & Case Studies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Completed Web Portfolios
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Explore case studies from three years of bespoke theme installations, WooCommerce stores, and front-end layouts. Click any project to open detailed design reviews and tech specs.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                selectedCategory === category
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-gray-200 bg-slate-900/40 border border-slate-900'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <motion.span
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Card Grid with layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
              >
                <div>
                  {/* Thumbnail Cover Area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <SafeImage
                      src={project.image}
                      fallbackSrc={project.fallbackImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      >
                        <Eye size={14} />
                        <span>View Project Specs</span>
                      </button>
                    </div>

                    {/* Left Category Floater Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-slate-900/90 border border-slate-800 text-purple-400">
                      {project.category}
                    </div>
                  </div>

                  {/* Title & Copy */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-purple-400 transition-colors leading-snug mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tag highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 border border-slate-800 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-slate-950/20 border border-transparent">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer specs toggle */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-800/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    {project.duration || 'Bespoke delivery'}
                  </span>
                  
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
