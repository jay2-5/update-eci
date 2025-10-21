'use client'

import React, { useState } from 'react';
import { ArrowLeft, Bot, Phone, Mail, Wrench } from 'lucide-react';

interface ServicesPageProps {
  onBack: () => void;
  onNavigateToBookCall: () => void;
  onNavigateToBookCallWithService: (preSelectedService: string) => void;
}

const services = [
  {
    icon: Bot,
    title: 'AI Chat Assistant',
    description: 'Intelligent conversational AI that engages customers 24/7 with human-like interactions.',
    pros: [
      'Lead capture, Customer support and appointment scheduling all in one',
      'Cheaper than hiring people for these tasks',
      'Always consistent and accurate'
    ]
  },
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Automated voice systems that handle calls with natural speech and professional efficiency.',
    pros: [
      'Best for cold calling and appointment scheduling',
      'Can handle high call volume 24/7'
    ]
  },
  {
    icon: Mail,
    title: 'Automated Outreach System',
    description: 'Smart campaigns that reach prospects at scale with personalized messaging.',
    pros: [
      'Higher sales',
      'Generate as much leads as you want',
      'Highly personalized Emails or DMs with follow ups'
    ]
  },
  {
    icon: Wrench,
    title: 'Custom Solution',
    description: 'Tailored automation, micro SaaS, MVP, or full-stack SaaS solutions built specifically for your business needs.',
    pros: [
      'Custom automations that streamline operations and eliminate repetitive tasks',
      'SaaS products designed with only the features you actually need',
      'Rapid development and launch timeline of just 2-4 weeks'
    ]
  }
];

export function ServicesPage({ onBack, onNavigateToBookCall, onNavigateToBookCallWithService }: ServicesPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 px-4 md:px-6 py-4 md:py-6 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center">
            <img 
              src="/cover copy.png" 
              alt="Starvico Logo" 
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>
          
          {/* Navigation - moved slightly left */}
          <nav className="flex items-center space-x-8 md:-ml-8">
            <button
              onClick={onBack}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              Home
            </button>
            <button
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-blue-300"
            >
              Products and Services
            </button>
            <button
              onClick={onNavigateToBookCall}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              Free Consultation
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Our Products and Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions that operate seamlessly around the clock.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => toggleExpand(index)}
                  className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl p-8 hover:border-blue-300 transition-all duration-500 focus-within:ring-2 focus-within:ring-blue-400/50 cursor-pointer"
                  tabIndex={0}
                  role="article"
                  aria-label={`${service.title} service`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-100 text-base leading-relaxed mb-2 group-hover:text-gray-50 transition-colors duration-300">
                          {service.description}
                        </p>
                        
                        {/* Expandable Pros Section */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedIndex === index 
                            ? 'max-h-screen opacity-100 mt-6' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-2">
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-start text-gray-200 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Get a Quote Button */}
                    <div className="mt-6 pt-4 border-t border-gray-600">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToBookCallWithService(service.title);
                        }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* CTA Section - Bottom of page */}
      <div className="text-center mt-16 md:mt-20 px-4 md:px-6 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI automation solutions can revolutionize your operations and drive growth.
            </p>
            <button
              onClick={onNavigateToBookCall}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </button>
            <p className="text-gray-300 text-sm mt-4">
              No commitment required - Let's explore your AI automation opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}