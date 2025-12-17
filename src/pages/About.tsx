import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Briefcase, ExternalLink, GraduationCap, Globe, PenTool, Coffee } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const GlassCard = ({ children, className = "", noPadding = false }: { children: React.ReactNode, className?: string, noPadding?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
                relative overflow-hidden
                bg-white/40 dark:bg-black/40 
                backdrop-blur-2xl saturate-150
                border border-white/20 dark:border-white/10
                shadow-2xl dark:shadow-black/50
                rounded-3xl
                ${noPadding ? '' : 'p-6 sm:p-8'}
                ${className}
            `}
    >
      {children}
    </motion.div>
  );

  const skills = [
    'UI/UX Design', 'Figma', 'Product Design', 'Prototyping',
    'React.js', 'TypeScript', 'Tailwind', 'Motion'
  ];

  return (
    <div className={`min-h-screen relative overflow-x-hidden ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none fixed">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-gray-400 opacity-20 blur-[100px] dark:bg-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 relative z-10 font-sans">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between"
        >
          <div>
            <button
              onClick={() => navigate('/')}
              className={`group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors mb-4 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                }`}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
              More about <span className="text-gray-400 dark:text-gray-600">Sumit.</span>
            </h1>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* 1. Main Bio Card */}
          <GlassCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Wave" className="w-14 h-14 hover:animate-wave origin-bottom-right" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  I craft digital experiences with a focus on motion and usability.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a Design Engineer from Tokyo who loves bridging the gap between design and development. I believe that the best products are built when design and engineering work in harmony, not in silos.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Round%20Pushpin.png" alt="Location" className="w-5 h-5" />
                  Tokyo, Japan
                </span>
                <span className="flex items-center gap-1">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png" alt="Coffee" className="w-5 h-5" />
                  Matcha Lover
                </span>
              </div>
            </div>
          </GlassCard>


          {/* 2. Skills Cloud - Now Expanded */}
          <GlassCard className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-0">
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Toolkit" className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white tracking-tight">Toolkit</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs font-semibold rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* 5. Writing / Medium */}
          <GlassCard className="col-span-1 md:col-span-2 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/0">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-0">
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Writing" className="w-10 h-10" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thoughts & Writing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  I occassionally write about design systems, React performance, and the future of web interfaces on Medium.
                </p>
              </div>
              <a
                href="https://medium.com/@sumitsharma9128"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
              >
                Read Articles <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </a>
            </div>
          </GlassCard>

          {/* 6. Contact CTA - Minimal */}
          <GlassCard className="col-span-1 md:col-span-3 lg:col-span-4 flex items-center justify-between group cursor-pointer" noPadding>
            <a href="mailto:Sumitsharma9128@gmail.com" className="flex items-center justify-between w-full p-8">
              <div className="flex items-center gap-4">
                <div className="p-0">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Envelope.png" alt="Email" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Start a project</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Sumitsharma9128@gmail.com</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white rotate-[135deg]" />
              </div>
            </a>
          </GlassCard>

        </div>
      </div>
    </div>
  );
};

export default About;
