'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'motion/react';
import Link from 'next/link';
import { servicesData } from '@/lib/data';
import { ArrowRight, BookOpen, Briefcase, PlaneTakeoff, Home, Building2, Users2, type LucideIcon } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';

const iconMap: Record<string, LucideIcon> = {
  'study-visa': BookOpen,
  'work-visa': Briefcase,
  'tourist-visa': PlaneTakeoff,
  'permanent-residency': Home,
  'business-visa': Building2,
  'family-visa': Users2,
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <section className="relative pt-32 pb-20 bg-[#2A2522] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our <span className="text-gold">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Tailored immigration solutions designed to meet your specific goals. Explore our comprehensive visa services below.
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const Icon = iconMap[service.slug];
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/services/${service.slug}`} className="group relative bg-white p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-pointer h-full">
                      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                        {Icon && <Icon className="w-7 h-7 text-royal-light group-hover:text-white transition-colors duration-300" />}
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-royal transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 mb-8 leading-relaxed">
                        {service.intro.substring(0, 100)}...
                      </p>
                      <div className="mt-auto inline-flex items-center gap-2 font-bold text-navy group-hover:text-gold transition-colors">
                        Explore Service
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
