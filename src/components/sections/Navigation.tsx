import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Anchor } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-2 text-white hover:text-gold-500 transition-colors"
            aria-label="Home"
          >
            <Anchor className="w-8 h-8" />
            <span className="font-display font-bold text-xl hidden sm:inline">
              {SITE_CONFIG.author}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gold-500 hover:bg-navy-800/50 transition-colors"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
              className="ml-4 bg-gold-500 text-navy-900 hover:bg-gold-600 font-semibold"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gold-500"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left text-white hover:text-gold-500 hover:bg-navy-800/50 justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
                className="w-full bg-gold-500 text-navy-900 hover:bg-gold-600 font-semibold"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}