import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ 
  children, 
  defaultTheme = 'dark',
  attribute = 'class',
  enableSystem = true 
}) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      if (enableSystem) {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return systemTheme;
      }
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme === 'system' && typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const resolved = theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;

    setResolvedTheme(resolved);
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
    
    if (attribute === 'class') {
      root.setAttribute('class', resolved);
    } else {
      root.setAttribute(attribute, resolved);
    }

    localStorage.setItem('theme', theme);
  }, [theme, attribute]);

  useEffect(() => {
    if (!enableSystem || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const resolved = mediaQuery.matches ? 'dark' : 'light';
      setResolvedTheme(resolved);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(resolved);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, enableSystem]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

