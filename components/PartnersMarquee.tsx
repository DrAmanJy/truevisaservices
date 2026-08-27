'use client';

import { motion } from 'motion/react';
import { Building, GraduationCap, Globe, Landmark, Plane, Briefcase, Award } from 'lucide-react';

const partners = [
  { name: 'Global Education Group', icon: GraduationCap },
  { name: 'World Immigration Council', icon: Globe },
  { name: 'International Work Solutions', icon: Briefcase },
  { name: 'Elite Universities Alliance', icon: Landmark },
  { name: 'Premier Visa Services', icon: Award },
  { name: 'Global Mobility Partners', icon: Plane },
  { name: 'Future Corporate Network', icon: Building },
];

export default function PartnersMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders Worldwide
        </p>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 text-gray-400 hover:text-navy transition-colors duration-300 group cursor-default"
              >
                <Icon className="w-8 h-8 text-gray-300 group-hover:text-gold transition-colors duration-300" />
                <span className="text-xl font-bold font-sans tracking-tight">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
