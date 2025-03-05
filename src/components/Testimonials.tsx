import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Property Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      text: "Toronto Demolition handled our commercial building demolition project with exceptional professionalism. Their attention to safety protocols and efficient timeline management was impressive. The team's expertise in handling hazardous materials and their commitment to environmental compliance made them stand out.",
      project: "Commercial Building Demolition",
      location: "Downtown Toronto",
    },
    {
      name: "Sarah Thompson",
      role: "Homeowner",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      text: "I was impressed by how quickly and safely they demolished our old house. The team was very professional, kept the site clean, and communicated well throughout the process. They even helped us salvage some materials we wanted to keep.",
      project: "Residential Demolition",
      location: "North York",
    },
    {
      name: "David Rodriguez",
      role: "Construction Manager",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      text: "Their selective demolition work on our renovation project was precise and efficient. They carefully removed specific sections while preserving the structural integrity of the remaining building. The team's expertise in handling complex demolition scenarios was evident.",
      project: "Selective Demolition",
      location: "Etobicoke",
    },
    {
      name: "Jennifer Park",
      role: "Property Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      text: "The site clearing service was thorough and professional. They removed all debris, leveled the ground, and left the site ready for new construction. Their attention to detail and commitment to meeting deadlines was outstanding.",
      project: "Site Clearing",
      location: "Scarborough",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#2C3E50]">
            Client Testimonials
          </h2>
          <p className="text-lg text-[#5D6D7E]">
            What our clients say about our demolition services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#5D6D7E]">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E74C3C] fill-current"
                  />
                ))}
              </div>

              <p className="text-[#5D6D7E] mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-neutral-100">
                <p className="text-sm font-medium text-[#2C3E50]">
                  {testimonial.project}
                </p>
                <p className="text-sm text-[#5D6D7E]">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#5D6D7E]">
            Join our growing list of satisfied clients across the Greater
            Toronto Area
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
