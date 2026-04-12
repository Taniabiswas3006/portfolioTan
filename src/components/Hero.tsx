"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Antigravity from "./Antigravity";
import TextType from "./TextType";
import PathAnimation from "./PathAnimation";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <style>{`
        @keyframes customAppear {
          0% { opacity: 0; filter: blur(20px); transform: scale(0.9) translateX(-40px); }
          100% { opacity: 0.75; filter: blur(0px); transform: scale(1) translateX(0); }
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

      {/* Main Content Area - Split Layout */}
      <div className="absolute top-[55%] md:top-[52%] -translate-y-1/2 w-full max-w-[1920px] mx-auto left-4 right-0 px-12 md:pl-0 md:pr-16 lg:pr-32 xl:pr-48 flex flex-col md:flex-row items-center md:items-center md:justify-start md:gap-8 z-10 pointer-events-none">

        {/* Left Side: Profile Picture */}
        <div className="relative flex mb-22 md:mb-100 md:-mt-16 lg:-mt-24 xl:-mt-32 pointer-events-auto shrink-0">
          <div
            className="relative w-[340px] h-[500px] sm:w-[500px] sm:h-[700px] md:w-[550px] md:h-[750px] lg:w-[650px] lg:h-[850px] xl:w-[800px] xl:h-[1050px] mix-blend-lighten"
            style={{
              maskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 70%)",
              animation: "customAppear 1.5s ease-out forwards 0.2s",
              opacity: 0,
            }}
          >
            <Image
              src="/profile.png"
              alt="Profile Image"
              fill
              className="object-cover object-top scale-[1.05]"
              priority
            />
          </div>
        </div>

        {/* Right Side: Name Text */}
        <div className="relative flex flex-col items-center justify-center text-center mt-4 md:mt-16 xl:mt-24 md:ml-auto pointer-events-auto w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] md:translate-x-8 lg:translate-x-16 xl:translate-x-24">
          <div className="w-full">
            <PathAnimation text="TANIA" />
          </div>
          <div className="w-full -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 lg:mb-4">
            <PathAnimation text="BISWAS" />
          </div>
          <div className="mt-4 md:mt-6 lg:mt-8 font-medium text-[14px] sm:text-[18px] md:text-[22px] tracking-wide text-center" style={{ color: "#FF85A1", fontFamily: "var(--font-fira-code)" }}>
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

      {/* Tagline - Proper Distance Below Hero */}
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 xl:bottom-5 left-1/2 -translate-x-1/2 w-full px-6 z-20 pointer-events-auto">
        <div className="flex justify-center">
          <BlurText
            text="Designing human experiences in code."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-gray-500 hover:text-white"
            style={{ fontFamily: "var(--font-antic)" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 transition-colors duration-300 z-20 pointer-events-auto"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-gray-500 hover:text-white transition-colors duration-300 animate-bounce" />
      </a>
    </section>
  );
}
