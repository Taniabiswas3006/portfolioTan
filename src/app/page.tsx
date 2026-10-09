"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import TechMarquee from "@/components/TechMarquee";
import Research from "@/components/Research";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Editorial Preloader & Cursor Systems */}
      <Preloader />
      <CustomCursor />
      <ScrollProgress />

      {/* Main Single Page Application Content */}
      <div className="relative min-h-screen flex flex-col bg-[#0B0A09] text-[#EDE8DF] selection:bg-[#FF85A1] selection:text-[#0B0A09]">
        {/* Navigation */}
        <Navbar />

        <main className="flex-1">
          {/* (01) Hero Section */}
          <Hero />

          {/* (02) About Editorial */}
          <About />

          {/* (03) Experience & Education Chronology */}
          <Experience />

          {/* (04) Skills Bento Grid - Technical Arsenal */}
          <Skills />

          {/* (05) Projects - Selected Works */}
          <Projects />

          {/* (06) Open Source Contributions Graph */}
          <OpenSource />

          {/* (07) Tech Stack Infinite Marquee */}
          <TechMarquee />

          {/* (08) Knowledge Archive - Published Book Chapter */}
          <Research />

          {/* (09) Competitive Hackathons Arena */}
          <Hackathons />

          {/* (10) Verified Certifications Ledger */}
          <Certifications />

          {/* (11) Beyond The Code - Polaroid Collage */}
          <Beyond />
        </main>

        {/* (12) Contact & Editorial Colophon */}
        <Contact />
      </div>
    </SmoothScroll>
  );
}
