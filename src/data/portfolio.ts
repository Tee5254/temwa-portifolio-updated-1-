import {
  Code2,
  Cloud,
  Database,
  Layers,
  Smartphone,
  Gauge,
  ShieldCheck,
  Workflow,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Temwa Maleka",
  role: "Software Engineer",
  tagline: "Full-stack engineer building fast, reliable products for the web and cloud.",
  intro:
    "I design and ship production software end to end — from clean React interfaces to resilient APIs and cloud infrastructure. I partner with founders and teams who want dependable delivery, not guesswork.",
  location: "Area 49, Lilongwe, Malawi · Remote worldwide",
  email: "temwamaleka@gmail.com",
  phone: "+265 98 305 452",
  whatsapp: "+26598305452",
  resumeUrl: "#contact",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Tee5254", icon: "github" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/temwa-maleka-99798933b/", icon: "linkedin" as const },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`, icon: "whatsapp" as const },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" as const },
];

export const stats = [
  { label: "Projects delivered", value: 11, suffix: "+" },
  { label: "Years of experience", value: 3, suffix: "" },
  { label: "Happy clients", value: 28, suffix: "+" },
  { label: "Uptime maintained", value: 99, suffix: "%" },
];

export type SkillGroup = { title: string; icon: LucideIcon; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    icon: Code2,
    items: ["Node.js", "Express", "Python", "REST", "GraphQL", "Java"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "CI/CD", "Cloudflare", "Terraform"],
  },
  {
    title: "Modern Languages",
    icon: Terminal,
    items: ["Rust", "Go", "Kotlin", "Swift", "Dart", "Zig"],
  },
];

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Custom dashboards, portals and SaaS products built with React and TypeScript — typed, tested and maintainable.",
    icon: Layers,
  },
  {
    title: "API & Backend Engineering",
    description:
      "Secure REST and GraphQL services, database design, authentication and third-party integrations.",
    icon: Code2,
  },
  {
    title: "Mobile-First Interfaces",
    description:
      "Responsive, accessible interfaces that feel native on every screen size, from phones to ultrawide displays.",
    icon: Smartphone,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Containerised deployments, CI/CD pipelines and observability so releases stay boring and predictable.",
    icon: Cloud,
  },
  {
    title: "Performance Optimisation",
    description:
      "Audits and refactors that cut load times, shrink bundles and lift Core Web Vitals into the green.",
    icon: Gauge,
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, code audits and roadmap planning for teams scaling past their first version.",
    icon: ShieldCheck,
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  github: string;
  demo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Golden Plate — Restaurant",
    summary:
      "Restaurant website for a wood-fired pizza and Malawian grill spot in Lilongwe, with menu showcases and online table reservations.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Tee5254",
    demo: "https://goldenplate-magic.lovable.app",
    accent: "from-amber-500/25 to-transparent",
  },
  {
    title: "Malawi Chic Style",
    summary:
      "Online clothing store showcasing curated fashion collections with a smooth browsing and shopping experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Tee5254",
    demo: "https://malawi-chic-style.lovable.app/",
    accent: "from-pink-400/25 to-transparent",
  },
  {
    title: "Kwacha Wheels Hub",
    summary:
      "Online car hire platform for browsing available vehicles and managing bookings with a clean, modern interface.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Tee5254",
    demo: "https://kwacha-wheels-hub.lovable.app/",
    accent: "from-blue-400/25 to-transparent",
  },
  {
    title: "CodeAxis Tech Solutions",
    summary:
      "Company website for a software solutions provider, presenting services, portfolio and contact flows.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Tee5254",
    demo: "https://codeaxistechsolutions.vercel.app",
    accent: "from-emerald-400/25 to-transparent",
  },
  {
    title: "Scentimental Aura",
    summary:
      "Elegant storefront for a fragrance brand with curated collections, product detail pages and WhatsApp ordering.",
    tags: ["React", "TypeScript", "Vercel"],
    github: "https://github.com/Tee5254",
    demo: "https://scentimental-aura.vercel.app/",
    accent: "from-violet-400/20 to-transparent",
  },
  {
    title: "Pekie Store — E-Commerce",
    summary:
      "Full online shop with product catalogue, cart and checkout-ready structure for a growing retail brand.",
    tags: ["React", "TypeScript", "Supabase"],
    github: "https://github.com/Tee5254",
    demo: "https://pekie-store.vercel.app/",
    accent: "from-cyan-300/20 to-transparent",
  },
  {
    title: "SoundLoop Vibe",
    summary:
      "Music discovery and streaming-style web app with playlists, rich visuals and smooth playback UI.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Tee5254",
    demo: "https://soundloop-vibe.vercel.app/",
    accent: "from-amber-400/25 to-transparent",
  },
  {
    title: "Mamma Mia — Italian Restaurant",
    summary:
      "Website for an Italian restaurant in Lilongwe with full food and bar menus, promotions, gallery and an admin dashboard for managing content.",
    tags: ["TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Tee5254",
    demo: "https://mammamiamw.com",
    accent: "from-red-500/25 to-transparent",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type PricingCategory = {
  id: "websites" | "systems" | "apps";
  label: string;
  intro: string;
  note?: string;
  tiers: PricingTier[];
};

const websitePackages: PricingTier[] = [
  {
    name: "Basic",
    price: "MWK 250,000",
    description:
      "A clean, professional online presence for small businesses that want to be found and contacted quickly.",
    features: [
      "3–5 pages",
      "Responsive design",
      "Business information",
      "Contact/WhatsApp button",
      "Social media links",
      "Basic animations",
      "Domain & hosting setup",
    ],
  },
  {
    name: "Standard",
    price: "MWK 500,000",
    highlighted: true,
    description:
      "A fully custom website with booking forms and a content admin, ideal for businesses that update their site regularly.",
    features: [
      "Everything in Basic",
      "5–8 pages",
      "Modern custom design",
      "Contact/booking forms",
      "Google Maps integration",
      "Admin/content management",
      "Basic SEO",
      "Database integration",
    ],
  },
  {
    name: "Premium",
    price: "MWK 1,200,000",
    description:
      "A complete web application with user accounts, bookings and payments for businesses that want to operate online.",
    features: [
      "Everything in Standard",
      "Custom web application",
      "User accounts/authentication",
      "Online booking/reservation system",
      "Payments where required",
      "Admin dashboard",
      "Database & API integration",
      "Advanced animations",
      "Advanced SEO & performance optimization",
    ],
  },
];

const systemPackages: PricingTier[] = [
  {
    name: "Basic POS System",
    price: "MWK 2,000,000",
    description:
      "Everything a restaurant or shop needs to take orders, bill customers and record sales, with tax-compliant invoicing built in.",
    features: [
      "Modern Point of Sale interface",
      "Table and waiter management",
      "Menu and product management",
      "Order processing and billing",
      "Cash, mobile money and card recording",
      "Receipt generation",
      "Staff accounts and permissions",
      "MRA EIS integration",
      "Basic sales reports",
      "Installation and configuration",
    ],
  },
  {
    name: "Professional Management System",
    price: "MWK 3,500,000",
    highlighted: true,
    description:
      "Adds kitchen tracking, stock control and financial reporting so you can run the whole operation from one dashboard.",
    features: [
      "Everything in Basic POS",
      "Kitchen Display System (KDS)",
      "Real-time kitchen order tracking",
      "Advanced inventory and stock tracking",
      "Supplier management",
      "Expense tracking",
      "Advanced sales and financial reports",
      "Management dashboard",
      "Deployment and staff training",
    ],
  },
  {
    name: "Enterprise Management System",
    price: "MWK 4,500,000",
    description:
      "Built for growing businesses that want to understand food costs and profit, reduce wastage and manage multiple branches.",
    features: [
      "Everything in Professional",
      "Recipe and ingredient costing",
      "Food cost and profitability analysis",
      "Stock wastage monitoring",
      "Advanced financial analytics",
      "Detailed business performance reports",
      "Multiple branch management",
      "Advanced employee management",
      "Extended system customisation",
    ],
  },
];

const appPackages: PricingTier[] = [
  {
    name: "Customer Ordering App",
    price: "MWK 1,200,000",
    description:
      "Lets your customers browse the menu, order for delivery or collection and track their orders from their phone.",
    features: [
      "Customer registration and login",
      "Digital menu with images and prices",
      "Shopping cart and online ordering",
      "Delivery and collection options",
      "Order status tracking and history",
      "Push notifications",
      "POS integration",
      "Android app with Google Play publishing",
    ],
  },
  {
    name: "Management & Inventory App",
    price: "MWK 1,000,000",
    description:
      "Puts stock, expenses and sales in the owner's pocket, with alerts when items run low.",
    features: [
      "Management dashboard",
      "Stock and ingredient management",
      "Stock additions and adjustments",
      "Supplier and purchase recording",
      "Low-stock notifications",
      "Expense recording",
      "Sales and performance reports",
      "Android app with Google Play publishing",
    ],
  },
  {
    name: "Complete Mobile App Suite",
    price: "MWK 2,000,000",
    highlighted: true,
    description:
      "Both apps on one shared backend, so customer orders, stock and sales stay in sync with your POS system.",
    features: [
      "Customer Ordering App",
      "Management & Inventory App",
      "Shared backend and database",
      "User authentication",
      "Data synchronisation",
      "Testing and deployment",
      "Google Play publishing for both apps",
    ],
  },
];

export const defaultPricingCategory: PricingCategory = {
  id: "websites",
  label: "Websites",
  intro: "Websites and web applications for businesses of every size.",
  tiers: websitePackages,
};

export const pricingCategories: PricingCategory[] = [
  defaultPricingCategory,
  {
    id: "systems",
    label: "Business Systems",
    intro:
      "Centralised software to run your restaurant or shop day to day, from sales and kitchen to stock and finances.",
    note:
      "Backend and integration costs are assessed per package combination to avoid duplicate charges. Hardware, hosting, SMS, payment gateway and MRA certification fees are not included.",
    tiers: systemPackages,
  },
  {
    id: "apps",
    label: "Mobile Apps",
    intro:
      "Dedicated Android apps connected to your management system through a central backend.",
    note:
      "Google Play developer account fees are not included. Publication is subject to Google's review.",
    tiers: appPackages,
  },
];

export const maintenance = {
  title: "Maintenance & updates",
  text: "Every system and app package includes one month of free maintenance after deployment. From the second month, a monthly maintenance agreement of MWK 100,000 covers updates, bug fixes, monitoring and technical support. Major new features are quoted separately.",
};

export const paymentTerms = "Development is paid in stages: 40% on approval, 30% on core system completion, 20% on app completion and 10% on final testing and deployment.";

export type TimelineItem = {
  kind: "work" | "education";
  period: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    kind: "work",
    period: "2024 — Present",
    title: "Software Engineer",
    org: "Softtech Limited",
    description:
      "Building and maintaining web applications and internal tools for clients and product teams across Malawi.",
  },
  {
    kind: "work",
    period: "2022 — 2024",
    title: "Full-Stack Engineer",
    org: "Independent · Client Projects",
    description:
      "Delivered full-stack products for startups and agencies across fintech, e-commerce and creative industries using React, Node.js and cloud services.",
  },
  {
    kind: "education",
    period: "2023 — Present",
    title: "BSc Software Engineering",
    org: "Daeyang University",
    description:
      "Studying software engineering with focus on modern web development, databases, algorithms and system design.",
  },
];

export const workflowIcon = Workflow;
