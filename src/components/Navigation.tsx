import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({ currentPage, showActions = true, transparent }: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Services', url: '/services' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className={`relative ${
      transparent 
        ? 'bg-transparent !absolute left-0 top-0 w-full z-50' 
        : 'bg-[#F5F5F0]'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-40">
          {/* Logo */}
          <div className="flex items-center -ml-2 sm:ml-0">
            <div className="relative w-36 sm:w-52 md:w-[30rem] h-14 sm:h-20 md:h-36">
              <Image 
                src="/logo.webp"
                alt='Roofs Vancouver logo'
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {showActions ? (
              <div className='flex flex-1 items-center justify-end gap-8 w-100'>
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      push(link.url)
                    }}
                    className={`text-lg font-medium hover:text-[#E74C3C] transition-colors ${
                      transparent ? 'text-white hover:text-[#E74C3C]' : 'text-[#2C3E50]'
                    }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            ) : (
              <button
                onClick={() => window.open('/contact', '_current')}
                className="bg-[#E74C3C] text-white px-6 py-3 rounded-full hover:bg-[#D44332] transition-colors text-sm font-medium"
              >
                Get a Free Consultation
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-[#2C3E50]/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-[#2C3E50]'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-[#2C3E50]'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E5E7E9] shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-[#2C3E50] hover:bg-[#F5F5F0] rounded-lg transition-colors"
                >
                  {link.text}
                </a>
              ))}

              {/* Mobile Actions */}
              {!showActions && (
                <div className="p-4">
                  <button
                    onClick={() => {
                      window.open('/contact', '_current');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#E74C3C] text-white px-4 py-3 rounded-full hover:bg-[#D44332] transition-colors text-sm font-medium"
                  >
                    Get a Free Consultation
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;