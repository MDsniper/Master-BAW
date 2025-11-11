import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Zap, BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Products() {
  const products = [
    {
      icon: FileText,
      title: 'AI Quick Start Guide',
      description: 'Comprehensive guide for Generation X professionals to start using AI tools effectively',
      price: '$29',
    },
    {
      icon: Zap,
      title: 'Automation Templates',
      description: 'Ready-to-use ChatGPT prompts and automation workflows for common business tasks',
      price: '$49',
    },
    {
      icon: BookOpen,
      title: 'AI Strategy Workbook',
      description: 'Step-by-step workbook to develop your personalized AI implementation strategy',
      price: '$39',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Digital Products & Resources
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore downloadable AI guides, templates, and tools to accelerate your AI journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-gray-200 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <product.icon className="w-8 h-8 text-gold-600" />
                  </div>
                  <CardTitle className="text-xl font-display text-navy-900">
                    {product.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-gold-600 pt-2">
                    {product.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-center border border-gold-500/20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Visit My Etsy Shop
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Discover more digital products, templates, and resources designed specifically for
            Generation X professionals embracing AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open(SITE_CONFIG.etsy, '_blank')}
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Digital Ethnicity on Etsy
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900"
            >
              Explore AI Guides & Templates
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}