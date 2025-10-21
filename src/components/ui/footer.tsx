import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://www.facebook.com/TurboAutomation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/turboautomation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/TurboAutomation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="X (Twitter)"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
