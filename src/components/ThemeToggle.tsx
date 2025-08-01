import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    console.log('DarkMode', isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
    console.log('DarkMode', isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300 focus:outline-hidden"
    >
      {isDarkMode ? (
        <Moon className="h-6 w-6 text-blue-300" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};
