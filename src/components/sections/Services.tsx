import { motion } from 'framer-motion';
import { Anchor, Compass, Ship, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Anchor: Anchor,
  Compass: Compass,
  ShipWheel: Ship,
  Shield: Shield,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            AI Services Offered
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical AI solutions tailored for Generation X professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-gold-500/20 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors">
                      <Icon className="w-8 h-8 text-gold-500" />
                    </div>
                    <CardTitle className="text-white font-display text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            All services are designed with Navy discipline and Generation X professionals in mind
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-gold-500/30">
              <span className="text-gold-500 font-semibold">Structured Approach</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-gold-500/30">
              <span className="text-gold-500 font-semibold">Ethical Implementation</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-gold-500/30">
              <span className="text-gold-500 font-semibold">Practical Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}