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
  tags?: string[];
  overview?: string;
  problem?: string;
  goals?: string[];
  research?: string;
  designProcess?: {
    title?: string;
    description?: string;
  }[];
  development?: string;
  visualIdentity?: string;
  outcome?: string;
  testimonials?: string[];
  learnings?: string[];
  nextSteps?: string[];
  role?: string;
  results?: string[];
};

const projects: Project[] = [];

export default projects;
