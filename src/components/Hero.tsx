"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles, Github, Linkedin, Mail, RefreshCw } from "lucide-react";
import { portfolioData } from "@/data";
import MorphGallery, { type MorphItem } from "@/components/ui/morph-gallery";

const HERO_PHOTOS: MorphItem[] = [
  { src: "/photo.jpg", alt: "Tania Biswas" },
  { src: "/6167799154659233180.jpg", alt: "Tania Biswas — Portrait 2" },
  { src: "/1791560166256.jpg", alt: "Tania Biswas — Portrait 3" },
  { src: "/1791560166283.jpg", alt: "Tania Biswas — Portrait 4" },
  { src: "/1791560166310.jpg", alt: "Tania Biswas — Portrait 5" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Only keep the subtle text parallax; photo is fully static (no tilt/translate)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden border-b border-[rgba(237,232,223,0.06)]"
    >
      {/* Corner crosshairs */}
      <div className="crosshair-corner crosshair-top-left absolute top-6 left-6 hidden sm:block" />
      <div className="crosshair-corner crosshair-top-right absolute top-6 right-6 hidden sm:block" />

      {/* Top Meta Header: Section Number & Status */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-8 sm:mb-12"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#FF85A1] font-bold">(01)</span>
          <span>Index & Hero Portfolio</span>
          <span className="hidden md:inline text-white/20">—</span>
          <span className="hidden md:inline">Vol. MMXXVI</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(237,232,223,0.08)] bg-white/[0.02]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C853]" />
          </span>
          <span className="text-[11px] text-[#EDE8DF]">Active — West Bengal, IN</span>
        </div>
      </motion.div>

      {/* Main Hero Grid: Asymmetric 12-Column Editorial */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left 8 Columns: Massive Stacked Typographic Reveal */}
        <motion.div style={{ y: textY }} className="lg:col-span-8 flex flex-col z-10">
          {/* TANIA Line with Mask Reveal */}
          <div className="overflow-hidden leading-none">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-serif text-[clamp(4.2rem,13.5vw,13.8rem)] font-light tracking-tight leading-[0.88] text-[#EDE8DF]"
            >
              TANIA
            </motion.h1>
          </div>

          {/* BISWAS Line with Roman + Italic Mix & Mask Reveal */}
          <div className="overflow-hidden leading-none mt-1 sm:mt-2">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="font-serif text-[clamp(4.2rem,13.5vw,13.8rem)] font-light tracking-tight leading-[0.88] text-[#EDE8DF]"
            >
              <span className="italic font-normal text-[#FF85A1] mr-3">Biswas</span>
              <span className="text-outline hidden sm:inline select-none opacity-40">✦</span>
            </motion.h1>
          </div>

          {/* Subtext and Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 max-w-2xl"
          >
            <p className="font-sans text-base sm:text-xl text-[#EDE8DF] font-normal leading-relaxed">
              <strong className="font-semibold text-white">AI Engineer & Full Stack Developer</strong>{" "}
              — <span className="text-[#8A847A] italic">A Learner with Code and Coffee.</span>
            </p>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 leading-relaxed">
              Designing at the intersection of machine perception and editorial craftsmanship. 
              Engineering autonomous systems, edge models, and fluid digital experiences.
            </p>

            {/* CTAs with Magnetic Feel */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FF85A1] text-[#0B0A09] font-mono text-xs uppercase tracking-widest font-bold overflow-hidden shadow-[0_0_30px_rgba(255,133,161,0.25)] transition-all hover:bg-[#FF9DB5]"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(237,232,223,0.15)] hover:border-[#FF85A1] text-xs font-mono uppercase tracking-widest text-[#EDE8DF] hover:text-[#FF85A1] transition-all bg-white/[0.02] backdrop-blur-md"
              >
                <span>Initiate Contact</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF85A1]" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 4 Columns: Flip Card */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Circular Rotating Badge */}
          <motion.div
            className="absolute -top-10 -left-6 sm:-top-8 sm:-left-8 z-30 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF85A1]">
              <path
                id="textPathHero"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[8.5px] font-mono uppercase tracking-[0.24em] fill-[#EDE8DF]">
                <textPath href="#textPathHero">
                  AVAILABLE FOR OPPORTUNITIES • AVAILABLE FOR OPPORTUNITIES •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#FF85A1]/10 border border-[#FF85A1]/40 flex items-center justify-center">
              <Sparkles size={14} className="text-[#FF85A1]" />
            </div>
          </motion.div>

          {/* 3-D Flip Card — click to flip, no scroll tilt */}
          <div
            className="relative w-72 sm:w-80 md:w-96 cursor-pointer"
            style={{ aspectRatio: "3/4", perspective: "1200px" }}
            onClick={() => setFlipped((f) => !f)}
            title={flipped ? "Click to see photo" : "Click to learn more"}
          >
            {/* Flip hint badge */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF85A1]/15 border border-[#FF85A1]/30 backdrop-blur-md text-[10px] font-mono text-[#FF85A1] uppercase tracking-widest select-none"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <RefreshCw size={10} />
              <span>{flipped ? "See photo" : "Flip card"}</span>
            </motion.div>

            {/* Inner flipper */}
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* ── FRONT: Photo ─────────────────────────────────────── */}
              <div
                className="absolute inset-0 rounded-t-[140px] rounded-b-[40px] overflow-hidden border border-[rgba(237,232,223,0.12)] p-2 bg-[#141311]/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative w-full h-full rounded-t-[132px] rounded-b-[32px] overflow-hidden bg-gradient-to-b from-[#1C1B18] to-[#0B0A09]">
                  <MorphGallery
                    items={HERO_PHOTOS}
                    height="100%"
                    autoplay={3800}
                    duration={1400}
                    arrows={true}
                    thumbnails={false}
                    loop={true}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/70 via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-[#8A847A] uppercase tracking-widest px-2 py-1 bg-[#0B0A09]/75 backdrop-blur-md rounded-full border border-white/5 pointer-events-none z-20">
                    <span>PORTRAIT • 2026</span>
                    <span className="text-[#FF85A1]">TB.AI</span>
                  </div>
                </div>
              </div>

              {/* ── BACK: Cartoon + minimal info ────────────────────── */}
              <div
                className="absolute inset-0 rounded-t-[140px] rounded-b-[40px] border border-[rgba(255,133,161,0.18)] bg-gradient-to-b from-[#1A1318] via-[#120E14] to-[#0B0A09] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                {/* Cartoon image — fills top ~65% */}
                <div className="relative flex-1 min-h-0">
                  <Image
                    src="/cartoonimg.png"
                    alt="Tania Biswas — Cartoon"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Bottom strip: role + social icons */}
                <div className="flex flex-col items-center gap-3 px-6 pb-6 pt-3">
                  <p className="text-[11px] font-mono text-[#8A847A] uppercase tracking-widest text-center">
                    {portfolioData.personal.role}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full border border-[rgba(237,232,223,0.12)] flex items-center justify-center text-[#8A847A] hover:text-[#FF85A1] hover:border-[#FF85A1]/40 transition-all bg-white/[0.02]"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full border border-[rgba(237,232,223,0.12)] flex items-center justify-center text-[#8A847A] hover:text-[#FF85A1] hover:border-[#FF85A1]/40 transition-all bg-white/[0.02]"
                    >
                      <Linkedin size={15} />
                    </a>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full border border-[rgba(237,232,223,0.12)] flex items-center justify-center text-[#8A847A] hover:text-[#FF85A1] hover:border-[#FF85A1]/40 transition-all bg-white/[0.02]"
                    >
                      <Mail size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Hairline & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial hairline-t"
      >
        <div className="flex items-center gap-6">
          <span>PAROT.DEV</span>
          <span className="text-[#FF85A1]">✦</span>
          <span>JISCE CSE &apos;27</span>
          <span className="text-[#FF85A1]">✦</span>
          <span>TINYML AUTHOR</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-3 text-[#8A847A] hover:text-[#EDE8DF] transition-colors"
        >
          <span>Scroll to Read Editorial</span>
          <span className="w-6 h-6 rounded-full border border-[rgba(237,232,223,0.15)] group-hover:border-[#FF85A1] flex items-center justify-center text-[#FF85A1] group-hover:translate-y-1 transition-all">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
