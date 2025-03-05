import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - (reviewsToShow.desktop - 1)
        ? 0
        : nextIndex;
    });
  }, [testimonials.length, reviewsToShow.desktop]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - reviewsToShow.desktop
        : prevIndex - 1
    );
    setIsAutoPlaying(false);
  }, [testimonials.length, reviewsToShow.desktop]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

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

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
                transition: "transform 2s ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                        <p className="text-sm text-[#5D6D7E]">
                          {testimonial.role}
                        </p>
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
                      <p className="text-sm text-[#5D6D7E]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/CT-8D6c5FSyIEAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2C3E50] hover:text-[#E74C3C] transition-colors"
          >
            See all our reviews on Google
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
