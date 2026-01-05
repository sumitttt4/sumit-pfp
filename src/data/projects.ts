
export interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  image: string;
  video?: string;
  link?: string;
  type?: 'project' | 'folder';
  items?: Project[];
  description?: string;
  isNDA?: boolean;
  overview?: string;
  process?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 101,
    title: "Glyph",
    year: "2026",
    category: "Design Tool",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    video: "/videos/glyph.mp4",
    link: "https://glyph.software/",
    description: "The intelligent brand identity generator for developers",
    overview: "Glyph is a powerful design tool that bridges the gap between development and design. It allows users to generate comprehensive brand identities, including logo marks, color palettes, and typography systems, all exportable as code-ready assets.\n\nProblem: Developers often struggle to create cohesive brand identities for their side projects without hiring expensive designers. Generic logo makers provide low-quality rasters, not the vector assets and design tokens needed for modern web development.\n\nUser: Indie hackers, developers, and founders who need a professional, scalable brand system in minutes, not weeks.\n\nOutcome: A 'Design Engineer in a Box' that outputs production-ready code snippets (CSS/Tailwind), SVG vectors, and brand guidelines.",
    process: "Role: Creator & Lead Engineer | Type: SaaS Product | Stack: Next.js, React, Framer Motion, SVG Manipulation.\n\nDesign Principle: 'Magic, then Utility.' The initial generation feels like magic, but the editing tools provide deep, granular control for refinement.\n\nExperience Flow: Enter Brand Name -> Select Vibe -> AI Generates Identity -> Refine in Real-time Editor -> Export to Code.\n\nKey Design Decisions: Built a custom SVG rendering engine to ensure all assets are mathematically perfect vectors. Implemented a 'live preview' system that updates the entire brand board instantly as users tweak colors or fonts.\n\nEngineering Decisions: Architected a client-side export engine to generate ZIP packages with SVGs and design tokens without server overhead. Optimized for performance with heavy usage of web workers for asset generation."
  },
  {
    id: 6,
    title: "SafeAgree",
    year: "2025",
    category: "Privacy Tool",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop",
    video: "/videos/Safeagree.mp4",
    link: "https://safe-agree.vercel.app/",
    description: "Making consent understandable, not skippable",
    overview: "SafeAgree is a web app that helps users understand Terms and Conditions before agreeing to them. Instead of forcing people to blindly click 'I agree,' it transforms long, legal text into clear risk signals and readable summaries.\n\nProblem: Terms and Conditions are intentionally long, dense, and unreadable. Most users accept them under time pressure without understanding what rights they’re giving up or what risks they’re accepting.\n\nUser: People signing up for digital products who want clarity and confidence before accepting mandatory legal terms not legal advice, just understandable information.\n\nOutcome: SafeAgree turns opaque legal text into readable insights, helping users make more informed consent decisions instead of blindly agreeing.",
    process: "Role: Design Engineer | Type: UX-driven web application | Stack: Next.js, React, Tailwind, AI integration, Figma.\n\nDesign Principle: Clarity over speed. The interface introduces intentional friction to slow users down and make consent a conscious decision rather than a reflex.\n\nExperience Flow: The product follows a linear, low cognitive load flow: Paste a URL or raw Terms text -> Parse and analyze the content -> Surface a high-level trust signal -> Break down clauses with clear risk indicators -> Let users decide with context.\n\nKey Design Decisions: Used a single typeface to maintain consistency and reduce visual noise while reading dense content. Applied a semantic color system: Red for high-risk clauses, Green for user-friendly terms, Gray for neutral information, and Yellow sparingly to draw attention without urgency. Kept the layout minimal to avoid distracting from critical information.\n\nEngineering Decisions: Implemented URL parsing with a fallback to manual text input for invalid links. Designed the system to handle very large inputs (up to ~300,000 words). Added clear loading, empty, and error states to maintain user trust during analysis.",
  },
  {
    id: 9,
    title: "GetLockedIN",
    year: "2025",
    category: "Productivity OS",
    image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2661&auto=format&fit=crop",
    video: "/videos/getlockedin.mp4",
    link: "https://getlockedin.live",
    description: "The Anti-Performative Productivity OS",
    overview: "GetLockedIN is a mobile-first accountability protocol built for people who want to track real results rather than intentions. It operates on 'Proof of Work' rather than self-reporting.\n\nProblem: Productivity tools often create a false sense of progress. We make lists and organize boards, but this 'meta-work' frequently replaces actual output. Traditional habit trackers rely on the honor system, which is easily gamified.\n\nUser: Builders and makers tired of 'performative productivity' who want an objective, immutable record of their consistency.\n\nOutcome: A system that integrates with GitHub, Stripe, and Vercel to automatically log activity, creating a verifiable reputation score that cannot be faked.",
    process: "Role: Product Designer & Engineer | Type: Mobile Web App | Stack: React, Next.js, Framer Motion, Supabase, APIs (GitHub, Stripe).\n\nDesign Principle: Weaponized Psychology. We used Loss Aversion—the pain of losing a streak—as a stronger motivator than the pleasure of gaining one. This drives the 'Dead Man’s Switch' mechanic.\n\nExperience Flow: Connect external accounts -> Define shipping goals -> System auto-verifies work -> Miss a deadline? The system publicly tweets your failure -> Ship code to keep the streak alive.\n\nKey Design Decisions: Rejected standard 'SaaS Dark Mode' for a premium 'Titanium & Paper' aesthetic. High-contrast borders and sharp 90-degree corners give digital cards a tactile, physical presence. Animations are weighty and momentum-based.\n\nEngineering Decisions: Built a robust Event-Driven Architecture to handle real-time webhooks. Implemented a 'Replay & Verify' queue system to ensure fairness, distinguishing between a user missing a deadline and a service API outage.",
  },
  {
    id: 102,
    title: "Nova Admin Panel",
    year: "2025",
    category: "Dashboard",
    image: "/images/admin-dashboard-kyc.png",
    video: "/videos/nova.mp4",
    isNDA: false,
    link: "https://nova-seven-sepia.vercel.app/dashboard",
    description: "A comprehensive KYC management dashboard for merchant verification",
    overview: "Building the Nova (name changed) Admin User Console was a journey of turning a massive; technical \"brain\" into a living; breathing control tower for a modern logistics platform. We started with the goal of creating a workspace where complex business rules felt effortless to manage; we wanted to ensure that every decision an admin made was backed by the logic of the platform's core DNA.\n\nThe centerpiece of this project is the Store Logic Editor; this module acts as a bridge between a high-level JSON schema and the daily operations of different business types. We engineered it so that a Grocery store feels different from a Pharmacy at a structural level; when an admin selects a category, the interface shifts to reveal specific guardrails like FSSAI mandates or drug license requirements. These aren't just empty fields; they are the essential rules that protect the business; we made sure that inventory limits like variant counts and image caps were hard-coded into the UI to keep the apps fast and clean.\n\nWe also prioritized the speed of the user experience through the integration of a global Command Palette; by pressing a simple keyboard shortcut, an admin can bypass traditional menus entirely. This search bar allows for instant jumps between a specific merchant's payout history and a rider's live delivery status; it makes the entire platform feel connected rather than fragmented. We used our signature Brand Mint and Forest Green to highlight operational success; conversely, we utilized Brand Gold as a gentle but firm warning for items like banned users or pending compliance documents.\n\nAs a Design Engineer, the final result is something I am incredibly proud of; we have delivered a high-density environment that remains completely responsive on a mobile screen. Whether an admin is sitting at a desk or checking a tablet in a warehouse, the experience remains consistent and professional; the dashboard doesn't just display data; it tells the story of the business in real-time. This project represents the perfect intersection of engineering precision and human-centric design; it is now ready to serve as the foundation for the entire Bazuroo ecosystem.",
    process: "Role: UI/UX Engineer | Type: Web App | Stack: React, React Table, Shadcn UI.\n\nDesign Principle: Efficiency First. Minimize eye travel and mouse usage.\n\nKey Design Decisions: Consistent color coding (Green/Red/Yellow) for instant scanning. 'Eye-Tennis' reduction by grouping ID photos next to data.\n\nEngineering Decisions: Implemented global keyboard shortcuts for Approve/Reject actions to allow mouse-free workflows for power users. Optimistic UI updates for instant feedback feel."
  },
  {
    id: 10,
    title: "Vibe Market",
    year: "2025",
    category: "E-Commerce",
    image: "/images/vibe-market-landing.png",
    screenshots: ["/images/vibe-market-submit.png"],
    link: "https://vibemarket.tech",
    description: "A discovery layer for vibe-coded apps",
    overview: "Vibe Market is a curated gallery for new, aesthetic-first micro-apps, designed to solve the discovery problem in the AI era.\n\nProblem: Building software is now incredibly fast, leading to a flood of micro-apps. Traditional platforms like Product Hunt are built for enterprise marketing, burying niche, high-craft tools under lists of generic SaaS.\n\nUser: Design-conscious users looking for specific, 'vibe-coded' utilities, and creators who treat software design as an expressive medium.\n\nOutcome: A discovery layer that filters for 'Soul' and 'Craft,' connecting specific user needs with unique, visually distinct tools.",
    process: "Role: Frontend Engineer & Curator | Type: Marketplace | Stack: Next.js, Typescript, Tailwind, Vector Embeddings.\n\nDesign Principle: Gallery over Directory. The interface treats each app as an art piece, prioritizing visual distinctiveness and interactive trials over feature lists.\n\nExperience Flow: Browse curated feed -> Hover for Live Preview -> View 'Prompt DNA' to see the build context -> One-click access.\n\nKey Design Decisions: Adopted a 'Cyber-Archivist' aesthetic with dark palettes and neon accents. Developed 'Live Preview' cards that allow users to interact with a sandboxed version of the app directly in the feed, removing click-through friction.\n\nEngineering Decisions: Implemented the 'Prompt DNA' submission flow to capture the AI context behind apps. Used vector embeddings for 'Vibe Match' search, allowing users to search by abstract feelings (e.g., 'night focus') rather than just keywords.",
  },
  {
    id: 8,
    title: "MonoQr",
    year: "2025",
    category: "Web Tool",
    image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
    video: "/videos/MonoQr.mp4",
    link: "https://mono-qr.vercel.app/",
    description: "Instant QR Codes for Modern Brands",
    overview: "MonoQr is a professional QR code generator that focuses on privacy, design quality, and reliability.\n\nProblem: The QR ecosystem is user-hostile, filled with ads, hidden tracking pixels, and subscription traps that hold physical prints hostage.\n\nUser: Designers and brands who need vector-quality, reliable assets for production environments without 'enshittification.'\n\nOutcome: A pure utility tool that delivers enterprise-grade design control and absolute privacy, for free.",
    process: "Role: Full Stack Engineer | Type: Web Utility | Stack: React, Canvas API, SVG manipulation.\n\nDesign Principle: Radical Subtraction. We removed every element that didn't serve the core task of generating a code, creating a professional, tool-like workspace.\n\nExperience Flow: Enter URL -> Real-time vector preview -> Adjust error correction & density -> Download SVG/PNG.\n\nKey Design Decisions: Created 'Liquid' QR designs where modules flow together for a smoother aesthetic. Added real-time error correction controls to allow designers to balance data density with visual resilience for difficult print materials.\n\nEngineering Decisions: Moved all generation logic to the client-side. No user data touches a server, ensuring privacy and speed. Built a custom rendering engine for instant high-fidelity vector previews.",
  },
  {
    id: 3,
    title: "Linkease",
    year: "2025",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    video: "/videos/Linkease.mp4",
    link: "https://link-ease-omega.vercel.app/",
    description: "A centralized platform for collecting and managing links",
    overview: "Linkease transforms bookmarking from a passive storage list into an active knowledge management system.\n\nProblem: Browser bookmarks are clutter magnets. We save things to read later, but bad organization and high-friction retrieval turn these lists into 'digital graveyards.'\n\nUser: Researchers, developers, and power users who need to organize massive amounts of digital content without breaking their workflow.\n\nOutcome: A centralized hub that not only saves links but helps users categorize, synthesize, and actually revisit them using active recall.",
    process: "Role: Product Designer | Type: SaaS / Extension | Stack: React, Node.js, NLP.\n\nDesign Principle: Flow State Functionality. Saving a link must be instant (<1s) to prevent breaking the user's current focus.\n\nExperience Flow: One-click extension save -> Auto-tagging based on content -> 'Active Recall' dashboard resurfaces relevant links -> Read & Archive.\n\nKey Design Decisions: Dark-mode first UI to support long research sessions. Used Framer Motion to add satisfying 'snap' animations to interactions. \n\nEngineering Decisions: Built a 'Categorization Engine' using NLP to auto-suggest tags, reducing the cognitive load of manual organization. Implemented an extraction algorithm to capture robust metadata and cover images."
  },
  {
    id: 2,
    title: "n8n workflow",
    year: "2025",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
    video: "/videos/n8n.mp4",
    link: "https://n8n-workflow-eta.vercel.app/",
    description: "Visualizing complex automation workflows with clarity",
    overview: "This project focuses on visualizing n8n automation workflows, turning abstract JSON logic into clear, readable diagrams for system monitoring.\n\nProblem: Backend automation is a 'black box' to non-technical stakeholders. JSON logs are useful for debugging code but terrible for explaining system health to project managers or clients.\n\nUser: Project Managers needing high-level status updates, and Developers needing a clear visual debugger.\n\nOutcome: A 'Rosetta Stone' visualization that bridges the gap between technical logic and business process visibility.",
    process: "Role: Front-End Developer | Type: Data Visualization | Stack: Vue.js, D3.js (Graphing), n8n API.\n\nDesign Principle: Clarity through Status. Success, Failure, and Pending states must be instantly recognizable from a distance using color and motion.\n\nExperience Flow: View Workflow Map -> See real-time node status (pulsing/glowing) -> Click node for 'Time Travel' data inspection -> Replay execution.\n\nKey Design Decisions: Simplified the node editor view for *monitoring* rather than editing. Used motion (pulsing, shaking) to convey status health intuitively.\n\nEngineering Decisions: Implemented 'Time Travel' debugging to step through past executions payload-by-payload. Optimized canvas rendering to handle infinite panning on workflows with hundreds of nodes."
  }
];

export default projects;
