import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { useTheme } from '@/contexts/ThemeContext';

const ProjectShowcase = () => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleViewDetails = (projectId: string) => {
    setSelectedProject(projectId);
    // You can navigate to project details page or open a modal here
    console.log('View details for:', projectId);
  };

  return (
    <section className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
          <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my latest work and case studies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LinkEase Project Card */}
          <ProjectCard
            title="LinkEase – Smart Link Management"
            subtitle="Organize, store, and manage all your links in one place"
            thumbnail="/src/assets/LinkEase.png"
            tags={['UI/UX', 'Web App', 'Productivity']}
            onViewDetails={() => handleViewDetails('linkease')}
          />

          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
