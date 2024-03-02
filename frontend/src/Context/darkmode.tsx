import React, { createContext, useState, useContext, useEffect } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProviderFC: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedValue = localStorage.getItem('theme');
    if (storedValue) {
      setTheme(storedValue);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const currentTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
      return currentTheme;
    });
  };

  const contextValue: ThemeContextProps = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
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
