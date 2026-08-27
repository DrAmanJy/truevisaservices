'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'motion/react';
import Link from 'next/link';
import { destinationsData } from '@/lib/data';
import { MapPin, ArrowRight } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';
import Image from 'next/image';

export default function DestinationsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <section className="relative pt-32 pb-20 bg-[#2A2522] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Global <span className="text-gold">Destinations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Discover the best countries for study, work, and settlement. We provide end-to-end guidance for all major global destinations.
            </motion.p>
          </div>
        </section>

        <section className="py-24 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationsData.map((dest, index) => (
                <motion.div
                  key={dest.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square lg:h-[450px]"
                >
                  <Link href={`/destinations/${dest.slug}`}>
                    <Image referrerPolicy="no-referrer"
                      src={dest.heroImg}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522] via-[#2A2522]/30 to-transparent transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-0 transform transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-lg">
                        {dest.name}
                      </h3>
                      
                      <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <div className="pt-3">
                          <div className="flex items-center gap-2 text-gold mb-3">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
                          </div>
                          <p className="text-gray-300 mb-6 line-clamp-2">
                            {dest.subtitle}
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2A2522] bg-gold px-6 py-3 rounded-full hover:bg-white transition-colors">
                            View Country Details <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
