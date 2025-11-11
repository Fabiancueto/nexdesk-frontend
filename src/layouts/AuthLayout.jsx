import React from 'react';
import { Outlet } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AuthLayout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181818] via-[#1a1a1a] to-[#222222] dark:from-[#181818] dark:via-[#1a1a1a] dark:to-[#222222] bg-white dark:bg-[#181818] flex items-center justify-center p-4 relative transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-[#FAFAFA]" />
        ) : (
          <Moon className="w-5 h-5 text-[#333333]" />
        )}
      </button>

      {/* Auth Content Container */}
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};
