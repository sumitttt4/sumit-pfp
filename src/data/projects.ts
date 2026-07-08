export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "glyph",
    name: "Glyph",
    category: "Founder • Product Design & Dev",
    description: "Built and launched a branding tool end-to-end—from product design and frontend code to solo product marketing and execution. Generated $427 in revenue.",
    image: "/glyph.png",
    metrics: "$427 Revenue • 400+ Users",
    liveUrl: "https://glyph.software",
    featured: true
  },
  {
    slug: "glyph-skill",
    name: "Glyph Skill",
    category: "AI Coding Assistant Skill",
    description: "An enforceable brand, layout, and documentation skill for your AI coding assistant. Import strict layout constraints, typography locks, color variables, and animation limits.",
    image: "/glyph-skill.png",
    metrics: "Live · Open Source",
    liveUrl: "https://glyph-skillfordesign.vercel.app/",
    githubUrl: "https://github.com/sumitttt4/Glyph-Skill",
    featured: true
  },

  {
    slug: "vibe-market",
    name: "Vibe Market",
    category: "Creator Marketplace",
    description: "A premium digital marketplace designed and built for creators, featuring bespoke grid systems, smooth loading states, and custom design variables.",
    image: "/vibe-market-landing.png",
    metrics: "Design & Development",
    liveUrl: "https://vibe-market.vercel.app/",
    featured: true
  },
  {
    slug: "blurr-design",
    name: "Blurr Design",
    category: "Design & Development Studio",
    description: "Design partner for zero → one teams. We help startups raise & scale with product design.",
    image: "/blurr-design.png",
    metrics: "Design Engineer (Part-time)",
    liveUrl: "https://www.blurr.design/",
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
