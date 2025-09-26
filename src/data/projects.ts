export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  screenshots?: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
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
import heroImg from '@/assets/hero-bg.jpg';
import avatarImg from '@/assets/avatar.jpg';
import cyberpunkImg from '@/assets/cyberpunk-hero.jpg.png';
import brutualhqImg from '@/assets/BrutualHQ.jpg.png';
import reportflowImg from '@/assets/Reportflow.jpg.png';
import emotionFlowImg from '@/assets/EmotionFlow.png';
import recurringEaseImg from '@/assets/RecuringEase.png';
import resumeBuilderImg from '@/assets/ResumeBuilder.png';

const projects: Project[] = [
  {
    id: 'reportflow',
    title: 'ReportFlow',
    description: 'Enterprise reporting dashboard with real-time analytics, custom visualizations, and automated insights.',
    image: reportflowImg,
    tech: ['Figma', 'React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://reportflow.netlify.app/',
    githubUrl: 'https://github.com/sumitttt4/reportflow',
    gradient: 'from-blue-500 to-purple-600',
    category: 'Dashboard'
  },
  {
    id: 'emotional-flow',
    title: 'Emotional Flow',
    description: 'Interactive emotional journey tracker with scroll-based animations and smooth transitions.',
  image: emotionFlowImg,
    tech: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'CSS3', 'Vercel'],
    liveUrl: 'https://emotional-flow-scroll.vercel.app/',
    githubUrl: 'https://github.com/sumitttt4/emotional-flow',
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    id: 'recurring-ease',
    title: 'Recurring Ease',
    description: 'Subscription management platform with automated billing and customer portal.',
  image: recurringEaseImg,
    tech: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://recurring-ease.vercel.app/',
    githubUrl: 'https://github.com/sumitttt4/recurring-ease',
    gradient: 'from-green-500 to-teal-600'
  }
  ,
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    description: 'AI-powered platform that generates professional resumes, cover letters, and portfolios with one-click simplicity.',
    image: resumeBuilderImg,
    screenshots: [resumeBuilderImg],
    tech: ['Figma', 'React', 'TypeScript', 'AI Integration', 'Vercel'],
    liveUrl: 'https://ai-resume-builder.vercel.app/',
    githubUrl: 'https://github.com/sumitttt4/ai-resume-builder',
    gradient: 'from-violet-500 to-purple-600',
    category: 'AI-Powered Tool'
  }
  ,
  {
  id: 'cyberpunk',
  title: 'Cyberpunk Neural Age',
  description: `A futuristic, cyberpunk-inspired web experience exploring the role of AI in the digital future. Features an immersive neural interface design with interactive animations and voice integration. Built with modern web technologies and deployed on Vercel.`,
  image: cyberpunkImg,
  screenshots: [cyberpunkImg],
  tech: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  liveUrl: 'https://future-world-nine.vercel.app/',
  githubUrl: 'https://github.com/sumitttt4/cyberpunk-neural',
  gradient: 'from-pink-500 to-indigo-600'
  }
  ,
  {
    id: 'brutualhq',
    title: 'BrutualHQ',
    description: `An AI-powered platform designed to deliver reality checks and motivation in a unique, interactive way. Features include a roast generator, chat system, voice studio, and motivational/demotivational tools.`,
    image: brutualhqImg,
    screenshots: [brutualhqImg],
    tech: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'AI Integration'],
    liveUrl: 'https://brutualhq.demo.com', // Update with actual URL
    githubUrl: 'https://github.com/sumitttt4/BrutualHQ.git',
    gradient: 'from-red-500 to-pink-600'
  }
];

export default projects;
