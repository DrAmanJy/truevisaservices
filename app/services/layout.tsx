import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa & Immigration Services — Study, Work, PR & Tourist Visas',
  description: 'Explore comprehensive visa and immigration services by True Visa. We offer study visa, work permit, permanent residency, business visa, tourist visa, and family sponsorship services with expert guidance.',
  alternates: {
    canonical: 'https://truevisaservices.in/services',
  },
  openGraph: {
    title: 'Visa & Immigration Services | True Visa',
    description: 'Explore comprehensive visa and immigration services — study visas, work permits, PR, business visas, tourist visas, and family sponsorship with expert guidance.',
    url: 'https://truevisaservices.in/services',
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
