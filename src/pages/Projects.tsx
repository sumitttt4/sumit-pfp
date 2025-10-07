import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, Layers, ExternalLink, X, Figma } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import projectsData from '@/data/projects';
import type { Project } from '@/data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDarkMode } = useTheme();

  return <div>Projects Page</div>;
};

export default Projects;
