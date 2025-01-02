import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "How long does a typical demolition project take?",
      answer: "Project duration varies based on size and complexity. Small residential demolitions can be completed in 1-3 days, while larger commercial projects may take several weeks. We provide detailed timelines during consultation and ensure efficient execution while maintaining safety standards."
    },
    {
      question: "Do you provide free estimates for demolition work?",
      answer: "Yes, we provide comprehensive free estimates for all demolition projects. Our team will conduct a thorough site assessment, evaluate project requirements, and provide you with a detailed written quote including timeline and scope of work."
    },
    {
      question: "Are you licensed and insured for demolition work?",
      answer: "Absolutely. We are fully licensed, bonded, and insured for all types of demolition work. Our team maintains comprehensive liability insurance and follows all safety regulations and local building codes. We provide documentation of our credentials upon request."
    },
    {
      question: "How quickly can you respond to emergency demolition needs?",
      answer: "We offer 24/7 emergency demolition services and can typically respond within 2-4 hours for urgent situations. For standard projects, we can usually begin work within 48-72 hours after permit approval."
    },
    {
      question: "What safety measures do you implement during demolition?",
      answer: "Safety is our top priority. We implement comprehensive safety protocols including site containment, dust control, proper equipment operation, and continuous monitoring. Our team is fully trained in OSHA safety standards and uses state-of-the-art safety equipment."
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Common Questions
            </h2>
            <div className="h-1 w-12 bg-[#8B2635] mb-6"></div>
            <p className="text-lg text-gray-600">
              Everything you need to know about our professional demolition services. 
              If you have additional questions, feel free to contact our team.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100" 
                  key={index}
                >
                  <details className="group">
                    <summary 
                      className="flex justify-between items-center p-6 cursor-pointer list-none
                               text-lg font-medium hover:text-[#8B2635] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className="h-5 w-5 transition-transform duration-300
                                 group-open:rotate-180 text-[#8B2635]" 
                      />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
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