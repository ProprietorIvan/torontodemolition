import { Star } from "lucide-react";
import Card from "./Card";
import Image from "next/image";

const Testemonials = () => {
  const renderTestimonials = () => {
    const testimonials = [
      {
        src: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Sarah Johnson",
        role: "Property Developer",
        text: "The Demolition Company of Toronto handled our commercial building demolition with exceptional professionalism. Their attention to safety and environmental compliance was outstanding.",
      },
      {
        src: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Michael Chen",
        role: "Construction Manager",
        text: "Their team's expertise in selective demolition saved us time and money. They carefully preserved the structural elements we wanted to keep while removing everything else efficiently.",
      },
      {
        src: "https://randomuser.me/api/portraits/women/27.jpg",
        name: "Emily Rodriguez",
        role: "Homeowner",
        text: "I was impressed by their thorough site preparation and cleanup. They handled all the permits and utility disconnections, making the process completely hassle-free.",
      },
    ];

    return testimonials.map((review, index) => (
      <Card
        key={index}
        className="bg-gray-50 p-8 border-none hover:bg-white hover:shadow-lg transition-all duration-300 group rounded-2xl"
      >
        <div className="relative w-16 h-16 mb-4">
          <Image
            src={review.src}
            alt={`${review.name}'s profile`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="font-bold">
          {review.name} {review.role}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{review.text}</p>
      </Card>
    ));
  };
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Trusted by Toronto&apos;s Leading Developers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
