import { Home, Shield, AlertTriangle, ClipboardCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const Services = () => {
  const availableServices = [
    {
      title: "Residential Roofing",
      description: "Complete roof replacements to repairs, we provide comprehensive residential roofing services using premium materials and expert installation techniques.",
      link: '/services/residential-roofing',
      icon: <Home className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/1.jpg"
    },
    {
      title: "Commercial Roofing",
      description: "Professional solutions designed for durability and efficiency. We work with all types of commercial roofing systems, including flat roofs and metal roofing.",
      link: '/services/commercial',
      icon: <Shield className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/2.jpg"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency repair service ensures your property is protected. We respond quickly to prevent water damage and restore your roof's integrity.",
      link: '/services/emergency',
      icon: <AlertTriangle className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/3.jpg"
    },
    {
      title: "Maintenance & Inspections",
      description: "Regular maintenance extends your roof's lifespan and prevents costly repairs. Our comprehensive inspection programs keep your roof in optimal condition.",
      link: '/services/maintenance',
      icon: <ClipboardCheck className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/4.jpg"
    }
  ];

  const handleOpenService = (link: string) => {
    window.location.href = link;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Professional Roofing Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3E50]">
            Vancouver&apos;s Most Trusted
            <span className="block text-[#E74C3C]">Roofing Solutions</span>
          </h1>
          <p className="text-xl text-[#5D6D7E] max-w-2xl mx-auto">
            Expert roofing services for residential and commercial properties. 
            Quality craftsmanship backed by over 25 years of experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {availableServices.map((service, index) => (
            <div
              key={index}
              onClick={() => handleOpenService(service.link)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/80 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-[#2C3E50]">{service.title}</h3>
                </div>
                <p className="text-[#5D6D7E] mb-4">{service.description}</p>
                <div className="flex items-center text-[#E74C3C] font-medium">
                  Learn More 
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">
              Why Choose Vancouver Premier Roofers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">Licensed & Insured</h3>
                <p className="text-[#5D6D7E]">Fully licensed and insured for your protection</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <Home className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">25+ Years Experience</h3>
                <p className="text-[#5D6D7E]">Decades of professional roofing expertise</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <AlertTriangle className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">24/7 Emergency Service</h3>
                <p className="text-[#5D6D7E]">Always available when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;