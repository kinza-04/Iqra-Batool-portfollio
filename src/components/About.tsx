import { motion } from 'motion/react';
import { User, Award, BookOpen, Globe2, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillsData } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/30">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <User size={12} />
            <span>Get To Know Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            About My Professional Journey
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* About Text + Stats Block */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-sans font-bold text-2xl text-white">
                Professional Web Developer & WordPress Specialist
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am Iqra Batool, a results-oriented website developer with three years of professional hands-on experience building highly-interactive, responsive, and performant web portals. 
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                I take pride in translating customer concepts into modular layouts, customized plugins, and lightning-fast search-optimized websites. My main objective is to assist business brands in establishing a reliable, high-converting digital product that loads immediately and acts as an efficient client acquisition channel.
              </p>

              {/* Languages Box */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="font-sans font-semibold text-white mb-3 flex items-center gap-2">
                  <Globe2 size={16} className="text-purple-400" />
                  <span>Languages Spoken</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.languages.map((lang) => (
                    <div key={lang.name} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
                      <span className="block font-semibold text-sm text-gray-200">{lang.name}</span>
                      <span className="block font-mono text-[10px] text-gray-400 mt-0.5">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills Bento Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
            >
              <h3 className="font-sans font-bold text-xl text-white mb-6 pb-4 border-b border-slate-800/60">
                My Technical & Soft Skills
              </h3>

              <div className="space-y-6">
                
                {/* WordPress Category */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-3">
                    WordPress & Custom Builders
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.wordpress.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/25 text-purple-300 transition-all duration-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-purple-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Front-End Category */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest mb-3">
                    Front-End Engineering
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 transition-all duration-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-indigo-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialized Tools & Performance */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3">
                    Specialized Tools & Performance
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 transition-all duration-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
                    Professional Workflow
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.soft.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/25 text-amber-300 transition-all duration-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-amber-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
