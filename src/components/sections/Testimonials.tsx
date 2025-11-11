import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Coming Soon',
      role: 'Senior Manager',
      quote: 'Testimonials will be added as we serve our first clients. Be among the first to experience Navy-disciplined AI consulting.',
      rating: 5,
    },
    {
      name: 'Your Name Here',
      role: 'Your Title',
      quote: 'Share your experience working with Bennie and help other Generation X professionals discover the power of practical AI education.',
      rating: 5,
    },
    {
      name: 'Future Client',
      role: 'Professional',
      quote: 'Join the growing community of Generation X professionals who are mastering AI with confidence and discipline.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building trust through results and Navy values
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-gold-500/20 hover:border-gold-500/50 transition-all">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-gold-500 mb-4 opacity-50" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg">
            Be among the first to experience professional AI consulting with Navy discipline
          </p>
        </motion.div>
      </div>
    </section>
  );
}