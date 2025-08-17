import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect hero section visibility
  useEffect(() => {
    const heroSection = document.getElementById('hero');

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {heroVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${scrolled ? "backdrop-blur-lg bg-black/60 shadow-lg" : "bg-transparent"}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition"
              >
                SS4
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative text-gray-300 hover:text-white transition group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
                <motion.a
                  href="#resume"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-pink-500/40 transition"
                >
                  <Download size={16} className="inline mr-2" />
                  Resume
                </motion.a>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pb-4 border-t border-white/10 overflow-hidden"
                >
                  <div className="pt-4 space-y-3">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-gray-300 hover:text-white transition"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                    <motion.a
                      href="#resume"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navItems.length * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-pink-500/40 transition"
                    >
                      <Download size={16} className="mr-2" />
                      Resume
                    </motion.a>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
