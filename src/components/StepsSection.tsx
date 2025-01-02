import React from 'react';
import { Phone, ClipboardCheck, Building2, HardHat, CheckCircle2, Award, Calendar, ArrowRight } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Free Consultation",
      description: "Connect with our demolition experts for a free consultation. We discuss your project requirements, timeline, and specific needs to provide tailored solutions."
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Site Inspection",
      description: "Our team conducts a thorough site assessment, examining structural elements and identifying potential challenges to ensure a safe and efficient demolition process."
    },
    {
      icon: Calendar,
      number: "03",
      title: "Project Timeline",
      description: "We develop a detailed project timeline and comprehensive plan, ensuring every aspect of the demolition is carefully scheduled and coordinated."
    },
    {
      icon: Building2,
      number: "04",
      title: "Permit Processing",
      description: "Our experts handle all necessary permits and documentation, ensuring full compliance with local regulations and building codes."
    },
    {
      icon: HardHat,
      number: "05",
      title: "Controlled Demolition",
      description: "Using state-of-the-art equipment and proven techniques, we execute the demolition with precision while maintaining strict safety standards."
    },
    {
      icon: CheckCircle2,
      number: "06",
      title: "Site Cleanup",
      description: "We manage complete site cleanup and material removal, ensuring your property is ready for the next phase of development."
    },
    {
      icon: Award,
      number: "07",
      title: "Final Approval",
      description: "A thorough final inspection ensures all work meets our high standards and your requirements, completing your successful demolition project."
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            7 STEPS TOWARDS
            <span className="block text-[#8B2635] mt-2">PROJECT SUCCESS</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-[#8B2635]"></div>
            <p className="mx-6 text-lg text-gray-600 font-medium">Professional Demolition Process</p>
            <div className="h-1 w-16 bg-[#8B2635]"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our proven seven-step approach ensures every demolition project is executed 
            with precision, safety, and professionalism.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative group">
                  {/* Desktop Timeline Line */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-gray-200 group-hover:bg-[#8B2635]/20 transition-colors"></div>
                  )}

                  <div className={`flex flex-col md:flex-row items-start ${isEven ? '' : 'md:flex-row-reverse'} gap-6 md:gap-12`}>
                    {/* Icon Container */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#8B2635] flex items-center justify-center 
                                   transition-all group-hover:shadow-lg group-hover:scale-105 group-hover:bg-[#7A2230]">
                        <StepIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white 
                                   shadow-md border-2 border-[#8B2635] flex items-center justify-center 
                                   text-xs md:text-sm font-bold text-[#8B2635]">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-grow md:max-w-xl pl-6 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'} 
                                   group-hover:transform group-hover:-translate-y-1 transition-transform`}>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button 
            onClick={() => window.location.href = 'mailto:projects@torontodemolition.com'}
            className="group bg-[#8B2635] text-white px-8 py-4 rounded-lg text-lg font-medium 
                     transition-all hover:bg-[#7A2230] hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;