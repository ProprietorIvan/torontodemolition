import React from 'react';
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-[#2C3E50] to-[#1a2530] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Vancouver Trusted Roofers
            </h3>
            <div className="h-1 w-16 bg-[#E74C3C] mb-6"></div>
            <p className="text-[#BDC3C7] mb-6 leading-relaxed">
              With over 25 years of experience in the roofing industry, we provide top-quality residential and commercial roofing services across Vancouver. From repairs to complete replacements, we are here to protect your investment.
            </p>
            <div className="text-[#95A5A6] text-sm">
              <p>A proud brand of</p>
              <a 
                href="https://felicita.group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#E74C3C] transition-colors duration-300 mt-2"
              >
                Felicita Holdings Ltd. <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              OUR <span className="text-[#E74C3C]">SERVICES</span>
            </h3>
            <div className="h-1 w-16 bg-[#E74C3C] mb-6"></div>
            <ul className="space-y-3 text-[#BDC3C7]">
              <li className="hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">Residential Roofing</li>
              <li className="hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">Commercial Roofing</li>
              <li className="hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">Emergency Repairs</li>
              <li className="hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">Roof Maintenance</li>
              <li className="hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">Professional Inspections</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              GET IN <span className="text-[#E74C3C]">TOUCH</span>
            </h3>
            <div className="h-1 w-16 bg-[#E74C3C] mb-6"></div>
            <div className="text-[#BDC3C7] space-y-4">
              <div>
                <p className="font-semibold mb-2">Business Hours:</p>
                <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="mt-2 text-[#E74C3C] font-semibold">24/7 Emergency Service Available</p>
              </div>
              <div className="pt-4 border-t border-[#34495E]">
                <div className="flex items-center gap-2 hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer mb-3">
                  <Phone size={16} />
                  <p>(778) 654-2681</p>
                </div>
                <div className="flex items-center gap-2 hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer mb-3">
                  <Mail size={16} />
                  <p>office@roofsvancouver.com</p>
                </div>
                <div className="flex items-center gap-2 hover:text-[#E74C3C] transition-colors duration-300 cursor-pointer">
                  <MapPin size={16} />
                  <p>Vancouver, BC</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="p-2 bg-[#34495E] hover:bg-[#E74C3C] transition-all duration-300 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-[#34495E] hover:bg-[#E74C3C] transition-all duration-300 rounded-lg">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-[#34495E] hover:bg-[#E74C3C] transition-all duration-300 rounded-lg">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#34495E]">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#95A5A6] text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Roofs Vancouver by Felicita Holdings Ltd. ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-[#E74C3C] transition-colors duration-300">PRIVACY POLICY</a>
              <a href="#" className="hover:text-[#E74C3C] transition-colors duration-300">TERMS & CONDITIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;