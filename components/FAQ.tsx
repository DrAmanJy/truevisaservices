'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { faqs, type FAQItem } from '@/lib/faqData';

interface FAQProps {
  limit?: number;
  showSchema?: boolean;
  items?: FAQItem[];
}

export default function FAQ({ limit, showSchema, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = items || faqs;
  const displayedFaqs = limit ? faqData.slice(0, limit) : faqData;

  return (
    <section className="py-24 bg-white">
      {/* FAQPage JSON-LD — only on the dedicated FAQ page */}
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: displayedFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase mb-2"
          >
            Clear Doubts
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-navy"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-royal bg-royal/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-navy pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-royal text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                {/* 
                  CRITICAL FOR SEO/AEO: The answer is ALWAYS in the DOM (server-rendered HTML).
                  We toggle visibility with CSS max-height + overflow, NOT by conditionally mounting/unmounting.
                  This ensures crawlers (Google, GPTBot, ClaudeBot, Perplexity) can see every answer.
                */}
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
