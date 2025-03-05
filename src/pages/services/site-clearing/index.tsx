import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Wrench,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Trash2,
  ClipboardCheck,
  DollarSign,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Truck,
  HardHat,
  FileText,
  AlertCircle,
  Recycle,
  Leaf,
  Gauge,
  BarChart,
  Target,
  CheckSquare,
  AlertTriangle,
  Check,
} from "lucide-react";
import Link from "next/link";
import SuccessScreen from "@/components/SuccessScreen";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  address: string;
  projectDetails: string;
  formType: string;
  email?: string;
}

const SiteClearing = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    projectDetails: "",
    email: "",
    formType: "site-clearing",
  });

  const handleCall = () => {
    window.location.href = "tel:6476974584";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      serviceType: "site-clearing",
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
        address: "",
        projectDetails: "",
        email: "",
        formType: "site-clearing",
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

  const serviceFeatures = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Toronto Experts",
      description: "Your local site clearing specialists",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Licensed and insured in Toronto",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "24-hour response time guaranteed",
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      title: "Certified Results",
      description: "Professional site clearing services",
    },
  ];

  const serviceTypes = [
    {
      title: "Site Clearing",
      points: [
        "Vegetation removal",
        "Tree removal",
        "Stump grinding",
        "Debris removal",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Land clearing",
        "Brush removal",
        "Site preparation",
        "Soil grading",
      ],
    },
    {
      title: "Site Preparation",
      points: [
        "Utility marking",
        "Permit management",
        "Environmental assessment",
        "Site restoration",
      ],
    },
    {
      title: "Safety Measures",
      points: [
        "Hazard assessment",
        "Equipment safety",
        "Site security",
        "Environmental protection",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-neutral-100 to-[#F5F5F0]">
        <div className="absolute inset-0 bg-grid-neutral-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Toronto&apos;s Premier Site Clearing Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
                Expert site
                <span className="block text-[#E74C3C]">clearing.</span>
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 leading-relaxed">
                Toronto&apos;s trusted site clearing specialists. From
                vegetation removal to complete land clearing, we handle it all.
              </p>

              <button
                onClick={handleCall}
                className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D44332] transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/7.jpg"
                  alt="Toronto Professional Site Clearing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              Premium Site Clearing Services
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Toronto&apos;s most trusted site clearing specialists
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
              Comprehensive site clearing solutions for Toronto properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
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

      {/* Form Section */}
      <section className="py-20 bg-white" id="contactform">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
              Request a Quote
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              24-hour response • Toronto-wide service
            </p>
          </div>

          <div className="bg-[#F5F5F0] rounded-2xl shadow-lg p-8">
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
                  email={formData.email || ""}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#D44332] transition-colors duration-300"
                >
                  Submit Quote Request
                </button>
              )}
              <p className="text-sm text-[#5D6D7E] text-center">
                24-hour response • Expert service • Toronto certified
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2C3E50]">
                Proven Excellence
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-6 leading-relaxed">
                Our certified team delivers comprehensive site clearing
                solutions, transforming Toronto properties with precision and
                expertise.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional site assessment",
                  "Licensed clearing experts",
                  "Premium equipment",
                  "Satisfaction guaranteed",
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
                src="/photos/homepage/8.jpg"
                alt="Toronto Site Clearing Excellence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
              Common Questions
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Everything you need to know about our site clearing services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does site clearing typically take?",
                answer:
                  "The duration varies depending on the size and complexity of the site. A typical residential lot can take 1-2 days, while larger commercial sites may take several days to a week.",
              },
              {
                question: "Do you handle all the necessary permits?",
                answer:
                  "Yes, we handle all required permits and documentation with local authorities. This includes tree removal permits, environmental assessments, and utility marking.",
              },
              {
                question: "What happens to the cleared vegetation?",
                answer:
                  "We properly sort and dispose of all vegetation at licensed facilities. We prioritize recycling and environmentally responsible disposal methods.",
              },
              {
                question: "Is your service insured?",
                answer:
                  "Yes, we are fully licensed and insured. Our insurance covers both property damage and liability to ensure your peace of mind.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#F5F5F0] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#2C3E50]">
                  {faq.question}
                </h3>
                <p className="text-[#5D6D7E]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Toronto&apos;s Trusted Site Clearing Experts
          </h2>
          <p className="text-xl mb-8 text-[#BDC3C7]">
            Professional site clearing services across Greater Toronto
          </p>
          <button
            onClick={handleCall}
            className="group inline-flex items-center justify-center gap-3 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D44332] transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SiteClearing;
