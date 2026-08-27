'use client';

import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/lib/contact';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit to not clutter initial page load
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also show after 5 seconds regardless of scroll, if not already visible
    const timer = setTimeout(() => setIsVisible(true), 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-white px-4 py-3 rounded-2xl shadow-xl shadow-black/10 border border-gray-100 pointer-events-auto flex items-center gap-3 relative mr-2"
          >
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45 transform"></div>
            <div className="text-sm font-medium text-navy">
              Need help? Chat with an expert!
            </div>
            <button 
              onClick={() => setHasInteracted(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={CONTACT_INFO.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow pointer-events-auto"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
