'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Years of Experience' },
  { icon: CheckCircle, value: '10,000+', label: 'Successful Applications' },
  { icon: Globe, value: '30+', label: 'Global Destinations' },
  { icon: Users, value: '150+', label: 'Expert Consultants' },
];

export default function TrustStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 px-4"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-4 text-royal">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-navy mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
