'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall, FileSearch, FileText, Send, Stamp, Plane } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: PhoneCall, title: 'Free Consultation', desc: 'Initial discussion to understand your goals.' },
  { icon: FileSearch, title: 'Profile Assessment', desc: 'Evaluating your eligibility and options.' },
  { icon: FileText, title: 'Documentation', desc: 'Gathering and verifying required papers.' },
  { icon: Send, title: 'Application Submission', desc: 'Filing your case with immigration authorities.' },
  { icon: Stamp, title: 'Visa Decision', desc: 'Receiving your visa approval.' },
  { icon: Plane, title: 'Begin Your Journey', desc: 'Pre-departure briefing and support.' },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (pathRef.current && containerRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase mb-2"
          >
            How It Works
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Journey Simplified
          </motion.h2>
        </div>

        <div className="relative mt-16">
          {/* Animated SVG Path for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] w-[90%] -translate-y-1/2 overflow-visible z-0 pointer-events-none">
             <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none" className="overflow-visible">
               <path 
                 d="M 0 10 L 1000 10" 
                 fill="none" 
                 stroke="rgba(255,255,255,0.1)" 
                 strokeWidth="2" 
                 strokeDasharray="8 8"
               />
               <path 
                 ref={pathRef}
                 d="M 0 10 L 1000 10" 
                 fill="none" 
                 stroke="#D4AF37" 
                 strokeWidth="3" 
               />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group px-2"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#2A2522] border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-gold transition-colors duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <Icon className="w-8 h-8 text-gold relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 w-5 h-5 bg-navy border border-gold/30 text-gold text-[10px] font-bold rounded-full flex items-center justify-center z-10 group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
