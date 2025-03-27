
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const NightModeToggle: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  
  useEffect(() => {
    // Check if night mode is active in localStorage
    const storedNightMode = localStorage.getItem('nightMode');
    if (storedNightMode) {
      setIsNightMode(storedNightMode === 'true');
    }
  }, []);
  
  useEffect(() => {
    // Apply night mode styles
    if (isNightMode) {
      document.documentElement.classList.add('night-mode');
      localStorage.setItem('nightMode', 'true');
    } else {
      document.documentElement.classList.remove('night-mode');
      localStorage.setItem('nightMode', 'false');
    }
  }, [isNightMode]);
  
  return (
    <button
      onClick={() => setIsNightMode(!isNightMode)}
      className={`relative p-2 rounded-full transition-all duration-300 ${
        isNightMode 
          ? 'bg-blog-darker text-gray-400' 
          : 'bg-blog-dark text-blog-neon'
      }`}
      aria-label={isNightMode ? 'Disable night mode' : 'Enable night mode'}
    >
      {isNightMode ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5 animate-pulse" />
      )}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isNightMode ? 'Standard Mode' : 'Night Mode'}
      </span>
    </button>
  );
};

export default NightModeToggle;
