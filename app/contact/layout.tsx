import type { Metadata } from 'next';
import { JsonLd, getLocalBusinessSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Visa Consultation in Chandigarh',
  description: 'Get in touch with True Visa for a free immigration consultation. Visit our office in Chandigarh or call us. Our expert visa consultants are ready to help you with study, work, PR, and tourist visas.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us — Book a Free Visa Consultation | True Visa',
    description: 'Get in touch with True Visa for a free immigration consultation. Visit our office in Chandigarh or call us to discuss your visa requirements.',
    url: `${siteUrl}/contact`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'Contact True Visa — Book a Free Visa Consultation' }],
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ProfessionalService/LocalBusiness schema on the contact page for local SEO */}
      <JsonLd data={getLocalBusinessSchema()} />
      {children}
    </>
  );
}
