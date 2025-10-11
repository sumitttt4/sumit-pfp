import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Figma } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import projectsData from '@/data/projects';
import type { Project } from '@/data/projects';
import CaseStudyModal from '@/components/ui/CaseStudyModal';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDarkMode } = useTheme();

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects - Matching Hero */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] ${isDarkMode ? 'opacity-50' : 'opacity-30'}`} />
      <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/10' : 'bg-pink-400/40 animate-pulse'}`} />
      <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-indigo-400/40 animate-pulse'}`} style={{ animationDelay: '1s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${isDarkMode ? 'bg-cyan-500/5' : 'bg-purple-300/30 animate-pulse'}`} style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`group inline-flex items-center gap-2 mb-8 sm:mb-12 text-base sm:text-lg font-medium transition-colors border-b-2 pb-1 ${
            isDarkMode 
              ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' 
              : 'text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Work
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Cool designs I have made
          </p>
        </motion.div>

        {/* Projects Grid - Simple & Clean */}
        <div className="space-y-12 sm:space-y-20">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              {/* Project Container */}
              <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700' 
                  : 'bg-white/60 border border-gray-200/50 hover:border-gray-300 hover:shadow-2xl'
              }`}>
                
                {/* Project Image - Full Width */}
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Title */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {project.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
                        {project.description}
                      </p>

                      {/* Category */}
                      {project.category && (
                        <p className="text-sm sm:text-base text-white/70 mb-6">
                          {project.category}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        {/* View Case Study */}
                        <button
                          onClick={() => handleViewDetails(project)}
                          className="group/btn inline-flex items-center gap-2 text-base sm:text-lg font-medium text-white border-b-2 border-white pb-1 hover:text-white/80 hover:border-white/80 transition-colors"
                        >
                          View Case Study
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </button>

                        {/* External Links */}
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                              title="GitHub"
                            >
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.figmaUrl && (
                            <a
                              href={project.figmaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                              title="Figma"
                            >
                              <Figma className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {projectsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-20 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <p className="text-xl">No projects yet. Check back soon!</p>
          </motion.div>
        )}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
