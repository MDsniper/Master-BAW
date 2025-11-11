import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calendar, Star } from 'lucide-react';
import { PRICING_TIERS, SITE_CONFIG } from '@/lib/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Service Tiers & Investment
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Professional AI consulting services designed for your success
          </p>
          <p className="text-sm text-gray-500">
            All consultations are paid • Payments accepted via {SITE_CONFIG.paymentMethod}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${tier.popular ? 'border-gold-500 border-2 shadow-xl' : 'border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-navy-900">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {tier.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-navy-900">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {tier.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gold-500 hover:bg-gold-600 text-navy-900'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    } font-semibold`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
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
            Not Sure Which Package Is Right for You?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Start with an Intro Session to assess your needs and get personalized recommendations.
            All consultations are paid to ensure dedicated, professional service.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(SITE_CONFIG.calendly, '_blank')}
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-lg px-8"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Your Intro Session
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            Payments accepted via {SITE_CONFIG.paymentMethod}
          </p>
        </motion.div>
      </div>
    </section>
  );
}