"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Clock } from "lucide-react";
import { portfolioData } from "@/data";

export default function Contact() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setLocalTime(formatter.format(now));
      } catch {
        setLocalTime("14:32");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="relative pt-24 sm:pt-36 pb-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Corner crosshairs */}
      <div className="crosshair-corner crosshair-top-left absolute top-8 left-8 hidden sm:block" />
      <div className="crosshair-corner crosshair-top-right absolute top-8 right-8 hidden sm:block" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF85A1]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(12)</span>
          <span>Communication & Link</span>
          <span className="text-white/20">—</span>
          <span>Let&apos;s Initiate Dialogue</span>
        </div>

        {/* Giant Footer Headline */}
        <div className="mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-light text-[#EDE8DF] leading-[1.05] tracking-tight max-w-5xl"
          >
            Let&apos;s build something{" "}
            <span className="italic font-normal text-[#FF85A1] block sm:inline">
              beautiful.
            </span>
          </motion.h2>

          <p className="font-sans text-base sm:text-xl text-[#8A847A] mt-6 max-w-2xl leading-relaxed">
            Available for select AI engineering opportunities, foundational research initiatives, and ambitious full-stack collaborations.
          </p>
        </div>

        {/* Huge Underlined Communication Links */}
        <div className="space-y-6 sm:space-y-8 pb-16 sm:pb-24 border-b border-[rgba(237,232,223,0.08)]">
          {/* Email Link */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A847A] block mb-2">
              Direct Mail
            </span>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group inline-flex items-baseline gap-4 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EDE8DF] hover:text-[#FF85A1] transition-colors border-b border-[rgba(237,232,223,0.2)] hover:border-[#FF85A1] pb-2 leading-none"
            >
              <span>{portfolioData.personal.email}</span>
              <ArrowUpRight
                size={28}
                className="text-[#8A847A] group-hover:text-[#FF85A1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all inline"
              />
            </a>
          </div>

          {/* Phone Link */}
          <div className="pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A847A] block mb-2">
              Voice / WhatsApp
            </span>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
              className="group inline-flex items-baseline gap-4 font-serif text-2xl sm:text-3xl md:text-4xl text-[#EDE8DF] hover:text-[#FF85A1] transition-colors border-b border-[rgba(237,232,223,0.2)] hover:border-[#FF85A1] pb-1 leading-none"
            >
              <span>{portfolioData.personal.phone}</span>
              <ArrowUpRight
                size={22}
                className="text-[#8A847A] group-hover:text-[#FF85A1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all inline"
              />
            </a>
          </div>
        </div>

        {/* Social Platforms & Live Kolkata Clock Row */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[rgba(237,232,223,0.08)]">
          {/* Social Platforms */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest">
              Digital Coordinates:
            </span>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#EDE8DF] hover:text-[#FF85A1] transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#EDE8DF] hover:text-[#FF85A1] transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Live Local Time Clock */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[rgba(237,232,223,0.12)] bg-white/[0.02]">
            <Clock size={14} className="text-[#FF85A1]" />
            <span className="font-mono text-xs text-[#EDE8DF] tracking-wider">
              Kolkata, IN — <span className="text-[#FF85A1] font-bold">{localTime || "14:32:00"}</span> (IST)
            </span>
          </div>
        </div>

        {/* Bottom Colophon / Footer Signature */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#8A847A]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#EDE8DF] font-bold">TB.</span>
            <span>—</span>
            <span>Digital Intelligence Artisan © 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Next.js App Router</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Lenis</span>
            <span>•</span>
            <span className="text-[#FF85A1]">Warm Dark Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
