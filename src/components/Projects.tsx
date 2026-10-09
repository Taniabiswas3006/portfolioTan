"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { portfolioData, Project } from "@/data";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  // Mouse coords for floating hover image preview
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const previewX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const previewY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 120);
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(05)</span>
          <span>Selected Work & Case Studies</span>
          <span className="text-white/20">—</span>
          <span>01 / 07 Curated Projects</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-24">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#EDE8DF] tracking-tight">
              Selected <span className="italic font-normal text-[#FF85A1]">Works</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-4 max-w-2xl leading-relaxed">
              Autonomous architectures, real-time machine intelligence, and high-velocity web interfaces. 
              Click any project for deep case study telemetries and architecture blueprints.
            </p>
          </div>
          <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden md:block">
            CLICK TO EXPAND METRICS
          </span>
        </div>

        {/* Numbered Full-Width List (01–07) */}
        <div className="border-t border-[rgba(237,232,223,0.1)] divide-y divide-[rgba(237,232,223,0.1)]">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              data-cursor="view"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(project)}
              className="group relative py-8 sm:py-12 md:py-14 cursor-pointer transition-all duration-500 hover:px-4 sm:hover:px-6 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Number + Title */}
                <div className="flex items-baseline gap-4 sm:gap-8 md:gap-12">
                  <span className="font-mono text-xs sm:text-sm text-[#8A847A] group-hover:text-[#FF85A1] transition-colors font-bold">
                    ({project.num})
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#EDE8DF] group-hover:text-[#FF85A1] group-hover:translate-x-3 transition-all duration-300 leading-none">
                      {project.title.replace(project.italicTitle || "", "")}
                      {project.italicTitle && (
                        <span className="italic font-normal">{project.italicTitle}</span>
                      )}
                    </h3>

                    <p className="font-mono text-xs uppercase tracking-wider text-[#8A847A] mt-3 group-hover:text-[#EDE8DF]/80 transition-colors">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Key Metric Badge, Category, Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 pl-10 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.metrics.slice(0, 1).map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium tracking-wide bg-[#FF85A1]/10 text-[#FF85A1] border border-[#FF85A1]/30"
                      >
                        {m}
                      </span>
                    ))}
                    <span className="text-xs font-mono text-[#8A847A] uppercase hidden sm:inline">
                      {project.category}
                    </span>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[rgba(237,232,223,0.15)] flex items-center justify-center text-[#EDE8DF] group-hover:border-[#FF85A1] group-hover:bg-[#FF85A1] group-hover:text-[#0B0A09] transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview that tracks the cursor on Desktop */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ x: previewX, y: previewY }}
            className="pointer-events-none fixed top-0 left-0 z-[880] hidden lg:block w-[320px] aspect-[16/10] rounded-2xl overflow-hidden border border-[rgba(255,133,161,0.4)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#141311]"
          >
            <div className="relative w-full h-full">
              <Image
                src={hoveredProject.image}
                alt={hoveredProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white/90">
                <span className="uppercase tracking-widest">{hoveredProject.title}</span>
                <span className="text-[#FF85A1]">Click to View →</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#0B0A09]/90 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#141311] border border-[rgba(237,232,223,0.12)] rounded-[28px] sm:rounded-[36px] overflow-y-auto shadow-2xl p-6 sm:p-10 md:p-12 text-[#EDE8DF]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close Case Study"
                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF85A1] hover:text-[#0B0A09] text-[#EDE8DF] transition-all"
              >
                <X size={20} />
              </button>

              {/* Case Study Header */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widest">
                  <span className="text-[#FF85A1] font-bold">CASE STUDY ({activeProject.num})</span>
                  <span>•</span>
                  <span>{activeProject.category}</span>
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#EDE8DF] font-light leading-tight">
                  {activeProject.title}
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#FF85A1] font-medium">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Featured Image Screenshot */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-8 bg-[#0B0A09]">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {activeProject.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center"
                  >
                    <span className="font-mono text-[10px] text-[#8A847A] uppercase tracking-widest">
                      Key Metric {i + 1}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-[#FF85A1] mt-1 font-semibold">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem & Overview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#8A847A]">
                    Problem Statement
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#EDE8DF]/90 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#8A847A]">
                    Architecture Overview
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#EDE8DF]/90 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>
              </div>

              {/* Engineering Contributions */}
              {activeProject.contributions && (
                <div className="space-y-4 mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#8A847A]">
                    Core Engineering Contributions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.contributions.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.015] border border-white/5 text-xs sm:text-sm text-[#EDE8DF]/85"
                      >
                        <CheckCircle2 size={16} className="text-[#FF85A1] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="space-y-3 mb-10">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8A847A]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#EDE8DF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Repo & Live System */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                {activeProject.links.demo && (
                  <a
                    href={activeProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#FF85A1] text-[#0B0A09] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#FF9DB5] transition-all shadow-[0_0_25px_rgba(255,133,161,0.25)]"
                  >
                    <ExternalLink size={16} />
                    <span>Launch Live System</span>
                  </a>
                )}

                {activeProject.links.github && (
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/15 hover:border-[#FF85A1] text-xs font-mono uppercase tracking-widest text-[#EDE8DF] hover:text-[#FF85A1] transition-all"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
