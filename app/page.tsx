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
import LatestPPR from '@/components/LatestPPR';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';
import PageTransition from '@/components/PageTransition';
import fs from 'fs';
import path from 'path';

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
  // Read PPR images dynamically
  const pprDir = path.join(process.cwd(), 'public/ppr');
  let pprImages: { src: string; country: string }[] = [];
  try {
    if (fs.existsSync(pprDir)) {
      const files = fs.readdirSync(pprDir);
      const fileDetails = files
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp';
        })
        .map(file => {
          const filePath = path.join(pprDir, file);
          const stat = fs.statSync(filePath);
          return {
            name: file,
            mtime: stat.mtimeMs,
          };
        });

      // Sort by modification time descending (latest first)
      fileDetails.sort((a, b) => b.mtime - a.mtime);

      pprImages = fileDetails.map(f => {
        let country = 'Visa Granted';
        const lowerName = f.name.toLowerCase();
        
        // Match specific initial files or deduce from name
        if (f.name === 'WhatsApp Image 2026-08-29 at 11.36.05 AM.jpeg' || f.name === 'WhatsApp Image 2026-08-29 at 11.36.06 AM.jpeg') {
          country = 'Canada';
        } else if (f.name === 'WhatsApp Image 2026-08-29 at 11.36.07 AM.jpeg' || f.name === 'WhatsApp Image 2026-08-29 at 11.36.07 AM (1).jpeg') {
          country = 'Australia';
        } else if (lowerName.includes('canada')) {
          country = 'Canada';
        } else if (lowerName.includes('australia') || lowerName.includes('vevo')) {
          country = 'Australia';
        } else if (lowerName.includes('uk') || lowerName.includes('united kingdom')) {
          country = 'United Kingdom';
        } else if (lowerName.includes('usa') || lowerName.includes('united states')) {
          country = 'United States';
        } else if (lowerName.includes('germany') || lowerName.includes('europe')) {
          country = 'Europe';
        }
        return {
          src: `/ppr/${f.name}`,
          country,
        };
      });
    }
  } catch (error) {
    console.error('Failed to read PPR directory:', error);
  }

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
        <LatestPPR images={pprImages} />
        <Blogs />
        <FAQ limit={5} />
        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
