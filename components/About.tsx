'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Target, Compass } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (imageRef.current && sectionRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-navy/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <div ref={imageRef} className="w-full h-full relative" style={{ willChange: 'transform' }}>
              <Image referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Immigration Consultants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Element */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 -right-10 lg:right-10 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[250px]"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-bold text-navy text-xl">100%</p>
                <p className="text-sm text-gray-500 leading-tight">Transparent Process</p>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-gold font-bold tracking-wider uppercase mb-2">About True Visa</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Your Trusted Partner in Global Mobility
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-600 text-lg"
            >
              <p>
                True Visa is a premier immigration consultancy dedicated to simplifying the complex process of global relocation. With over a decade of experience, we have successfully guided thousands of individuals and families to their dream destinations.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-royal/10 p-2 rounded-lg">
                    <Target className="w-6 h-6 text-royal" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy text-xl">Our Mission</h5>
                    <p className="text-sm mt-1">To provide honest, transparent, and personalized immigration strategies that maximize your chances of success.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-royal/10 p-2 rounded-lg">
                    <Compass className="w-6 h-6 text-royal" />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy text-xl">Expert Guidance</h5>
                    <p className="text-sm mt-1">Our certified consultants stay up-to-date with the latest immigration laws and policies across all major destinations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-royal font-bold hover:text-navy transition-colors group"
                >
                  Discover Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
