import '../styles/globals.css';
import { useEffect, useState } from 'react';

/**
 * This custom App component wraps all pages. It manages the current theme and
 * exposes a simple toggle function via React context. The theme state is
 * persisted to localStorage so users keep their preferred colour scheme on
 * subsequent visits.
 */
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load the stored theme on mount. Default to light if none exists.
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.dataset.theme = 'light';
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    document.documentElement.dataset.theme = newTheme;
  }

  return <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />;
}