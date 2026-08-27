import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Blog — Visa Guides, Tips & Policy Updates',
  description: 'Read expert immigration guides, visa tips, and policy updates from True Visa. Learn about study visas, work permits, PR pathways, and country-specific immigration processes.',
  alternates: {
    canonical: 'https://truevisaservices.in/blogs',
  },
  openGraph: {
    title: 'Immigration Blog & Visa Guides | True Visa',
    description: 'Read expert immigration guides, visa tips, and policy updates. Learn about study visas, work permits, PR pathways, and country-specific immigration processes.',
    url: 'https://truevisaservices.in/blogs',
  }
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
