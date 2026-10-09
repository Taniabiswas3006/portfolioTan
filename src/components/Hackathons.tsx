"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Zap, Star, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data";

const hackathonIcons: Record<string, React.ReactNode> = {
  "01": <Trophy size={24} className="text-[#FF85A1]" />,
  "02": <Award size={24} className="text-[#FF85A1]" />,
  "03": <Star size={24} className="text-[#FF85A1]" />,
  "04": <Zap size={24} className="text-[#FF85A1]" />,
};

export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(09)</span>
          <span>Competitive Hackathons</span>
          <span className="text-white/20">—</span>
          <span>High-Velocity Prototyping</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Hackathon <span className="italic font-normal text-[#FF85A1]">Arena</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Rapid execution, adversarial architectures, and prize-winning sprints under intense clock constraints.
            </p>
          </div>
          <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            4 PODIUM FINISHES
          </span>
        </div>

        {/* 4 Cards Grid / Sticky Stack with Big Numerals and Mono Labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.hackathons.map((hack, idx) => (
            <motion.div
              key={hack.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[28px] sm:rounded-[36px] bg-[#141311] border border-[rgba(237,232,223,0.08)] hover:border-[#FF85A1]/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Giant numeral watermark */}
              <span className="absolute -top-4 -right-2 font-serif text-8xl sm:text-9xl text-white/[0.02] group-hover:text-[#FF85A1]/[0.05] transition-colors pointer-events-none select-none font-bold">
                {hack.num}
              </span>

              {/* Top Row: Icon + Mono Label */}
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#FF85A1]/30 transition-colors">
                  {hackathonIcons[hack.num]}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#FF85A1]">
                    {hack.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#8A847A]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A847A]">
                    VOL. {hack.num}
                  </span>
                </div>
              </div>

              {/* Title & Role */}
              <div className="relative z-10 space-y-2 mb-8">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#EDE8DF] group-hover:text-[#FF85A1] transition-colors leading-tight">
                  {hack.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#8A847A]">
                  {hack.role}
                </p>
              </div>

              {/* Achievement Badge & Project Banner */}
              <div className="relative z-10 space-y-4 pt-6 border-t border-[rgba(237,232,223,0.08)]">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-[#EDE8DF] italic">
                    &ldquo;{hack.achievement}&rdquo;
                  </span>
                  {hack.url && (
                    <a
                      href={hack.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#EDE8DF] group-hover:border-[#FF85A1] group-hover:text-[#FF85A1] transition-all"
                      aria-label={`View certificate for ${hack.name}`}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                {hack.project && (
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A847A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF85A1]" />
                    <span>Project: {hack.project}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
