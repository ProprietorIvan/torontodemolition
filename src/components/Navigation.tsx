import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

interface NavigationProps {
  transparent?: boolean;
  showActions?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  transparent = false,
  showActions = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="Toronto Demolition"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#E74C3C] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            {showActions && (
              <a
                href="tel:6476974584"
                className="flex items-center gap-2 bg-[#E74C3C] text-white px-4 py-2 rounded-full hover:bg-[#D44332] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>(647) 697-4584</span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#E74C3C] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {showActions && (
                <a
                  href="tel:6476974584"
                  className="flex items-center gap-2 bg-[#E74C3C] text-white px-4 py-2 rounded-full hover:bg-[#D44332] transition-colors duration-300 w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>(647) 697-4584</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
