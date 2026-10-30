"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data";
import {
  Cpu,
  Layers,
  Database,
  BarChart3,
  ShieldCheck,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  ml: <Cpu size={20} className="text-[#FF85A1]" />,
  fullstack: <Layers size={20} className="text-[#FF85A1]" />,
  database: <Database size={20} className="text-[#FF85A1]" />,
  "data-analysis": <BarChart3 size={20} className="text-[#FF85A1]" />,
  cybersecurity: <ShieldCheck size={20} className="text-[#FF85A1]" />,
  android: <Smartphone size={20} className="text-[#FF85A1]" />,
};

interface SkillVisual {
  image: string;
  category: string;
  badge: string;
  caption: string;
}

const skillVisuals: Record<string, SkillVisual> = {
  ml: {
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    category: "ARTIFICIAL INTELLIGENCE",
    badge: "NEURAL ARCHITECTURE",
    caption: "Deep transformer pipelines, fine-tuning, predictive modeling, and edge inference.",
  },
  fullstack: {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    category: "FULL STACK WEB",
    badge: "MODERN SYSTEMS",
    caption: "High-performance React/Next.js architectures, SSR microfrontends, and robust APIs.",
  },
  database: {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    category: "DATA INFRASTRUCTURE",
    badge: "DISTRIBUTED STORES",
    caption: "Relational modeling, distributed key-value caches, query tuning, and ACID compliance.",
  },
  "data-analysis": {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    category: "DATA INTELLIGENCE",
    badge: "ANALYTICAL MODELING",
    caption: "Multivariate regression, statistical pattern extraction, and interactive storytelling.",
  },
  cybersecurity: {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    category: "SECURITY DEFENSE",
    badge: "PENTESTING & OWASP",
    caption: "Vulnerability analysis, protocol dissection, secure auth routines, and sandboxing.",
  },
  android: {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    category: "MOBILE ECOSYSTEMS",
    badge: "NATIVE ARCHITECTURE",
    caption: "Modern Android runtime, fluid Jetpack animations, and offline-first persistence.",
  },
};

const AUTOPLAY_INTERVAL = 6000; // 6s per tab

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const skills = portfolioData.skills;
  const activeSkill = skills[activeIndex] || skills[0];
  const activeVisual = skillVisuals[activeSkill.id] || skillVisuals.ml;

  // Autoplay progression
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, skills.length]);

  const handleSelectTab = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % skills.length);
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden bg-[#0B0A09]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(04)</span>
          <span>Technical Arsenal</span>
          <span className="text-white/20">—</span>
          <span>Core Capabilities & Specializations</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 sm:mb-16">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Disciplined <span className="italic font-normal text-[#FF85A1]">Arsenal</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Engineered with depth across machine learning primitives, modern web systems, and secure infrastructure.
            </p>
          </div>
          <div className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            {skills.length} Specialized Domains
          </div>
        </div>

        {/* Vertical Tabs Interactive Grid */}
        <div
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Column: Vertical Tabs Index */}
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:col-span-5 pt-2">
            {/* Header label */}
            <div className="space-y-1 mb-8 sm:mb-10">
              <span className="text-[10px] font-mono font-medium text-[#8A847A] uppercase tracking-[0.3em] block">
                (SPECIALIZATIONS)
              </span>
            </div>

            {/* Vertical Tab List */}
            <div className="flex flex-col space-y-0 relative pl-5 sm:pl-7">
              {/* Vertical track line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/[0.07]" />

              {skills.map((skill, index) => {
                const isActive = index === activeIndex;
                const formattedNum = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={skill.id}
                    onClick={() => handleSelectTab(index)}
                    className="group relative flex cursor-pointer items-start gap-4 sm:gap-5 border-t border-white/[0.08] py-5 sm:py-6 text-left transition-[color] duration-200 ease-out first:border-0 w-full"
                  >
                    {/* Active vertical line indicator */}
                    <div className="absolute -left-5 sm:-left-7 top-0 bottom-0 w-[2px]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}`}
                          initial={{ height: "0%" }}
                          animate={{ height: "100%" }}
                          transition={{
                            duration: isHovered ? 0 : AUTOPLAY_INTERVAL / 1000,
                            ease: "linear",
                          }}
                          className="w-full bg-[#FF85A1] shadow-[0_0_12px_#FF85A1]"
                        />
                      )}
                    </div>

                    {/* Numeric Index */}
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-medium mt-1 tabular-nums transition-colors duration-200 ${
                        isActive ? "text-[#FF85A1] font-bold" : "text-[#8A847A]/60 group-hover:text-white"
                      }`}
                    >
                      /{formattedNum}
                    </span>

                    {/* Content: Title & Expanding Description */}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-2xl sm:text-3xl lg:text-[2rem] font-sans font-normal tracking-tight transition-colors duration-200 ${
                            isActive
                              ? "text-white font-medium"
                              : "text-[#8A847A]/60 group-hover:text-white"
                          }`}
                        >
                          {skill.title}
                        </span>

                        {isActive && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#FF85A1] bg-[#FF85A1]/10 px-2 py-0.5 rounded border border-[#FF85A1]/20 hidden sm:inline-block">
                            {skill.proficiency}
                          </span>
                        )}
                      </div>

                      {/* Smooth expanding description and tech stack */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#8A847A] text-xs sm:text-sm font-normal leading-relaxed max-w-sm pb-2 pt-1">
                              {skill.description}
                            </p>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5 pt-1 pb-2">
                              {skill.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] border border-white/10 text-[#EDE8DF]/90 hover:border-[#FF85A1]/30 transition-colors"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Media Display Showcase Card */}
          <div className="flex h-full flex-col justify-end order-1 lg:order-2 lg:col-span-7 sticky top-28">
            <div className="relative group/gallery w-full">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11] overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-white/10 bg-[#141311] shadow-2xl">
                {/* Visual Imagery with Cross-fade & directional drift */}
                <div className="absolute inset-0 h-full w-full">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={activeSkill.id}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -30 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <img
                        src={activeVisual.image}
                        alt={activeSkill.title}
                        className="block size-full object-cover filter brightness-[0.75] contrast-[1.05]"
                      />

                      {/* Editorial Shadow Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />

                      {/* Top floating glass badges */}
                      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 right-6 sm:right-8 flex items-center justify-between z-20 pointer-events-none">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0B0A09]/80 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg">
                            {skillIcons[activeSkill.id] || <Cpu size={20} className="text-[#FF85A1]" />}
                          </div>
                          <div className="hidden sm:block">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF85A1] font-bold block">
                              {activeVisual.badge}
                            </span>
                            <span className="font-mono text-[10px] text-[#EDE8DF]/90">
                              {activeVisual.category}
                            </span>
                          </div>
                        </div>

                        {/* Mastery Gauge */}
                        <div className="flex items-center gap-3 bg-[#0B0A09]/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-2xl shadow-lg">
                          <div className="text-right">
                            <span className="font-mono text-[9px] text-[#8A847A] tracking-wider block">
                              MASTERY
                            </span>
                            <span className="font-mono text-xs text-[#EDE8DF] font-bold">
                              {activeSkill.progress}%
                            </span>
                          </div>
                          <div className="w-7 h-7 relative flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                className="stroke-white/10"
                                strokeWidth="3"
                                fill="none"
                              />
                              <motion.circle
                                cx="18"
                                cy="18"
                                r="14"
                                className="stroke-[#FF85A1]"
                                strokeWidth="3"
                                strokeDasharray={88}
                                initial={{ strokeDashoffset: 88 }}
                                animate={{
                                  strokeDashoffset: 88 - (88 * activeSkill.progress) / 100,
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                strokeLinecap="round"
                                fill="none"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Bottom-left Showcase Info */}
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-24 sm:right-32 z-20">
                        <span className="font-mono text-[10px] text-[#FF85A1] uppercase tracking-widest block mb-1">
                          Domain Showcase · /{String(activeIndex + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl text-white tracking-tight font-medium">
                          {activeSkill.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#8A847A] mt-1 line-clamp-2 max-w-md">
                          {activeVisual.caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom-right Prev / Next Arrow Buttons */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-2 sm:gap-3 z-30">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B0A09]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all active:scale-90 shadow-xl cursor-pointer"
                    aria-label="Previous domain"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B0A09]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all active:scale-90 shadow-xl cursor-pointer"
                    aria-label="Next domain"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
