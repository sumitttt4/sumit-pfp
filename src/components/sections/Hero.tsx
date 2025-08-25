import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  } as const;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated blur background */}
      <div className="absolute inset-0 bg-background">
        {/* Floating blur shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shape 1 - Top left */}
          <motion.div
            className="absolute w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
            style={{ top: '10%', left: '10%' }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Shape 2 - Top right */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl"
            style={{ top: '20%', right: '15%' }}
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Shape 3 - Bottom left */}
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/25 rounded-full blur-3xl"
            style={{ bottom: '15%', left: '20%' }}
            animate={{
              x: [0, 20, 0],
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Shape 4 - Bottom right */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-3xl"
            style={{ bottom: '10%', right: '10%' }}
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Center floating orb */}
          <motion.div
            className="absolute w-56 h-56 bg-gradient-to-r from-primary/5 to-accent/15 rounded-full blur-2xl"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Additional small floating particles */}
          <motion.div
            className="absolute w-32 h-32 bg-primary/10 rounded-full blur-xl"
            style={{ top: '30%', left: '70%' }}
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          
          <motion.div
            className="absolute w-40 h-40 bg-accent/8 rounded-full blur-2xl"
            style={{ bottom: '40%', left: '60%' }}
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>
        
        {/* Subtle grid overlay for texture */}
        <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02]" />
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Simple greeting */}
          <motion.p 
            variants={itemVariants}
            className="text-sm font-medium text-muted-foreground/90 mb-6 font-inter"
          >
            Hello, I'm
          </motion.p>

          {/* Clean name - no animations */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sumit Sharma
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-foreground/80 mb-6 font-inter"
          >
            Frontend Developer • UI/UX Designer
          </motion.p>

          {/* Simple description */}
          <motion.p 
            variants={itemVariants}
            className="max-w-lg mx-auto text-base text-muted-foreground/90 leading-relaxed mb-12 font-inter"
          >
            I craft clean, responsive digital products with a focus on intuitive user experiences.
          </motion.p>

          {/* Clean buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary font-poppins"
            >
              View Work
            </motion.a>

            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary font-poppins"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Simple social links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <motion.a 
              href="https://github.com/sumitttt4" 
              whileHover={{ scale: 1.1 }}
              className="p-3 text-muted-foreground/80 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="mailto:Sumitsharma9128@gmail.com" 
              whileHover={{ scale: 1.1 }}
              className="p-3 text-muted-foreground/80 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/" 
              whileHover={{ scale: 1.1 }}
              className="p-3 text-muted-foreground/80 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
