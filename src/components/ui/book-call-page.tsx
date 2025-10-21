'use client'

import React, { useState, useEffect } from 'react';
import { User, MessageSquare, Info, Send, Calendar, ArrowLeft } from 'lucide-react';

interface BookCallPageProps {
  onBack: () => void;
  onNavigateToServices: () => void;
}

const services = [
  'AI Chat Assistant',
  'AI Voice Agent',
  'Automated Outreach System',
  'Custom Automation or SAAS',
  'I don\'t know and would like consultation',
  'Other'
];

export function BookCallPage({ onBack, onNavigateToServices }: BookCallPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedServices: [] as string[],
    otherServiceDescription: '',
    additionalInfo: ''
  });

  const [otherServiceError, setOtherServiceError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check for pre-selected service on component mount
  useEffect(() => {
    const preSelectedService = sessionStorage.getItem('preSelectedService');
    if (preSelectedService) {
      setFormData(prev => ({
        ...prev,
        interestedServices: [preSelectedService]
      }));
      // Clear the session storage after using it
      sessionStorage.removeItem('preSelectedService');
    }
  }, []);

  // Load Cal.com embed script when booking page is shown
  useEffect(() => {
    if (isSubmitted) {
      // Remove any existing Cal.com scripts
      const existingScripts = document.querySelectorAll('script[src*="cal.com"]');
      existingScripts.forEach(script => script.remove());

      // Load the Cal.com embed script
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => {
        // Initialize Cal.com after script loads
        if (window.Cal) {
          window.Cal('init', {
            origin: 'https://app.cal.com'
          });
        }
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const scriptToRemove = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    }
  }, [isSubmitted]);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      interestedServices: prev.interestedServices.includes(service)
        ? prev.interestedServices.filter(s => s !== service)
        : [...prev.interestedServices, service]
    }));

    // Clear other service description if "Other" is unchecked
    if (service === 'Other' && formData.interestedServices.includes(service)) {
      setFormData(prev => ({ ...prev, otherServiceDescription: '' }));
      setOtherServiceError('');
    }
  };

  const handleOtherServiceDescriptionChange = (value: string) => {
    setFormData(prev => ({ ...prev, otherServiceDescription: value }));
    
    // Validate minimum 10 characters
    if (value.length > 0 && value.length < 10) {
      setOtherServiceError('Please provide at least 10 characters');
    } else {
      setOtherServiceError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate "Other" service description if selected
    if (formData.interestedServices.includes('Other')) {
      if (formData.otherServiceDescription.length < 10) {
        setOtherServiceError('Please provide at least 10 characters');
        return;
      }
    }
    
    // Show booking interface
    setIsSubmitted(true);
  };

  // Prepare form data for Cal.com
  const prepareCalComData = () => {
    const servicesText = formData.interestedServices.join(', ');
    const otherServiceText = formData.interestedServices.includes('Other')
      ? `\nOther Service: ${formData.otherServiceDescription}`
      : '';

    const notes = `Interested Services: ${servicesText}${otherServiceText}
Additional Information: ${formData.additionalInfo}`;

    return {
      name: formData.name,
      email: formData.email,
      notes: notes
    };
  };

  const calData = prepareCalComData();
  
  // Create Cal.com URL with prefilled data
  const calComUrl = `https://cal.com/jay-starvico/secret?name=${encodeURIComponent(calData.name)}&email=${encodeURIComponent(calData.email)}&notes=${encodeURIComponent(calData.notes)}`;

  // If form is submitted, show Cal.com booking
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="relative z-10 px-4 md:px-6 py-4 md:py-6 flex-shrink-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center">
              <img
                src="/Logo copy copy.png"
                alt="Turbo Automation Logo"
                className="h-20 md:h-24 lg:h-28 w-auto"
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
                Services
              </button>
              <button
                className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-blue-300"
              >
                Free Consultation
              </button>
            </nav>
          </div>
        </header>

        {/* Booking Interface */}
        <main className="px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                Schedule Your Consultation
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
                Thank you for your interest, {formData.name}! Please select a convenient time for your consultation call.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl p-4 md:p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Book Your Video Call
                </h3>
              </div>

              {/* Cal.com Embed */}
              <div className="w-full bg-white rounded-lg overflow-hidden" style={{ height: '700px' }}>
                <iframe
                  src={calComUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 'none', borderRadius: '8px' }}
                  title="Schedule a meeting with Starvico"
                  loading="lazy"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400/50 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Form
                </button>
                <button
                  onClick={onBack}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                >
                  Back to Home
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-600 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  What to Expect During Your Call
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-100">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <p>Discuss your business needs and challenges</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <p>Explore AI automation opportunities</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <p>Receive a customized solution proposal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary of Submitted Information */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Your Submitted Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-300 font-medium">Name:</span>
                    <span className="text-gray-100 ml-2">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-blue-300 font-medium">Email:</span>
                    <span className="text-gray-100 ml-2">{formData.email}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-blue-300 font-medium">Interested Services:</span>
                    <span className="text-gray-100 ml-2">{formData.interestedServices.join(', ')}</span>
                  </div>
                  {formData.interestedServices.includes('Other') && formData.otherServiceDescription && (
                    <div className="md:col-span-2">
                      <span className="text-blue-300 font-medium">Other Service Description:</span>
                      <span className="text-gray-100 ml-2">{formData.otherServiceDescription}</span>
                    </div>
                  )}
                  {formData.additionalInfo && (
                    <div className="md:col-span-2">
                      <span className="text-blue-300 font-medium">Additional Information:</span>
                      <span className="text-gray-100 ml-2">{formData.additionalInfo}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
              className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded px-2 py-1 text-blue-300"
            >
              Free Consultation
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
              Free Consultation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to transform your business with AI automation? Let's discuss your needs and explore how we can help.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex items-center text-lg font-semibold text-white mb-3">
                  <User className="w-5 h-5 mr-2 text-blue-300" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="flex items-center text-lg font-semibold text-white mb-3">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-300" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Interested Services Field */}
              <div>
                <label className="flex items-center text-lg font-semibold text-white mb-3">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-300" />
                  What are you looking for?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service}>
                      <label className="flex items-center p-4 bg-gray-800 border border-gray-500 rounded-lg cursor-pointer hover:border-blue-300 transition-all duration-200">
                        <input
                          type="checkbox"
                          checked={formData.interestedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-500 rounded focus:ring-blue-400 focus:ring-2"
                        />
                        <span className="ml-3 text-white">{service}</span>
                      </label>
                      
                      {/* Other Service Description Field */}
                      {service === 'Other' && formData.interestedServices.includes('Other') && (
                        <div className="mt-3">
                          <input
                            type="text"
                            value={formData.otherServiceDescription}
                            onChange={(e) => handleOtherServiceDescriptionChange(e.target.value)}
                            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                              otherServiceError 
                                ? 'border-red-400 focus:ring-red-400' 
                                : 'border-gray-500 focus:ring-blue-400'
                            }`}
                            placeholder="Describe what you want"
                          />
                          {otherServiceError && (
                            <p className="mt-2 text-sm text-red-300">{otherServiceError}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information Field */}
              <div>
                <label htmlFor="additionalInfo" className="flex items-center text-lg font-semibold text-white mb-3">
                  <Info className="w-5 h-5 mr-2 text-blue-300" />
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell us about your specific requirements, current challenges, budget etc."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Continue to Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}