"use client";

import React from "react";
import { portfolioData } from "@/data";

export default function TechMarquee() {
  const row1 = [...portfolioData.marqueeTechRow1, ...portfolioData.marqueeTechRow1, ...portfolioData.marqueeTechRow1];
  const row2 = [...portfolioData.marqueeTechRow2, ...portfolioData.marqueeTechRow2, ...portfolioData.marqueeTechRow2];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden hairline-b select-none">
      {/* Top Section Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial">
          <span className="text-[#FF85A1] font-bold">(07)</span>
          <span>Ecosystem & Frameworks</span>
          <span className="text-white/20">—</span>
          <span>Continuous Infinite Stream</span>
        </div>
      </div>

      {/* Row 1: Leftward Scroll with Giant Outline Text */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6">
        <div className="flex w-max marquee-track-left hover:pause-marquee">
          {row1.map((item, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-outline hover:text-[#FF85A1] hover:text-opacity-100 transition-colors duration-300 uppercase cursor-default">
                {item}
              </span>
              <span className="text-[#FF85A1] text-xl sm:text-2xl ml-8 sm:ml-12 opacity-40">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Scroll with Giant Outline Text */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max marquee-track-right hover:pause-marquee">
          {row2.map((item, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-outline hover:text-[#EDE8DF] hover:text-opacity-100 transition-colors duration-300 uppercase cursor-default">
                {item}
              </span>
              <span className="text-[#FF85A1] text-xl sm:text-2xl ml-8 sm:ml-12 opacity-40">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Seamless Infinite Looping & Hover Pause */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee-track-left {
          animation: scrollLeft 38s linear infinite;
        }
        .marquee-track-right {
          animation: scrollRight 42s linear infinite;
        }
        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
