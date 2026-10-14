export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  metrics?: string;
  title?: string;
  contribution?: string;
  tags?: string[];
  imageAlt?: string;
  imageCaption?: string;
  imageAspect?: "square" | "wide";
  detailUrl?: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "glyph",
    name: "Glyph",
    category: "Founder • Product Design & Dev",
    description: "A tool that turns an idea into a brand identity. Designed, built, and launched independently.",
    image: "/projects/glyph-brand-output.webp",
    title: "Glyph — from an idea to a brand system",
    contribution: "I independently designed, built, and launched the product, connecting brand identity decisions with developer handoff.",
    tags: ["Product design", "Frontend", "Brand systems"],
    imageAlt: "Actual Glyph output showing a logo, colour palette, typography and applications across a brand system.",
    imageCaption: "One generated identity, carried across a complete visual system.",
    imageAspect: "square",
    detailUrl: "/projects/glyph",
    liveUrl: "https://glyph.software",
    featured: true
  },
  {
    slug: "glyph-skill",
    name: "Glyph Skill",
    category: "AI Coding Assistant Skill",
    description: "A design skill for AI coding assistants, with practical rules for typography, layout, and motion.",
    image: "/glyph-skill.jpg",
    metrics: "Live · Open Source",
    liveUrl: "https://glyph-skillfordesign.vercel.app/",
    githubUrl: "https://github.com/sumitttt4/Glyph-Skill",
    featured: false
  },

  {
    slug: "vibe-market",
    name: "Vibe Market",
    category: "Creator Marketplace",
    description: "A marketplace for creators to share and sell their digital work.",
    image: "/vibe-market-landing.png",
    title: "Vibe Market — discovering builder projects",
    contribution: "I designed and built the project discovery interface, with a launch feed and dedicated space for browsing creator projects.",
    tags: ["Interface design", "Web development", "Discovery"],
    imageAlt: "Vibe Market launch-board interface from the existing project presentation.",
    imageCaption: "Launch-board interface · existing project screenshot",
    metrics: "Design & Development",
    liveUrl: "https://vibemarket.tech/",
    featured: true
  },
  {
    slug: "ux-pulse",
    name: "UX Pulse",
    category: "AI UX Engineer",
    description: "Turns Microsoft Clarity recordings into useful suggestions for improving a product.",
    image: "/udpulse.png",
    title: "UX Pulse — a clearer view of UX issues",
    contribution: "I built the product interface around Microsoft Clarity recordings, UX issues, and suggested fixes.",
    tags: ["Frontend", "UX", "Microsoft Clarity"],
    imageAlt: "UX Pulse landing page and dashboard preview from the existing project screenshot.",
    imageCaption: "Product landing page and dashboard preview · existing project screenshot",
    metrics: "Built for Microsoft Clarity",
    liveUrl: "https://uxpulseclarity.vercel.app/",
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
    featured: false
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
