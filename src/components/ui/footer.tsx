import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/TurboAutomation',
      icon: Twitter,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@TurboAutomation',
      icon: Youtube,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/TurboAutomation',
      icon: Facebook,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/turboautomation',
      icon: Linkedin,
    },
  ];

  return (
    <footer className="w-full py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 transform hover:scale-110"
              >
                <Icon size={28} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
