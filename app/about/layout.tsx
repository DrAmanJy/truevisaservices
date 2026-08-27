import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About True Visa — Immigration Consultants in Chandigarh',
  description: 'Learn about True Visa, a trusted immigration consultancy in Chandigarh. Meet our team of expert visa consultants dedicated to helping students, professionals, and families achieve their global mobility goals.',
  alternates: {
    canonical: 'https://truevisaservices.in/about',
  },
  openGraph: {
    title: 'About True Visa — Immigration Consultants in Chandigarh',
    description: 'Learn about True Visa, a trusted immigration consultancy in Chandigarh. Meet our team of expert visa consultants dedicated to helping you achieve your global mobility goals.',
    url: 'https://truevisaservices.in/about',
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
