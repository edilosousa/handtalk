import React, { useEffect } from 'react';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import useScript from './components/extractor';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );  
};

const ThemedApp: React.FC = () => {
  const { isDarkMode } = useTheme();
  // useScript(`./utils/plugin/bundle.js`);

  // useEffect(() => {
  //   if (window.DataExtractor) {
  //     const dataExtractor = new window.DataExtractor();
  //     dataExtractor.extractData();
  //   }
  // }, []);

  return (
    <div className={`App ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Header />
      <div className="container mt-4">
        <h1>Welcome to My Bootstrap App</h1>
        <p>This is a simple React application with Bootstrap 5.</p>
      </div>
    </div>
  );
};

export default App;
