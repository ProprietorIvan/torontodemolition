import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import StepsSection from "@/components/StepsSection";
import { Star, Phone, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  // Handle bottom CTA button clicks
  const handleContact = (method: "phone" | "email") => {
    if (method === "phone" || method === "email") {
      router.push("/contact");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navigation showActions={false} />

      {/* Hero Section - Mobile First */}
      <section className="relative bg-gradient-to-b from-neutral-100 to-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-200 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block bg-[#E74C3C] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Established 2022
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display text-[#2C3E50]">
                Vancouver
                <span className="block text-[#E74C3C]">Roofing Company</span>
              </h1>
              <p className="text-xl text-[#5D6D7E] mb-8 max-w-lg">
                Where traditional craftsmanship meets modern innovation in
                residential and commercial roofing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/contact")}
                  className="group flex items-center justify-center gap-2 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D44332] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="group flex items-center justify-center gap-2 bg-white border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F8F9FA] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F39C12] text-[#F39C12]"
                    />
                  ))}
                </div>
                <div className="h-8 w-px bg-[#BDC3C7]" />
                <p className="text-[#5D6D7E]">
                  <span className="font-semibold">500+</span> Projects Completed
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] w-full">
                {/* Main image */}
                <Image
                  src="/photos/homepage/5.jpg"
                  alt="Professional Roofing Service"
                  fill
                  priority
                  className="rounded-3xl object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 500px, 600px"
                />

                {/* Gradient overlays for better blending */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#F5F5F0] via-transparent to-[#F5F5F0] opacity-20" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#F5F5F0] via-transparent to-[#F5F5F0] opacity-20" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5F5F0] via-transparent to-[#F5F5F0] opacity-20" />

                {/* Center brightness boost */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-10" />
                </div>

                {/* Edge feathering */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5F5F0] via-transparent to-[#F5F5F0] opacity-[0.15]" />

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-[#2C3E50]/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />
      <StepsSection />
      <FAQ />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#2C3E50]">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Roofing Project?
          </h2>
          <p className="text-[#BDC3C7] mb-12 text-lg max-w-2xl mx-auto">
            Join Vancouver&apos;s most trusted roofing service. Professional
            solutions, lasting quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContact("phone")}
              className="group flex items-center justify-center gap-2 bg-[#E74C3C] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#D44332] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleContact("email")}
              className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
