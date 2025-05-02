"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's theme preference from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
        // Play tick sound
        // const tick = new Audio("/tick.mp3");
        // tick.play();
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-zinc-900 text-white rounded-md dark:bg-gray-300 dark:text-gray-900">
      {isDarkMode ? <Sun width={20} height={20}/> : <Moon width={20} height={20}/>}
    </button>
  );
};

export default ThemeToggle;
