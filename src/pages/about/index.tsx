import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Shield, Clock, Wrench, BadgeCheck, Phone, Star, MapPin, Home } from 'lucide-react';

const AboutUs = () => {
  const companyStats = [
    {
      number: "25+",
      unit: "Years",
      label: "Experience",
      icon: Shield
    },
    {
      number: "500+",
      unit: "Projects",
      label: "Completed",
      icon: Home
    },
    {
      number: "100%",
      unit: "Areas",
      label: "Vancouver Coverage",
      icon: MapPin
    }
  ];

  const expertise = [
    {
      title: "Premium Materials",
      description: "We use only the highest quality roofing materials from trusted manufacturers, ensuring long-lasting protection for your property.",
      icon: Shield,
      highlight: true
    },
    {
      title: "Expert Installation",
      description: "Our certified team brings decades of experience to every project, delivering precise installation and attention to detail.",
      icon: Wrench
    },
    {
      title: "Comprehensive Service",
      description: "From initial consultation to final inspection, we provide end-to-end roofing solutions tailored to your needs.",
      icon: BadgeCheck
    },
    {
      title: "Customer Commitment",
      description: "We prioritize clear communication, timely service, and complete customer satisfaction on every project.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-[#2C3E50] text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/1.jpg"
            alt="Professional Roofing Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Vancouver&apos;s Trusted
              <span className="text-[#E74C3C]"> Roofing Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#BDC3C7] mb-8">
              Over 25 years of excellence in residential and commercial roofing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:7786542681"
                className="inline-flex items-center justify-center gap-2 bg-[#E74C3C] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#D44332] transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                Call: (778) 654-2681
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#2C3E50] transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="bg-[#34495E] p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <stat.icon className="w-8 h-8 text-[#E74C3C]" />
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{stat.number}</span>
                      <span className="text-lg text-[#BDC3C7]">{stat.unit}</span>
                    </div>
                    <span className="text-[#BDC3C7]">{stat.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">Why Choose Vancouver Premier Roofers?</h2>
            <div className="w-24 h-1 bg-[#E74C3C] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl ${
                  item.highlight 
                    ? 'bg-[#2C3E50] text-white' 
                    : 'bg-[#F5F5F0]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <item.icon className={`w-8 h-8 ${
                    item.highlight ? 'text-[#E74C3C]' : 'text-[#2C3E50]'
                  }`} />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      item.highlight ? 'text-white' : 'text-[#2C3E50]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={
                      item.highlight ? 'text-[#BDC3C7]' : 'text-[#5D6D7E]'
                    }>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">Common Questions</h2>
            <div className="w-24 h-1 bg-[#E74C3C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">How experienced is your team?</h3>
                <p className="text-[#5D6D7E]">Our team brings over 25 years of professional roofing experience. Every team member is certified, insured, and regularly trained on the latest techniques.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">What types of roofs do you work with?</h3>
                <p className="text-[#5D6D7E]">We work with all roofing types including asphalt shingles, metal roofing, flat roofs, and built-up roofing systems for both residential and commercial properties.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">What areas do you service?</h3>
                <p className="text-[#5D6D7E]">We provide comprehensive roofing services throughout Vancouver and surrounding areas, with 24/7 emergency coverage for our entire service area.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">Do you offer warranties?</h3>
                <p className="text-[#5D6D7E]">Yes, we provide comprehensive warranties on both materials and workmanship. Our installations are backed by manufacturer warranties and our own service guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2C3E50] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Start Your Roofing Project?
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              href="tel:7786542681"
              className="inline-flex items-center gap-2 bg-[#E74C3C] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#D44332] transition-colors group"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              Call Now: (778) 654-2681
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#2C3E50] transition-colors"
            >
              Schedule Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;