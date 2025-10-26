'use client'

import React, { useState } from 'react';
import { Search, Home, Phone, HelpCircle, Wrench, ArrowLeft, ExternalLink } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateToHome: () => void;
  onNavigateToServices: () => void;
  onNavigateToBookCall: () => void;
  onNavigateToFAQs: () => void;
}

const quickLinks = [
  {
    icon: Home,
    title: 'Homepage',
    description: 'Return to our main page',
    action: 'home'
  },
  {
    icon: Wrench,
    title: 'Our Services',
    description: 'Explore AI automation solutions',
    action: 'services'
  },
  {
    icon: Phone,
    title: 'Book a Call',
    description: 'Schedule a consultation',
    action: 'book-call'
  },
];

const searchSuggestions = [
  'AI Chat Assistants',
  'AI Phone Callers',
  'Automated Outreach',
  'AI Social Agents',
  'Business Automation',
  'AI Implementation',
  'Consultation Booking',
  'Pricing Information',
  'Help and Support'
];

export function NotFoundPage({ onNavigateToHome, onNavigateToServices, onNavigateToBookCall, onNavigateToFAQs }: NotFoundPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleNavigation = (action: string) => {
    switch (action) {
      case 'home':
        onNavigateToHome();
        break;
      case 'services':
        onNavigateToServices();
        break;
      case 'book-call':
        onNavigateToBookCall();
        break;
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, this would perform actual search
      // For now, we'll navigate to the most relevant page based on keywords
      const query = searchQuery.toLowerCase();
      
      if (query.includes('service') || query.includes('ai') || query.includes('automation')) {
        onNavigateToServices();
      } else if (query.includes('call') || query.includes('book') || query.includes('consultation')) {
        onNavigateToBookCall();
      } else {
        onNavigateToHome();
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0
  );

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
              onClick={onNavigateToHome}
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
              onClick={onNavigateToFAQs}
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-gray-100"
            >
              FAQs
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* 404 Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            {/* Large 404 Number */}
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-none">
                404
              </h1>
              <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-800/20 leading-none -z-10 transform translate-x-2 translate-y-2">
                404
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Oops! Page Not Found
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              But don't worry – our AI hasn't taken over yet! Let's get you back on track.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                Search for what you need
              </h3>
              
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="Search for services, information, or help..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  >
                    Search
                  </button>
                </div>

                {/* Search Suggestions */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 text-gray-100 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Quick Navigation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.action)}
                    className="group bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl p-6 hover:border-blue-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 text-left"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                      {link.title}
                    </h4>
                    <p className="text-gray-200 text-sm group-hover:text-gray-100 transition-colors duration-300">
                      {link.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Back to Home CTA */}
          <div className="text-center">
            <button
              onClick={onNavigateToHome}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Take Me Home
            </button>
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-600 rounded-xl p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                Still can't find what you're looking for?
              </h4>
              <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
                Our AI automation experts are here to help. Book a consultation call and we'll personally assist you with your needs.
              </p>
              <button
                onClick={onNavigateToBookCall}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Personal Help
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}