import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'AI Tools for Professionals Over 40',
      date: '2025-01-15',
      excerpt: 'Discover the essential AI tools that can transform how Generation X professionals work, without the overwhelm.',
      tags: ['AI Tools', 'Generation X', 'Productivity'],
      slug: 'ai-tools-for-professionals-over-40',
    },
    {
      title: 'How to Work Smarter with AI — Not Fear It',
      date: '2025-01-10',
      excerpt: 'Transform your relationship with AI from fear to empowerment. Learn practical strategies to work smarter, not harder.',
      tags: ['AI Strategy', 'Productivity', 'Mindset'],
      slug: 'how-to-work-smarter-with-ai',
    },
    {
      title: 'From Navy Discipline to AI Efficiency',
      date: '2025-01-05',
      excerpt: 'How military discipline and structure create the perfect foundation for mastering AI technology.',
      tags: ['Navy Values', 'AI Strategy', 'Leadership'],
      slug: 'from-navy-discipline-to-ai-efficiency',
    },
    {
      title: 'How to Automate 50% of Your Admin Tasks with ChatGPT',
      date: '2024-12-28',
      excerpt: 'Step-by-step guide to using ChatGPT for automating repetitive administrative tasks and reclaiming hours each week.',
      tags: ['Automation', 'ChatGPT', 'Productivity'],
      slug: 'automate-admin-tasks-with-chatgpt',
    },
    {
      title: 'Overcoming AI Myths and Misconceptions',
      date: '2024-12-20',
      excerpt: 'Debunking common AI myths that hold Generation X professionals back from embracing transformative technology.',
      tags: ['AI Education', 'Myths', 'Generation X'],
      slug: 'overcoming-ai-myths-and-misconceptions',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            AI Insights & Guides
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical advice and strategies for mastering AI as a Generation X professional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-gray-200 group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <CardTitle className="text-xl font-display text-navy-900 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-navy-900/5 text-navy-900 rounded-full text-xs font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-gold-600 hover:text-gold-700 p-0 h-auto font-semibold group/btn"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
          className="grid md:grid-cols-2 gap-6"
        >
          {blogPosts.slice(3).map((post, index) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow border-gray-200 group">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <CardTitle className="text-lg font-display text-navy-900 group-hover:text-gold-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-navy-900/5 text-navy-900 rounded-full text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    className="text-gold-600 hover:text-gold-700 p-0 h-auto font-semibold group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
