import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeChangeCount: number;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeChangeCount, setThemeChangeCount] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setThemeChangeCount(themeChangeCount + 1);
  };

  // useEffect(() => {
  //   // Inicialize o plugin e defina a função de retorno de chamada
  //   const plugin = new window.DataExtractor();
  //   plugin.addObserver({
  //     update: () => setThemeChangeCount(themeChangeCount + 1)
  //   });
  //   plugin.setThemeChangeCallback(() => setThemeChangeCount(themeChangeCount + 1));
  // }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeChangeCount }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
