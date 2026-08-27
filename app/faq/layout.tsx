import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa & Immigration FAQ — Common Questions Answered',
  description: 'Get answers to frequently asked questions about immigration, visa processing, documents required, timelines, and how True Visa can help you with your international journey.',
  alternates: {
    canonical: 'https://truevisaservices.in/faq',
  },
  openGraph: {
    title: 'Visa & Immigration FAQ | True Visa',
    description: 'Get answers to frequently asked questions about immigration, visa processing, documents, timelines, and working with True Visa.',
    url: 'https://truevisaservices.in/faq',
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
