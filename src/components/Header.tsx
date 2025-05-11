import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Monitor className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-800">SoftSell</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a></li>
            <li><a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="py-4 px-4">
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#how-it-works" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#why-choose-us" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a 
                href="#testimonials" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;