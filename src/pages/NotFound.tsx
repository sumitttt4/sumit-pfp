import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold mb-4 text-gray-200">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md text-lg">
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
