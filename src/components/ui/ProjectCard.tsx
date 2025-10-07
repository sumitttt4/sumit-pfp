import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: string[];
  onViewDetails: () => void;
}

const ProjectCard = ({ title, subtitle, thumbnail, tags, onViewDetails }: ProjectCardProps) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800/50'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/50'
      }`}
      whileHover={{ y: -8 }}
    >
      {/* Thumbnail Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent'
              : 'bg-gradient-to-t from-white via-white/20 to-transparent'
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h3
            className={`text-2xl font-semibold transition-colors duration-200 ${
              isDarkMode ? 'text-white group-hover:text-gray-100' : 'text-gray-900 group-hover:text-gray-800'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50'
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={onViewDetails}
          className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            isDarkMode
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          isDarkMode
            ? 'shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]'
            : 'shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]'
        }`}
      />
    </motion.div>
  );
};

export default ProjectCard;
