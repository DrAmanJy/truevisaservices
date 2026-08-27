import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'Immigration Destinations — Canada, Australia, UK, USA, Germany & More',
  description: 'Discover top immigration destinations with True Visa. Get expert guidance for visas and permanent residency to Canada, Australia, UK, USA, Germany, New Zealand, and UAE.',
  alternates: {
    canonical: `${siteUrl}/destinations`,
  },
  openGraph: {
    title: 'Immigration Destinations | True Visa',
    description: 'Discover top immigration destinations — Canada, Australia, UK, USA, Germany, New Zealand, and UAE. Expert guidance for your global journey.',
    url: `${siteUrl}/destinations`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'Immigration Destinations by True Visa' }],
  }
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
