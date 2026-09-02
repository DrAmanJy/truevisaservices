'use client';

import { motion } from 'motion/react';
import { BookOpen, Briefcase, PlaneTakeoff, Home, Building2, Users2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: BookOpen,
    title: 'Study Visa',
    slug: 'study-visa',
    description: 'Access world-class education with expert guidance on university selection and student visa applications.',
  },

  {
    icon: PlaneTakeoff,
    title: 'Tourist Visa',
    slug: 'tourist-visa',
    description: 'Explore the world hassle-free. Quick and reliable processing for short-term visitor and tourist visas.',
  },
  {
    icon: Home,
    title: 'Permanent Residency',
    slug: 'permanent-residency',
    description: 'Build your life abroad. Strategic planning for PR pathways in Canada, Australia, and Europe.',
  },
  {
    icon: Building2,
    title: 'Business Visa',
    slug: 'business-visa',
    description: 'Expand your enterprise internationally with specialized investor and entrepreneur visa programs.',
  },
  {
    icon: Users2,
    title: 'Family Visa',
    slug: 'family-visa',
    description: 'Reunite with loved ones. Comprehensive support for spouse, parent, and dependent visas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase mb-2"
          >
            What We Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            Comprehensive Visa Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Tailored immigration solutions designed to meet your specific goals and maximize your chances of approval.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="group relative bg-white p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gold/30 hover:bg-orange-50/50 transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 text-royal-light group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-royal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
