'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  FileText, ShieldCheck, Book, Briefcase, 
  GraduationCap, Target, Award, Globe, Heart, 
  CheckCircle, Clock, MapPin, Zap
} from 'lucide-react';

// Pre-defined icon arrays for visual variety since data is just text
const eligibilityIcons = [Book, FileText, Briefcase, GraduationCap, ShieldCheck, Target];
const benefitIcons = [Globe, Award, Heart, Zap, MapPin, CheckCircle];
const processIcons = [FileText, Target, Clock, ShieldCheck, MapPin, Award];

const benefitImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
];

const processImages = [
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop'
];

interface ServiceVisualsProps {
  service: {
    title: string;
    heroImg: string;
    intro: string;
    eligibility: string[];
    benefits: string[];
    process: string[];
  }
}

export default function ServiceVisuals({ service }: ServiceVisualsProps) {
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
              Your Pathway to {service.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {service.intro}
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
              src={service.heroImg} 
              alt={service.title} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Eligibility Grid */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-navy">Eligibility & Requirements</h2>
          <p className="text-slate-500 mt-2">What you need to get started</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {service.eligibility.map((item, idx) => {
            const Icon = eligibilityIcons[idx % eligibilityIcons.length];
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

      {/* 3. Visual Benefits Grid */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-navy">Key Benefits</h2>
          <p className="text-slate-500 mt-2">Why this is the right choice for you</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {service.benefits.map((item, idx) => {
            const Icon = benefitIcons[idx % benefitIcons.length];
            const bgImage = benefitImages[idx % benefitImages.length];
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
                  alt={`${item} — visa service benefit`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent group-hover:from-navy/95 transition-colors duration-500" />
                
                <div className="relative z-10 flex items-start gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-gold/30">
                    <Icon className="w-5 h-5 text-gold" />
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

      {/* 4. Visual Process Timeline */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-navy">Our Process</h2>
          <p className="text-slate-500 mt-2">A transparent, step-by-step journey</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-[28px] w-0.5 bg-slate-200" />
          
          <div className="space-y-8">
            {service.process.map((step, idx) => {
              const Icon = processIcons[idx % processIcons.length];
              const image = processImages[idx % processImages.length];
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
                        alt={`${step} — visa application process step`} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        sizes="(max-width: 768px) 100vw, 192px" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left w-full">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1 block">Step 0{idx + 1}</span>
                      <h4 className="text-lg font-bold text-navy">{step}</h4>
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
