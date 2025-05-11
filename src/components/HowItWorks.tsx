import React from 'react';
import { Upload, BarChart2, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload Your Licenses',
    description: 'Tell us about your unused or surplus software licenses. We accept most major enterprise software.',
    icon: Upload,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    title: 'Get Instant Valuation',
    description: 'Our algorithm provides an immediate market-based valuation of your software assets.',
    icon: BarChart2,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    id: 3,
    title: 'Get Paid Quickly',
    description: 'Accept our offer and receive payment within 48 hours. No hassles, no lengthy negotiations.',
    icon: CreditCard,
    color: 'bg-purple-100 text-purple-600'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple, quick, and profitable.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md 
                transition-shadow duration-300 p-8 relative"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <step.icon size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              
              <div className="hidden md:flex absolute top-10 -right-12 z-10 items-center justify-center">
                {step.id < steps.length && (
                  <div className="w-8 h-8 rotate-45 border-t border-r border-gray-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;