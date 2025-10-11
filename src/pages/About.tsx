import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Mail, Code2, Palette, Lightbulb, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Figma', icon: Palette },
    { name: 'React.js', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'Tailwind CSS', icon: Code2 },
    { name: 'Product Design', icon: Lightbulb },
    { name: 'Prototyping', icon: Zap },
    { name: 'JavaScript', icon: Code2 }
  ];

  return (
    <div className={'min-h-screen bg-gray-900'}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 mb-8 text-lg font-medium text-white hover:text-gray-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-400">
            Product designer passionate about creating beautiful, functional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gray-800 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                About Me
              </h2>
              <p className="text-base leading-relaxed mb-4 text-gray-300">
                I'm a UI/UX designer passionate about creating beautiful, functional digital experiences. 
                Currently working as a UI/UX Intern at Metry AI in Tokyo, where I focus on designing 
                AI-powered solutions and building scalable design systems.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">
                    Tokyo, Japan
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-800 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Skills
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50"
                    >
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/30"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                Let's Connect
              </h2>
              <p className="text-base mb-6 text-gray-300">
                I'm always interested in new projects and opportunities. 
                Let's collaborate and create something amazing together.
              </p>
              
              <div className="flex flex-col gap-4">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  View Projects
                </a>
                
                <a
                  href="https://medium.com/@sumitsharma9128"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
                >
                  Medium
                </a>
                
                <a
                  href="mailto:Sumitsharma9128@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
