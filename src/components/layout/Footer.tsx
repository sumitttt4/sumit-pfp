import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart, Twitter, ArrowUp, Newspaper } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sumitttt4'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:Sumitsharma9128@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/OhSumitAnyway'
    },
    {
      name: 'Medium',
      icon: Newspaper,
      url: 'https://medium.com/@sumitsharma9128'
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
    <footer className="py-16 border-t border-border bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Sumit Sharma
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer & UI/UX Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-icon w-10 h-10"
                title={link.name}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sumit Sharma. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-icon w-10 h-10"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;