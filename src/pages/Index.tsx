import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/sections/Hero';

const Index = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-black' 
        : 'bg-gray-50'
    }`}>
      <Hero isDarkMode={isDarkMode} />
    </div>
  );
};

export default Index;