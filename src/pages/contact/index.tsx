import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Phone, Mail, Clock, MapPin, Send, Shield } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(778) 654-2681",
      link: "tel:+17786542681"
    },
    {
      icon: Mail,
      title: "Email",
      content: "office@roofsvancouver.com",
      link: "mailto:office@roofsvancouver.com"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "24/7 Emergency Service Available",
      link: null
    },
    {
      icon: Shield,
      title: "Service Coverage",
      content: "Greater Vancouver Area",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />
      <section className="relative bg-[#2C3E50] py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/photos/homepage/1.jpg"
            alt="Professional Roofing Services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/80 to-[#2C3E50]/100" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get Your Free Roofing
            <span className="block text-[#E74C3C]">Consultation Today</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#BDC3C7] max-w-2xl mx-auto">
            Expert roofing solutions for residential and commercial properties
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E74C3C]/10 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-[#E74C3C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-[#E74C3C] hover:text-[#D44332] transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-[#5D6D7E]">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
            Request a Free Estimate
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-[#2C3E50] mb-1">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                required
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="multi-family">Multi-Family</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                placeholder="Please describe your roofing needs..."
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-[#E74C3C] hover:bg-[#D44332] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E74C3C] transition-all duration-300 text-lg font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Get Free Estimate
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-[#2C3E50] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Emergency Roofing Service?
          </h2>
          <p className="text-[#BDC3C7] mb-8">
            24/7 emergency response available for urgent roofing issues
          </p>
          <a
            href="tel:+17786542681"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E74C3C] text-white hover:bg-[#D44332] transition-all duration-300 text-lg font-medium"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (778) 654-2681
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;