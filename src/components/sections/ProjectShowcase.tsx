import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '@/components/ui/ProjectCard';
import { useTheme } from '@/contexts/ThemeContext';
import projectsData from '@/data/projects';

const ProjectShowcase = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleViewDetails = (projectId: string) => {
    setSelectedProject(projectId);
    // Navigate to projects page
    navigate('/projects');
  };

  // Show only first 3 projects on homepage
  const previewProjects = projectsData.slice(0, 3);

  // Define bento grid layout pattern for preview
  const layoutPattern = ['large', 'medium', 'medium'];

  return (
    <section className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
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
            Featured Work
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Selected projects that showcase my design process and problem-solving approach
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px] mb-12">
          {previewProjects.map((project, index) => {
            const variant = layoutPattern[index % layoutPattern.length] as 'large' | 'medium' | 'small' | 'wide' | 'tall';
            const tags = project.category?.split('•').map(tag => tag.trim()) || [];

            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.description}
                thumbnail={project.image || ''}
                tags={tags}
                variant={variant}
                gradient={project.gradient}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                figmaUrl={project.figmaUrl}
                onViewDetails={() => handleViewDetails(project.id)}
              />
            );
          })}
        </div>

        {/* View All Projects Button */}
        {projectsData.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        )}

        {/* Empty State */}
        {projectsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects yet. Stay tuned!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
