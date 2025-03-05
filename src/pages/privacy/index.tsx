import React from "react";
import Navigation from "@/components/Navigation";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-neutral-100 to-[#F5F5F0]">
        <div className="absolute inset-0 bg-grid-neutral-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full">
              <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Privacy Policy
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 leading-relaxed">
                We are committed to protecting your privacy and ensuring the
                security of your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              1. Information We Collect
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Name and contact information</li>
              <li>Property address</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              2. How We Use Your Information
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Provide our demolition services</li>
              <li>Communicate with you about your project</li>
              <li>
                Send you updates and marketing materials (with your consent)
              </li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              3. Information Sharing
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              4. Data Security
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We implement appropriate security measures to protect your
              personal information, including:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Secure data storage and transmission</li>
              <li>Access controls and authentication</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              5. Your Rights
            </h2>
            <p className="text-[#5D6D7E] mb-6">You have the right to:</p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              6. Contact Us
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              If you have any questions about our privacy policy or how we
              handle your information, please contact us at:
            </p>
            <div className="bg-[#F5F5F0] p-6 rounded-xl">
              <p className="text-[#5D6D7E] mb-2">
                Email: privacy@torontodemolition.com
              </p>
              <p className="text-[#5D6D7E]">Phone: (647) 697-4584</p>
            </div>

            <div className="mt-12 text-sm text-[#5D6D7E]">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
