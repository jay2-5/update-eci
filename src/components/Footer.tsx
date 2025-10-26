'use client'

import React from 'react';
import { FaXTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  {
    icon: FaXTwitter,
    href: 'https://x.com/TurboAutomation',
    label: 'Follow us on X (Twitter)'
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@TurboAutomation',
    label: 'Subscribe to our YouTube channel'
  },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/TurboAutomation',
    label: 'Like us on Facebook'
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/company/turboautomation',
    label: 'Connect with us on LinkedIn'
  }
];

export function Footer() {
  return (
    <footer className="py-6 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-300 hover:text-white opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg p-2"
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}