import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  orientation: 'left' | 'right';
  url: string;
}

interface ServiceCardProps {
  service: Service;
}

const ComparisonSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services: Service[] = [
    {
      title: "RESIDENTIAL ROOFING",
      description: "From complete roof replacements to repairs, we provide comprehensive residential roofing services using premium materials and expert installation techniques to protect your home for decades to come.",
      buttonText: "RESIDENTIAL SERVICES",
      image: "/photos/homepage/1.jpg",
      orientation: "right",
      url: "/services/residential-roofing"
    },
    {
      title: "COMMERCIAL ROOFING",
      description: "Our commercial roofing solutions are designed for durability and efficiency. We work with all types of commercial roofing systems, including flat roofs, metal roofing, and built-up roofing systems.",
      buttonText: "COMMERCIAL SERVICES",
      image: "/photos/homepage/2.jpg",
      orientation: "left",
      url: "/services/commercial"
    },
    {
      title: "EMERGENCY REPAIRS",
      description: "When disaster strikes, our 24/7 emergency repair service ensures your property is protected. We respond quickly to prevent water damage and restore your roof's integrity.",
      buttonText: "EMERGENCY SERVICES",
      image: "/photos/homepage/3.jpg",
      orientation: "right",
      url: "/services/emergency"
    },
    {
      title: "MAINTENANCE & INSPECTIONS",
      description: "Regular maintenance extends your roof's lifespan and prevents costly repairs. Our comprehensive inspection and maintenance programs keep your roof in optimal condition year-round.",
      buttonText: "MAINTENANCE SERVICES",
      image: "/photos/homepage/4.jpg",
      orientation: "left",
      url: "/services/maintenance"
    }
  ];

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    if (!mounted) return;
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

  const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div className={`flex flex-col md:flex-row items-center w-full gap-8 py-16 ${
      service.orientation === 'left' ? 'md:flex-row-reverse' : ''
    }`}>
      <div className="w-full md:w-1/2 relative group overflow-hidden h-[600px]">
        <a href={service.url} className="block cursor-pointer h-full">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 h-full">
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/0 to-[#2C3E50]/60 group-hover:to-[#2C3E50]/80 transition-all duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-[#BDC3C7]">Click to learn more about our {service.title.toLowerCase()} services</p>
            </div>
          </div>
        </a>
      </div>
      
      <div className="w-full md:w-1/2 px-6">
        <h2 className="text-4xl font-bold mb-6 tracking-wide text-[#2C3E50]">{service.title}</h2>
        <p className="text-lg text-[#5D6D7E] mb-8 leading-relaxed">{service.description}</p>
        <a 
          href={service.url}
          className="group inline-flex items-center gap-2 bg-[#E74C3C] text-white px-8 py-3 rounded-full hover:bg-[#D44332] transition-all duration-300"
        >
          {service.buttonText}
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* Contact Banner Section */}
      <div className="bg-gradient-to-b from-[#2C3E50] to-[#1a2530] w-full p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Protect Your Property with Vancouver Premier Roofers
        </h1>
        
        <div className="flex justify-center">
          <svg className="w-16 h-16 mb-6 text-[#E74C3C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
          </svg>
        </div>
        
        {mounted && (
          <button
            onClick={() => copyToClipboard("7786542681", true)}
            className="w-full text-center transition-transform duration-200"
          >
            <div 
              className={`text-4xl md:text-6xl font-black tracking-wider mb-8 text-center transition-colors duration-200 ${
                copiedPhone ? 'text-[#27AE60]' : 'text-white'
              }`}
              style={{
                textShadow: '4px 4px 0 rgba(0,0,0,0.3)',
              }}
            >
              {copiedPhone ? (
                <div className="flex items-center justify-center gap-4">
                  <span>Copied!</span>
                  <Check className="w-8 h-8 md:w-12 md:h-12 animate-in fade-in duration-200" />
                </div>
              ) : (
                '(778) 654-2681'
              )}
            </div>
          </button>
        )}

        <h2 className="text-xl md:text-2xl text-[#BDC3C7] text-center mb-6">
          Contact Us for a Professional Roofing Consultation
        </h2>

        {mounted && (
          <div className="flex justify-center">
            <button 
              onClick={() => copyToClipboard("office@roofsvancouver.com", false)}
              className={`${
                copiedEmail 
                  ? 'bg-[#27AE60] text-white scale-95' 
                  : 'bg-[#E74C3C] text-white hover:bg-[#D44332]'
              } px-8 py-2 font-medium rounded-full transition-all duration-300 flex items-center gap-2`}
            >
              {copiedEmail ? (
                <>
                  <span>Copied!</span>
                  <Check className="w-5 h-5 animate-in fade-in duration-200" />
                </>
              ) : (
                'Email Us'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Services Section */}
      <section className="py-16 px-5 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 text-[#2C3E50]">OUR SERVICES</h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#E74C3C]" />
              <p className="text-lg text-[#5D6D7E]">Expert Roofing Solutions</p>
              <div className="h-px w-16 bg-[#E74C3C]" />
            </div>
            <p className="max-w-3xl mx-auto text-lg text-[#5D6D7E] leading-relaxed">
              With over 25 years of experience, we deliver professional roofing services 
              for both residential and commercial properties. Our certified team ensures 
              quality installations, repairs, and maintenance using premium materials and 
              industry-leading techniques.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;