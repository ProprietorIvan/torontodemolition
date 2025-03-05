import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SuccessScreen from "@/components/SuccessScreen";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectDetails: string;
  formType: string;
}

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
    formType: "contact",
  });

  const handleCall = () => {
    window.location.href = "tel:6476974584";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      serviceType: "contact",
      facilityType: "",
      projectSize: "",
      urgency: "standard",
    };

    try {
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

      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        projectDetails: "",
        formType: "contact",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your request. Please try again or call us directly."
      );
    }
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

  return (
    <div className="min-h-screen bg-[#2C3E50]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-[#2C3E50]">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/2.jpg"
            alt="Contact Toronto Demolition"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 to-[#2C3E50]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get in Touch with Our Team
            </h1>
            <p className="mt-6 text-lg text-[#BDC3C7]">
              Ready to start your demolition project? Contact us today for a
              free consultation and estimate.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                content: "(647) 697-4584",
                link: "tel:6476974584",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                content: "info@torontodemolition.com",
                link: "mailto:info@torontodemolition.com",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                content: "Toronto, ON",
                link: "https://maps.google.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group bg-[#F5F5F0] p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#E74C3C] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">
                  {item.title}
                </h3>
                <p className="text-[#5D6D7E] group-hover:text-[#E74C3C] transition-colors">
                  {item.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F5F0]" id="contactform">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
              Send Us a Message
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              24-hour response • Toronto-wide service
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                  placeholder="Please describe your project requirements..."
                ></textarea>
              </div>

              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
                >
                  Send Message
                </button>
              )}
              <p className="text-sm text-[#5D6D7E] text-center">
                24-hour response • Expert service • Toronto certified
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
              Our Service Area
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Serving the Greater Toronto Area
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2704901810457!2d-79.38924548452447!3d43.65322617929925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63bd5%3A0x3150d3a5a0c0c0c0!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1647040000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
