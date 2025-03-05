import { Building2, Building, Wrench, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Image from "next/image";

const Services = () => {
  const availableServices = [
    {
      title: "Residential Demolition",
      description:
        "From single-family homes to multi-unit buildings, we provide safe and efficient residential demolition services with minimal disruption to surrounding areas.",
      link: "/services/residential-demolition",
      icon: <Building2 className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/1.jpg",
    },
    {
      title: "Commercial Demolition",
      description:
        "Professional commercial demolition services for businesses and developers. We handle large-scale projects with state-of-the-art equipment and safety protocols.",
      link: "/services/commercial-demolition",
      icon: <Building className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/2.jpg",
    },
    {
      title: "Selective Demolition",
      description:
        "When you need to preserve certain parts of a structure while removing others, our selective demolition service ensures precise and controlled removal.",
      link: "/services/selective-demolition",
      icon: <Wrench className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/3.jpg",
    },
    {
      title: "Site Clearing",
      description:
        "Comprehensive site clearing services including tree removal, debris clearing, and site preparation for new construction. We ensure your site is ready for the next phase.",
      link: "/services/site-clearing",
      icon: <Trash2 className="w-6 h-6 text-[#E74C3C]" />,
      image: "/photos/homepage/4.jpg",
    },
  ];

  const handleOpenService = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Professional Demolition Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3E50]">
            Toronto&apos;s Premier
            <span className="block text-[#E74C3C]">Demolition Solutions</span>
          </h1>
          <p className="text-xl text-[#5D6D7E] max-w-2xl mx-auto">
            Expert demolition services for residential and commercial
            properties. Safe, efficient, and environmentally responsible
            demolition backed by over 15 years of experience.
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
                  <h3 className="text-2xl font-bold text-[#2C3E50]">
                    {service.title}
                  </h3>
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
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
              Why Choose The Demolition Company of Toronto?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <Building className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">
                  Licensed & Insured
                </h3>
                <p className="text-[#5D6D7E]">
                  Fully licensed and insured for your protection
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <Building2 className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">
                  15+ Years Experience
                </h3>
                <p className="text-[#5D6D7E]">
                  Decades of professional demolition expertise
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-[#E74C3C] mb-4">
                  <Trash2 className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C3E50]">
                  Environmental Responsibility
                </h3>
                <p className="text-[#5D6D7E]">
                  Sustainable waste management and recycling
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
