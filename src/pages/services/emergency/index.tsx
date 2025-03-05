import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Shield,
  Clock,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BadgeCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import SuccessScreen from "@/components/SuccessScreen";

interface FormData {
  name: string;
  phone: string;
  address: string;
  emergency: string;
  formType: string;
  email?: string;
}

const EmergencyRoofing = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    emergency: "",
    email: "",
    formType: "emergency-service",
  });

  const handleEmergencyCall = () => {
    window.location.href = "tel:+17786542681";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for the shared email handler API
    const submissionData = {
      ...formData,
      projectDetails: formData.emergency, // Map emergency field to projectDetails for the API
      serviceType: "emergency", // Identifier for the API to know which landing page this came from
      facilityType: "", // Optional field
      projectSize: "", // Optional field
      urgency: "emergency", // Setting the urgency level to emergency
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
        emergency: "",
        email: "",
        formType: "emergency-service",
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

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Response",
      description: "24/7 emergency service across Vancouver",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "25+ Years Experience",
      description: "Trusted emergency roofing experts",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Professional Team",
      description: "Licensed emergency specialists",
    },
  ];

  const benefits = [
    {
      title: "Immediate Protection",
      description:
        "Fast response to prevent water damage and protect your property from further deterioration.",
    },
    {
      title: "Comprehensive Service",
      description:
        "From temporary repairs to permanent solutions, we handle every aspect of emergency roofing.",
    },
    {
      title: "Insurance Support",
      description:
        "We work directly with insurance companies and provide detailed documentation.",
    },
    {
      title: "Quality Guaranteed",
      description:
        "Professional emergency repairs with long-lasting results and warranty coverage.",
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
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Roof Repairs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
              Emergency
              <span className="block text-[#E74C3C]">Roofing Service</span>
            </h1>
            <p className="text-xl text-[#5D6D7E] max-w-2xl mx-auto">
              When disaster strikes, every minute counts. Our expert team
              provides immediate response to prevent water damage and restore
              your roof&apos;s integrity.
            </p>
          </div>

          {/* Emergency Call Button */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-6 rounded-full text-2xl font-bold hover:bg-[#D44332] transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              <Phone className="w-8 h-8" />
              <span>(778) 654-2681</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-[#5D6D7E] text-lg">
              24/7 Response &bull; Free Estimates &bull; Licensed & Insured
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

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">
              Vancouver&apos;s Most Trusted Emergency Roofing Experts
            </h2>
            <p className="text-lg text-[#5D6D7E] leading-relaxed">
              When your roof is compromised, you need immediate action to
              prevent water damage and protect your property. Our emergency team
              is available 24/7 to provide rapid response and professional
              solutions. With over 25 years of experience in emergency roofing
              repairs, you can trust us to secure and restore your roof quickly
              and effectively.
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

      {/* Emergency Form Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Emergency Service Request
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">
              Get Immediate Assistance
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              For fastest service call:{" "}
              <span className="font-semibold">(778) 654-2681</span>
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
                htmlFor="emergency"
                className="block text-sm font-medium text-[#2C3E50] mb-2"
              >
                Describe Your Emergency
              </label>
              <textarea
                id="emergency"
                name="emergency"
                value={formData.emergency}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                required
              ></textarea>
            </div>

            {showSuccess ? (
              <SuccessScreen
                email={formData.email}
                setShowSuccess={setShowSuccess}
                message="Emergency request received!"
                subMessage="Our emergency team will contact you immediately"
              />
            ) : (
              <button
                type="submit"
                className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
              >
                Submit Emergency Request
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2C3E50] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t Let Roof Damage Spread
          </h2>
          <p className="text-xl mb-8 text-[#BDC3C7]">
            Get immediate emergency repairs to protect your property from water
            damage and structural issues.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D44332] transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Immediate Help</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">
              Complete Roofing Services
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Expert solutions for all your roofing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#F5F5F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/1.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#2C3E50]">
                  Residential Roofing
                </h3>
                <p className="text-[#5D6D7E] mb-4">
                  Complete residential roofing services including installations,
                  repairs, and maintenance.
                </p>
                <Link
                  href="/services/residential-roofing"
                  className="text-[#E74C3C] font-medium hover:text-[#D44332] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F5F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/2.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#2C3E50]">
                  Commercial Roofing
                </h3>
                <p className="text-[#5D6D7E] mb-4">
                  Professional commercial roofing solutions for all types of
                  business properties.
                </p>
                <Link
                  href="/services/commercial"
                  className="text-[#E74C3C] font-medium hover:text-[#D44332] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F5F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/4.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#2C3E50]">
                  Maintenance & Inspections
                </h3>
                <p className="text-[#5D6D7E] mb-4">
                  Regular maintenance and inspection services to prevent
                  emergency situations.
                </p>
                <Link
                  href="/services/maintenance"
                  className="text-[#E74C3C] font-medium hover:text-[#D44332] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#E74C3C] font-semibold hover:text-[#D44332] transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRoofing;
