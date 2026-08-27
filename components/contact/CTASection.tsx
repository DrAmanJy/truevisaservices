import React from 'react';
import ContactLink from './ContactLink';
import CallButton from './CallButton';
import WhatsAppButton from './WhatsAppButton';

interface CTASectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function CTASection({ 
  title = "Ready to Begin Your Global Journey?", 
  description = "Get expert guidance from our registered migration professionals. We're here to assess your profile and provide a clear pathway to your goals.",
  className = ""
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-gold/10 relative overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-navy mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <ContactLink text="Talk to an Expert" variant="primary" />
          <WhatsAppButton variant="outline" text="WhatsApp Us" />
          <CallButton variant="ghost" />
        </div>
      </div>
    </section>
  );
}
