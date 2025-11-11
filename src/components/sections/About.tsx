import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'Navy Veteran',
      description: 'Bringing military discipline and values to AI consulting',
    },
    {
      icon: Award,
      title: '30 Years in IT',
      description: 'Senior Data Center Manager at Children\'s National Hospital',
    },
    {
      icon: Users,
      title: 'Generation X Focus',
      description: 'Helping professionals 40+ overcome AI fear through hands-on education',
    },
    {
      icon: Target,
      title: 'Practical Approach',
      description: 'Structured, ethical, and approachable AI implementation',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            About Bennie
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining Navy discipline with AI innovation to empower Generation X professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              As an ex-Navy veteran with 30 years of IT experience, I've witnessed countless
              technology transformations. Today, as a Senior Data Center Manager at Children's
              National Hospital, I'm at the forefront of AI integration in critical healthcare
              infrastructure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My mission is clear: help professionals 40+ overcome AI fear through hands-on
              education and practical implementation. I understand the challenges Generation X
              faces—you've built careers on experience and expertise, and AI can feel like a
              threat to that foundation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But here's the truth: AI doesn't replace your experience—it amplifies it. By
              blending Navy discipline with AI innovation, I provide structured, ethical, and
              approachable consulting that respects your expertise while expanding your
              capabilities.
            </p>
            <div className="pt-4">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Core Values
              </h3>
              <div className="flex flex-wrap gap-3">
                {SITE_CONFIG.values.map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-navy-900 text-gold-500 rounded-full font-semibold"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold-500/20"
              >
                <item.icon className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-center border border-gold-500/20"
        >
          <blockquote className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            "{SITE_CONFIG.mission}"
          </blockquote>
          <p className="text-gold-500 font-semibold">— Bennie Williams</p>
        </motion.div>
      </div>
    </section>
  );
}