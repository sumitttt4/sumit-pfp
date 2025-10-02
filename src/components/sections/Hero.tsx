import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Simple Status Badge */}
          <div className="status-indicator mx-auto">
            <div className="status-dot" />
            <span>Available for work</span>
          </div>

          {/* Clean Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sumit Sharma
          </motion.h1>

          {/* Simple Role */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            UI/UX Designer & Frontend Developer
          </motion.p>

          {/* Clean Description */}
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I design comprehensive digital experiences from mobile apps to SaaS platforms, 
            specializing in user-centered design, data visualization, and conversion optimization.
          </motion.p>

          {/* Simple Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn-primary hover:scale-105 transition-transform"
            >
              View Work
            </a>

            <a 
              href="#contact" 
              className="btn-secondary hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Simple Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            {[
              { href: "https://github.com/sumitttt4", icon: Github, label: "GitHub" },
              { href: "mailto:Sumitsharma9128@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/sumit-sharma-designer/", icon: Linkedin, label: "LinkedIn" }
            ].map(({ href, icon: Icon, label }) => (
              <motion.a 
                key={label}
                href={href} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 notion-card text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Simple Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
