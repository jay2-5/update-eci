'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Footer } from '@/components/Footer';

interface FAQsPageProps {
  onBack: () => void;
  onNavigateToServices: () => void;
  onNavigateToBookCall: () => void;
}

const faqs = [
  {
    question: "What exactly is AI automation?",
    answer: "Implementing AI in other automations to perform tasks and processes that require human effort."
  },
  {
    question: "How is AI automation different from traditional automation?",
    answer: "Traditional automation follows fixed rules and only does simple tasks. While AI automation uses AI into automation to learn, adapt, and make intelligent decisions from data, handling more complex and variable tasks."
  },
  {
    question: "What types of tasks and processes can AI automation handle?",
    answer: "It covers a wide range, including customer support (chat-assistants), data entry (appointment scheduling), sales/marketing (cold calling, ghost writing), finance (invoice processing), HR (candidate screening), and operations (supply chain optimization)."
  },
  {
    question: "What are the main benefits of implementing AI solutions for my business?",
    answer: "Key benefits include increased efficiency, cost reduction, improved accuracy, enhanced customer experience, data-driven decisions and scalability, giving you a competitive edge."
  },
  {
    question: "Will AI automation replace my employees?",
    answer: "Yes, in many cases and it can augment your employee's capability in other cases."
  },
  {
    question: "How do you identify which areas of my business can benefit most from AI automation?",
    answer: "We start by understanding your goals or pain points then map your current processes and find high-impact opportunities for automation."
  },
  {
    question: "Do I need technical expertise to implement AI automation with your agency?",
    answer: "No, you don't. Our team handles the entire process, from design and implementation to integration."
  },
  {
    question: "How long does it take to see results from AI automation projects?",
    answer: "Timelines vary by complexity. Some projects show immediate benefits, while others may take a few months. We will provide clear timelines upfront."
  },
  {
    question: "How much does AI automation cost?",
    answer: "Costs vary based on your specific needs and project scope. We offer transparent pricing and detailed quotes after an initial discovery, focusing on ROI."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive support, including monitoring, performance optimization, training, troubleshooting, and assistance with future scaling of your AI solutions."
  },
  {
    question: "Can I integrate AI with my existing business systems and software?",
    answer: "Yes, seamless integration is also a service. We connect AI solutions with your existing CRM, ERP and other software to create unified workflows."
  },
  {
    question: "How do I get started with exploring AI automation for my business?",
    answer: "Simply schedule a consultation with us to discuss your challenges and how AI automation can benefit your operations."
  },
  {
    question: "What industries do you serve?",
    answer: "All industries where our service is applicable."
  }
];

export function FAQsPage({ onBack, onNavigateToServices, onNavigateToBookCall }: FAQsPageProps) {
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
              src="/Logo copy copy.png"
              alt="Turbo Automation Logo"
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8 md:-ml-8">
            <button
              onClick={onBack}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              Home
            </button>
            <button
              onClick={onNavigateToServices}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              Products and Services
            </button>
            <button
              onClick={onNavigateToBookCall}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              Free Consultation
            </button>
            <button
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-blue-300"
            >
              FAQs
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
              Get answers to common questions about AI automation and our services.
            </p>
          </div>

          {/* FAQs List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  aria-expanded={expandedIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-blue-400/20 to-purple-500/20 mb-4"></div>
                    <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
        </div>
      </main>

      {/* CTA Section - Bottom of page */}
      <div className="text-center mt-16 md:mt-20 px-4 md:px-6 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Still Have Questions?
            </h3>
            <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Get personalized answers and discover how AI automation can benefit your specific business needs.
            </p>
            <button
              onClick={onNavigateToBookCall}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </button>
            <p className="text-gray-300 text-sm mt-4">
              Speak directly with our AI automation experts
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}