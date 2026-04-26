"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Antigravity from "./Antigravity";
import TextType from "./TextType";
import PathAnimation from "./PathAnimation";

// Open to Work Badge
const OpenToWorkBadge: React.FC = () => {
  return (
    <div
      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/20 backdrop-blur-md"
      style={{
        background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(205,180,219,0.06))",
        boxShadow: "0 0 20px rgba(16,185,129,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        animation: "badgeFadeIn 1s ease-out 1.5s both",
      }}
    >
      {/* Animated pulse dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span
        className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase"
        style={{
          background: "linear-gradient(90deg, #ef7dc3ff, #cfb4dfff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Available for Opportunities
      </span>
    </div>
  );
};

import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <style>{`
        @keyframes customAppear {
          0% { opacity: 0; filter: blur(20px); transform: scale(0.9) translateX(-40px); }
          100% { opacity: 0.75; filter: blur(0px); transform: scale(1) translateX(0); }
        }
        @keyframes badgeFadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Antigravity Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={500}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.3}
          lerpSpeed={0.05}
          color="#FF85A1"
          autoAnimate
          particleVariance={1.5}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
          opacity={0.25}
        />
      </div>

      {/* ═══ MOBILE LAYOUT (< md) ═══ */}
      <div className="flex md:hidden flex-col items-center justify-center text-center relative z-10 pt-24 pb-8 px-4 min-h-screen">
        {/* Profile Card - Mobile */}
        <div className="relative flex-shrink-0 mb-4 transform scale-80 sm:scale-100">
          <ProfileCard
            name="A Learner"
            title="with Code and Coffee"
            handle="Taniabiswas3006"
            status="Open to Work"
            avatarUrl="/profile.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={true}
            behindGlowEnabled={false}
            behindGlowColor="rgba(255, 133, 161, 0.4)"
          />
        </div>

        {/* Name Text - Mobile (added gap) */}
        <div className="w-full max-w-[240px] sm:max-w-[420px] mt-2 sm:mt-6">
          <div className="w-full">
            <PathAnimation text="TANIA" />
          </div>
          <div className="w-full -mt-2 sm:-mt-3">
            <PathAnimation text="BISWAS" />
          </div>
        </div>

        {/* Open to Work Badge - Mobile */}
        <div className="mt-2">
          <OpenToWorkBadge />
        </div>

        {/* Typing Text - Mobile */}
        <div className="mt-4 font-medium text-[clamp(12px,4vw,16px)] tracking-wide text-center px-4" style={{ color: "#FF85A1", fontFamily: "var(--font-fira-code)" }}>
          <TextType
            texts={["CS UNDERGRAD | AI/ML Enthusiast | JISCE"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.8}
          />
        </div>
      </div>

      {/* ═══ MOBILE BOTTOM ELEMENTS (Tagline & Arrow) ═══ */}
      <div className="flex md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-20 pointer-events-auto flex-col items-center gap-2">
        <a
          href="#about"
          className="transition-colors duration-300 pointer-events-auto"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 hover:text-white transition-colors duration-300 animate-bounce" />
        </a>
      </div>

      {/* ═══ DESKTOP LAYOUT (>= md) ═══ */}
      <div className="hidden md:flex absolute inset-0 pt-36 items-center justify-center z-10 pointer-events-none overflow-hidden">
        <div className="flex flex-row items-center justify-center gap-8 lg:gap-14 xl:gap-20 w-full max-w-[1400px] mx-auto px-8 translate-x-12">

          {/* Left Side: Profile Card */}
          <div className="pointer-events-auto shrink-0">
            <ProfileCard
              name="A Learner"
              title="With Code and Coffee"
              handle="Taniabiswas3006"
              status="Open to Work"
              avatarUrl="/profile.png"
              showUserInfo={false}
              enableTilt={true}
              behindGlowEnabled={false}
              behindGlowColor="rgba(255, 133, 161, 0.4)"
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          {/* Right Side: Name Text */}
          <div className="flex flex-col items-center justify-center text-center pointer-events-auto flex-1 translate-x-16 translate-y-6 max-w-full">
            <div className="w-full max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
              <PathAnimation text="TANIA" />
            </div>
            <div className="w-full max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] -mt-6 lg:-mt-8">
              <PathAnimation text="BISWAS" />
            </div>

            {/* Open to Work Badge - Desktop */}
            <div className="mt-4">
              <OpenToWorkBadge />
            </div>

            <div className="mt-8 font-medium text-[clamp(18px,2vw,24px)] tracking-wide text-center px-4" style={{ color: "#FF85A1", fontFamily: "var(--font-fira-code)" }}>
              <TextType
                texts={["CS UNDERGRAD | AI/ML Enthusiast | JISCE"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.8}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Desktop */}

    </section>
  );
}
