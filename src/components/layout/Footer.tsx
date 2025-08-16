import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sumitsharma',
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sumit.sharma@example.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sumitsharma',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="py-12 bg-gradient-to-t from-secondary/50 to-background border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gradient"
          >
            Sumit Sharma
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 card-glass rounded-xl border border-border/50 text-muted-foreground transition-all duration-300 ${link.color} hover:border-accent/50 hover:shadow-lg`}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-2"
          >
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© {currentYear} Sumit Sharma. Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#8b5cf6', '#d946ef', '#8b5cf6']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>and lots of coffee</span>
            </p>
            <p className="text-sm text-muted-foreground/70">
              Designed & Developed with passion for creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mx-auto btn-ghost px-6 py-2 rounded-xl text-sm font-medium"
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;