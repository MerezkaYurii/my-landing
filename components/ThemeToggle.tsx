"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // При загрузке читаем тему из localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-1 py-1 bg-gray-800 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-100 text-black dark:text-white rounded-lg transition-colors duration-500"
    >
      <svg className="w-5 h-5 fill-current text-white dark:text-black transition-colors duration-500">
        {theme === "light" ? (
          <use href="/sprite.svg#icon-moon-svgrepo-com" />
        ) : (
          <use href="/sprite.svg#icon-sun" />
        )}
      </svg>
    </button>
  );
}
