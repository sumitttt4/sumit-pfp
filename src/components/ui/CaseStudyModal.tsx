import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Figma, ArrowRight, CheckCircle2, Users, TrendingUp, Zap, Target, Lightbulb, Quote, Layers } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import type { Project } from '@/data/projects';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section = ({ title, children, icon }: SectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-4"
  >
    <div className="flex items-center gap-3">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
      </div>
    </div>
    <div className="pl-0 md:pl-13">{children}</div>
  </motion.div>
);

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { theme } = useTheme();

  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className={`relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 z-10 p-2 rounded-full transition-colors ${
              theme === 'dark'
                ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Hero Section - Enhanced */}
            <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-6">
                {/* Animated Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Enhanced Title */}
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.title}
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-white/90 max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>

            {/* Meta Info Cards - Enhanced */}
            <div className={`px-8 md:px-12 py-8 border-b ${
              theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border ${
                    theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Role</div>
                  <div className="text-xl font-semibold">{caseStudy.role}</div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border ${
                    theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Timeline</div>
                  <div className="text-xl font-semibold">{caseStudy.timeline}</div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border ${
                    theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Team</div>
                  <div className="text-xl font-semibold">{caseStudy.team}</div>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 py-12 space-y-16 md:space-y-20">
              {/* Overview */}
              <Section title="Overview" icon={<Target className="w-5 h-5 text-blue-500" />}>
                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                }`}>
                  {caseStudy.overview}
                </p>
              </Section>

              {/* Problem - Enhanced with Visual Callout */}
              <Section title="The Problem" icon={<Quote className="w-5 h-5 text-red-500" />}>
                <div className={`p-8 rounded-2xl border-l-4 border-red-500 ${
                  theme === 'dark' ? 'bg-red-500/5' : 'bg-red-50'
                }`}>
                  <p className={`text-xl md:text-2xl font-medium leading-relaxed ${
                    theme === 'dark' ? 'text-zinc-200' : 'text-gray-800'
                  }`}>
                    {caseStudy.problem}
                  </p>
                </div>
              </Section>

              {/* Goals - Enhanced as Cards */}
              {caseStudy.goals && (
                <Section title="Project Goals" icon={<CheckCircle2 className="w-5 h-5 text-cyan-500" />}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudy.goals.map((goal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ borderColor: 'rgb(34 211 238)' }}
                        className={`p-6 rounded-2xl border ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-zinc-700' 
                            : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                          </div>
                          <p className={`text-lg ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                            {goal}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Research - Enhanced with Stats */}
              {caseStudy.research && (
                <Section title="Research & Insights" icon={<Lightbulb className="w-5 h-5 text-yellow-500" />}>
                  <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    {caseStudy.research}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`p-6 rounded-2xl text-center ${
                      theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'
                    }`}>
                      <div className="text-4xl font-bold text-blue-500 mb-2">5-7</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        User Interviews
                      </div>
                    </div>
                    <div className={`p-6 rounded-2xl text-center ${
                      theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
                    }`}>
                      <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Needed Categories
                      </div>
                    </div>
                    <div className={`p-6 rounded-2xl text-center ${
                      theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50'
                    }`}>
                      <div className="text-4xl font-bold text-purple-500 mb-2">85%</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Wanted Dark Mode
                      </div>
                    </div>
                    <div className={`p-6 rounded-2xl text-center ${
                      theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-50'
                    }`}>
                      <div className="text-4xl font-bold text-orange-500 mb-2">Fast</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Quick Add Feature
                      </div>
                    </div>
                  </div>
                </Section>
              )}

              {/* Design Process - Enhanced as Timeline */}
              {caseStudy.designProcess && (
                <Section title="Design Process" icon={<Zap className="w-5 h-5 text-purple-500" />}>
                  <div className="space-y-8 relative pl-8 border-l-2 border-purple-500/30">
                    {caseStudy.designProcess.map((process, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[37px] w-6 h-6 rounded-full border-2 ${
                          index === 0 ? 'bg-blue-500 border-blue-500' :
                          index === 1 ? 'bg-purple-500 border-purple-500' :
                          'bg-cyan-500 border-cyan-500'
                        }`} />
                        
                        <div className={`p-6 rounded-2xl ${
                          theme === 'dark' ? 'bg-zinc-800/50' : 'bg-gray-50'
                        }`}>
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              index === 0 ? 'bg-blue-500/20 text-blue-500' :
                              index === 1 ? 'bg-purple-500/20 text-purple-500' :
                              'bg-cyan-500/20 text-cyan-500'
                            }`}>
                              Step {index + 1}
                            </span>
                            <h3 className="text-2xl font-bold">{process.title}</h3>
                          </div>
                          <p className={`text-lg ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                            {process.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Visual Design - Enhanced Gallery with Annotations */}
              {project.screenshots && project.screenshots.length > 0 && (
                <Section title="Visual Design" icon={<Layers className="w-5 h-5 text-blue-500" />}>
                  <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                    A comprehensive look at the design system and key screens
                  </p>
                  
                  <div className="space-y-8">
                    {/* Hero Image with Annotation */}
                    <motion.div 
                      className="relative group rounded-3xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-3xl shadow-2xl"
                      />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-blue-500/90 backdrop-blur-xl rounded-full text-white font-medium">
                        Main Dashboard View
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-6 left-6 text-white">
                          <p className="text-lg font-medium">Clean, intuitive interface with quick access to all features</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Additional Screenshots Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.screenshots.map((screenshot, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -8, scale: 1.03 }}
                          className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                          <img
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <p className="font-medium text-lg mb-1">
                                {index === 0 ? 'Category Organization' : 
                                 index === 1 ? 'Quick Add Feature' : 
                                 'Search & Filter'}
                              </p>
                              <p className="text-sm text-white/80">
                                {index === 0 ? 'Organized, easy-to-navigate categories' : 
                                 index === 1 ? 'Add links in seconds with smart forms' : 
                                 'Powerful search to find anything instantly'}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Section>
              )}

              {/* Design System - Visual Cards */}
              {caseStudy.visualIdentity && (
                <Section title="Design System" icon={<Layers className="w-5 h-5 text-blue-500" />}>
                  <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    {caseStudy.visualIdentity}
                  </p>
                  
                  {/* Visual Design System Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className={`p-8 rounded-2xl border ${
                        theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        Aa
                      </div>
                      <h4 className="text-xl font-bold mb-2">Typography</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Inter for clean, modern readability
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className={`p-8 rounded-2xl border ${
                        theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex gap-2 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500" />
                        <div className="w-12 h-12 rounded-full bg-cyan-500" />
                        <div className="w-12 h-12 rounded-full bg-purple-500" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Color Palette</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Vibrant blues with dark mode support
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className={`p-8 rounded-2xl border ${
                        theme === 'dark' ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex gap-3 mb-4">
                        <ExternalLink className="w-8 h-8 text-blue-500" />
                        <Zap className="w-8 h-8 text-cyan-500" />
                        <Target className="w-8 h-8 text-purple-500" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Iconography</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Consistent, minimal icon set
                      </p>
                    </motion.div>
                  </div>
                </Section>
              )}

              {/* Impact & Results - Big Metrics */}
              {(caseStudy.outcome || caseStudy.results) && (
                <Section title="Impact & Results" icon={<TrendingUp className="w-5 h-5 text-green-500" />}>
                  {/* Big Metric Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center"
                    >
                      <div className="text-6xl font-bold text-green-500 mb-2">90%</div>
                      <div className="text-lg font-medium">User Satisfaction</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-center"
                    >
                      <div className="text-6xl font-bold text-blue-500 mb-2">3mo</div>
                      <div className="text-lg font-medium">Design Timeline</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center"
                    >
                      <div className="text-6xl font-bold text-purple-500 mb-2">100%</div>
                      <div className="text-lg font-medium">Responsive Design</div>
                    </motion.div>
                  </div>

                  {caseStudy.outcome && (
                    <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                    }`}>
                      {caseStudy.outcome}
                    </p>
                  )}
                  
                  {caseStudy.results && caseStudy.results.length > 0 && (
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-start gap-3 text-lg ${
                            theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                          }`}
                        >
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </Section>
              )}

              {/* Learnings - Reflection Box */}
              {caseStudy.learnings && caseStudy.learnings.length > 0 && (
                <Section title="Key Learnings" icon={<Lightbulb className="w-5 h-5 text-yellow-500" />}>
                  <div className={`p-8 rounded-3xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20' 
                      : 'bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-6 h-6 text-yellow-500" />
                      <h3 className="text-2xl font-bold">Reflections from this project</h3>
                    </div>
                    <ul className="space-y-4">
                      {caseStudy.learnings.map((learning, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className={`text-lg leading-relaxed ${
                            theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                          }`}
                        >
                          <span className="text-yellow-500 font-bold mr-2">→</span>
                          {learning}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Section>
              )}

              {/* Next Steps */}
              {caseStudy.nextSteps && caseStudy.nextSteps.length > 0 && (
                <Section title="Next Steps" icon={<ArrowRight className="w-5 h-5 text-blue-500" />}>
                  <ul className="space-y-3">
                    {caseStudy.nextSteps.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-3 text-lg ${
                          theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'
                        }`}
                      >
                        <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <span>{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Links */}
              {(project.liveUrl || project.githubUrl || project.figmaUrl) && (
                <Section title="View Project" icon={<ExternalLink className="w-5 h-5 text-blue-500" />}>
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                        }`}
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                        }`}
                      >
                        <Figma className="w-5 h-5" />
                        Figma
                      </a>
                    )}
                  </div>
                </Section>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
