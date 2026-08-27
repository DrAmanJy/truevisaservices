import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/contact/FloatingWhatsApp';
import { JsonLd, getOrganizationSchema, getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'True Visa — Visa & Immigration Consultancy in Chandigarh',
    template: '%s | True Visa',
  },
  description:
    'True Visa is a trusted immigration and visa consultancy in Chandigarh. Expert guidance for study visas, work permits, PR, tourist visas, and family sponsorship to Canada, Australia, UK, USA, Germany, New Zealand, and UAE.',
  keywords: [
    'visa consultant in Chandigarh',
    'immigration consultancy',
    'visa services',
    'study visa consultant',
    'work visa consultant',
    'PR visa consultant',
    'Canada immigration consultant',
    'Australia visa consultant',
    'UK visa services',
    'USA visa consultant',
    'True Visa',
  ],
  authors: [{ name: 'True Visa', url: siteUrl }],
  creator: 'True Visa',
  publisher: 'True Visa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'True Visa — Visa & Immigration Consultancy in Chandigarh',
    description:
      'Expert immigration and visa consultancy for students, professionals, and families. Study visas, work permits, PR, and tourist visas for Canada, Australia, UK, USA, and more.',
    url: siteUrl,
    siteName: 'True Visa',
    images: [
      {
        url: `${siteUrl}/logo.jpeg`,
        alt: 'True Visa — Immigration & Visa Consultancy in Chandigarh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Visa — Visa & Immigration Consultancy in Chandigarh',
    description:
      'Expert immigration and visa consultancy for students, professionals, and families planning their international journey.',
    images: [`${siteUrl}/logo.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'immigration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-[#FAFAF8] text-[#2A2522]`}>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
