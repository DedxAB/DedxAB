'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(theme);
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const stored =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('portfolio-theme')
        : null;
    const initial: Theme = stored === 'light' ? 'light' : 'dark';
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = useCallback((nextTheme: Theme): void => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    }
  }, []);

  const toggleTheme = useCallback((): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
