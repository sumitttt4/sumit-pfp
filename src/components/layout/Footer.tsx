import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart, Twitter, SunMediumIcon, Newspaper } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'x',
      icon: Twitter,
      url: 'https://x.com/OhSumitAnyway',
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:Sumitsharma9128@gmail.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Medium',
      icon: Newspaper,
      url: 'https://medium.com/@sumitsharma9128',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="py-12 bg-gradient-to-t from-secondary/50 to-background border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          

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
           
            <p className="text-sm text-muted-foreground/70">
              oh i just Designed this
            </p>
          </motion.div>

          {/* Scroll to Top */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;