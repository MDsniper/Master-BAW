import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Nautical Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="rgba(0, 31, 63, 0.3)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gold-500/20 border border-gold-500 rounded-full text-gold-500 text-sm font-semibold">
                Ex-Navy Veteran • 30 Years in IT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Helping Professionals{' '}
              <span className="text-gold-500">Master AI</span> with Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              {SITE_CONFIG.mission}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
                className="bg-gold-500 text-navy-900 hover:bg-gold-600 font-semibold text-lg px-8 py-6 group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Paid Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#services')}
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold text-lg px-8 py-6"
              >
                View Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                <span>Honor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse delay-100" />
                <span>Courage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse delay-200" />
                <span>Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse delay-300" />
                <span>Integrity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-gold-500/30">
                <img
                  src={SITE_CONFIG.headshot}
                  alt="Bennie Williams"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}