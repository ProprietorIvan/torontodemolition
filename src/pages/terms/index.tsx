import React from "react";
import Navigation from "@/components/Navigation";
import { FileText, Scale, Shield, CheckCircle2 } from "lucide-react";

const Terms = () => {
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
                Terms of Service
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2C3E50]">
                Our Terms
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 leading-relaxed">
                Please read these terms carefully before using our demolition
                services.
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
              1. Acceptance of Terms
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              By accessing and using our demolition services, you agree to be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, please do not use our services.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              2. Services Description
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We provide professional demolition services including:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Residential demolition</li>
              <li>Commercial demolition</li>
              <li>Selective demolition</li>
              <li>Site clearing</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              3. Service Agreements
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              All demolition projects require a written agreement that includes:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Project scope and specifications</li>
              <li>Timeline and completion dates</li>
              <li>Pricing and payment terms</li>
              <li>Safety protocols and requirements</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              4. Client Responsibilities
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              As a client, you are responsible for:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Providing accurate project information</li>
              <li>Obtaining necessary permits and approvals</li>
              <li>Ensuring site accessibility</li>
              <li>Timely payment of services</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              5. Safety and Compliance
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We maintain strict safety standards and comply with all applicable
              regulations:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>OSHA safety guidelines</li>
              <li>Local building codes</li>
              <li>Environmental regulations</li>
              <li>Insurance requirements</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              6. Payment Terms
            </h2>
            <p className="text-[#5D6D7E] mb-6">Our payment terms include:</p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Deposit requirements</li>
              <li>Progress payment schedules</li>
              <li>Final payment upon completion</li>
              <li>Late payment penalties</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              7. Warranty and Liability
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              We provide warranties and maintain appropriate insurance coverage:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Workmanship warranty</li>
              <li>General liability insurance</li>
              <li>Workers&apos; compensation coverage</li>
              <li>Property damage protection</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              8. Termination
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              Either party may terminate the agreement under the following
              conditions:
            </p>
            <ul className="list-disc pl-6 text-[#5D6D7E] mb-8">
              <li>Material breach of terms</li>
              <li>Safety concerns</li>
              <li>Non-payment of services</li>
              <li>Mutual agreement</li>
            </ul>

            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              9. Contact Information
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              For questions about these terms, please contact us at:
            </p>
            <div className="bg-[#F5F5F0] p-6 rounded-xl">
              <p className="text-[#5D6D7E] mb-2">
                Email: legal@torontodemolition.com
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

export default Terms;
