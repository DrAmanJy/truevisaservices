import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'Visa & Immigration FAQ — Common Questions Answered',
  description: 'Get answers to frequently asked questions about immigration, visa processing, documents required, timelines, and how True Visa can help you with your international journey.',
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: 'Visa & Immigration FAQ | True Visa',
    description: 'Get answers to frequently asked questions about immigration, visa processing, documents, timelines, and working with True Visa.',
    url: `${siteUrl}/faq`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'True Visa FAQ — Immigration Questions Answered' }],
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
