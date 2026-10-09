"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Zap, Star, ArrowUpRight, ExternalLink, CalendarDays, Folder, Sparkles } from "lucide-react";
import { portfolioData } from "@/data";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Tab } from "@/components/ui/animated-tabs";
import { cn } from "@/lib/utils";

const hackathonIcons: Record<string, React.ReactNode> = {
  "01": <Trophy size={20} className="text-[#FF85A1]" />,
  "02": <Award size={20} className="text-[#FF85A1]" />,
  "03": <Star size={20} className="text-[#FF85A1]" />,
  "04": <Zap size={20} className="text-[#FF85A1]" />,
};

// Local hackathon images mapped to each respective event
const hackathonImages: Record<string, string> = {
  "01": "/hack4bengal.jpg",
  "02": "/statuscode2.jpg",
  "03": "/hackodisha3_cover.jpg",
  "04": "/sih.png",
};

function HackathonTabContent({ hack }: { hack: (typeof portfolioData.hackathons)[0] }) {
  const imgSrc = hack.image || hackathonImages[hack.num];
  const isLogo = hack.num === "04";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-full min-h-[260px] bg-[#12110F] flex items-center justify-center border border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={hack.name}
          className={cn(
            "w-full h-full transition-transform duration-500",
            isLogo
              ? "object-contain p-8 max-h-[280px] drop-shadow-[0_0_30px_rgba(255,133,161,0.18)]"
              : "object-cover object-center"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/80 via-transparent to-transparent pointer-events-none" />
        {/* Year badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0A09]/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#FF85A1] uppercase tracking-widest z-10">
          <CalendarDays size={10} />
          {hack.year}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between py-1 gap-4">
        {/* Top: Icon + Title */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
              {hackathonIcons[hack.num]}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A847A]">
              Vol. {hack.num}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE8DF] leading-tight">
            {hack.name}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#8A847A]">
            {hack.role}
          </p>
        </div>

        {/* Middle: Description + Highlights + Tech Stack (fills the blank space) */}
        <div className="space-y-3.5 my-auto">
          {hack.description && (
            <p className="font-sans text-xs sm:text-[13px] text-[#EDE8DF]/75 leading-relaxed">
              {hack.description}
            </p>
          )}

          {hack.highlights && hack.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {hack.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#EDE8DF]/80"
                >
                  <Sparkles size={9} className="text-[#FF85A1]" />
                  {item}
                </span>
              ))}
            </div>
          )}

          {hack.tech && hack.tech.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-[10px] font-mono text-[#8A847A] uppercase tracking-wider">Stack:</span>
              {hack.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-[#FF85A1] bg-[#FF85A1]/10 border border-[#FF85A1]/20"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: Achievement + Project + CTA */}
        <div className="border-t border-[rgba(237,232,223,0.08)] pt-4 space-y-3">
          <p className="font-serif text-base sm:text-lg text-[#EDE8DF]/90 italic">
            &ldquo;{hack.achievement}&rdquo;
          </p>

          {hack.project && (
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#8A847A]">
              <Folder size={11} className="text-[#FF85A1]" />
              <span>Project: {hack.project}</span>
            </div>
          )}

          {hack.url && (
            <a
              href={hack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF85A1]/30 text-[#FF85A1] text-xs font-mono uppercase tracking-widest hover:bg-[#FF85A1]/10 transition-all duration-300 group"
            >
              <ExternalLink size={12} />
              <span>View Certificate</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hackathons() {
  const tabs: Tab[] = portfolioData.hackathons.map((hack) => ({
    id: hack.num,
    label: hack.name,
    content: <HackathonTabContent hack={hack} />,
  }));

  return (
    <section
      id="hackathons"
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(09)</span>
          <span>Competitive Hackathons</span>
          <span className="text-white/20">—</span>
          <span>High-Velocity Prototyping</span>
        </div>

        {/* Two-column layout: heading + stats left | tabs right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left: Heading, quick-stat cards, podium summary */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EDE8DF] tracking-tight leading-tight">
                Hackathon{" "}
                <span className="italic font-normal text-[#FF85A1]">Arena</span>
              </h2>
              <p className="font-sans text-sm text-[#8A847A] mt-4 leading-relaxed">
                Rapid execution, adversarial architectures, and prize-winning
                sprints under intense clock constraints.
              </p>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: "Hackathons", value: "4" },
                { label: "Podium Finishes", value: "4" },
                { label: "Years Active", value: "2024–25" },
                { label: "Roles", value: "Lead & Dev" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[rgba(237,232,223,0.07)] bg-[#141311] p-4 flex flex-col gap-1"
                >
                  <span className="font-serif text-2xl text-[#FF85A1]">{stat.value}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A847A]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Hackathon quick-list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              {portfolioData.hackathons.map((hack) => (
                <div
                  key={hack.num}
                  className="flex items-center justify-between py-3 border-b border-[rgba(237,232,223,0.05)] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#FF85A1] font-bold">
                      {hack.num}
                    </span>
                    <span className="font-sans text-sm text-[#EDE8DF]/70">{hack.name}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8A847A]">{hack.year}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: AnimatedTabs — stretches to match left column */}
          <motion.div
            className="lg:col-span-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedTabs tabs={tabs} defaultTab={tabs[0]?.id} className="w-full flex-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
