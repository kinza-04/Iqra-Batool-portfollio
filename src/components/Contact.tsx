import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Linkedin, MapPin, ChevronDown, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo, faqs } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'WordPress Custom Site',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Construct WhatsApp URL with client's form responses
  const getWhatsAppSubmitUrl = () => {
    const text = `Hi Iqra, my name is ${formData.name} (${formData.email}).\n\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    return `https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  // Construct Email URL
  const getEmailSubmitUrl = () => {
    return `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/30">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            <Phone size={12} />
            <span>Connect & Launch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Let's Build Something Great Together
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-sans font-bold text-2xl text-white">Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Have a project idea, theme optimization request, or layout bug that needs fixing? Contact me directly or complete the form. I am generally available and respond within a few hours.
              </p>

              {/* Detail Blocks */}
              <div className="space-y-4 pt-4">
                
                <a
                  href={`https://wa.me/${personalInfo.phone.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-green-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-mono">WhatsApp</span>
                    <span className="block text-sm font-semibold text-white tracking-wide">{personalInfo.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-mono">Email Address</span>
                    <span className="block text-sm font-semibold text-white tracking-wide truncate max-w-xs">{personalInfo.email}</span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-mono">LinkedIn Network</span>
                    <span className="block text-sm font-semibold text-white tracking-wide truncate max-w-xs">iqra-batool33</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-mono">Location</span>
                    <span className="block text-sm font-semibold text-white tracking-wide">{personalInfo.location}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/40 transition-all"
                          placeholder="Iqra Khan"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/40 transition-all"
                          placeholder="client@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                        What service are you looking for?
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/40 transition-all"
                      >
                        <option value="WordPress Custom Site">WordPress Custom Website / Landing Page</option>
                        <option value="WooCommerce E-Commerce Store">E-Commerce WooCommerce Store</option>
                        <option value="Front-End Coding">Front-End Layout Conversion (Figma to Code)</option>
                        <option value="Speed & SEO Optimization">Speed Optimization / SEO Tuning</option>
                        <option value="Emergency Bug Troubleshooting">Emergency Bug Fix / Maintenance</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                        Project Message Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-500/80 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/40 transition-all resize-none"
                        placeholder="Please describe your custom layout specifications, timeline goals, or website bugs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Send size={15} />
                      <span>Proceed With Inquiry</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={32} className="animate-bounce" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-sans font-bold text-xl text-white">Inquiry Details Prepared!</h4>
                      <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-purple-300">{formData.name}</span>! Your inquiry details have been parsed. Choose your preferred channel below to send instantly:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-sm mx-auto">
                      <a
                        href={getWhatsAppSubmitUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-md"
                      >
                        <MessageSquare size={14} />
                        <span>Send via WhatsApp</span>
                      </a>
                      
                      <a
                        href={getEmailSubmitUrl()}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-950 border border-slate-800 hover:border-slate-700"
                      >
                        <Mail size={14} />
                        <span>Send via Email</span>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'WordPress Custom Site', message: '' });
                      }}
                      className="text-xs font-mono text-gray-500 hover:text-gray-400 transition-colors pt-2 block mx-auto underline"
                    >
                      Fill another form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="border-t border-slate-900 pt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-sans font-bold text-2xl text-white">Frequently Asked Questions</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Common questions about WordPress setups, customization, responsive landing pages, and post-launch maintenance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-slate-900/20 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors hover:bg-slate-900/30"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-gray-200">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-500"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-850/60">
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
