'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const textItems = [
  "100% Success Rate in Student Visas",
  "Fast Track Processing Available",
  "24/7 Expert Immigration Support",
  "Transparent Transparent Pricing",
  "Trusted by 10k+ Families",
  "Global Relocation Experts",
  "Free Initial Consultation",
];

export default function ScrollingTextMarquee() {
  return (
    <div className="bg-[#2A2522] py-4 overflow-hidden text-[#C5A059] flex relative mt-16">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-8 items-center px-4"
      >
        {[...textItems, ...textItems].map((text, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-sm font-bold uppercase tracking-widest">
              {text}
            </span>
            <Star className="w-4 h-4 fill-current opacity-50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
