"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Zap, Star, ArrowUpRight, ExternalLink, CalendarDays, Folder, Sparkles } from "lucide-react";
import { portfolioData } from "@/data";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Tab } from "@/components/ui/animated-tabs";
import { cn } from "@/lib/utils";

const hackathonIcons: Record<string, React.ReactNode> = {
  "01": <Trophy size={18} className="text-[#FF85A1]" />,
  "02": <Award size={18} className="text-[#FF85A1]" />,
  "03": <Star size={18} className="text-[#FF85A1]" />,
  "04": <Zap size={18} className="text-[#FF85A1]" />,
};

// Local hackathon images mapped to each respective event (.png)
const hackathonImages: Record<string, string> = {
  "01": "/hack4bengal.png",
  "02": "/statuscode.png",
  "03": "/hackodisha.png",
  "04": "/sih.png",
};

function HackathonTabContent({ hack }: { hack: (typeof portfolioData.hackathons)[0] }) {
  const imgSrc = hack.image || hackathonImages[hack.num];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 w-full h-full min-h-0">
      {/* Photo Frame — locked uniform height */}
      <div className="relative rounded-xl overflow-hidden h-64 md:h-full w-full min-h-0 bg-[#0E0D0B] flex items-center justify-center border border-white/10 p-3 sm:p-4 group">
        {/* Ambient atmospheric glow matching each poster's color palette */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-125 pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
        />

        {/* Foreground poster - fully contained, uncropped and crisp */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={hack.name}
          className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Year badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0A09]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#FF85A1] uppercase tracking-widest z-20 shadow-lg">
          <CalendarDays size={10} />
          {hack.year}
        </div>

        {/* Full Image view link on hover */}
        <a
          href={imgSrc}
          target="_blank"
          rel="noopener noreferrer"
          title="View full poster"
          className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0B0A09]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80 hover:text-white hover:border-[#FF85A1]/40"
        >
          <span>Full Image</span>
          <ArrowUpRight size={10} className="text-[#FF85A1]" />
        </a>
      </div>

      {/* Info Column — structured top, middle, bottom with uniform sizing */}
      <div className="flex flex-col justify-between h-full min-h-0 py-0.5 gap-3">
        {/* Top: Icon + Title + Role */}
        <div className="flex flex-col gap-1 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
              {hackathonIcons[hack.num]}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A847A]">
              Vol. {hack.num}
            </span>
          </div>
          <h3 className="font-serif text-2xl lg:text-[25px] text-[#EDE8DF] leading-tight">
            {hack.name}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#FF85A1]">
            {hack.role}
          </p>
        </div>

        {/* Middle: Description + Highlights + Tech Stack */}
        <div className="flex-1 min-h-0 flex flex-col justify-center gap-2.5 my-auto">
          {hack.description && (
            <p className="font-sans text-xs sm:text-[13px] text-[#EDE8DF]/75 leading-relaxed line-clamp-3">
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
        <div className="border-t border-[rgba(237,232,223,0.08)] pt-2.5 space-y-2 shrink-0">
          <p className="font-serif text-base text-[#EDE8DF]/90 italic leading-snug">
            &ldquo;{hack.achievement}&rdquo;
          </p>

          <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
            {hack.project && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#8A847A]">
                <Folder size={11} className="text-[#FF85A1]" />
                <span>Project: {hack.project}</span>
              </div>
            )}

            {hack.url && (
              <a
                href={hack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FF85A1]/30 text-[#FF85A1] text-[11px] font-mono uppercase tracking-widest hover:bg-[#FF85A1]/10 transition-all duration-300 group"
              >
                <ExternalLink size={11} />
                <span>Certificate</span>
                <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hackathons() {
  const [activeTab, setActiveTab] = useState<string>(
    portfolioData.hackathons[0]?.num || "01"
  );

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

        {/* Two-column layout: strictly uniform height locked across both columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:h-[580px]">

          {/* Left: Heading, quick-stat cards, podium summary */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#EDE8DF] tracking-tight leading-tight">
                Hackathon{" "}
                <span className="italic font-normal text-[#FF85A1]">Arena</span>
              </h2>
              <p className="font-sans text-sm text-[#8A847A] mt-3 leading-relaxed">
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
              className="grid grid-cols-2 gap-3 my-4 lg:my-0"
            >
              {[
                { label: "Hackathons", value: "4" },
                { label: "Podium Finishes", value: "4" },
                { label: "Years Active", value: "2024–25" },
                { label: "Roles", value: "Lead & Dev" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[rgba(237,232,223,0.07)] bg-[#141311] p-3.5 flex flex-col gap-0.5"
                >
                  <span className="font-serif text-2xl text-[#FF85A1]">{stat.value}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A847A]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Hackathon quick-list synchronized with activeTab */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1.5"
            >
              {portfolioData.hackathons.map((hack) => {
                const isActive = activeTab === hack.num;
                return (
                  <button
                    key={hack.num}
                    onClick={() => setActiveTab(hack.num)}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 rounded-lg border transition-all text-left",
                      isActive
                        ? "bg-[#FF85A1]/10 border-[#FF85A1]/30 text-[#EDE8DF]"
                        : "border-[rgba(237,232,223,0.05)] hover:border-white/10 hover:bg-white/[0.02] text-[#8A847A]"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "font-mono text-[10px] font-bold",
                          isActive ? "text-[#FF85A1]" : "text-[#8A847A]"
                        )}
                      >
                        {hack.num}
                      </span>
                      <span
                        className={cn(
                          "font-sans text-xs sm:text-sm",
                          isActive ? "text-[#EDE8DF] font-medium" : "text-[#EDE8DF]/70"
                        )}
                      >
                        {hack.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#8A847A]">{hack.year}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right: AnimatedTabs — strictly uniform height locked across all 4 hackathons */}
          <motion.div
            className="lg:col-span-8 flex flex-col h-full min-h-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="w-full h-full flex flex-col min-h-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
