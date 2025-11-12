import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
  author?: string;
  content?: string;
}

// Import all blog post markdown files
const blogPosts: Record<string, string> = import.meta.glob(
  '../../content/blog/*.md',
  { as: 'raw', eager: true }
);

export function getAllBlogPosts(): BlogPost[] {
  const posts = Object.entries(blogPosts).map(([filepath, content]) => {
    const { data } = matter(content);
    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      slug: data.slug,
      author: data.author,
    } as BlogPost;
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const post = Object.entries(blogPosts).find(([filepath]) => {
    return filepath.includes(`${slug}.md`);
  });

  if (!post) return null;

  const { data, content } = matter(post[1]);

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    slug: data.slug,
    author: data.author,
    content,
  };
}
