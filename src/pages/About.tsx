import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Code, Award, Heart, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const skills = [
    'UI/UX Design',
    'Figma',
    'Adobe XD',
    'Sketch',
    'Product Design',
    'Design Systems',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Prototyping',
    'User Research'
  ];

  const experiences = [
    {
      company: 'Metry AI',
      role: 'Product Designer',
      location: 'Tokyo, Japan',
      period: '2024 - Present',
      description: 'Designing innovative AI-powered solutions, creating intuitive interfaces, and building design systems.',
      icon: <Zap className="w-5 h-5" />
    },
    // Add more experiences here
  ];

  const values = [
    {
      title: 'Pixel Perfect',
      description: 'Every pixel matters. I believe in crafting designs that are not just functional, but beautiful.',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'User First',
      description: 'Design should serve the user. I prioritize usability and intuitive experiences.',
      icon: <Heart className="w-6 h-6 text-pink-500" />
    },
    {
      title: 'Clean Code',
      description: 'Good design extends to code. I write clean, maintainable code that brings designs to life.',
      icon: <Code className="w-6 h-6 text-cyan-500" />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects - Matching Hero */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] ${isDarkMode ? 'opacity-50' : 'opacity-30'}`} />
      <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/10' : 'bg-pink-400/40 animate-pulse'}`} />
      <div className={`absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-indigo-400/40 animate-pulse'}`} style={{ animationDelay: '1s' }} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${isDarkMode ? 'bg-cyan-500/5' : 'bg-purple-300/30 animate-pulse'}`} style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`group inline-flex items-center gap-2 mb-8 sm:mb-12 text-base sm:text-lg font-medium transition-colors border-b-2 pb-1 ${
            isDarkMode 
              ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' 
              : 'text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            A designer who cares about pixels, currently making designs at <span className={isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-semibold'}>Metry AI (Tokyo)</span>. I believe good design should feel invisible.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="space-y-16 sm:space-y-24">
          
          {/* My Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Story
            </h2>
            <div className={`text-lg sm:text-xl leading-relaxed space-y-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              <p>
                I'm a product designer and frontend developer passionate about creating beautiful, functional digital experiences. My journey in design started with a fascination for how small details can make a huge difference in user experience.
              </p>
              <p>
                Currently, I'm crafting innovative AI-powered solutions at Metry AI in Tokyo, where I get to blend creativity with cutting-edge technology. When I'm not designing, you'll find me exploring new design tools, writing clean code, or thinking about the next big idea.
              </p>
              <p>
                I believe that design is not just about making things look pretty—it's about solving problems and creating experiences that feel natural and effortless.
              </p>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
                      : 'bg-white/80 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl ${
                      isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'
                    }`}>
                      <Briefcase className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-xl sm:text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {exp.role}
                          </h3>
                          <p className={`text-base sm:text-lg font-medium ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <span className={`text-sm font-medium px-4 py-2 rounded-full ${
                          isDarkMode
                            ? 'bg-zinc-800 text-zinc-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className={`text-base sm:text-lg leading-relaxed ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Tools
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-3 rounded-2xl text-base sm:text-lg font-medium transition-all cursor-default ${
                    isDarkMode
                      ? 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-white'
                      : 'bg-white/80 border border-gray-200 hover:border-gray-300 text-gray-900 shadow-md hover:shadow-lg'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Values/Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
                      : 'bg-white/80 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-base sm:text-lg leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-12 sm:p-16 rounded-3xl text-center ${
              isDarkMode
                ? 'bg-zinc-900/50 border border-zinc-800'
                : 'bg-white/80 border border-gray-200 shadow-xl'
            }`}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Work Together
            </h2>
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/projects"
                className={`group inline-flex items-center gap-2 text-base sm:text-lg font-medium transition-colors border-b-2 pb-1 ${
                  isDarkMode 
                    ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' 
                    : 'text-gray-900 border-gray-900 hover:text-gray-700 hover:border-gray-700'
                }`}
              >
                View My Work
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default About;
