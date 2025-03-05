import React from "react";
import {
  ClipboardList,
  Wrench,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Search,
  Ruler,
  HardHat,
  FileCheck,
  Trash2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const StepsSection: React.FC = () => {
  const metrics: Metric[] = [
    {
      value: "1000+",
      label: "PROJECTS COMPLETED",
    },
    {
      value: "15+",
      label: "YEARS EXPERIENCE",
    },
    {
      value: "4.9",
      label: "AVERAGE RATING",
    },
    {
      value: "50+",
      label: "CERTIFIED CREW",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      icon: <Search className="w-8 h-8 text-[#E74C3C]" />,
      title: "1. Site Assessment",
      description:
        "We conduct a thorough evaluation of your property to determine the safest and most efficient demolition approach.",
      features: [
        "Structural analysis",
        "Environmental assessment",
        "Safety hazard identification",
        "Access point evaluation",
      ],
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#E74C3C]" />,
      title: "2. Permitting & Planning",
      description:
        "We handle all necessary permits and create a detailed demolition plan that complies with Toronto's regulations.",
      features: [
        "Building permit acquisition",
        "Environmental compliance",
        "Safety protocol development",
        "Timeline planning",
      ],
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#E74C3C]" />,
      title: "3. Utility Disconnection",
      description:
        "We coordinate with utility companies to safely disconnect all services before demolition begins.",
      features: [
        "Electricity disconnection",
        "Gas line shutoff",
        "Water service termination",
        "Sewer line protection",
      ],
    },
    {
      icon: <Ruler className="w-8 h-8 text-[#E74C3C]" />,
      title: "4. Site Preparation",
      description:
        "We prepare the site for safe demolition operations and protect surrounding properties.",
      features: [
        "Site fencing installation",
        "Dust control measures",
        "Safety signage placement",
        "Access control setup",
      ],
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#E74C3C]" />,
      title: "5. Demolition Process",
      description:
        "Our experienced crew executes the demolition using state-of-the-art equipment and techniques.",
      features: [
        "Selective demolition",
        "Material separation",
        "Dust suppression",
        "Noise control",
      ],
    },
    {
      icon: <Trash2 className="w-8 h-8 text-[#E74C3C]" />,
      title: "6. Debris Management",
      description:
        "We handle all debris removal and disposal in accordance with environmental regulations.",
      features: [
        "Material sorting",
        "Recycling coordination",
        "Waste disposal",
        "Site cleanup",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#E74C3C]" />,
      title: "7. Site Restoration",
      description:
        "We restore the site to its desired condition, ready for new construction.",
      features: [
        "Grade leveling",
        "Foundation removal",
        "Soil compaction",
        "Final site inspection",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-[#E74C3C]" />,
      title: "8. Final Inspection",
      description:
        "We ensure all work meets safety standards and regulatory requirements.",
      features: [
        "Safety compliance check",
        "Environmental verification",
        "Documentation completion",
        "Client walkthrough",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Achievements Section */}
      <div className="w-full bg-gradient-to-b from-[#2C3E50] to-[#1a2530] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">
              OUR ACHIEVEMENTS
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="text-[#BDC3C7] mx-4">
                Toronto&apos;s Trusted Demolition Experts
              </p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#34495E]">
                  <div className="text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="h-px w-12 bg-[#E74C3C] mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <div className="text-sm text-[#BDC3C7] tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 px-5 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2 text-[#2C3E50]">
              OUR PROCESS
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="mx-4 text-[#5D6D7E]">
                Professional Demolition Services
              </p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
            <p className="mt-6 text-lg text-[#5D6D7E] max-w-3xl mx-auto">
              Our systematic approach ensures safe, efficient, and
              environmentally responsible demolition services. Each step is
              carefully executed to meet Toronto&apos;s strict safety and
              environmental standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#5D6D7E] mb-6">{step.description}</p>
                  <ul className="space-y-3 text-left w-full">
                    {step.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#E74C3C]" />
                        <span className="text-[#5D6D7E]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#E74C3C]" />
                <div>
                  <h4 className="text-xl font-bold text-[#2C3E50]">
                    Project Timeline
                  </h4>
                  <p className="text-[#5D6D7E]">1-4 weeks depending on scope</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-[#E74C3C]" />
                <div>
                  <h4 className="text-xl font-bold text-[#2C3E50]">
                    Safety First
                  </h4>
                  <p className="text-[#5D6D7E]">OSHA compliant operations</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-[#E74C3C]" />
                <div>
                  <h4 className="text-xl font-bold text-[#2C3E50]">
                    Licensed & Insured
                  </h4>
                  <p className="text-[#5D6D7E]">Full liability coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;
