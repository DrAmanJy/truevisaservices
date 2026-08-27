import PageTransition from '@/components/PageTransition';
import FAQ from '@/components/FAQ';
import ConsultationForm from '@/components/ConsultationForm';
import { faqs } from '@/lib/faqData';
import { JsonLd, getFAQSchema } from '@/lib/schema';

/**
 * FAQ Page — Server Component
 * 
 * The FAQ JSON-LD schema is rendered server-side here (not in the client FAQ component)
 * so it's present in the initial HTML for crawlers. The interactive accordion behavior
 * is handled by the client-side FAQ component, which keeps answers in the DOM at all times.
 */
export default function FAQPage() {
  // Prepare FAQ data for the schema
  const faqSchemaData = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Server-rendered FAQPage JSON-LD schema */}
        <JsonLd data={getFAQSchema(faqSchemaData)} />

        <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Find clarity on the immigration process, our services, and specific visa queries.
            </p>
          </div>
        </section>

        {/* Interactive FAQ accordion — answers are always in the DOM for crawlers */}
        <FAQ />

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
