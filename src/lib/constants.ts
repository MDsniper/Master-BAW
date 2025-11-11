export const SITE_CONFIG = {
  title: "Bennie Williams AI Consulting",
  domain: "benniewilliams.ai",
  description: "Empowering Generation X to embrace AI through practical education, automation, and strategy.",
  author: "Bennie Williams",
  
  // Contact & Social
  linkedin: "https://www.linkedin.com/in/benniewilliams/",
  etsy: "https://www.etsy.com/shop/DigitalEthnicity",
  calendly: "https://calendly.com/your-handle/consultation",
  email: "bw@benniewilliams.com",
  
  // Payment
  paymentMethod: "PayPal",
  
  // Theme Colors
  colors: {
    primary: "#001f3f",
    accent: "#FFD700",
    text: "#ffffff",
  },
  
  // Core Values
  values: ["Honor", "Courage", "Commitment", "Integrity"],
  
  // Mission
  mission: "Empowering Generation X to embrace AI through practical education, automation, and strategy.",
  
  // Headshot
  headshot: "/bennie-headshot.png",
};

export const SERVICES = [
  {
    title: "AI Education for Generation X",
    description: "Teaching professionals to use AI safely and effectively",
    icon: "Anchor",
  },
  {
    title: "AI Automation Setup",
    description: "Implementing automations for workflows and reporting",
    icon: "Compass",
  },
  {
    title: "Custom AI Solutions",
    description: "Building lightweight chatbots, summarizers, and tools",
    icon: "ShipWheel",
  },
  {
    title: "AI Strategy Consulting",
    description: "Helping teams plan ethical and efficient AI integration",
    icon: "Shield",
  },
];

export const PRICING_TIERS = [
  {
    name: "Intro Session",
    description: "Paid consultation to assess needs",
    duration: "30 min",
    price: "$50",
    features: [
      "Initial needs assessment",
      "AI readiness evaluation",
      "Personalized recommendations",
      "Q&A session",
    ],
  },
  {
    name: "Basic Package",
    description: "1-hour educational session + resources",
    duration: "1 hr",
    price: "$100",
    features: [
      "Comprehensive AI training",
      "Hands-on demonstrations",
      "Resource materials",
      "Follow-up support",
    ],
    popular: true,
  },
  {
    name: "Mid-Tier Package",
    description: "Multi-session AI training or small automation build",
    duration: "Custom",
    price: "Custom",
    features: [
      "Multiple training sessions",
      "Custom automation setup",
      "Workflow optimization",
      "Ongoing guidance",
    ],
  },
  {
    name: "Top-Tier Package",
    description: "Ongoing consulting & refinement",
    duration: "Custom",
    price: "Custom",
    features: [
      "Dedicated consulting hours",
      "Advanced AI implementations",
      "Strategic planning",
      "Priority support",
    ],
  },
];

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Digital Products", href: "#products" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];