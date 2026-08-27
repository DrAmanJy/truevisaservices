'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'motion/react';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';

export default function FAQPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Frequently Asked <span className="text-gold">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Got questions? We&apos;ve got answers. Find clarity on the immigration process, our services, and specific visa queries.
            </motion.p>
          </div>
        </section>

        {/* Using the existing FAQ component with JSON-LD schema */}
        <FAQ showSchema />

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
