"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:scale-110 transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Sun Icon for Light Mode */}
      <HiSun
        className={`absolute w-5 h-5 text-orange-500 transition-all duration-500 ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />

      {/* Moon Icon for Dark Mode */}
      <HiMoon
        className={`absolute w-5 h-5 text-indigo-400 transition-all duration-500 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Background Glow Effect */}
      <div
        className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity ${
          theme === "dark" ? "bg-indigo-500" : "bg-orange-500"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
