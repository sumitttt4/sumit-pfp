import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { FloatingShapes } from '../3D/FloatingShapes';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden" ref={ref}>
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingShapes />
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-glow px-8 py-4 rounded-xl text-white font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Get in Touch</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-background/30 rounded-xl border border-border/30"
                >
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">sumit.sharma@example.com</p>
                  </div>
                </motion.div>

                <motion.a
                  href="https://github.com/sumitsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-background/30 rounded-xl border border-border/30 transition-colors hover:bg-accent/5"
                >
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Github className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">@sumitsharma</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/sumitsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-background/30 rounded-xl border border-border/30 transition-colors hover:bg-accent/5"
                >
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Linkedin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">Sumit Sharma</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-glass rounded-2xl p-8 border border-border/50 text-center"
            >
              <h4 className="text-xl font-semibold mb-4 text-gradient-accent">
                Ready to Start a Project?
              </h4>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new and challenging projects. 
                Let's create something amazing together!
              </p>
              <motion.a
                href="mailto:sumit.sharma@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost px-6 py-3 rounded-xl font-medium inline-flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>Start a Conversation</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;