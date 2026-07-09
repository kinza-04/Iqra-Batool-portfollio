import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, User, Clock, ExternalLink, MessageSquare, Check, Tag } from 'lucide-react';
import { Project } from '../types';
import { personalInfo } from '../data';
import SafeImage from './SafeImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prefilled WhatsApp message referencing the specific project the user is looking at
  const encodedMsg = encodeURIComponent(
    `Hi Iqra, I saw your project "${project.title}" on your portfolio. I would like to discuss a similar project for my business.`
  );
  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodedMsg}`;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-slate-800 hover:border-red-500/30 transition-all duration-300"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Left Column: Visual Mockup Showcase */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <SafeImage
                src={project.image}
                fallbackSrc={project.fallbackImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600'}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>

            {/* Quick stats grid below image */}
            <div className="grid grid-cols-2 gap-3">
              {project.client && (
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-850 flex items-center gap-2.5">
                  <User size={16} className="text-purple-400" />
                  <div className="min-w-0">
                    <span className="block text-[10px] text-gray-500 font-mono">Client</span>
                    <span className="block text-xs font-semibold text-gray-200 truncate">{project.client}</span>
                  </div>
                </div>
              )}
              {project.duration && (
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-850 flex items-center gap-2.5">
                  <Clock size={16} className="text-indigo-400" />
                  <div className="min-w-0">
                    <span className="block text-[10px] text-gray-500 font-mono">Duration</span>
                    <span className="block text-xs font-semibold text-gray-200 truncate">{project.duration}</span>
                  </div>
                </div>
              )}
            </div>
            
            {project.role && (
              <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-850 flex items-center gap-3">
                <Calendar size={16} className="text-emerald-400" />
                <div className="min-w-0">
                  <span className="block text-[10px] text-gray-500 font-mono">My Role</span>
                  <span className="block text-xs font-semibold text-gray-200">{project.role}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Details & Tech Tags */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Category tag & Title */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Tag size={10} />
                  {project.category}
                </span>
                
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-2.5 leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Project Overview
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950 border border-slate-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Key Features & Deliverables
                </h4>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 mt-0.5 flex-shrink-0">
                        <Check size={11} />
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageSquare size={14} />
                <span>Discuss Similar Project</span>
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                >
                  <span>Launch Live</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl text-xs font-mono font-semibold text-purple-400 bg-purple-500/5 border border-purple-500/10 cursor-not-allowed">
                  <span>Enterprise Client Protected</span>
                </div>
              )}
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
