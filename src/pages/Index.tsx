import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();

  // Monitor scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Sumit Sharma
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === 'home' 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
                {activeSection === 'home' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
              
              <button
                onClick={() => navigate('/projects')}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Work
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === 'contact' 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
                {activeSection === 'contact' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            </div>

            <a
              href="https://drive.google.com/file/d/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                UI/UX Designer
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Crafting intuitive digital experiences through thoughtful design and user research.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm Sumit, a beginner designer passionate about solving real problems with clean, 
                user-centered solutions. Currently learning and growing as a UI/UX Design Intern at 
                <span className="text-gray-900 font-medium"> Metry AI</span>.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/projects')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Let's Talk
                </button>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://www.linkedin.com/in/sumit-sharma-designer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sumitttt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sumitsharma9128@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-100 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">
                  Current Experience
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      UI/UX Design Intern
                    </h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <span className="font-medium">Metry AI</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Aug 2024 - Present</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        'Designed brand identity and color system',
                        'Created landing page concepts and iterations',
                        'Designed user onboarding flow from wireframes to high-fidelity',
                        'Collaborated with developers on design handoff'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  Skills & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma',
                    'UI Design',
                    'UX Research',
                    'Prototyping',
                    'Wireframing',
                    'User Testing',
                    'Design Systems',
                    'Branding'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Great
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm actively seeking opportunities to learn and grow as a designer. 
              Open to internships, junior roles, and freelance projects.
            </p>

            <div className="inline-flex flex-col items-center gap-4 mb-12 p-6 bg-gray-800 rounded-2xl">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-gray-700 rounded-full">Full-time Roles</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full">Internships</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full">Freelance Projects</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="mailto:sumitsharma9128@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sumit-sharma-designer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              
              <a 
                href="https://drive.google.com/file/d/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>

            <div className="text-gray-400 text-sm mb-4">
              Response time: Within 24 hours
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500">
                © 2025 Sumit Sharma. Designed & built with care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;