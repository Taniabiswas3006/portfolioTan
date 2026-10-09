"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(03)</span>
          <span>Trajectory & Academia</span>
          <span className="text-white/20">—</span>
          <span>Experience & Education</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Curated <span className="italic font-normal text-[#FF85A1]">Chronology</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              From foundational engineering and rigorous research to autonomous production systems.
            </p>
          </div>
          <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            2011 — PRESENT
          </span>
        </div>

        {/* Editorial Vertical Ledger Timeline */}
        <div className="divide-y divide-[rgba(237,232,223,0.08)] border-y border-[rgba(237,232,223,0.08)]">
          {portfolioData.experiences.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group py-8 sm:py-10 transition-all duration-500 cursor-pointer ${
                  isHovered ? "bg-white/[0.02] px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl" : ""
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Left Column: Mono Dates & Badges (4 cols) */}
                  <div className="md:col-span-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#FF85A1]">
                        {item.period}
                      </span>
                      {item.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widestEditorial text-[#8A847A]">
                      {item.organization}
                    </span>
                  </div>

                  {/* Right Column: Serif Title & Description & Outlined Pills (8 cols) */}
                  <div className="md:col-span-8 flex flex-col">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#EDE8DF] group-hover:text-[#FF85A1] transition-colors leading-tight">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-[#8A847A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                        →
                      </span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase border border-[rgba(237,232,223,0.12)] text-[#EDE8DF]/70 group-hover:border-[#FF85A1]/40 group-hover:text-[#FF85A1] transition-all bg-white/[0.01]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
