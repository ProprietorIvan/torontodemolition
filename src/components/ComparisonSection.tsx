import React, { useState } from 'react';
import { Check, ArrowRight, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  url: string;
}

const ComparisonSection = () => {
  const services: Service[] = [
    {
      title: "RESIDENTIAL DEMOLITION",
      description: "Expert home demolition services including complete teardowns, interior demolition, and selective structural removal. We ensure safe and efficient residential demolition with minimal impact on surrounding properties.",
      buttonText: "LEARN MORE",
      image: "/photos/homepage/1.jpg",
      url: "/residential"
    },
    {
      title: "COMMERCIAL DEMOLITION",
      description: "Specialized in large-scale commercial demolition projects including office buildings, retail spaces, and warehouses. Our team brings decades of experience in safe commercial structure removal.",
      buttonText: "DISCOVER MORE",
      image: "/photos/homepage/2.jpg",
      url: "/commercial"
    },
    {
      title: "INDUSTRIAL DEMOLITION",
      description: "Complete industrial facility demolition services with expertise in factory teardowns, equipment removal, and complex structural dismantling. We prioritize safety and environmental compliance.",
      buttonText: "EXPLORE SERVICES",
      image: "/photos/homepage/3.jpg",
      url: "/industrial"
    },
    {
      title: "SELECTIVE DEMOLITION",
      description: "Precision selective demolition for renovation projects, interior remodeling, and partial structure removal. Our careful approach preserves designated areas while efficiently removing targeted sections.",
      buttonText: "VIEW DETAILS",
      image: "/photos/homepage/1.jpg",
      url: "/selective"
    }
  ];

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      {/* White separator section */}
      <div className="h-32 bg-white"></div>

      {/* Contact Banner */}
      <div className="bg-[#8B2635] relative">
        <div className="max-w-6xl mx-auto text-center py-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            24/7 Emergency Demolition
          </h2>
          
          <button
            onClick={() => copyToClipboard("6473610663", true)}
            className="w-full text-center transition-all duration-300 hover:scale-105 group"
          >
            <div 
              className={`inline-flex items-center gap-4 text-4xl md:text-6xl font-bold transition-colors duration-200 ${
                copiedPhone ? 'text-green-400' : 'text-white'
              }`}
            >
              {copiedPhone ? (
                <>
                  <span>Copied!</span>
                  <Check className="w-8 h-8 md:w-12 md:h-12 animate-in fade-in duration-200" />
                </>
              ) : (
                <>
                  <Phone className="w-8 h-8 md:w-12 md:h-12 text-white/80 group-hover:text-white transition-colors" />
                  <span>(647) 361-0663</span>
                </>
              )}
            </div>
          </button>

          <div className="flex justify-center mt-8">
            <button 
              onClick={() => copyToClipboard("projects@torontodemolition.com", false)}
              className={`${
                copiedEmail 
                  ? 'bg-green-400 scale-95' 
                  : 'bg-white text-[#8B2635] hover:bg-gray-100'
              } px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 text-lg font-medium`}
            >
              {copiedEmail ? (
                <>
                  <span>Copied!</span>
                  <Check className="w-5 h-5 animate-in fade-in duration-200" />
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Request Quote</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">DEMOLITION SERVICES</h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#8B2635]" />
              <p className="text-lg text-gray-600">Professional & Safe Demolition</p>
              <div className="h-px w-16 bg-[#8B2635]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-lg overflow-hidden hover:shadow-xl 
                         transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-2 text-[#8B2635] font-medium 
                             hover:gap-4 transition-all duration-300"
                  >
                    {service.buttonText}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;