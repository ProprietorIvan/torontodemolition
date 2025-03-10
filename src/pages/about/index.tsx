import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle2,
  Building2,
  Target,
  Star,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#2C3E50]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-[#2C3E50]">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/2.jpg"
            alt="Toronto Demolition Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/90 to-[#2C3E50]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Your Trusted Demolition Partner in Toronto
            </h1>
            <p className="mt-6 text-lg text-[#BDC3C7]">
              With years of experience and a commitment to excellence, we
              deliver safe, efficient, and professional demolition services
              across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2C3E50]">
                Our Mission
              </h2>
              <p className="text-lg text-[#5D6D7E] mb-6 leading-relaxed">
                We strive to provide safe, efficient, and environmentally
                responsible demolition services while maintaining the highest
                standards of professionalism and customer satisfaction.
              </p>
              <p className="text-lg text-[#5D6D7E] mb-6 leading-relaxed">
                Our commitment to excellence has made us Toronto&apos;s
                preferred demolition contractor, serving both residential and
                commercial clients across the Greater Toronto Area.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/photos/homepage/2.jpg"
                alt="Toronto Demolition Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
              Our Values
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety First",
                description:
                  "We prioritize safety in every aspect of our work, ensuring the wellbeing of our team and clients.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We maintain the highest standards of quality in every project we undertake.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Focus",
                description:
                  "Your satisfaction is our top priority, and we work closely with you throughout the process.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Integrity",
                description:
                  "We operate with honesty and transparency, building trust with our clients.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[#E74C3C] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">
                  {value.title}
                </h3>
                <p className="text-[#5D6D7E]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">Our Team</h2>
            <p className="text-lg text-[#5D6D7E]">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Project Manager",
                image: "/photos/homepage/3.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Safety Director",
                image: "/photos/homepage/4.jpg",
              },
              {
                name: "Mike Wilson",
                role: "Operations Manager",
                image: "/photos/homepage/5.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-[#F5F5F0] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#2C3E50]">
                    {member.name}
                  </h3>
                  <p className="text-[#5D6D7E]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: <Building2 className="w-8 h-8" />,
              },
              {
                number: "15+",
                label: "Years Experience",
                icon: <Clock className="w-8 h-8" />,
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                icon: <Star className="w-8 h-8" />,
              },
              {
                number: "50+",
                label: "Team Members",
                icon: <Users className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-[#E74C3C] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-[#BDC3C7]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
