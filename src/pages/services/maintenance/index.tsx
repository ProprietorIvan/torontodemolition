import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Shield,
  Clock,
  ArrowRight,
  Calendar,
  CheckCircle2,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import SuccessScreen from "@/components/SuccessScreen";

interface FormData {
  name: string;
  phone: string;
  address: string;
  details: string;
  propertyType: string;
  formType: string;
  email?: string;
}

const MaintenanceInspections = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    details: "",
    propertyType: "",
    email: "",
    formType: "maintenance-inspection",
  });

  const handleScheduleCall = () => {
    window.location.href = "tel:+17786542681";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the shared email handler API
    const submissionData = {
      ...formData,
      serviceType: "maintenance", // Identifier for the API to know which landing page this came from
      projectDetails: formData.details, // Map details field to projectDetails for the API
      facilityType: formData.propertyType, // Map property type to facility type
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
        propertyType: "",
        email: "",
        formType: "maintenance-inspection",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Regular Inspections",
      description: "Scheduled maintenance to prevent issues",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Warranty Protection",
      description: "Maintain your roof warranty coverage",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Detailed Reports",
      description: "Comprehensive inspection documentation",
    },
  ];

  const benefits = [
    {
      title: "Extend Roof Lifespan",
      description:
        "Regular maintenance can double your roof's functional lifespan and maintain its performance.",
    },
    {
      title: "Prevent Costly Repairs",
      description:
        "Early detection and prevention of issues before they become major problems.",
    },
    {
      title: "Maintain Property Value",
      description:
        "Well-maintained roofs contribute to higher property values and curb appeal.",
    },
    {
      title: "Peace of Mind",
      description:
        "Know your roof is professionally maintained and protected year-round.",
    },
  ];

  const maintenanceServices = [
    {
      title: "Inspection Services",
      points: [
        "Comprehensive roof evaluations",
        "Interior ceiling inspections",
        "Attic ventilation assessment",
        "Drainage system checks",
      ],
    },
    {
      title: "Preventive Maintenance",
      points: [
        "Gutter cleaning",
        "Debris removal",
        "Minor repairs",
        "Sealing and waterproofing",
      ],
    },
    {
      title: "Documentation",
      points: [
        "Detailed inspection reports",
        "Photo documentation",
        "Maintenance records",
        "Warranty compliance reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-neutral-100 to-[#F5F5F0]">
        <div className="absolute inset-0 bg-grid-neutral-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Professional Roof Maintenance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
              Protect Your
              <span className="block text-[#E74C3C]">Investment</span>
            </h1>
            <p className="text-xl text-[#5D6D7E] max-w-2xl mx-auto">
              Regular maintenance extends your roof&apos;s lifespan and prevents
              costly repairs. Our comprehensive programs keep your roof in
              optimal condition year-round.
            </p>
          </div>

          {/* Schedule Button */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <button
              onClick={handleScheduleCall}
              className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-6 rounded-full text-2xl font-bold hover:bg-[#D44332] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-8 h-8" />
              <span>Schedule Inspection</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-[#5D6D7E] text-lg">
              Professional Service &bull; Detailed Reports &bull; Licensed &
              Insured
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">
              Why Regular Maintenance Matters
            </h2>
            <p className="text-lg text-[#5D6D7E] leading-relaxed">
              Regular roof maintenance is crucial for protecting your investment
              and preventing costly repairs. Our comprehensive maintenance
              programs help identify and address potential issues before they
              become major problems, extending your roof&apos;s lifespan and
              maintaining its performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-[#F5F5F0] rounded-xl"
              >
                <div className="flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-[#E74C3C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#5D6D7E]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
              Our Maintenance Programs
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Comprehensive maintenance solutions for every roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
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

      {/* Schedule Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Schedule Maintenance
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">
              Request an Inspection
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Professional service &bull; Detailed reports &bull; Maintenance
              plans
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#2C3E50] mb-2"
                >
                  Your Name
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
                  Phone Number
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
                Property Address
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
                htmlFor="propertyType"
                className="block text-sm font-medium text-[#2C3E50] mb-2"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                required
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="multi-family">Multi-Family</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-[#2C3E50] mb-2"
              >
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                placeholder="Please provide any specific maintenance concerns or requirements..."
              ></textarea>
            </div>

            {showSuccess ? (
              <SuccessScreen
                email={formData.email}
                setShowSuccess={setShowSuccess}
                message="Inspection request received!"
                subMessage="Our maintenance team will contact you to schedule your appointment"
              />
            ) : (
              <button
                type="submit"
                className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
              >
                Schedule Inspection
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2C3E50] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Roof Investment
          </h2>
          <p className="text-xl mb-8 text-[#BDC3C7]">
            Regular maintenance is the key to a long-lasting, reliable roof.
          </p>
          <button
            onClick={handleScheduleCall}
            className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D44332] transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Schedule Your Inspection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceInspections;
