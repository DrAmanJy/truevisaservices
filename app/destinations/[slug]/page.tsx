import type { Metadata } from 'next';
import { destinationsData } from '@/lib/data';
import PageTransition from '@/components/PageTransition';
import ConsultationForm from '@/components/ConsultationForm';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DestinationVisuals from '@/components/DestinationVisuals';
import { JsonLd, getBreadcrumbSchema } from '@/lib/schema';
import CTASection from '@/components/contact/CTASection';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dest = destinationsData.find((d) => d.slug === resolvedParams.slug);
  
  if (!dest) {
    return {
      title: 'Destination Not Found',
    };
  }

  const title = `${dest.name} Visa & Immigration Services — Migrate to ${dest.name}`;
  const description = `Expert ${dest.name} immigration and visa consultancy by True Visa. ${dest.intro.substring(0, 120)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://truevisaservices.in/destinations/${dest.slug}`,
    },
    openGraph: {
      title: `${dest.name} Immigration Services | True Visa`,
      description,
      url: `https://truevisaservices.in/destinations/${dest.slug}`,
      images: [{ url: dest.heroImg, alt: `Migrate to ${dest.name} with True Visa` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dest.name} Immigration Services | True Visa`,
      description,
    },
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dest = destinationsData.find((d) => d.slug === resolvedParams.slug);

  if (!dest) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Destinations', url: '/destinations' },
    { name: dest.name, url: `/destinations/${dest.slug}` },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FAFAF8]">
        <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

        {/* Dynamic Hero */}
        <section className="relative pt-40 pb-24 bg-[#2A2522] overflow-hidden">
          <div className="absolute inset-0">
            <Image referrerPolicy="no-referrer" src={dest.heroImg} alt={`${dest.name} — immigration destination by True Visa`} fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522] to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mb-6">
              <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{dest.name}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              {dest.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {dest.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Main Content */}
              <div className="lg:col-span-8">
                <DestinationVisuals dest={dest} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-[#2A2522] rounded-3xl p-8 sticky top-32 text-white">
                  <h3 className="text-2xl font-bold mb-4">Migrate to {dest.name}</h3>
                  <p className="text-gray-300 mb-8">Discuss your eligibility for {dest.name} with our expert consultants today.</p>
                  <Link href="#contact" className="block text-center w-full bg-gold text-[#2A2522] font-bold py-4 rounded-xl hover:bg-gold-light transition-colors">
                    Get a Free Consultation
                  </Link>
                  <WhatsAppButton className="w-full mt-4" variant="outline" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <CTASection 
          title={`Start Your ${dest.name} Journey Today`} 
          description={`Speak with our registered immigration consultants to assess your eligibility for ${dest.name} and create a customized roadmap.`}
        />

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
