"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-[850] h-10 w-28 rounded-full bg-white/[0.04] border border-white/10 opacity-0" />
    );
  }

  const isLight = theme === "light";

  return (
    <motion.aside
      aria-label="Theme switcher"
      initial={{ opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 right-5 sm:top-6 sm:right-8 z-[850] select-none"
    >
      <button
        onClick={toggleTheme}
        aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Paper Mode"}
        title={isLight ? "Switch to Warm Dark (Press to toggle)" : "Switch to Light Paper (Press to toggle)"}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-400 backdrop-blur-xl shadow-lg cursor-pointer ${
          isLight
            ? "bg-[#FFFFFF]/85 hover:bg-[#FFFFFF] border-[rgba(24,23,21,0.12)] text-[#181715] shadow-[0_8px_30px_rgba(24,23,21,0.08)] hover:border-[#D83A65]/50"
            : "bg-[#141311]/85 hover:bg-[#141311] border-[rgba(237,232,223,0.12)] text-[#EDE8DF] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#FF85A1]/50"
        }`}
      >
        {/* Ambient indicator glow on hover */}
        <div
          className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            isLight ? "bg-[#D83A65]/15" : "bg-[#FF85A1]/20"
          }`}
        />

        {/* Animated Icon Pill */}
        <div
          className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-400 ${
            isLight
              ? "bg-[#D83A65]/12 text-[#D83A65]"
              : "bg-[#FF85A1]/15 text-[#FF85A1]"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isLight ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Sun size={14} className="stroke-[2.2]" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <Moon size={14} className="stroke-[2.2]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mode Label */}
        <div className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest font-semibold">
          <span>{isLight ? "LIGHT" : "DARK"}</span>
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              isLight ? "bg-[#D83A65]" : "bg-[#FF85A1]"
            }`}
          />
        </div>
      </button>
    </motion.aside>
  );
}
