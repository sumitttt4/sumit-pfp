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
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background Effects - Matching Hero */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] ${isDarkMode ? 'opacity-50' : 'opacity-30'}`} />
      <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/10' : 'bg-pink-400/40 animate-pulse'}`} />
      <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-indigo-400/40 animate-pulse'}`} style={{ animationDelay: '1s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${isDarkMode ? 'bg-cyan-500/5' : 'bg-purple-300/30 animate-pulse'}`} style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
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
          className="mb-12 sm:mb-16"
        >
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Work
          </h1>
          <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Cool designs I have made
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {projectsData.map((project, index) => {
            // Define different sizes for variety
            const getGridClass = (index: number) => {
              const patterns = [
                'lg:col-span-8 lg:row-span-2', // Large
                'lg:col-span-4 lg:row-span-1', // Small
                'lg:col-span-6 lg:row-span-1', // Medium
                'lg:col-span-6 lg:row-span-1', // Medium
                'lg:col-span-4 lg:row-span-2', // Tall
                'lg:col-span-8 lg:row-span-1', // Wide
              ];
              return patterns[index % patterns.length];
            };

            const getHeight = (index: number) => {
              const heights = [
                'h-[400px] sm:h-[500px]', // Large
                'h-[240px] sm:h-[280px]', // Small
                'h-[240px] sm:h-[280px]', // Medium
                'h-[240px] sm:h-[280px]', // Medium
                'h-[400px] sm:h-[500px]', // Tall
                'h-[240px] sm:h-[280px]', // Wide
              ];
              return heights[index % heights.length];
            };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${getGridClass(index)} group cursor-pointer`}
                onClick={() => handleViewDetails(project)}
              >
                <div className={`relative ${getHeight(index)} overflow-hidden rounded-3xl transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/60' 
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300 hover:shadow-2xl hover:bg-white/90'
                }`}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                  </div>

                  {/* "CASE STUDIES" Label */}
                  <div className="absolute top-6 left-6">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.1em] rounded-full border border-blue-400/20 shadow-lg shadow-blue-600/25">
                      Case Studies
                    </div>
                  </div>

                  {/* Content Container with Glass Morphism */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    {/* Glass Morphism Overlay */}
                    <div className="relative">
                      {/* Blur Background */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm" />
                      
                      {/* Content */}
                      <div className="relative p-6 sm:p-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          {/* Category Tags */}
                          {project.category && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.category.split(' • ').map((cat, catIndex) => (
                                <span 
                                  key={catIndex}
                                  className="inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium uppercase tracking-wider rounded-full border border-white/20"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Title with Brand Styling */}
                          <h2 className={`font-bold text-white mb-3 leading-tight ${
                            index % 6 === 0 || index % 6 === 4 
                              ? 'text-2xl sm:text-3xl md:text-4xl' // Large/Tall cards
                              : 'text-xl sm:text-2xl md:text-3xl'  // Other cards
                          }`}>
                            {project.title === 'LinkEase' ? (
                              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black">
                                LinkEase
                              </span>
                            ) : (
                              project.title
                            )}
                          </h2>
                          
                          {/* Tagline for LinkEase */}
                          {project.title === 'LinkEase' && (
                            <p className="text-sm sm:text-base text-blue-200/90 mb-3 font-medium">
                              Save, categorize, and search your links effortlessly
                            </p>
                          )}
                          
                          {/* Description - Enhanced for larger cards */}
                          {(index % 6 === 0 || index % 6 === 4) && (
                            <p className="text-sm sm:text-base text-white/85 mb-4 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          )}

                          {/* User Count for LinkEase */}
                          {project.title === 'LinkEase' && (
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                  <div 
                                    key={i}
                                    className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white/20"
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-white/70 font-medium">
                                Join 10,000+ users who've transformed their digital workflow
                              </span>
                            </div>
                          )}

                          {/* Interactive Actions */}
                          <div className="flex items-center justify-between">
                            <button className="group inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-sm font-semibold text-white transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg">
                              View Case Study
                              <motion.span
                                className="inline-block"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </button>
                            
                            {/* Quick Access Links */}
                            <div className="flex items-center gap-2">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="group p-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
                                  title="Live Demo"
                                >
                                  <ExternalLink className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="group p-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
                                  title="GitHub"
                                >
                                  <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                              {project.figmaUrl && (
                                <a
                                  href={project.figmaUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="group p-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
                                  title="Figma"
                                >
                                  <Figma className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
