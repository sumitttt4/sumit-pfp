import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border' : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-2xl font-bold text-gradient">
              Sumit Sharma
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.id 
                    ? 'nav-link-active' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary ml-4"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </motion.button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block px-3 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="btn-primary w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
