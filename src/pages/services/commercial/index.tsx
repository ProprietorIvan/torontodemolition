import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Wrench,
  CheckCircle2,
  Building2,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import SuccessScreen from "@/components/SuccessScreen";
import { Lead } from "@/utils/createLead";

interface FormData {
  name: string;
  phone: string;
  address: string;
  details: string;
  formType: string;
  email?: string;
}

const CommercialRoofing = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    details: "",
    email: "",
    formType: "commercial-consultation",
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

    // Add the service type to identify this as a commercial roofing form
    const submissionData = {
      ...formData,
      serviceType: "commercial-roofing", // This identifies which landing page the form came from
      projectDetails: formData.details, // Remap to align with API naming conventions
      facilityType: "Commercial Building", // Add a default facility type for commercial
      projectSize: "", // Optional - can be added to the form if needed
      urgency: "", // Optional - can be added to the form if needed
    };

    try {
      // Create lead for Monday.com
      const newLead: Lead = {
        name: formData.name,
        date_Mjj7SnLm: new Date().toISOString(),
        lead_status: "New Lead",
        status_1_Mjj7KSmv: "Commercial Form",
        text_Mjj7Hg3c: `Project Details: ${formData.details}`,
        numbers_Mjj7fpib: 0,
        job_location_mkm418ra: formData.address,
        lead_phone: formData.phone,
        lead_email: formData.email,
        status_1_Mjj77YUc: "Commercial Roofing",
        status_1_Mjj7Dz0C: "No Payment Due",
        status_1_Mjj7nPIN: "Not Insurance",
      };

      // Submit to Monday.com
      await fetch("/api/monday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });

      // Send email notification using the shared email handler
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
        formType: "commercial-consultation",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Custom Solutions",
      description:
        "Tailored commercial roofing systems for every building type",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry-Leading Warranty",
      description: "Comprehensive coverage for your investment",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Minimal Disruption",
      description: "Efficient installation with business continuity in mind",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Certified Team",
      description: "Licensed commercial roofing specialists",
    },
  ];

  const roofingServices = [
    {
      title: "Commercial Systems",
      points: [
        "Flat roof installations",
        "Metal roofing systems",
        "Built-up roofing (BUR)",
        "Modified bitumen systems",
      ],
    },
    {
      title: "Maintenance Services",
      points: [
        "Preventive maintenance",
        "Leak detection",
        "Emergency repairs",
        "System inspections",
      ],
    },
    {
      title: "Specialty Services",
      points: [
        "Green roof systems",
        "Cool roof solutions",
        "Coating applications",
        "Drainage solutions",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Energy efficiency audits",
        "Roof asset management",
        "24/7 emergency service",
        "Project consulting",
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
                Professional Commercial Roofing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
                Protect Your
                <span className="block text-[#E74C3C]">Investment</span>
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 leading-relaxed">
                Advanced commercial roofing solutions engineered for durability
                and efficiency. Expert installation of all roofing systems
                including flat roofs, metal roofing, and built-up systems.
              </p>

              <button
                onClick={handleContact}
                className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D44332] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Request Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Professional Commercial Roofing"
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
              Commercial Roofing Excellence
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Comprehensive solutions for your business property
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
              Comprehensive commercial roofing solutions
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
                Industry-Leading Quality
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-6 leading-relaxed">
                Our expert team delivers durable commercial roofing solutions
                engineered for maximum efficiency and longevity. We understand
                the unique challenges of commercial properties.
              </p>
              <ul className="space-y-4">
                {[
                  "Detailed site assessment",
                  "Custom system design",
                  "Professional installation",
                  "Long-term maintenance plans",
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
                alt="Commercial Roofing Quality"
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
              Request a Consultation
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Expert solutions &bull; Efficient installation &bull; Long-term
              reliability
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
                  Business Address *
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
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  placeholder="Please describe your commercial roofing needs..."
                ></textarea>
              </div>

              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                  message="Quote request received!"
                  subMessage="Our commercial team will contact you shortly"
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
                >
                  Schedule Consultation
                </button>
              )}

              <p className="text-sm text-[#5D6D7E] text-center">
                Professional service &bull; Expert installation &bull;
                Industry-leading warranty
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vancouver&apos;s Commercial Roofing Experts
          </h2>
          <p className="text-xl mb-8 text-[#BDC3C7]">
            Protect your commercial property with industry-leading solutions
          </p>
          <button
            onClick={handleContact}
            className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D44332] transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Schedule Your Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommercialRoofing;
