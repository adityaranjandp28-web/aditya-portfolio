"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-neutral-300 dark:border-neutral-800 flex items-center justify-center opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent text-light-text dark:text-dark-text transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-accent hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
