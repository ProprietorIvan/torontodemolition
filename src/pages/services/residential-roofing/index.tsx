import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Wrench,
  CheckCircle2,
  Award,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import SuccessScreen from "@/components/SuccessScreen";

interface FormData {
  name: string;
  phone: string;
  address: string;
  details: string;
  formType: string;
  email?: string;
}

const ResidentialRoofing = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    details: "",
    email: "",
    formType: "residential-estimate",
  });

  const handleContact = () => {
    window.location.href = "tel:+17786542681";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the shared email handler API
    const submissionData = {
      ...formData,
      serviceType: "residential-roofing", // Identifier for the API to know which landing page this came from
      projectDetails: formData.details, // Map details field to projectDetails for the API
      facilityType: "Residential", // Set default facility type for residential
      projectSize: "", // Optional field
      urgency: "standard", // Setting default urgency level
    };

    try {
      // Send email notification using the shared email handler API
      const emailResponse = await fetch("/api/handler_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email notification");
      }

      // Show success message and reset form
      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        address: "",
        details: "",
        email: "",
        formType: "residential-estimate",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const serviceFeatures = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Installation",
      description: "Professional roofing with premium materials and techniques",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Lifetime Warranty",
      description: "Guaranteed protection for your investment",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Service",
      description: "Efficient installation with minimal disruption",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Team",
      description: "Licensed and insured roofing professionals",
    },
  ];

  const roofingServices = [
    {
      title: "Roof Replacement",
      points: [
        "Complete roof system installation",
        "Premium material options",
        "Expert tear-off and disposal",
        "Extended warranties available",
      ],
    },
    {
      title: "Roof Repairs",
      points: [
        "Leak detection and repair",
        "Shingle replacement",
        "Storm damage restoration",
        "Preventive maintenance",
      ],
    },
    {
      title: "Roofing Components",
      points: [
        "Ventilation systems",
        "Gutter installation",
        "Skylight integration",
        "Chimney flashing",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Roof inspections",
        "Attic insulation",
        "Ice dam prevention",
        "Emergency repairs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-neutral-100 to-[#F5F5F0]">
        <div className="absolute inset-0 bg-grid-neutral-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Residential Roofing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
                Protect Your
                <span className="block text-[#E74C3C]">Home Future</span>
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 leading-relaxed">
                Expert residential roofing services with premium materials and
                professional installation. Protecting Vancouver homes with
                quality craftsmanship for over 25 years.
              </p>

              <button
                onClick={handleContact}
                className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D44332] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Professional Residential Roofing"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
              Expert Roofing Services
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Professional residential roofing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F5F5F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[#E74C3C] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">
                  {feature.title}
                </h3>
                <p className="text-[#5D6D7E]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
              Our Services
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Comprehensive roofing solutions for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roofingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E74C3C]" />
                      <span className="text-[#5D6D7E]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2C3E50]">
                Quality Guaranteed
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-6 leading-relaxed">
                Our expert team ensures your roof is built to last, using
                premium materials and professional installation techniques to
                protect your home for decades to come.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive roof inspection",
                  "Premium material selection",
                  "Expert installation process",
                  "Extended warranty options",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E74C3C]" />
                    <span className="text-[#5D6D7E] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/4.jpg"
                alt="Quality Roofing Results"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Professional service • Quality materials • Expert installation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#2C3E50] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#2C3E50] mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2C3E50] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-[#2C3E50] mb-2"
                >
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-[#2C3E50] mb-2"
                >
                  Service Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  placeholder="Please describe your roofing needs..."
                ></textarea>
              </div>

              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                  message="Estimate request received!"
                  subMessage="Our residential team will contact you shortly"
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
                >
                  Request Free Estimate
                </button>
              )}

              <p className="text-sm text-[#5D6D7E] text-center">
                Professional service &bull; Expert installation &bull; Lifetime
                warranty
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Professional Residential Roofing Services
          </h2>
          <p className="text-xl mb-8 text-[#BDC3C7]">
            Protect your home with Vancouver trusted roofing experts
          </p>
          <button
            onClick={handleContact}
            className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D44332] transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Estimate</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResidentialRoofing;
