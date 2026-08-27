'use client';

import { motion } from 'motion/react';
import { Target, Search, Users, HandHeart } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Target,
    title: 'Personalized Strategy',
    desc: 'Every profile is unique. We design custom pathways to maximize your approval chances.',
  },
  {
    icon: Search,
    title: 'Transparent Process',
    desc: 'No hidden fees or unrealistic promises. Clear communication at every step.',
  },
  {
    icon: Users,
    title: 'Experienced Consultants',
    desc: 'Our team comprises licensed experts with decades of combined immigration experience.',
  },
  {
    icon: HandHeart,
    title: 'End-to-End Support',
    desc: 'From IELTS preparation to post-landing assistance, we are with you always.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-wider uppercase mb-2"
            >
              The True Visa Advantage
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-navy mb-8"
            >
              Why Choose Us?
            </motion.h2>
            
            <div className="space-y-8">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-navy transition-colors duration-300">
                      <Icon className="w-8 h-8 text-royal group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{feat.title}</h3>
                      <p className="text-gray-600">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
             <motion.div
               initial={{ scale: 1.2 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0 w-full h-full"
             >
               <Image referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="True Visa expert consultants discussing immigration strategy" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
             </motion.div>
             <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8 }}
               className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
             >
               <p className="text-white text-2xl font-serif italic mb-4">
                 &quot;They didn&apos;t just process my visa; they planned my future.&quot;
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative">
                   <Image referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Satisfied True Visa client testimonial" fill className="object-cover" sizes="48px" />
                 </div>
                 <div>
                   <p className="text-white font-bold">Arjun Sharma</p>
                   <p className="text-white/70 text-sm">Now in Toronto, Canada</p>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
