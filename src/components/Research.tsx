"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Bookmark, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data";

export default function Research() {
  const { research } = portfolioData;

  return (
    <section
      id="research"
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(08)</span>
          <span>Knowledge Archive & Publications</span>
          <span className="text-white/20">—</span>
          <span>Peer-Reviewed Literature</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Published <span className="italic font-normal text-[#FF85A1]">Treatise</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Contributing theoretical rigor and low-latency benchmarks to international edge AI publications.
            </p>
          </div>
          <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            SCRIVENER PUBLISHING • 2024
          </span>
        </div>

        {/* Magazine Cover Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-[32px] sm:rounded-[44px] bg-[#141311] border border-[rgba(237,232,223,0.1)] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl hover:border-[#FF85A1]/40 transition-colors duration-500"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF85A1]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Magazine Cover Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 sm:pb-12 border-b border-[rgba(237,232,223,0.08)]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase bg-[#FF85A1]/10 text-[#FF85A1] border border-[#FF85A1]/30">
                {research.badge}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8A847A] uppercase tracking-wider">
              <span>{research.year}</span>
              <span>•</span>
              <span>{research.publisher}</span>
            </div>
          </div>

          {/* Center Editorial Title & Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 py-10 sm:py-14 items-center">
            {/* Left 8 Cols: Giant Serif Title & Abstract */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widest">
                <Bookmark size={15} className="text-[#FF85A1]" />
                <span>BOOK CHAPTER CONTRIBUTION</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181715] dark:text-[#EDE8DF] font-light leading-[1.12] tracking-tight transition-colors">
                &ldquo;{research.title}&rdquo;
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#6E685F] dark:text-[#8A847A] leading-relaxed">
                Appearing in: <strong className="text-[#181715] dark:text-[#EDE8DF] font-medium italic">{research.publication}</strong>
              </p>

              <div className="p-5 sm:p-7 rounded-2xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 backdrop-blur-sm">
                <p className="font-serif text-lg sm:text-xl text-[#181715] dark:text-[#EDE8DF]/90 italic leading-relaxed">
                  &ldquo;{research.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Right 4 Cols: Graphic Badge & Paper CTA */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center gap-8 border-t lg:border-t-0 lg:border-l border-[rgba(237,232,223,0.08)] lg:pl-12 pt-8 lg:pt-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex items-center justify-center text-[#FF85A1] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <BookOpen size={44} className="stroke-[1.3]" />
              </div>

              <div className="text-left lg:text-center space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6E685F] dark:text-[#8A847A] block">
                  Archive Telemetry
                </span>
                <span className="font-mono text-sm text-[#181715] dark:text-[#EDE8DF] font-semibold block">
                  Peer-Reviewed Edge AI
                </span>
              </div>

              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF85A1] text-[#0B0A09] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#FF9DB5] transition-all shadow-[0_0_30px_rgba(255,133,161,0.25)] hover:scale-105"
              >
                <span>Read Paper</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Magazine Cover Footer Hairline */}
          <div className="pt-8 border-t border-[rgba(237,232,223,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#8A847A]">
            <span>SYSTEMATIC LITERATURE REVIEW & EMPIRICAL TAXONOMY</span>
            <span className="text-[#FF85A1]">TANIA BISWAS • RESEARCH DIVISION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
