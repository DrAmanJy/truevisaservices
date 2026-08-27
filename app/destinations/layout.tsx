import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Destinations — Canada, Australia, UK, USA, Germany & More',
  description: 'Discover top immigration destinations with True Visa. Get expert guidance for visas and permanent residency to Canada, Australia, UK, USA, Germany, New Zealand, and UAE.',
  alternates: {
    canonical: 'https://truevisaservices.in/destinations',
  },
  openGraph: {
    title: 'Immigration Destinations | True Visa',
    description: 'Discover top immigration destinations — Canada, Australia, UK, USA, Germany, New Zealand, and UAE. Expert guidance for your global journey.',
    url: 'https://truevisaservices.in/destinations',
  }
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
