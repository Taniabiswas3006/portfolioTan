"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("editorial-theme");
      if (saved === "paper" || saved === "light") {
        setThemeState("light");
        document.documentElement.classList.add("light-paper", "light");
        document.documentElement.classList.remove("dark");
      } else {
        setThemeState("dark");
        document.documentElement.classList.remove("light-paper", "light");
        document.documentElement.classList.add("dark");
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      if (newTheme === "light") {
        document.documentElement.classList.add("light-paper", "light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("editorial-theme", "light");
      } else {
        document.documentElement.classList.remove("light-paper", "light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("editorial-theme", "dark");
      }
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "dark" as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
}
