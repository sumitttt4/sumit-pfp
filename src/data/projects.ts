export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "glyph",
    name: "Glyph",
    category: "AI Brand Identity Generator",
    description: "Generate logos, colors, typography and complete brand systems in seconds.",
    image: "/glyph.png",
    metrics: "400+ users • 15 paying customers",
    liveUrl: "https://glyph.software",
    featured: true
  },
  {
    slug: "fedup-studio",
    name: "FedUp Studio",
    category: "Design & Development Studio",
    description: "We help startups design, build and launch modern digital products.",
    image: "/fedup-studio.png",
    metrics: "Founder & Design Engineer",
    liveUrl: "https://fedup.studio",
    featured: true
  },
  {
    slug: "sumit-builds",
    name: "Sumit Builds",
    category: "Open Source & Side Projects",
    description: "A collection of developer tools, templates, and experimentations.",
    image: "/sumit-builds.png",
    metrics: "Active side projects",
    liveUrl: "https://sumitsharmaa.me",
    featured: true
  },
  {
    slug: "kinetik",
    name: "Kinetik",
    category: "UI Component Library",
    description: "A modern, open-source UI component library for building beautiful interfaces.",
    image: "/kinetik.png",
    metrics: "Open Source",
    liveUrl: "https://www.kinetik.ink/",
    featured: true
  },
  {
    slug: "safeagree",
    name: "SafeAgree",
    category: "Privacy Tool",
    description: "Making consent understandable, not skippable.",
    image: "/Safeagree.png",
    metrics: "Live · Open Source",
    liveUrl: "https://safe-agree.vercel.app/",
    featured: false
  },
  {
    slug: "getlockedin",
    name: "GetLockedIN",
    category: "Productivity OS",
    description: "The Anti-Performative Productivity OS.",
    image: "/getlockedin.png",
    metrics: "Live · API-integrated",
    liveUrl: "https://getlockedin.live",
    featured: false
  },
  {
    slug: "nova-admin",
    name: "Nova Admin Panel",
    category: "Dashboard",
    description: "A comprehensive KYC management dashboard for merchant verification.",
    image: "/admin-dashboard-kyc.png",
    metrics: "Enterprise Admin Console",
    liveUrl: "https://nova-seven-sepia.vercel.app/dashboard",
    featured: false
  },
  {
    slug: "vibe-market",
    name: "Vibe Market",
    category: "E-Commerce",
    description: "A discovery layer for vibe-coded apps.",
    image: "/vibe-market-landing.png",
    metrics: "Live · Curated marketplace",
    liveUrl: "https://vibemarket.tech",
    featured: false
  },
  {
    slug: "monoqr",
    name: "MonoQr",
    category: "Web Tool",
    description: "Instant QR Codes for Modern Brands.",
    image: "/monoqr.png",
    metrics: "Web Utility",
    liveUrl: "https://mono-qr.vercel.app/",
    featured: false
  },
  {
    slug: "linkease",
    name: "Linkease",
    category: "SaaS",
    description: "A centralized platform for collecting and managing links.",
    image: "/linkease.png",
    metrics: "Bookmarking Platform",
    liveUrl: "https://link-ease-omega.vercel.app/",
    featured: false
  },
  {
    slug: "n8n-workflow",
    name: "n8n workflow",
    category: "Automation",
    description: "Visualizing complex automation workflows with clarity.",
    image: "/n8n.png",
    metrics: "Data Visualization",
    liveUrl: "https://n8n-workflow-eta.vercel.app/",
    featured: false
  }
];

export default projects;
