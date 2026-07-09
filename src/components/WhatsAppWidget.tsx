import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { personalInfo } from '../data';

export default function WhatsAppWidget() {
  const whatsappLink = `https://wa.me/${personalInfo.phone.replace('+', '')}?text=Hi%20Iqra,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20hire%2520your%2520services%20as%20a%20developer.`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-[0_4px_24px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.65)] border border-green-400/20 group"
        aria-label="Contact Iqra Batool on WhatsApp"
      >
        {/* Pulsing indicator aura */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping pointer-events-none" />

        <MessageSquare size={24} className="transition-transform group-hover:scale-110" />

        {/* Hover label */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
