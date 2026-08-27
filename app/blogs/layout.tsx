import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'Immigration Blog — Visa Guides, Tips & Policy Updates',
  description: 'Read expert immigration guides, visa tips, and policy updates from True Visa. Learn about study visas, work permits, PR pathways, and country-specific immigration processes.',
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: 'Immigration Blog & Visa Guides | True Visa',
    description: 'Read expert immigration guides, visa tips, and policy updates. Learn about study visas, work permits, PR pathways, and country-specific immigration processes.',
    url: `${siteUrl}/blogs`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'True Visa Immigration Blog' }],
  }
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
