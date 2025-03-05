import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Toronto Demolition</h3>
            <p className="text-[#BDC3C7] mb-6">
              Your trusted partner for professional demolition services in
              Toronto.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/residential-demolition"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Residential Demolition
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial-demolition"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Commercial Demolition
                </Link>
              </li>
              <li>
                <Link
                  href="/services/selective-demolition"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Selective Demolition
                </Link>
              </li>
              <li>
                <Link
                  href="/services/site-clearing"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Site Clearing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E74C3C] mt-1" />
                <div>
                  <p className="text-[#BDC3C7]">Phone</p>
                  <a
                    href="tel:6476974584"
                    className="text-white hover:text-[#E74C3C] transition-colors"
                  >
                    (647) 697-4584
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E74C3C] mt-1" />
                <div>
                  <p className="text-[#BDC3C7]">Email</p>
                  <a
                    href="mailto:info@torontodemolition.com"
                    className="text-white hover:text-[#E74C3C] transition-colors"
                  >
                    info@torontodemolition.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E74C3C] mt-1" />
                <div>
                  <p className="text-[#BDC3C7]">Location</p>
                  <p className="text-white">Toronto, ON</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#34495E]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#BDC3C7] text-sm">
              © {new Date().getFullYear()} Toronto Demolition. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#BDC3C7] hover:text-[#E74C3C] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
