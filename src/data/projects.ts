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
  problem?: string;
  solution?: string;
  results?: string[];
  role?: string;
};

// Import local assets so Vite resolves them correctly
import linkeaseImg from '@/assets/LinkEase.png';

const projects: Project[] = [
  {
    id: 'linkease',
    title: 'LinkEase',
    description: 'A minimalist SaaS landing page designed and developed to help users organize and categorize digital links. The goal was to design a clean, calming experience with a focus on clarity and visual hierarchy.',
    image: linkeaseImg,
    category: 'SaaS Product Design',
    role: 'UI/UX Designer & Frontend Developer',
    duration: '2024',
    problem: 'Most bookmarking tools feel cluttered or overly technical. The challenge was to make link management simple, visual, and distraction-free.',
    solution: 'A clean landing page that demonstrates the product\'s value at first glance — clear hero, value sections, dashboard preview, and a frictionless CTA.',
    results: [
      'Fully functional SaaS landing page with light and dark variants',
      'Strong alignment between UI design and frontend implementation',
      'Researched existing link managers (Raindrop, Savee, Notion bookmarks)',
      'Focused on a friendly pastel color palette for calmness and focus',
      'Created responsive UI layouts in Figma',
      'Converted to code using React + Tailwind CSS',
      'Deployed on Vercel for real-world testing'
    ],
    tech: ['Figma', 'React.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://link-ease-omega.vercel.app',
    figmaUrl: 'https://www.figma.com/proto/bMkhaZbwnRgmvdzTnxCvpl/Linkease?node-id=24-2&t=fBd2OgNmb9jJTeSb-1',
    gradient: 'from-blue-500 to-cyan-500'
  }
];

export default projects;
