import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Creating intuitive and beautiful user interfaces with Figma and design systems"
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "End-to-end web development from concept to deployment"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-3 block">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Creating Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer and UI/UX designer focused on creating modern, 
            accessible, and performant web applications that users love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 1 year of experience in frontend development, I specialize in React, TypeScript, 
                and modern design systems. My approach combines technical expertise with design thinking 
                to create solutions that are both functional and beautiful.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe in clean code, pixel-perfect implementations, and user-centered design. 
                Every project is an opportunity to push boundaries and create something exceptional.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma', 'Git'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-modern card-hover group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
