import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ScrollingTextMarquee from '@/components/ScrollingTextMarquee';
import TrustStats from '@/components/TrustStats';
import PartnersMarquee from '@/components/PartnersMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';
import PageTransition from '@/components/PageTransition';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'True Visa — Visa & Immigration Consultant in Chandigarh | Study, Work & PR Visa',
  description:
    'True Visa is a leading immigration and visa consultancy in Chandigarh. We offer expert guidance for study visas, work permits, permanent residency, tourist visas, and family sponsorship to Canada, Australia, UK, USA, Germany, NZ, and UAE. Book a free consultation today.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'True Visa — Visa & Immigration Consultant in Chandigarh',
    description:
      'Leading immigration consultancy in Chandigarh offering study visas, work permits, PR, and tourist visas to Canada, Australia, UK, USA, and more. Free consultation available.',
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen">
        <Hero />
        <TrustStats />
        <ScrollingTextMarquee />
        <PartnersMarquee />
        <About />
        <Services />
        <Destinations />
        <Process />
        <WhyChooseUs />
        <Blogs />
        <FAQ limit={5} />
        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
