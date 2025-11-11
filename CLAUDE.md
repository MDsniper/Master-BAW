# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Navy-themed AI consulting website for Bennie Williams, targeting Generation X professionals. Built as a single-page application with smooth scrolling sections, Framer Motion animations, and a navy/gold color scheme inspired by military values.

**Live URL**: TBD (configured for static hosting)

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS with custom navy/gold theme
- **UI Components**: shadcn/ui (all components pre-installed in `@/components/ui`)
- **Animations**: Framer Motion
- **Routing**: React Router DOM (minimal - mainly for 404 handling)
- **State Management**: TanStack Query (React Query) + Zustand
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Content**: Markdown blog posts with gray-matter frontmatter parsing

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm i

# Start development server (http://localhost:5173)
pnpm run dev

# Production build
pnpm run build

# Preview production build
pnpm run preview

# Lint codebase (ESLint with quiet mode)
pnpm run lint
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Navigation.tsx # Smooth-scroll nav bar
│   │   ├── Hero.tsx       # Hero with headshot and CTA
│   │   ├── About.tsx      # About Bennie section
│   │   ├── Services.tsx   # AI services grid
│   │   ├── Pricing.tsx    # Pricing tiers with Calendly
│   │   ├── Blog.tsx       # Blog posts listing
│   │   ├── Products.tsx   # Digital products (Etsy)
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx    # Contact form + Calendly
│   │   └── Footer.tsx     # Footer with social links
│   └── ui/                # shadcn/ui components (pre-installed)
├── data/
│   └── blog/              # Markdown blog posts with frontmatter
├── hooks/                 # Custom React hooks
├── lib/
│   ├── constants.ts       # SITE_CONFIG, SERVICES, PRICING_TIERS, etc.
│   └── utils.ts           # Utility functions (cn, etc.)
├── pages/
│   ├── Index.tsx          # Main landing page (composes all sections)
│   └── NotFound.tsx       # 404 page
├── App.tsx                # Root component with providers
├── main.tsx               # Entry point
└── index.css              # Global styles + Tailwind imports
```

## Key Architecture Patterns

### Single Page Application with Smooth Scrolling
- All sections live on the Index page (`src/pages/Index.tsx`)
- Navigation uses anchor links with smooth scroll behavior (e.g., `#hero`, `#about`)
- Section IDs match navigation hrefs defined in `NAVIGATION_ITEMS` (src/lib/constants.ts)

### Component Organization
- **Sections**: Page-level components that represent full-width sections of the landing page
- **UI Components**: Reusable shadcn/ui primitives in `@/components/ui`
- All sections are imported and composed in `src/pages/Index.tsx`

### Content Management
- **Blog Posts**: Markdown files in `src/data/blog/` with YAML frontmatter
- Frontmatter structure: `title`, `date`, `slug`, `tags`, `excerpt`, `coverImage`
- Blog component (`src/components/sections/Blog.tsx`) displays static post data (not dynamically loaded from markdown files)

### Configuration Management
- Centralized site configuration in `src/lib/constants.ts`
- Includes: `SITE_CONFIG`, `SERVICES`, `PRICING_TIERS`, `NAVIGATION_ITEMS`
- All text content, URLs, and configuration should be managed here

### Styling System
- Custom navy/gold theme defined in `tailwind.config.ts`
- Navy shades: `navy-50` through `navy-900` (primary: `#001f3f`)
- Gold shades: `gold-50` through `gold-900` (accent: `#FFD700`)
- Custom fonts: `font-sans` (Inter), `font-display` (Montserrat)
- Custom animations: `wave` (3s ease-in-out infinite)
- Use `@/` path alias for imports (maps to `src/`)

### Third-Party Integrations
- **Calendly**: Consultation booking (URL in SITE_CONFIG)
- **Etsy**: Digital products shop link (URL in SITE_CONFIG)
- **LinkedIn**: Professional profile link (URL in SITE_CONFIG)
- **PayPal**: Payment method mentioned (no integration code)

## Important Design Principles

1. **Navy Theme**: Maintain navy blue (#001f3f) as primary with gold (#FFD700) accents
2. **Military Values**: Reflect Honor, Courage, Commitment, Integrity in messaging
3. **Generation X Focus**: Content and UX tailored for professionals 40+
4. **Smooth Animations**: Use Framer Motion with subtle, professional animations
5. **Accessibility**: Maintain ARIA labels and keyboard navigation
6. **Mobile-First**: Responsive design with Tailwind breakpoints

## TypeScript Configuration

- **No re-exporting imported types**: Per project instructions, don't re-export types you're already importing
- **Path Aliases**: Use `@/` for `src/` directory
- ESLint configured with React hooks rules and TypeScript support
- Unused variables warning disabled (`@typescript-eslint/no-unused-vars: "off"`)

## Adding New Blog Posts

1. Create new `.md` file in `src/data/blog/`
2. Add YAML frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "YYYY-MM-DD"
   slug: "url-friendly-slug"
   tags: ["Tag1", "Tag2"]
   excerpt: "Brief description"
   coverImage: "/blog/image.jpg"
   ---
   ```
3. Update `src/components/sections/Blog.tsx` to include the new post in the `blogPosts` array

## Adding New shadcn/ui Components

All shadcn/ui components are pre-installed. To add new ones:
```bash
npx shadcn-ui@latest add [component-name]
```

Configuration is in `components.json` (default style, slate base color, CSS variables enabled).

## Common Development Tasks

### Updating Site Configuration
Edit `src/lib/constants.ts` to change:
- Contact links (LinkedIn, Calendly, Etsy, email)
- Service offerings
- Pricing tiers
- Navigation items

### Modifying Theme Colors
Edit `tailwind.config.ts` to adjust navy/gold color scales or add new theme colors.

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation item to `NAVIGATION_ITEMS` in constants
4. Ensure section has an `id` attribute matching the navigation href

## Package Manager

This project uses **pnpm** (version 8.10.0). Always use `pnpm` commands, not npm or yarn.

## Deployment

### Coolify Deployment (Recommended)

The project is optimized for Coolify deployment. See `COOLIFY.md` for detailed instructions.

**Quick Setup in Coolify:**
1. Create new Application
2. Connect Git repository
3. Build Pack: Docker
4. Health Check Path: `/health`
5. Port: `80`
6. Deploy

### Docker Deployment (Manual VPS)

The project includes a complete Docker setup with nginx for production hosting. This solves common SPA routing issues (white screen, 404 on refresh).

**Quick Start**:
```bash
# Build and run
docker compose up -d --build

# View logs
docker compose logs -f

# Stop
docker compose down
```

**Files**:
- `Dockerfile` - Multi-stage build (Node.js builder + nginx server)
- `nginx.conf` - SPA routing configuration with `try_files` fallback to index.html
- `docker-compose.yml` - Service orchestration
- `.dockerignore` - Build optimization

**Key Features**:
- Multi-stage build (final image ~50MB)
- Gzip compression enabled
- Asset caching (1 year for static files)
- Security headers (XSS, CSP, etc.)
- Health check endpoint at `/health`
- SPA routing support (all routes fallback to index.html)

**Common Issues**:
- **White screen**: Usually caused by incorrect nginx SPA routing - the included nginx.conf fixes this
- **404 on refresh**: Resolved by `try_files $uri $uri/ /index.html;` in nginx.conf
- **Asset loading failures**: Check browser console and verify base path in vite.config.ts is `'/'`

For detailed deployment instructions, SSL setup, and troubleshooting, see `DEPLOYMENT.md`.
