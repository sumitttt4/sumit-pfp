import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/sections/Hero';

const Index = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gray-950' 
        : 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200'
    }`}>
      <Hero isDarkMode={isDarkMode} />
    </div>
  );
};

export default Index;