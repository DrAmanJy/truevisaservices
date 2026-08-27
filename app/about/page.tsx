'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Compass, Users, Globe, Award, HeartHandshake, Clock, CheckCircle } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';
import Image from 'next/image';

const stats = [
  { label: 'Visas Processed', value: '10,000+' },
  { label: 'Years in Industry', value: '10+' },
  { label: 'Countries Covered', value: '30+' },
  { label: 'Satisfied Clients', value: '5,000+' }
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description: 'We operate with absolute transparency. No hidden fees, no false promises, just honest and clear guidance.'
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric',
    description: 'Your success is our success. We personalize every strategy to fit your unique background and aspirations.'
  },
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'Our team stays ahead of the curve with the latest immigration policies across major global destinations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every application, ensuring all documentation meets the highest standards.'
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Page Hero */}
        <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-sm font-semibold mb-8 backdrop-blur-md"
            >
              <Compass className="w-4 h-4" />
              <span>Discover Our Journey</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">True Visa</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Your trusted partner in navigating the complex world of global immigration. We bring transparency, expertise, and dedication to your international journey.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-navy mb-2">{stat.value}</p>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
                <Image referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="True Visa immigration consultancy team in Chandigarh office"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4">
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shrink-0 shadow-lg">
                      <ShieldCheck className="w-7 h-7 text-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-2xl">100%</p>
                      <p className="text-sm text-gray-200 font-medium">Transparent Process</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                    Dedicated to Making Your <span className="text-gold">Global Dreams</span> a Reality
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Founded on the principles of integrity and excellence, True Visa is a premier immigration consultancy firm. We understand that moving to a new country is one of the most significant decisions of your life. That&apos;s why we don&apos;t just process paperwork; we design personalized strategies to ensure your success.
                  </p>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    With over a decade of experience and a team of certified immigration experts, we stay constantly updated on the ever-changing immigration policies of major global destinations including Canada, Australia, the UK, and the USA.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Target className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-xl">Our Mission</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">To provide honest, transparent, and personalized immigration strategies that maximize your chances of success, ensuring a smooth transition to your new life.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Users className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-xl">Our Team</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">A dedicated collective of licensed advisors, legal experts, and case managers committed to your journey from day one to post-landing.</p>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-navy mb-6">Our Core Values</h2>
              <p className="text-gray-600 text-lg">
                The principles that guide everything we do and how we treat our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Location */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-navy mb-6">Our Location</h2>
              <p className="text-gray-600 text-lg">
                Visit us at our office in Sector 31D, Chandigarh. We&apos;re always happy to meet in person.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.456059274401!2d76.77781775!3d30.704923649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec58f055b4ff%3A0x93f6a3bf6e10c28d!2sSECTOR-31D%2C%2031D%2C%20Sector%2031%2C%20Chandigarh%2C%20160030!5e1!3m2!1sen!2sin!4v1787827894554!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="True Visa Office Location"
              />
            </motion.div>
          </div>
        </section>

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
