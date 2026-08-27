import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'About True Visa — Immigration Consultants in Chandigarh',
  description: 'Learn about True Visa, a trusted immigration consultancy in Chandigarh. Meet our team of expert visa consultants dedicated to helping students, professionals, and families achieve their global mobility goals.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About True Visa — Immigration Consultants in Chandigarh',
    description: 'Learn about True Visa, a trusted immigration consultancy in Chandigarh. Meet our team of expert visa consultants dedicated to helping you achieve your global mobility goals.',
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'About True Visa — Immigration Consultants in Chandigarh' }],
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
