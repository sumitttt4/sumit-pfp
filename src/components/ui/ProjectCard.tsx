import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Figma } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: string[];
  onViewDetails: () => void;
  variant?: 'large' | 'medium' | 'small' | 'wide' | 'tall';
  gradient?: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

const ProjectCard = ({ 
  title, 
  subtitle, 
  thumbnail, 
  tags, 
  onViewDetails, 
  variant = 'medium',
  gradient,
  liveUrl,
  githubUrl,
  figmaUrl 
}: ProjectCardProps) => {
  const { isDarkMode } = useTheme();

  // Bento grid size variants
  const sizeClasses = {
    large: 'col-span-1 md:col-span-2 row-span-2',
    medium: 'col-span-1 row-span-1',
    small: 'col-span-1 row-span-1',
    wide: 'col-span-1 md:col-span-2 row-span-1',
    tall: 'col-span-1 row-span-1 md:row-span-2'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${sizeClasses[variant]} ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800/50 hover:border-gray-700/50'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/50 hover:border-gray-300/50'
      }`}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={onViewDetails}
    >
      {/* Gradient Overlay Background */}
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      )}

      {/* Thumbnail Section */}
      <div className={`relative overflow-hidden ${
        variant === 'large' || variant === 'tall' ? 'aspect-[16/12]' : 
        variant === 'wide' ? 'aspect-[21/9]' : 
        'aspect-[4/3]'
      }`}>
        <motion.img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode
              ? 'bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent group-hover:from-gray-900/95'
              : 'bg-gradient-to-t from-white via-white/60 to-transparent group-hover:from-white/95'
          }`}
        />

        {/* Quick Action Links - Show on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full backdrop-blur-xl transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-gray-900/80 hover:bg-gray-800 text-white'
                  : 'bg-white/80 hover:bg-gray-100 text-gray-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full backdrop-blur-xl transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-gray-900/80 hover:bg-gray-800 text-white'
                  : 'bg-white/80 hover:bg-gray-100 text-gray-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
          {figmaUrl && (
            <motion.a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full backdrop-blur-xl transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-gray-900/80 hover:bg-gray-800 text-white'
                  : 'bg-white/80 hover:bg-gray-100 text-gray-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="View on Figma"
            >
              <Figma className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-3">
        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h3
            className={`text-xl sm:text-2xl font-semibold transition-colors duration-200 line-clamp-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed line-clamp-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50 group-hover:bg-gray-800 group-hover:border-gray-600'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-gray-200'
              }`}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* View Details - Show on hover */}
        <motion.div
          className={`flex items-center gap-2 pt-2 font-medium text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.div>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          isDarkMode
            ? 'shadow-[inset_0_0_80px_rgba(255,255,255,0.03)]'
            : 'shadow-[inset_0_0_80px_rgba(0,0,0,0.02)]'
        }`}
      />
    </motion.div>
  );
};

export default ProjectCard;
