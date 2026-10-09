"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData, SkillCategory } from "@/data";
import { Cpu, Layers, Database, BarChart3, ShieldCheck, Smartphone } from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  ml: <Cpu size={22} className="text-[#FF85A1]" />,
  fullstack: <Layers size={22} className="text-[#FF85A1]" />,
  database: <Database size={22} className="text-[#FF85A1]" />,
  "data-analysis": <BarChart3 size={22} className="text-[#FF85A1]" />,
  cybersecurity: <ShieldCheck size={22} className="text-[#FF85A1]" />,
  android: <Smartphone size={22} className="text-[#FF85A1]" />,
};

function BentoTile({ skill, index }: { skill: SkillCategory; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coords for 3D tilt & dynamic spotlight border
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);
    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 bg-[#141311] border border-[rgba(237,232,223,0.08)] hover:border-[#FF85A1]/40 transition-colors duration-500 overflow-hidden flex flex-col justify-between ${
        index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      {/* Spotlight Border & Radial Hover Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(400px circle at var(--spotlight-x, 150px) var(--spotlight-y, 150px), rgba(255, 133, 161, 0.12), transparent 70%)",
        }}
      />

      {/* Top Header: Icon & Proficiency Label */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#FF85A1]/30 transition-colors shadow-inner">
          {skillIcons[skill.id] || <Cpu size={22} className="text-[#FF85A1]" />}
        </div>

        <div className="text-right">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF85A1] font-bold block">
            {skill.proficiency}
          </span>
          <span className="font-mono text-[9px] text-[#8A847A] tracking-wider">
            {skill.progress}% Mastery
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 space-y-3">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE8DF] group-hover:text-[#FF85A1] transition-colors">
          {skill.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#8A847A] leading-relaxed line-clamp-2">
          {skill.description}
        </p>
      </div>

      {/* Thin Animated Progress Line */}
      <div className="relative z-10 mt-6 mb-6">
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-[#FF85A1]"
          />
        </div>
      </div>

      {/* Tech Chips */}
      <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
        {skill.tech.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/[0.03] border border-white/5 text-[#EDE8DF]/80 group-hover:border-[#FF85A1]/20 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(04)</span>
          <span>Technical Arsenal</span>
          <span className="text-white/20">—</span>
          <span>Core Capabilities & Tooling</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Disciplined <span className="italic font-normal text-[#FF85A1]">Arsenal</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Engineered with depth across machine learning primitives, modern web systems, and secure infrastructure.
            </p>
          </div>
          <div className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            6 Specialized Domains
          </div>
        </div>

        {/* Bento Grid: 6 Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {portfolioData.skills.map((skill, index) => (
            <BentoTile key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
