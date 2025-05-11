import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Turn Unused Software Into <span className="text-blue-600">Instant Cash</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            SoftSell helps businesses recover value from unused software licenses with our simple, 
            secure and transparent resale platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg 
                transition-colors duration-300 inline-flex items-center justify-center"
            >
              Sell My Licenses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#how-it-works" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 
                rounded-lg border border-blue-200 transition-colors duration-300 
                inline-flex items-center justify-center"
            >
              How It Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Business team celebrating" 
              className="rounded-xl shadow-xl w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;