import { Phone, Mail, ArrowRight, Shield } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';

const Home = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (647) 361-0663';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:projects@torontodemolition.com';
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Toronto Demolition Experts | Professional Demolition Services</title>
        <meta 
          name="description" 
          content="Toronto&apos;s trusted demolition experts. Professional structural demolition, industrial removal & site clearing across GTA. Fully licensed & insured."
        />
      </Head>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <Navigation showActions={false} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#8B2635] transform -skew-y-6 origin-top-left translate-y-32" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Fully Licensed & Insured</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Precision
                <span className="block mt-2">Demolition</span>
              </h1>

              <p className="text-xl text-white/90 max-w-xl">
                Where power meets precision. Toronto&apos;s most trusted demolition experts, 
                bringing 25 years of excellence to every project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="group bg-white text-[#8B2635] px-6 py-4 rounded-lg text-lg font-medium 
                           transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>(647) 361-0663</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={handleEmailContact}
                  className="group bg-[#8B2635] border-2 border-white text-white px-6 py-4 rounded-lg text-lg font-medium 
                           transition-all hover:bg-white hover:text-[#8B2635] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>Free Quote</span>
                  </div>
                </button>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Professional Demolition Services"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonSection />
      <StepsSection />
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-[#8B2635]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get expert consultation and a free quote for your demolition needs.
            Our team is ready to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleEmergencyCall}
              className="group bg-white text-[#8B2635] px-8 py-4 rounded-lg text-lg font-medium 
                       transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(647) 361-0663</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button
              onClick={handleEmailContact}
              className="group bg-[#8B2635] border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium 
                       transition-all hover:bg-white hover:text-[#8B2635] hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Request Quote</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;