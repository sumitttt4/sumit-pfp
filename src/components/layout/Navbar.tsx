import { motion } from 'framer-motion';
import { Home, FileText, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.nav
      className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div
        className={`flex items-center gap-0.5 sm:gap-1 backdrop-blur-xl rounded-full px-2 py-2 sm:px-4 sm:py-3 transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-900/95 border border-gray-800/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-white/90 border border-gray-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
        }`}
      >
            <motion.a
              href="/"
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="Home"
            >
              <Home
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />
            </motion.a>

            <motion.a
              href="/projects"
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="Projects"
            >
              <FileText
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />
            </motion.a>

            <div className={`w-px h-4 sm:h-5 mx-1 sm:mx-1.5 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'}`} />

            <motion.a
              href="https://github.com/sumitttt4"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="GitHub"
            >
              <Github
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/sumit-sharma-designer"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="LinkedIn"
            >
              <Linkedin
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />
            </motion.a>

            <motion.a
              href="mailto:Sumitsharma9128@gmail.com"
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="Email"
            >
              <Mail
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              />
            </motion.a>

            <div className={`w-px h-4 sm:h-5 mx-1 sm:mx-1.5 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'}`} />

            <motion.button
              onClick={toggleTheme}
              className="relative p-1.5 sm:p-2.5 rounded-full transition-all duration-200 group flex items-center justify-center"
              whileHover={{ y: -4, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              aria-label="Toggle theme"
            >
              <motion.div key={isDarkMode ? 'moon' : 'sun'} initial={{ rotate: 0 }}>
                {isDarkMode ? (
                  <Moon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`} />
                ) : (
                  <Sun className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`} />
                )}
              </motion.div>
            </motion.button>
        </div>
    </motion.nav>
  );
};

export default Navbar;
