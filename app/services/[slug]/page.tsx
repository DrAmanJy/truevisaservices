import type { Metadata } from 'next';
import { servicesData } from '@/lib/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';
import PageTransition from '@/components/PageTransition';
import ConsultationForm from '@/components/ConsultationForm';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceVisuals from '@/components/ServiceVisuals';
import { JsonLd, getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import CTASection from '@/components/contact/CTASection';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const title = service.metaTitle || service.title;
  const description = service.description || service.intro;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | True Visa`,
      description,
      url: `${siteUrl}/services/${service.slug}`,
      images: [{ url: service.heroImg, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | True Visa`,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const faqItems = service.faq.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FAFAF8]">
        <JsonLd data={getServiceSchema(service)} />
        <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
        {faqItems.length > 0 && <JsonLd data={getFAQSchema(faqItems)} />}

        {/* Dynamic Hero */}
        <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
          <div className="absolute inset-0">
            <Image referrerPolicy="no-referrer" src={service.heroImg} alt={`${service.title} — visa consultancy services by True Visa`} fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mb-6">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-16">
                <ServiceVisuals service={service} />

                <div>
                  <h2 className="text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faq.map((f, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-navy text-lg mb-2">{f.q}</h3>
                        <p className="text-slate-600">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-navy rounded-3xl p-8 sticky top-32 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-gray-300 mb-8">Get a free assessment of your profile from our immigration experts.</p>
                  <Link href="#contact" className="block text-center w-full bg-gold text-navy font-bold py-4 rounded-xl hover:bg-gold-light transition-colors">
                    Start Your Assessment
                  </Link>
                  <WhatsAppButton className="w-full mt-4" variant="outline" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <CTASection 
          title={`Start Your ${service.title} Process Today`} 
          description="Speak with our registered immigration consultants to assess your eligibility and create a customized roadmap for your application."
        />
        
        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
