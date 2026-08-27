import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  title: 'Visa & Immigration Services — Study, Work, PR & Tourist Visas',
  description: 'Explore comprehensive visa and immigration services by True Visa. We offer study visa, work permit, permanent residency, business visa, tourist visa, and family sponsorship services with expert guidance.',
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: 'Visa & Immigration Services | True Visa',
    description: 'Explore comprehensive visa and immigration services — study visas, work permits, PR, business visas, tourist visas, and family sponsorship with expert guidance.',
    url: `${siteUrl}/services`,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'True Visa Immigration Services' }],
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
