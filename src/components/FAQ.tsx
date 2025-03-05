import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements take 2-4 days to complete, depending on the size of your roof, weather conditions, and the type of materials being installed. We'll provide you with a specific timeline during your consultation."
    },
    {
      question: "Do you provide warranties on your roofing work?",
      answer: "Yes, we provide comprehensive warranties on both materials and workmanship. Our installations come with a 10-year workmanship warranty, and manufacturer warranties on materials typically range from 25-50 years depending on the product chosen."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured in Vancouver. We carry comprehensive liability insurance and WorkSafeBC coverage for all our workers to ensure your complete protection throughout the project."
    },
    {
      question: "What roofing materials do you work with?",
      answer: "We work with all major roofing materials including asphalt shingles, metal roofing, cedar shakes, slate, and flat roofing systems. During your consultation, we'll help you choose the best material for your specific needs and budget."
    },
    {
      question: "Do you offer emergency roof repair services?",
      answer: "Yes, we provide 24/7 emergency roof repair services for urgent issues like leaks or storm damage. Our team will respond quickly to prevent further damage to your property."
    },
    {
      question: "What should I expect during the consultation process?",
      answer: "During the consultation, our expert will thoroughly inspect your roof, discuss your needs and concerns, and provide a detailed written estimate. We'll explain all your options and help you make an informed decision about your roofing project."
    }
  ];

  return (
    <section className="py-16 px-5" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
              Get answers to common questions about our roofing services
            </p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-neutral-200 dark:divide-slate-400">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;