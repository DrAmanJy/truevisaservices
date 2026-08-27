'use client';

import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { destinationsData } from '@/lib/data';

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-wider uppercase mb-2"
            >
              Top Destinations
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-navy"
            >
              Choose Your New Home
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full hover:bg-royal transition-colors shrink-0"
            >
              Explore All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsData.slice(0, 6).map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index < 2 ? 'md:col-span-2 lg:col-span-2 aspect-[2/1] lg:aspect-auto lg:h-[400px]' : 'aspect-square lg:h-[400px]'}`}
            >
              <Link href={`/destinations/${dest.slug}`}>
                <Image referrerPolicy="no-referrer"
                  src={dest.heroImg}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-300 group-hover:from-navy group-hover:via-navy/60" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-0 transform transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-lg">
                    {dest.name}
                  </h3>
                  
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="pt-3">
                      <div className="flex items-center gap-2 text-gold mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Top Choice</span>
                      </div>
                      <p className="text-gray-300 mb-6 line-clamp-2">
                        {dest.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-navy bg-gold hover:bg-gold-light px-6 py-2.5 rounded-full transition-colors">
                        Explore Program <ArrowRight className="w-4 h-4" />
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
  );
}
