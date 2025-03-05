import React from 'react';
import { ClipboardList, Wrench, Shield, AlertTriangle, CheckCircle2, Clock, Search, Ruler, HardHat, FileCheck, Trash2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
      value: "500+",
      label: "ROOFS INSTALLED"
    },
    {
      value: "25+",
      label: "YEARS EXPERIENCE"
    },
    {
      value: "4.9",
      label: "AVERAGE RATING"
    },
    {
      value: "20",
      label: "CERTIFIED ROOFERS"
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      icon: <Search className="w-8 h-8 text-[#E74C3C]" />,
      title: "1. Roof System Analysis",
      description: "We examine your entire roofing system to understand its current state and specific requirements.",
      features: [
        "Decking condition assessment",
        "Ventilation system evaluation",
        "Drainage pattern analysis",
        "Existing material composition"
      ]
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#E74C3C]" />,
      title: "2. Material Selection",
      description: "Based on your roof's requirements, we select the optimal materials for Vancouver's climate.",
      features: [
        "Shingle grade & warranty options",
        "Underlayment specification",
        "Flashing type selection",
        "Ventilation components"
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#E74C3C]" />,
      title: "3. Structural Preparation",
      description: "We inspect and prepare the foundational elements of your roofing system.",
      features: [
        "Decking repair/replacement",
        "Rafter integrity check",
        "Fascia board inspection",
        "Support structure evaluation"
      ]
    },
    {
      icon: <Ruler className="w-8 h-8 text-[#E74C3C]" />,
      title: "4. Underlayment Installation",
      description: "We install a comprehensive water barrier system to protect your home.",
      features: [
        "Ice & water shield application",
        "Synthetic underlayment layering",
        "Valley preparation",
        "Drip edge installation"
      ]
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#E74C3C]" />,
      title: "5. Flashing Integration",
      description: "Critical waterproofing elements are installed at all roof penetrations and transitions.",
      features: [
        "Chimney flashing",
        "Vent pipe collars",
        "Step flashing at walls",
        "Valley metal installation"
      ]
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#E74C3C]" />,
      title: "6. Roofing Material Application",
      description: "Primary roofing materials are installed using manufacturer-specified techniques.",
      features: [
        "Starter strip placement",
        "Proper nailing patterns",
        "Shingle alignment",
        "Hip & ridge installation"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#E74C3C]" />,
      title: "7. Ventilation System",
      description: "We ensure proper attic ventilation to extend roof life and optimize energy efficiency.",
      features: [
        "Ridge vent installation",
        "Soffit vent inspection",
        "Airflow calculation",
        "Baffle installation"
      ]
    },
    {
      icon: <Trash2 className="w-8 h-8 text-[#E74C3C]" />,
      title: "8. Gutter System",
      description: "Complete gutter system integration for proper water management.",
      features: [
        "Gutter alignment",
        "Downspout placement",
        "Leaf guard options",
        "Water flow testing"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#E74C3C]" />,
      title: "9. Final Inspection",
      description: "Comprehensive quality check of all roofing components and systems.",
      features: [
        "Water penetration testing",
        "Flashing seal verification",
        "Proper ventilation confirmation",
        "System integrity check"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Achievements Section */}
      <div className="w-full bg-gradient-to-b from-[#2C3E50] to-[#1a2530] py-20">      
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">OUR ACHIEVEMENTS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="text-[#BDC3C7] mx-4">Building Trust Through Excellence</p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#34495E]">
                  <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="h-px w-12 bg-[#E74C3C] mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <div className="text-sm text-[#BDC3C7] tracking-wider">{metric.label}</div>
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
            <h2 className="text-4xl font-bold mb-2 text-[#2C3E50]">OUR PROCESS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#E74C3C]"></div>
              <p className="mx-4 text-[#5D6D7E]">Your Roof Repair Journey</p>
              <div className="h-px w-12 bg-[#E74C3C]"></div>
            </div>
            <p className="mt-6 text-lg text-[#5D6D7E] max-w-3xl mx-auto">
              We follow a systematic, proven process for every roof repair project. Each step is carefully 
              executed to ensure the highest quality results and complete customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{step.title}</h3>
                  <p className="text-[#5D6D7E] mb-6">{step.description}</p>
                  <ul className="space-y-3 text-left w-full">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
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
                  <h4 className="text-xl font-bold text-[#2C3E50]">Project Timeline</h4>
                  <p className="text-[#5D6D7E]">2-8 weeks depending on scope</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-[#E74C3C]" />
                <div>
                  <h4 className="text-xl font-bold text-[#2C3E50]">Emergency Service</h4>
                  <p className="text-[#5D6D7E]">24/7 response for urgent repairs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-[#E74C3C]" />
                <div>
                  <h4 className="text-xl font-bold text-[#2C3E50]">Quality Assurance</h4>
                  <p className="text-[#5D6D7E]">25-year warranty available</p>
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