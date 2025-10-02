import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, Users, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import project images
import bazurooImg from '@/assets/cyberpunk-hero.jpg.png';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'bazuroo',
      title: 'Bazuroo',
      subtitle: 'Local Store Delivery Platform',
      description: 'A two-sided delivery platform connecting local shops with customers through intuitive mobile apps.',
      image: bazurooImg,
      tags: ['Mobile App', 'User Research', 'UI/UX'],
      color: 'from-green-400 to-emerald-600',
      role: 'UX/UI Designer',
      duration: '3 Weeks',
      team: 'Solo Project'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Sumit Sharma
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              My Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              Design projects focused on solving real problems through user research and thoughtful interfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/case-study/${project.id}`)}
              >
                {/* Project Card */}
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-sm">
                        <Layers className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{project.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{project.team}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full py-3 px-6 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-block px-6 py-3 bg-gray-100 rounded-full">
              <p className="text-gray-600 font-medium">
                More projects coming soon as I continue learning and growing
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © 2025 Sumit Sharma. Designed & built with care.
        </div>
      </footer>
    </div>
  );
};

export default Projects;
