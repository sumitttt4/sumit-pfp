import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "ReportFlow",
      description: "A modern reporting dashboard with real-time analytics and data visualization.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://reportflow.netlify.app/",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Emotional Flow",
      description: "Interactive emotional journey tracker with scroll-based animations and smooth transitions.",
      tech: ["React", "Framer Motion", "GSAP", "CSS3"],
      liveUrl: "https://emotional-flow-scroll.vercel.app/",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      title: "Recurring Ease",
      description: "Subscription management platform with automated billing and customer portal.",
      tech: ["React", "Node.js", "Stripe API", "MongoDB"],
      liveUrl: "https://recurring-ease.vercel.app/",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Chemical Cleaners",
      description: "E-commerce platform for industrial cleaning supplies with inventory management.",
      tech: ["React", "Redux", "Express.js", "PostgreSQL"],
      liveUrl: "https://chemicalcleanes-theta.vercel.app/",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/30 to-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in web development and design
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-glass card-floating rounded-2xl p-6 h-full border border-border/50 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
                
                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="p-2 card-glass rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        className="p-2 card-glass rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/sumitsharma"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 btn-ghost px-8 py-4 rounded-xl font-medium"
          >
            <Github size={20} />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;