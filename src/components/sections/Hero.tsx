import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { FloatingShapes } from '../3D/FloatingShapes';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Crimson Shadow Background with Top Glow */}
      <div
        className="absolute inset-0 z-0 animate-aurora"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%),
            #000000
          `,
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 opacity-30">
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
          className="space-y-8"
        >
          {/* Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Sumit
            </span>{' '}
            <span className="text-white">Sharma</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-300">
              Front End Developer & UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies and creative design solutions
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-medium border border-gray-500/50 text-gray-200 hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/sumitttt4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:Sumitsharma9128@gmail.com"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors"
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
