import { motion } from 'motion/react';
import { Globe, Code, Wrench, Zap, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { services, personalInfo } from '../data';

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={28} className="text-purple-400 group-hover:text-purple-300 transition-colors" />;
      case 'Code':
        return <Code size={28} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />;
      case 'Wrench':
        return <Wrench size={28} className="text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'Zap':
        return <Zap size={28} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />;
      default:
        return <Globe size={28} className="text-purple-400" />;
    }
  };

  const getCardStyle = (id: string) => {
    switch (id) {
      case 'wp-dev':
        return 'border-purple-500/10 hover:border-purple-500/40 shadow-purple-950/10 hover:shadow-purple-950/20';
      case 'frontend-dev':
        return 'border-indigo-500/10 hover:border-indigo-500/40 shadow-indigo-950/10 hover:shadow-indigo-950/20';
      case 'bug-fixing':
        return 'border-amber-500/10 hover:border-amber-500/40 shadow-amber-950/10 hover:shadow-amber-950/20';
      case 'seo-speed':
        return 'border-emerald-500/10 hover:border-emerald-500/40 shadow-emerald-950/10 hover:shadow-emerald-950/20';
      default:
        return 'border-slate-800 hover:border-slate-700';
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/20">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Globe size={12} />
            <span>My Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Services I Offer As A Developer
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            I build modern, functional websites tailored to help you launch, run, and scale your digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const encodedMsg = encodeURIComponent(
              `Hi Iqra, I'm interested in your "${service.title}" service and want to discuss a potential project.`
            );
            const whatsappUrl = `https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodedMsg}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/40 border backdrop-blur-md transition-all duration-300 ${getCardStyle(
                  service.id
                )}`}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/80 group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mt-0.5">
                        {service.id === 'wp-dev' ? 'Featured Specialist' : 'Core Offering'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 mt-0.5 flex-shrink-0">
                          <Check size={12} />
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hire Me Button */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 group-hover:text-gray-300 transition-colors">
                    Starting immediately
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-slate-950 hover:bg-purple-600 border border-slate-800 hover:border-purple-500 shadow-md group-hover:shadow-purple-950/30 transition-all duration-300"
                  >
                    <MessageSquare size={12} />
                    <span>Inquire Service</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                </div>

                {/* Decorative bottom background gradient shine */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-b-2xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
