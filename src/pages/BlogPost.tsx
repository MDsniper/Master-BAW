import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Tag, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      <article className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="text-navy-900 hover:text-gold-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-navy-900/10 text-navy-900 rounded-full text-sm font-medium"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-navy max-w-none
              prose-headings:font-display prose-headings:text-navy-900
              prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-gold-600 prose-a:font-semibold hover:prose-a:text-gold-700
              prose-strong:text-navy-900 prose-strong:font-bold
              prose-ul:my-6 prose-ul:space-y-2
              prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-gray-700
              prose-blockquote:border-l-4 prose-blockquote:border-gold-500
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-code:text-navy-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-navy-900 prose-pre:text-gray-100"
          >
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-br from-navy-900 to-navy-800 rounded-lg text-center"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Ready to Transform Your Workflow with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized guidance on implementing AI tools in your specific role and industry.
            </p>
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link to="/">
              <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Read More Articles
              </Button>
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
