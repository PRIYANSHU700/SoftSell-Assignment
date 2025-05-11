import React from 'react';
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-6 w-6 text-blue-500 mr-2" />
              <span className="font-bold text-xl text-white">SoftSell</span>
            </div>
            <p className="mb-4 text-gray-400">
              The premier platform for businesses to recover value from unused software licenses. 
              Simple, secure, and profitable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-500 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Software License Resale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">License Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Software Asset Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Tech Park, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:info@softsell.io" className="text-gray-400 hover:text-blue-500 transition-colors">
                  info@softsell.io
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;