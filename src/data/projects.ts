export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  screenshots?: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  gradient?: string;
  category?: string;
  duration?: string;
  team?: string;
  
  // Case Study Fields
  overview?: string;
  problem?: string;
  goals?: string[];
  research?: string;
  designProcess?: {
    wireframing?: string;
    uiDesign?: string;
    prototype?: string;
  };
  development?: string;
  visualIdentity?: {
    typography?: string;
    colorPalette?: string;
    icons?: string;
  };
  outcome?: string;
  testimonials?: string[];
  learnings?: string;
  nextSteps?: string[];
  role?: string;
  results?: string[];
};

// Import local assets so Vite resolves them correctly
import LinkEaseImg from '@/assets/LinkEase.png';
import SectionImg from '@/assets/Section.png';
import CoolImg from '@/assets/Cool.png';
import LearningImg from '@/assets/learning.png';
import MiniDashboardImg from '@/assets/mini dashboard.png';

const projects: Project[] = [
  {
    id: 'linkease',
    title: 'LinkEase',
    description: 'A modern web platform that helps users organize and manage all their important links in one place. Designed for creators, professionals, and teams to simplify digital workflows.',
    image: LinkEaseImg,
    screenshots: [SectionImg, CoolImg, LearningImg, MiniDashboardImg],
    category: 'SaaS Product Design • Web App • UI/UX',
    role: 'Lead Designer & Frontend Developer',
    duration: '2024 • 3 months',
    
    // Overview
    overview: 'LinkEase is a modern web platform that helps users organize and manage all their important links in one place. Designed for creators, professionals, and teams, it simplifies digital workflows and ensures quick access to key resources. This case study covers the end-to-end design process, from research to development.',
    
    // Problem
    problem: 'Users struggle with scattered links across browsers, apps, and devices. Existing tools are cluttered, hard to navigate, and lack personalization. The challenge was to design a solution that is fast, intuitive, and visually clear.',
    
    // Goals
    goals: [
      'Create a minimal, modern dashboard for links',
      'Enable a distraction-free flow for adding and organizing links',
      'Maintain a balance between utility and clean design',
      'Deliver a responsive web experience that feels like a native app'
    ],
    
    // Research & Insights
    research: 'Interviewed 5–7 users (students, designers, freelancers). Most relied on messy browser bookmarks. Key needs: categorization, easy search, device sync, and simple onboarding. Visual appeal and dark/light mode were important for usability. Focus: Effortless organization with visual clarity.',
    
    // Design Process
    designProcess: {
      wireframing: 'Low-fidelity Figma wireframes defined the dashboard layout, search bar, and categories.',
      uiDesign: 'High-fidelity mockups in Figma refined spacing, typography, and icons. Grid-based layout for visual balance. Minimal dark theme for readability. Subtle accent gradients for energy. Custom icons for consistency.',
      prototype: 'Interactive Figma prototypes tested flows for adding, editing, and searching links. Simplified "Add Link" from modal to inline action.'
    },
    
    // Development
    development: 'Built with React + Vite for fast performance. Styled with Tailwind CSS for responsive design. Deployed on Vercel for seamless hosting and updates.',
    
    // Visual Identity
    visualIdentity: {
      typography: 'Inter + Sans Serif for clean readability',
      colorPalette: 'Muted dark base with vibrant accent gradients',
      icons: 'Simple, consistent, and balanced custom icons'
    },
    
    // Outcome
    outcome: '90% of test users found LinkEase faster and easier than browser bookmarks. Users praised the balance of aesthetics and functionality. Modular design allows future scalability (AI tag suggestions, smart categorization).',
    
    // Learnings
    learnings: 'Minimal design needs multiple iterations to balance aesthetics and usability. Animations should support navigation, not distract. Coding the project highlighted small UI refinements missed in design tools.',
    
    // Next Steps
    nextSteps: [
      'Add analytics for most-used links',
      'Introduce collaborative boards',
      'Expand with Chrome extension and mobile-friendly dashboard'
    ],
    
    // Results
    results: [
      '90% of users found it faster than browser bookmarks',
      'Fully functional SaaS landing page with dark/light themes',
      'Strong alignment between UI design and frontend implementation',
      'Modular architecture ready for AI-powered features',
      'Deployed on Vercel with real-world testing'
    ],
    
    tech: ['Figma', 'Sketch', 'React.js', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://link-ease-omega.vercel.app',
    figmaUrl: 'https://www.figma.com/proto/bMkhaZbwnRgmvdzTnxCvpl/Linkease?node-id=24-2&t=fBd2OgNmb9jJTeSb-1',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500'
  }
];

export default projects;
