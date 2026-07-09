import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { workExperience, educationHistory } from '../data';

type TimelineTab = 'experience' | 'education';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<TimelineTab>('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Clock size={12} />
            <span>My Qualifications</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Experience & Education Timeline
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
              activeTab === 'experience'
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200 bg-slate-900/40 border border-slate-900'
            }`}
          >
            <Briefcase size={14} className="relative z-10" />
            <span className="relative z-10">Work History</span>
            {activeTab === 'experience' && (
              <motion.span
                layoutId="activeQualificationsTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
              activeTab === 'education'
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-200 bg-slate-900/40 border border-slate-900'
            }`}
          >
            <GraduationCap size={15} className="relative z-10" />
            <span className="relative z-10">Academic History</span>
            {activeTab === 'education' && (
              <motion.span
                layoutId="activeQualificationsTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
          </button>
        </div>

        {/* Timeline Panel Container */}
        <div className="relative border-l-2 border-slate-850 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12 py-4">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience-timeline"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {workExperience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full bg-slate-950 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)] text-purple-400 z-10 flex-shrink-0">
                      <Briefcase size={12} />
                    </div>

                    {/* Entry Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-purple-400 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 w-fit">
                          <Calendar size={10} />
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 font-mono">
                        <span className="text-gray-300">{exp.company}</span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet Achievements */}
                    <div className="space-y-3 pl-1">
                      {exp.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-purple-500/60 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-timeline"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {educationHistory.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)] text-indigo-400 z-10 flex-shrink-0">
                      <GraduationCap size={12} />
                    </div>

                    {/* Entry Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                          {edu.degree}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 w-fit">
                          <Calendar size={10} />
                          {edu.duration}
                        </span>
                      </div>
                      
                      <span className="block text-sm font-semibold text-gray-300 font-mono">
                        {edu.school}
                      </span>
                      {edu.field && (
                        <span className="block text-xs font-semibold text-gray-400 mt-1">
                          Field: <span className="text-gray-300">{edu.field}</span>
                        </span>
                      )}
                    </div>

                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
