import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart, Twitter, ArrowUp, Newspaper } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sumitttt4',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:Sumitsharma9128@gmail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/OhSumitAnyway',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Medium',
      icon: Newspaper,
      url: 'https://medium.com/@sumitsharma9128',
      color: 'hover:text-green-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="py-16 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Sumit Sharma</h3>
              <p className="text-muted-foreground leading-relaxed">
                Frontend Developer & UI/UX Designer passionate about creating 
                exceptional digital experiences with modern technologies.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">
                Available for freelance work and exciting opportunities.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:Sumitsharma9128@gmail.com" className="text-primary hover:underline">
                  Sumitsharma9128@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Location:</span> India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-muted hover:bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 ${link.color}`}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-border mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sumit Sharma. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 fill-current" />{' '}
              in India
            </p>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center text-primary transition-all duration-300"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;