/**
 * Reusable JSON-LD structured data utilities for SEO.
 * All schemas follow Schema.org vocabulary and are output as JSON-LD.
 */

const BASE_URL = 'https://truevisaservices.in';
import { CONTACT_INFO } from '@/lib/contact';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Organization schema — represents the True Visa business entity */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'True Visa',
    legalName: 'True Visa Immigration Services',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.jpeg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone.raw,
      contactType: 'customer service',
      email: CONTACT_INFO.email.display,
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    sameAs: [] as string[], // Add real social media URLs when available
  };
}

/** LocalBusiness schema — for local SEO in Chandigarh */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'True Visa — Immigration & Visa Consultancy',
    image: `${BASE_URL}/logo.jpeg`,
    url: BASE_URL,
    telephone: CONTACT_INFO.phone.raw,
    email: CONTACT_INFO.email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.city,
      postalCode: CONTACT_INFO.address.postalCode,
      addressCountry: CONTACT_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.7333,
      longitude: 76.7794,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.7333,
        longitude: 76.7794,
      },
      geoRadius: '50000',
    },
    serviceArea: [
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'State', name: 'Punjab' },
      { '@type': 'State', name: 'Haryana' },
    ],
    description:
      'True Visa is a professional immigration and visa consultancy in Chandigarh offering expert guidance for study visas, work permits, permanent residency, and tourist visas to Canada, Australia, UK, USA, Germany, New Zealand, and UAE.',
  };
}

/** WebSite schema — enables Google Sitelinks Search Box */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'True Visa',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blogs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Service schema — for individual service pages */
export function getServiceSchema(service: {
  title: string;
  slug: string;
  intro: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.intro,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'True Visa',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Immigration Consultancy',
  };
}

/** BreadcrumbList schema */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/** FAQPage schema — for genuine FAQ content */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Article schema — for blog posts */
export function getArticleSchema(article: {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url: `${BASE_URL}/blogs/${article.slug}`,
    image: article.image || `${BASE_URL}/logo.jpeg`,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'True Visa',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.jpeg`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blogs/${article.slug}`,
    },
    ...(article.category && {
      articleSection: article.category,
    }),
  };
}

/**
 * Helper component to render JSON-LD script tag.
 * Use in Server Components: <JsonLd data={getOrganizationSchema()} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
