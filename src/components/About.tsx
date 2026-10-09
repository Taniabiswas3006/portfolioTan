"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const pullQuoteWords = portfolioData.personal.bioQuote.split(" ");
  const para1Words = portfolioData.personal.bioParagraph1.split(" ");
  const para2Words = portfolioData.personal.bioParagraph2.split(" ");
  const para3Words = portfolioData.personal.bioParagraph3.split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      {/* Corner crosshairs */}
      <div className="crosshair-corner crosshair-top-left absolute top-8 left-8 hidden sm:block" />
      <div className="crosshair-corner crosshair-top-right absolute top-8 right-8 hidden sm:block" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(02)</span>
          <span>About & Philosophy</span>
          <span className="text-white/20">—</span>
          <span>The Intersection of AI & Interface</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column (5 Cols): Big Serif Pull-Quote */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#EDE8DF] font-light leading-[1.12] tracking-tight">
              &ldquo;
              {pullQuoteWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-[0.25em] ${
                    word.toLowerCase().includes("poem") || word.toLowerCase().includes("poetry") || word.toLowerCase().includes("sing")
                      ? "italic text-[#FF85A1]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
              &rdquo;
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-[1px] bg-[#FF85A1] origin-left mt-8"
            />
          </div>

          {/* Right Column (7 Cols): Narrative Paragraphs with Word-by-Word scroll reveal */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 font-sans text-base sm:text-lg md:text-xl text-[#8A847A] leading-relaxed">
            {/* Paragraph 1 */}
            <p>
              {para1Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.02,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-[0.25em] ${
                    word.includes("AI") || word.includes("Engineer") || word.includes("Full") || word.includes("Stack")
                      ? "text-[#EDE8DF] font-semibold"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </p>

            {/* Paragraph 2 */}
            <p>
              {para2Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.015,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-[0.25em] ${
                    word.includes("9.4") || word.includes("JIS") || word.includes("OCR") || word.includes("NLP")
                      ? "text-[#FF85A1] font-medium"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </p>

            {/* Paragraph 3 */}
            <p>
              {para3Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.015,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>

        {/* 4-Item Meta Row with Hairline Grid & Pulsing Green Dot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-24 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 hairline-t"
        >
          {/* Origin */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A847A] block">
              Origin
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#EDE8DF]">
              West Bengal, <span className="italic text-[#FF85A1]">IN</span>
            </p>
          </div>

          {/* Working */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A847A] block">
              Working
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#EDE8DF]">
              Parot.Dev
            </p>
          </div>

          {/* Role */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A847A] block">
              Role
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#EDE8DF]">
              AI <span className="italic font-normal">Engineer</span>
            </p>
          </div>

          {/* Status */}
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A847A] block">
              Status
            </span>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C853]" />
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#EDE8DF]">
                Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
