import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Visa Consultation in Chandigarh',
  description: 'Get in touch with True Visa for a free immigration consultation. Visit our office in Chandigarh or call us. Our expert visa consultants are ready to help you with study, work, PR, and tourist visas.',
  alternates: {
    canonical: 'https://truevisaservices.in/contact',
  },
  openGraph: {
    title: 'Contact Us — Book a Free Visa Consultation | True Visa',
    description: 'Get in touch with True Visa for a free immigration consultation. Visit our office in Chandigarh or call us to discuss your visa requirements.',
    url: 'https://truevisaservices.in/contact',
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
