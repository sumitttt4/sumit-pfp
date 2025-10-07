import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-950' : 'bg-white'
    }`}>
      <div className="text-center px-4">
        <h1 className={`text-8xl font-bold mb-4 ${
          isDarkMode ? 'text-gray-800' : 'text-gray-200'
        }`}>404</h1>
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Page Not Found</h2>
        <p className={`mb-8 max-w-md text-lg ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors font-medium"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
