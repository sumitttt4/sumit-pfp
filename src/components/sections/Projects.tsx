import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real projects with real impact. Each case study shows the problem, solution, and measurable results.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projectsData.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                rotateX: -3,
                scale: 1.02,
                boxShadow: "0 35px 70px -12px rgba(0, 0, 0, 0.3)" 
              }}
              className="notion-card overflow-hidden cursor-pointer"
              style={{ transformStyle: "preserve-3d" } as any}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    {project.category && (
                      <span className="inline-flex items-center px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                        {project.category}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>



              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/sumitttt4" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
