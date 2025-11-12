# Blog System - Quick Reference Card

## ⚡ Quick Commands

```bash
# Start dev server
npm run dev

# Create new blog post (interactive)
./create-blog-post.sh

# Build for production
npm run build
```

## 📁 File Locations

```
content/blog/          ← All blog markdown files go here
src/pages/BlogPost.tsx ← Blog post page template
src/lib/blog.ts        ← Blog utility functions
src/components/sections/Blog.tsx ← Homepage blog listing
```

## ✍️ New Blog Post Template

```markdown
---
title: "Your Title Here"
date: "2025-01-15"
excerpt: "Brief 1-2 sentence description"
tags: ["AI Tools", "Productivity"]
slug: "your-title-here"
author: "BAW"
---

# Your Title Here

Content goes here...
```

## 🤖 AI Content Generation Prompt

```
Write a comprehensive 2000-word blog post for Generation X professionals
(age 40-60) about [YOUR TOPIC].

Include:
- Practical examples
- Step-by-step instructions
- Real-world benefits
- Common concerns addressed
- Actionable next steps

Use a conversational but professional tone. Focus on overcoming fear/
overwhelm with AI technology.
```

## 🔗 Current Blog URLs

- http://localhost:5174/blog/ai-tools-for-professionals-over-40
- http://localhost:5174/blog/how-to-work-smarter-with-ai
- http://localhost:5174/blog/from-navy-discipline-to-ai-efficiency
- http://localhost:5174/blog/automate-admin-tasks-with-chatgpt
- http://localhost:5174/blog/overcoming-ai-myths-and-misconceptions

## 📊 Publishing Schedule Template

| Week | Topic | Status |
|------|-------|--------|
| 1 | How-to guide | ✅ |
| 2 | Tool review | 📝 |
| 3 | Case study | ⏳ |
| 4 | Thought leadership | ⏳ |

## 🎯 20 Blog Post Ideas

1. AI Email Assistant: Save 2 Hours Daily
2. Best AI Tools for Project Management
3. ChatGPT Prompts for Sales Professionals
4. AI for Legal Professionals
5. How I Used AI to Grow My Business
6. AI Tools for Financial Analysis
7. From Skeptic to Believer: My AI Journey
8. AI Ethics: Using Tools Responsibly
9. Top 10 ChatGPT Prompts for Managers
10. AI for Marketing: Content at Scale
11. Comparing ChatGPT vs Claude vs Gemini
12. AI Meeting Assistants Compared
13. Building Your Personal AI Workflow
14. AI for Data Analysis (No Coding)
15. Success Story: 50% Productivity Boost
16. AI for Remote Team Management
17. AI for Career Development
18. AI-Powered Research Guide
19. Building an AI-Enhanced Brand
20. AI for Customer Service

## 🚀 Batch Creation Workflow

**4-Hour Sprint = 10 Blog Posts**

1. Pick 10 topics (30 min)
2. Generate drafts with AI (1 hour)
3. Review & personalize (2 hours)
4. Format & save (30 min)

Result: 10 weeks of content!

## 🛠️ Troubleshooting

**Post not showing?**
- Check frontmatter format
- Verify slug matches filename
- Restart dev server

**Links not working?**
- Clear browser cache
- Check slug in Blog.tsx
- Verify routing in App.tsx

**Build errors?**
- Check frontmatter syntax
- Ensure proper YAML format
- Look for special characters

## 📚 Full Documentation

- **Quick Start**: [BLOG_QUICK_START.md](BLOG_QUICK_START.md)
- **Full Guide**: [BLOG_MANAGEMENT_GUIDE.md](BLOG_MANAGEMENT_GUIDE.md)

---

**Current Status**: ✅ 5 posts live | 🎯 Goal: 50+ posts | 📅 Target: 1-2 posts/week
