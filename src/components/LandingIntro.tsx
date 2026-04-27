"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LandingIntro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollDown = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  // Pre-calculated organic positions for the letters to scatter around the center
  const letters = [
    { char: 'P', classes: 'top-[12%] left-[5%] md:top-[20%] md:left-[15%] text-5xl sm:text-7xl md:text-9xl rotate-[-12deg]' },
    { char: 'O', classes: 'top-[8%] left-[28%] md:top-[16%] md:left-[35%] text-4xl sm:text-6xl md:text-8xl rotate-[8deg] text-[#FF85A1]' },
    { char: 'R', classes: 'top-[15%] right-[15%] md:top-[22%] md:right-[30%] text-6xl sm:text-[5.5rem] md:text-[10rem] rotate-[15deg]' },
    { char: 'T', classes: 'top-[10%] right-[2%] md:top-[18%] md:right-[12%] text-5xl sm:text-7xl md:text-9xl rotate-[-8deg]' },
    { char: 'F', classes: 'bottom-[25%] left-[2%] md:bottom-[35%] md:left-[10%] text-6xl sm:text-[6rem] md:text-[11rem] rotate-[10deg]' },
    { char: 'O', classes: 'bottom-[12%] left-[20%] md:bottom-[15%] md:left-[25%] text-4xl sm:text-6xl md:text-8xl rotate-[-15deg] text-[#FF85A1]' },
    { char: 'L', classes: 'bottom-[28%] right-[20%] md:bottom-[35%] md:right-[32%] text-5xl sm:text-7xl md:text-9xl rotate-[8deg]' },
    { char: 'I', classes: 'bottom-[8%] right-[30%] md:bottom-[12%] md:right-[28%] text-4xl sm:text-6xl md:text-8xl rotate-[-5deg]' },
    { char: 'O', classes: 'bottom-[15%] right-[5%] md:bottom-[18%] md:right-[10%] text-5xl sm:text-[5.5rem] md:text-[10rem] rotate-[12deg] text-[#FF85A1]' },
    { char: "'26", classes: 'top-[35%] right-[2%] md:top-[45%] md:right-[6%] text-3xl sm:text-5xl md:text-7xl rotate-[-20deg] text-white/30' },
  ];

  if (!mounted) return <div className="h-screen w-full bg-transparent" />;

  return (
    <section spellCheck="false" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent select-none pt-16 md:pt-32">
      
      {/* Background scattered typography */}
      <div className="absolute inset-0 z-0 pointer-events-none translate-y-8 md:translate-y-16">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              // Extract the rotate class to animate towards it
              rotate: parseFloat(item.classes.match(/rotate-\[(-?\d+)deg\]/)?.[1] || "0") 
            }}
            transition={{ 
              duration: 1.2, 
              delay: i * 0.08, 
              ease: [0.25, 0.4, 0.25, 1] 
            }}
            className={`absolute font-black leading-none outline-none no-underline ${item.classes}`}
            // Using a system fallback for chunky display fonts
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>

      {/* Central Avatar & Name */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center mt-6 sm:mt-12 md:mt-20"
      >
        <div 
          className="relative rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_60px_15px_rgba(255,133,161,0.4)] transition-transform duration-700 hover:scale-105"
          style={{ width: 'clamp(160px, 35vh, 400px)', height: 'clamp(160px, 35vh, 400px)' }}
        >
          {/* Ensure the user puts avatar.png in the public folder */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/avatar.png" 
            alt="Tania Biswas Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 sm:mt-8 text-center"
        >
          <h1 
            className="text-4xl md:text-6xl text-white/90"
            style={{ fontFamily: "'Apricots', cursive" }}
          >
            HI! I am Tania
          </h1>
          <p 
            className="text-2xl sm:text-3xl md:text-4xl mt-3 sm:mt-6 font-normal text-[#FF85A1] tracking-normal"
            style={{ fontFamily: "'Aloja Extended', cursive" }}
          >
            Creative Developer
          </p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-6 sm:mt-12 cursor-pointer flex flex-col items-center gap-3 p-4 group"
          onClick={handleScrollDown}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-[#FF85A1] transition-colors duration-300 font-semibold">
            Scroll to Explore
          </span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/70 animate-bounce group-hover:text-[#FF85A1] transition-colors duration-300" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default LandingIntro;
