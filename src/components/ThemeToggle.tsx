"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isPaper, setIsPaper] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("editorial-theme");
    if (saved === "paper") {
      setIsPaper(true);
      document.documentElement.classList.add("light-paper");
    }
  }, []);

  const toggleTheme = () => {
    if (isPaper) {
      document.documentElement.classList.remove("light-paper");
      localStorage.setItem("editorial-theme", "dark");
      setIsPaper(false);
    } else {
      document.documentElement.classList.add("light-paper");
      localStorage.setItem("editorial-theme", "paper");
      setIsPaper(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Warm Dark / Paper Mode"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-editorial-hairline hover:border-[#FF85A1] text-xs font-mono transition-colors text-editorial-muted hover:text-editorial-text bg-editorial-card/60 backdrop-blur-md"
      title={isPaper ? "Switch to Warm Dark" : "Switch to Light Paper"}
    >
      {isPaper ? (
        <>
          <Moon size={13} className="text-[#E05375]" />
          <span className="hidden sm:inline uppercase text-[10px] tracking-wider">Dark</span>
        </>
      ) : (
        <>
          <Sun size={13} className="text-[#FF85A1]" />
          <span className="hidden sm:inline uppercase text-[10px] tracking-wider">Paper</span>
        </>
      )}
    </button>
  );
}
