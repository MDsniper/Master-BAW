import { Anchor, Linkedin, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-12 border-t border-gold-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="w-8 h-8 text-gold-500" />
              <span className="font-display font-bold text-xl">{SITE_CONFIG.author}</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {SITE_CONFIG.mission}
            </p>
            <div className="flex items-center gap-4">
              {SITE_CONFIG.values.map((value) => (
                <span key={value} className="text-gold-500 text-sm font-semibold">
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-gold-500">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.etsy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Etsy Shop
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.author}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with Navy discipline • Powered by AI expertise
          </p>
        </div>
      </div>
    </footer>
  );
}