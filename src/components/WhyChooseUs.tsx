import React from 'react';
import { Shield, DollarSign, Clock, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Industry-leading security protocols protect your data and license information throughout the entire process.',
    icon: Shield,
    color: 'text-blue-500 bg-blue-100'
  },
  {
    id: 2,
    title: 'Maximum Value',
    description: 'Our market analytics ensure you receive the best possible price for your unused software licenses.',
    icon: DollarSign,
    color: 'text-green-500 bg-green-100'
  },
  {
    id: 3,
    title: 'Fast Processing',
    description: 'From valuation to payment, our streamlined process takes days, not months like traditional resellers.',
    icon: Clock,
    color: 'text-purple-500 bg-purple-100'
  },
  {
    id: 4,
    title: 'Compliance Guaranteed',
    description: 'Our legal team ensures all transfers comply with relevant software licensing terms and regulations.',
    icon: Award,
    color: 'text-orange-500 bg-orange-100'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've revolutionized the software resale process to make it easier, faster, and more profitable for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;