'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  FileText, ShieldCheck, Book, Briefcase, 
  GraduationCap, Target, Award, Globe, Heart, 
  CheckCircle, Clock, MapPin, Zap
} from 'lucide-react';

// Pre-defined icon and image arrays for visual variety
const visaIcons = [Briefcase, GraduationCap, Globe, Award, ShieldCheck, Target];
const requirementIcons = [FileText, Target, Clock, ShieldCheck, MapPin, Award];

const whyChooseImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
];

const requirementImages = [
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
];

interface DestinationVisualsProps {
  dest: {
    name: string;
    heroImg: string;
    intro: string;
    whyChoose: string[];
    popularVisas: string[];
    lifestyle: string;
    requirements: string[];
  }
}

export default function DestinationVisuals({ dest }: DestinationVisualsProps) {
  return (
    <div className="space-y-24">
      {/* 1. Visual Overview */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Overview</h2>
            <h3 className="text-3xl font-bold text-navy mb-6 leading-tight">
              Life in {dest.name}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {dest.intro}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image 
              src={dest.heroImg} 
              alt={dest.name} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Why Choose Grid (Image Backed) */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-navy">Why Choose {dest.name}?</h2>
          <p className="text-slate-500 mt-2">Discover what makes it a top destination</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {dest.whyChoose.map((item, idx) => {
            const bgImage = whyChooseImages[idx % whyChooseImages.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl overflow-hidden shadow-lg border border-slate-100 group min-h-[200px] flex flex-col justify-end"
              >
                <Image 
                  src={bgImage} 
                  alt={`${item} — reason to choose ${dest.name}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522]/90 via-[#2A2522]/50 to-transparent group-hover:from-[#2A2522]/95 transition-colors duration-500" />
                
                <div className="relative z-10 flex items-start gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-gold/30">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-white text-xl leading-tight drop-shadow-md">{item}</h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Popular Visas Grid (Icon Based) */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-navy">Popular Visas</h2>
          <p className="text-slate-500 mt-2">The most common pathways to move here</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {dest.popularVisas.map((item, idx) => {
            const Icon = visaIcons[idx % visaIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 group hover:border-gold/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-bold text-navy leading-tight">{item}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Lifestyle Section (Visual Split) */}
      <section className="bg-navy rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="relative p-10 md:p-16 flex flex-col items-center text-center">
          <Heart className="w-12 h-12 text-gold mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lifestyle in {dest.name}</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            {dest.lifestyle}
          </p>
        </div>
      </section>

      {/* 5. General Requirements Timeline (Image Augmented) */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-navy">General Requirements</h2>
          <p className="text-slate-500 mt-2">Key criteria you must meet</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-[28px] w-0.5 bg-slate-200" />
          
          <div className="space-y-8">
            {dest.requirements.map((req, idx) => {
              const Icon = requirementIcons[idx % requirementIcons.length];
              const image = requirementImages[idx % requirementImages.length];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center relative z-10 shrink-0 group-hover:border-gold transition-colors">
                    <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row gap-6 bg-white p-4 pr-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow items-center">
                    <div className="relative w-full md:w-48 h-48 md:h-32 shrink-0 rounded-xl overflow-hidden border border-slate-100">
                      <Image 
                        src={image} 
                        alt={`${req} — immigration requirement for ${dest.name}`} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        sizes="(max-width: 768px) 100vw, 192px" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left w-full">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1 block">Step 0{idx + 1}</span>
                      <h4 className="text-lg font-bold text-navy">{req}</h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
