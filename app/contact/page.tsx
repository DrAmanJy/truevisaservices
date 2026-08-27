'use client';

import PageTransition from '@/components/PageTransition';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';
import { CONTACT_INFO } from '@/lib/contact';
import CallButton from '@/components/contact/CallButton';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FAFAF8]">
        <section className="relative pt-32 pb-20 bg-[#2A2522] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="text-gold">Us</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We&apos;re here to help you start your journey. Reach out to us for a free, comprehensive consultation.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              
              {/* Visit Us */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Visit Us</h3>
                  <p className="text-slate-600 mb-4">{CONTACT_INFO.address.street},<br />{CONTACT_INFO.address.city}, {CONTACT_INFO.address.postalCode}</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Call Us</h3>
                  <p className="text-slate-600 mb-6">Mon-Fri from 9am to 6pm</p>
                  <CallButton />
                </div>
              </div>
              
              {/* WhatsApp Us */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">WhatsApp Us</h3>
                  <p className="text-slate-600 mb-6">Instant support & queries</p>
                  <WhatsAppButton />
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-xl mb-3">Email Us</h3>
                  <p className="text-slate-600 mb-6">We'll reply within 24 hours</p>
                  <a href={CONTACT_INFO.email.link} className="inline-flex items-center justify-center font-bold px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all rounded-full">
                    Send Email
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <iframe
                src={CONTACT_INFO.address.googleMapsEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="True Visa Office Location"
              />
            </motion.div>

            {/* Reusing Consultation Form */}
            <ConsultationForm />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
