# Bennie Williams AI Consulting Website - Development Plan

## Project Overview
Building a Navy-themed AI consulting website for Bennie Williams using React + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion.

## Color Scheme
- Primary: #001f3f (Navy blue)
- Accent: #FFD700 (Gold)
- Text: #ffffff (White)

## Files to Create/Modify

### 1. Configuration & Assets
- [x] Copy headshot to public/bennie-headshot.png
- [ ] Update index.html (title, meta tags, favicon)
- [ ] Update tailwind.config.ts (custom colors)
- [ ] Create src/lib/constants.ts (site config, URLs)

### 2. Blog Data (Markdown files in src/data/blog/)
- [ ] Create 5 placeholder blog posts with frontmatter

### 3. Main Components (src/components/sections/)
- [ ] Hero.tsx - Hero section with headshot, tagline, CTA buttons
- [ ] About.tsx - About Bennie section
- [ ] Services.tsx - AI services with cards and icons
- [ ] Pricing.tsx - Service tiers with Calendly integration
- [ ] Blog.tsx - Blog listing with Markdown parsing
- [ ] Products.tsx - Digital products section with Etsy link
- [ ] Testimonials.tsx - Client testimonials carousel
- [ ] Contact.tsx - Contact form with Calendly embed
- [ ] Navigation.tsx - Smooth scroll navigation bar
- [ ] Footer.tsx - Footer with social links

### 4. Utility Components
- [ ] src/components/BlogCard.tsx - Individual blog post card
- [ ] src/components/ServiceCard.tsx - Service offering card
- [ ] src/components/PricingCard.tsx - Pricing tier card
- [ ] src/components/ProductCard.tsx - Digital product card
- [ ] src/components/TestimonialCard.tsx - Testimonial card

### 5. Main Pages
- [ ] src/pages/Index.tsx - Main landing page (compose all sections)

### 6. Styling
- [ ] src/index.css - Update with Navy theme and custom styles

### 7. Dependencies to Add
- [ ] framer-motion (animations)
- [ ] lucide-react (already included)
- [ ] gray-matter (Markdown frontmatter parsing)
- [ ] react-markdown (Markdown rendering)

## Implementation Order
1. Setup: Update config files, add dependencies
2. Create constants and utilities
3. Build individual section components
4. Create blog data files
5. Compose main Index page
6. Test responsiveness and accessibility
7. Final polish and optimization

## Key Features
- Smooth scroll navigation
- Framer Motion animations
- Mobile-first responsive design
- Accessibility (ARIA labels, keyboard navigation)
- Calendly integration for bookings
- PayPal payment mentions
- Markdown blog system
- Navy + Gold color theme with nautical elements