#!/bin/bash
# Blog Post Creation Script
# Usage: ./create-blog-post.sh

echo "======================================"
echo "Create New Blog Post"
echo "======================================"
echo ""
echo "Enter blog post title:"
read title

# Check if title is empty
if [ -z "$title" ]; then
    echo "Error: Title cannot be empty"
    exit 1
fi

# Convert title to slug (lowercase, replace spaces with hyphens)
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//g' | sed 's/-$//g')

# Get current date
date=$(date +%Y-%m-%d)

# Create file path
filepath="content/blog/${slug}.md"

# Check if file already exists
if [ -f "$filepath" ]; then
    echo "Error: Blog post already exists at $filepath"
    exit 1
fi

# Create the markdown file
cat > "$filepath" <<EOF
---
title: "$title"
date: "$date"
excerpt: "Brief description here - update this with a compelling 1-2 sentence summary!"
tags: ["AI Tools", "Productivity", "Generation X"]
slug: "$slug"
author: "BAW"
---

# $title

## Introduction

Write your introduction here. Hook the reader and explain what they'll learn...

## Main Section 1

Content for your first main point...

### Subsection

More detailed information...

## Main Section 2

Content for your second main point...

### Key Takeaways

- Point 1
- Point 2
- Point 3

## Real-World Example

Share a concrete example or case study...

## How to Get Started

Provide actionable steps:

1. Step 1
2. Step 2
3. Step 3

## Common Questions

**Question 1?**
Answer here...

**Question 2?**
Answer here...

## Conclusion

Summarize the key points and provide a clear call to action...

---

**Ready to take the next step?** [Schedule a consultation](#contact) or [explore our services](#services) to learn more.
EOF

echo ""
echo "✅ Blog post created successfully!"
echo ""
echo "📁 File location: $filepath"
echo "🔗 URL will be: /blog/$slug"
echo ""
echo "📝 Next steps:"
echo "   1. Open the file and update the excerpt"
echo "   2. Adjust tags as needed"
echo "   3. Write your full content"
echo "   4. Optionally add to src/components/sections/Blog.tsx for homepage display"
echo ""
echo "💡 Pro tip: Use ChatGPT or Claude to help draft content!"
echo "   Prompt: 'Write a comprehensive 2000-word blog post for Generation X professionals about $title'"
echo ""
