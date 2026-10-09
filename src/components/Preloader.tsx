"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import MetroHero from "@/components/ui/scroll-locked-video-hero";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleProgress = useCallback((progress: number) => {
    const p = Math.min(100, Math.max(0, Math.round(progress * 100)));
    setCount(p);
  }, []);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  const handleSkip = () => {
    setIsComplete(true);
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#0B0A09] text-[#EDE8DF]"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Scroll-Locked Video Hero Core */}
          <MetroHero
            videoSrc="https://cdn.21st.dev/assets/mirror/21/21a77eac28eacbb7e142016eefeaa0b4a766619e51113629a3bc6df6af066c0f.mp4"
            title=""
            tagline=""
            scrollHint=""
            signature={false}
            scrubDistance={2800}
            autoUnlockOnEnd={true}
            onProgress={handleProgress}
            onComplete={handleComplete}
            className="w-full h-full"
          >
            {/* Cinematic Editorial Overlays on top of Video Canvas */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 md:p-14 z-10">
              {/* Top metadata */}
              <div className="flex justify-between items-center text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial pointer-events-auto">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF85A1] animate-pulse" />
                  <span>Tania Biswas Portfolio</span>
                  <span className="hidden sm:inline text-white/20">—</span>
                  <span className="hidden sm:inline text-white/50">Scroll-Locked Telemetry</span>
                </span>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline">Edition © 2026</span>
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] text-[#EDE8DF] hover:text-[#FF85A1] hover:border-[#FF85A1] transition-colors"
                  >
                    <span>Skip Intro</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Center TB. monogram with dynamic scrub opacity & scale */}
              <div className="flex flex-col items-center justify-center my-auto text-center pointer-events-none select-none">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-7xl sm:text-9xl md:text-[11rem] tracking-tight leading-none text-[#EDE8DF] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                    style={{
                      transform: `scale(${1 + (count / 100) * 0.12})`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    TB<span className="text-[#FF85A1]">.</span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-4 font-mono text-[11px] sm:text-xs uppercase tracking-widestEditorial text-[#8A847A] flex items-center gap-2"
                >
                  <Sparkles size={12} className="text-[#FF85A1]" />
                  <span>
                    {count < 85
                      ? "AI Engineer & Full Stack Developer"
                      : "Unlocking The City · Entering Portfolio"}
                  </span>
                </motion.p>
              </div>

              {/* Bottom Progress Counter & Scrub Indicator */}
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pointer-events-auto">
                {/* Horizontal Progress Bar */}
                <div className="w-full sm:w-56 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF85A1] to-white transition-all duration-75"
                    style={{ width: `${count}%` }}
                  />
                </div>

                {/* Center Scroll Hint */}
                <div className="flex items-center gap-2 text-xs font-mono text-white/70 uppercase tracking-widest animate-pulse">
                  <ChevronDown size={14} className="text-[#FF85A1] animate-bounce" />
                  <span>
                    {count < 95 ? "Scroll To Scrub & Enter" : "Push Forward To Release"}
                  </span>
                </div>

                {/* Percentage Display */}
                <div className="font-mono text-5xl sm:text-6xl md:text-7xl font-light text-[#FF85A1] tabular-nums leading-none">
                  {String(count).padStart(2, "0")}
                  <span className="text-xs text-[#8A847A] ml-1 font-normal">%</span>
                </div>
              </div>
            </div>
          </MetroHero>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
