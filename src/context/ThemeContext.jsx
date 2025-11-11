import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  // Cargar tema guardado en localStorage al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('nexdesk-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Aplicar tema al HTML y guardarlo en localStorage
  useEffect(() => {
    localStorage.setItem('nexdesk-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Alternar entre temas claro/oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
