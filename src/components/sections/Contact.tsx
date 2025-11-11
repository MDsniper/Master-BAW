import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Calendar, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to master AI with confidence? Let's start the conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-navy-900">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your AI goals and challenges..."
                      rows={6}
                      className="border-gray-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-navy-900">
                  Schedule a Consultation
                </CardTitle>
                <CardDescription>
                  Book a paid consultation to discuss your AI needs and goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book on Calendly
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  All consultations are paid • Payments accepted via {SITE_CONFIG.paymentMethod}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-display text-navy-900">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  onClick={() => window.open(SITE_CONFIG.linkedin, '_blank')}
                  className="w-full justify-start border-gray-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = `mailto:${SITE_CONFIG.email}`}
                  className="w-full justify-start border-gray-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {SITE_CONFIG.email}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-navy-900 to-navy-800 border-gold-500/20">
              <CardContent className="pt-6">
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Why Work With Me?
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>30 years of IT experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>Navy-trained discipline and values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>Specialized in Generation X professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>Practical, hands-on approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">✓</span>
                    <span>Structured, ethical AI implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}