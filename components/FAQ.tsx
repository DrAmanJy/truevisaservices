'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the visa process take?',
    answer: 'Processing times vary significantly depending on the visa type and destination country. A tourist visa might take a few weeks, while permanent residency can take 6-12 months or more. We will provide a specific timeline during your consultation.',
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'No genuine consultant can guarantee a visa approval, as the final decision rests solely with the immigration authorities. However, we guarantee that we will prepare the strongest possible application to maximize your chances.',
  },
  {
    question: 'What are your consultation fees?',
    answer: 'Your initial profile assessment and consultation are completely free. Once we determine your eligibility and you choose to proceed, our service fees are structured transparently based on the specific visa category.',
  },
  {
    question: 'Can you help if I have a previous visa refusal?',
    answer: 'Yes. We have a dedicated team that analyzes past refusals, identifies the issues, and prepares robust re-applications addressing the concerns raised by the immigration officers.',
  },
  {
    question: 'Which countries do you provide visa services for?',
    answer: 'We specialize in immigration and visa services for major destinations including Canada, Australia, the United Kingdom, the United States, Germany, New Zealand, and the UAE. Our team stays updated with the latest immigration policies of these countries.',
  },
  {
    question: 'What is the IELTS/PTE score required for a study visa?',
    answer: 'The required English language proficiency score depends on the country, university, and the specific program you are applying for. Generally, an IELTS score of 6.0 to 6.5 (or equivalent PTE) is standard for undergraduate programs, while postgraduate programs may require 6.5 to 7.0. We provide guidance on test preparation as well.',
  },
  {
    question: 'How do I know which visa category is right for me?',
    answer: 'During your initial free consultation, our expert counselors will evaluate your profile—including your age, education, work experience, and goals—to recommend the most suitable visa pathways for your unique situation.',
  },
  {
    question: 'What is the Express Entry system for Canada PR?',
    answer: 'Express Entry is an online system used by the Canadian government to manage applications for permanent residence from skilled workers. It uses a points-based system (Comprehensive Ranking System or CRS) to rank candidates based on factors like age, education, language skills, and work experience.',
  },
  {
    question: 'Can my family accompany me on a student or work visa?',
    answer: 'In many cases, yes. Countries like Canada, Australia, and the UK often allow spouses and dependent children to accompany the primary visa holder. Spouses may even be eligible for open work permits. We will guide you on the dependent visa process based on your chosen destination.',
  },
  {
    question: 'What documents are generally required for a visa application?',
    answer: 'Common documents include a valid passport, educational transcripts, proof of English proficiency (like IELTS), financial documents (bank statements), work experience letters, a statement of purpose, and medical/police clearances. The exact list varies by visa type and country.',
  },
  {
    question: 'Do you provide post-landing services?',
    answer: 'Yes! Our support does not end with visa approval. We offer comprehensive post-landing assistance including airport pickup arrangements, temporary accommodation guidance, help with setting up bank accounts, and general orientation to your new country.',
  },
  {
    question: 'Is there an age limit for applying for Permanent Residency?',
    answer: 'While there is no strict upper age limit for most PR programs, points-based systems (like those in Canada and Australia) typically award the highest points to applicants between the ages of 18 and 35. After age 35, the points for age begin to decrease, but this can often be offset by high scores in other areas like work experience or language proficiency.',
  },
];

interface FAQProps {
  limit?: number;
  showSchema?: boolean;
}

export default function FAQ({ limit, showSchema }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

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
                >
                  <span className="text-lg font-bold text-navy pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-royal text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
