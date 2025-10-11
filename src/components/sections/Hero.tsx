import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import Navbar from '../layout/Navbar';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] ${isDarkMode ? 'opacity-50' : 'opacity-30'}`} />
      <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/10' : 'bg-pink-400/40 animate-pulse'}`} />
      <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-indigo-400/40 animate-pulse'}`} style={{ animationDelay: '1s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${isDarkMode ? 'bg-cyan-500/5' : 'bg-purple-300/30 animate-pulse'}`} style={{ animationDelay: '2s' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-4 sm:space-y-6">
            <motion.h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight -ml-0 sm:-ml-12 lg:-ml-24 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}> 👋 Hi, Sumit here</motion.h1>
            <motion.p className={`text-lg sm:text-xl md:text-2xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>A designer who cares about pixels</motion.p>
            <motion.div className={`space-y-2 text-base sm:text-lg md:text-xl leading-relaxed pt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <p>Currently making designs at <span className={isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-semibold'}>Metry AI (Tokyo)</span></p>
              <p>Cool designs i have <span className={isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-semibold'}> made</span></p>
            </motion.div>
            <motion.p className={`text-base sm:text-lg md:text-xl leading-relaxed pt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>I believe good design should feel invisible.</motion.p>
            <motion.div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <a href="/projects" className={`group inline-flex items-center gap-2 text-base sm:text-lg font-medium transition-colors border-b-2 pb-1 ${isDarkMode ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' : 'text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700'}`}>See my work<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" /></a>
              <a href="/about" className={`group inline-flex items-center gap-2 text-base sm:text-lg font-medium transition-colors border-b-2 pb-1 ${isDarkMode ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' : 'text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700'}`}><User className="w-4 h-4 sm:w-5 sm:h-5" />About Me</a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="relative flex items-center justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-square relative overflow-hidden">
              <iframe src="https://cdn.lottielab.com/l/Ac9pREpDztAWyH.html" style={{ width: '100%', height: '100%', border: 'none', transform: 'scale(1.2)', transformOrigin: 'center center' }} title="Lottie Animation" />
            </div>
          </motion.div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default Hero;
