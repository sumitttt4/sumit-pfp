import { ArrowLeft, Mail, MapPin, Briefcase, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const skills = [
    'UI/UX Design',
    'Figma',
    'Product Design',
    'Prototyping',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript'
  ];

  const experience = [
    {
      role: 'UI/UX Intern',
      company: 'Metry AI',
      period: '2024 - Present',
      location: 'Tokyo, Japan'
    },
    {
      role: 'Freelance Designer',
      company: 'Various Clients',
      period: '2023 - 2024',
      location: 'Remote'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - About & Experience */}
          <div className="space-y-10">
            {/* About Section */}
            <div>
              <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h1>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a UI/UX designer passionate about creating beautiful and functional digital experiences. 
                Currently based in Tokyo, working with AI-powered products and building scalable design systems.
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tokyo, Japan
                </span>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDarkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Experience
                </h2>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className={`pb-6 ${
                      index !== experience.length - 1 
                        ? `border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}` 
                        : ''
                    }`}
                  >
                    <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-base mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {exp.period} • {exp.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Writing Section */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Sometimes I write
              </h2>
              <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Sharing thoughts on design, product, and tech on Medium.
              </p>
              <a
                href="https://medium.com/@sumitsharma9128"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-base font-medium transition-colors ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                Read my articles
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Skills & Contact */}
          <div className="space-y-10">
            {/* Skills Section */}
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's work together
              </h2>
              <p className={`text-base mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Open to internships, freelance projects, and collaboration opportunities.
              </p>
              <a
                href="mailto:Sumitsharma9128@gmail.com"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </div>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'
              }`}>
                <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Location
                </p>
                <p className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Tokyo, Japan 🇯🇵
                </p>
              </div>

              <div className={`p-4 rounded-xl ${
                isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100'
              }`}>
                <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Current Role
                </p>
                <p className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  UI/UX Intern at Metry AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
