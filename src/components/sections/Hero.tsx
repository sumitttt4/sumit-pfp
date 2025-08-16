import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { FloatingShapes } from '../3D/FloatingShapes';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-gradient">Sumit</span>{' '}
            <span className="text-foreground">Sharma</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Front End Developer & UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies and creative design solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow px-8 py-4 rounded-xl text-white font-medium"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost px-8 py-4 rounded-xl font-medium"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/sumitttt4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 card-glass rounded-full hover:bg-accent/10 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:Sumitsharma9128@gmail.com"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 card-glass rounded-full hover:bg-accent/10 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;