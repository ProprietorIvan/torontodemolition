import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you start a demolition project?",
      answer:
        "We typically can start most projects within 1-2 business days after receiving all necessary permits. For emergency situations, we offer 24/7 service and can respond within hours. The exact timeline depends on the project size, complexity, and required permits.",
    },
    {
      question: "Do you handle all the necessary permits?",
      answer:
        "Yes, we handle all required permits for demolition projects, including building permits, environmental permits, and any other necessary documentation. Our team is experienced in navigating Toronto's permitting process and will ensure all legal requirements are met.",
    },
    {
      question: "What areas in Toronto do you service?",
      answer:
        "We service the entire Greater Toronto Area (GTA), including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, and surrounding areas. Our team is equipped to handle projects of any size across the region.",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes, we provide free, detailed estimates for all demolition projects. Our estimates include a comprehensive breakdown of costs, timeline, and scope of work. We can provide estimates over the phone for basic projects or schedule an on-site visit for more complex jobs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#5D6D7E]">
            Common questions about our demolition services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-neutral-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-[#2C3E50]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#E74C3C]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#E74C3C]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-neutral-50">
                  <p className="text-[#5D6D7E]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#5D6D7E]">
            Still have questions?{" "}
            <a
              href="tel:6476974584"
              className="text-[#E74C3C] hover:text-[#D44332] transition-colors"
            >
              Call us at (647) 697-4584
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
