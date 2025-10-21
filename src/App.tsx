import React, { useState } from 'react';
import { SplineSceneBasic } from '@/components/ui/demo';
import { ServicesPage } from '@/components/ui/services-page';
import { FAQsPage } from '@/components/ui/faqs-page';
import { BookCallPage } from '@/components/ui/book-call-page';
import { NotFoundPage } from '@/components/ui/not-found-page';
import { SEOHead } from '@/components/ui/seo-head';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'book-call' | '404'>('home');

  const handleNavigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToBookCall = () => {
    setCurrentPage('book-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToBookCallWithService = (preSelectedService?: string) => {
    setCurrentPage('book-call');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Store the pre-selected service in sessionStorage for the BookCallPage to read
    if (preSelectedService) {
      sessionStorage.setItem('preSelectedService', preSelectedService);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTo404 = () => {
    setCurrentPage('404');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO configuration for each page
  const seoConfig = {
    home: {
      title: 'TurboAutomation - AI Automation Agency | Transform Your Business with AI',
      description: 'Outperform your competitors and be future-proof with AI automation. Expert AI solutions including chat assistants, phone callers, automated outreach, and social agents.',
      canonicalPath: '/'
    },
    services: {
      title: 'AI Automation Services | TurboAutomation - AI Chat, Phone, Outreach & Social',
      description: 'Discover our comprehensive AI automation services: AI Chat Assistants, AI Phone Callers, Automated Outreach Systems, and AI Social Agents. Transform your business operations.',
      canonicalPath: '/services'
    },
    'book-call': {
      title: 'Book a Consultation Call | TurboAutomation AI Automation Agency',
      description: 'Schedule a free consultation to discuss your AI automation needs. Get personalized solutions for your business challenges and explore AI opportunities.',
      canonicalPath: '/book-call'
    },
    '404': {
      title: 'Page Not Found | TurboAutomation AI Automation Agency',
      description: 'The page you are looking for could not be found. Explore our AI automation services or contact us for assistance.',
      canonicalPath: '/404'
    }
  };

  const currentSEO = seoConfig[currentPage];

  if (currentPage === 'services') {
    return (
      <>
        <SEOHead {...currentSEO} />
        <ServicesPage onBack={handleBackToHome} onNavigateToBookCall={handleNavigateToBookCall} onNavigateToBookCallWithService={handleNavigateToBookCallWithService} />
      </>
    );
  }

  if (currentPage === 'book-call') {
    return (
      <>
        <SEOHead {...currentSEO} />
        <BookCallPage onBack={handleBackToHome} onNavigateToServices={handleNavigateToServices} />
      </>
    );
  }

  if (currentPage === '404') {
    return (
      <>
        <SEOHead {...currentSEO} />
        <NotFoundPage 
          onNavigateToHome={handleBackToHome}
          onNavigateToServices={handleNavigateToServices}
          onNavigateToBookCall={handleNavigateToBookCall}
        />
      </>
    );
  }

  return (
    <>
      <SEOHead {...currentSEO} />
      <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
        {/* Header */}
        <header className="relative z-10 px-4 md:px-6 py-4 md:py-6 flex-shrink-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center">
              <img
                src="/Logo.png"
                alt="Turbo Automation Logo"
                className="h-24 md:h-32 lg:h-40 w-auto"
              />
            </div>
            
            {/* Navigation - moved slightly left */}
            <nav className="flex items-center space-x-8 md:-ml-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 ${
                  currentPage === 'home' ? 'text-blue-300' : 'text-gray-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={handleNavigateToServices}
                className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 ${
                  currentPage === 'services' ? 'text-blue-300' : 'text-gray-100'
                }`}
              >
                Products and Services
              </button>
              <button
                onClick={handleNavigateToBookCall}
                className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 ${
                  currentPage === 'book-call' ? 'text-blue-300' : 'text-gray-100'
                }`}
              >
                Free Consultation
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section with 3D Component */}
        <section className="flex-1 px-4 md:px-6 pb-4 md:pb-6 min-h-0">
          <div className="max-w-7xl mx-auto h-full">
            <SplineSceneBasic />
          </div>
        </section>

        {/* CTA Section - Visible without scrolling */}
        <section className="px-4 md:px-6 pb-6 md:pb-8 flex-shrink-0">
          <div className="max-w-7xl mx-auto text-center">
            <button
              onClick={handleNavigateToBookCall}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </button>
            <p className="text-gray-300 text-sm mt-3">
              Transform your business with AI automation - Schedule your call today
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;