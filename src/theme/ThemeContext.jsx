import { createContext, useContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ initial = 'light', children }) {
  const [theme, setTheme] = useState(initial);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  // Side effect: attach theme class to body for full screen background
  useEffect(() => {
    const clsLight = 'theme-light';
    const clsDark = 'theme-dark';
    document.body.classList.remove(clsLight, clsDark);
    document.body.classList.add(theme === 'light' ? clsLight : clsDark);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app-theme theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
