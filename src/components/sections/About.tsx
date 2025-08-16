import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import avatar from '@/assets/avatar.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-md"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={avatar}
                alt="Sumit Sharma"
                className="relative w-80 h-80 object-cover rounded-2xl card-glass mx-auto animate-float"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gradient-accent">
                Front End Developer & UI/UX Designer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with over 3 years of experience creating modern, 
                responsive web applications and intuitive user interfaces. My expertise lies 
                in transforming creative designs into functional, pixel-perfect digital experiences 
                that users love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React.js, TypeScript, and modern CSS frameworks, while also 
                having a strong foundation in UI/UX design principles. I believe in writing 
                clean, maintainable code and creating designs that are both beautiful and accessible.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-glass p-6 rounded-xl border border-border/50"
            >
              <h4 className="text-xl font-semibold mb-4 text-gradient">What I Do</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">UI/UX Design</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;