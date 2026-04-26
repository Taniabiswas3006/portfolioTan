"use client";

import React from "react";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Git", color: "#F05032" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Pandas", color: "#E70488" },
  { name: "NumPy", color: "#4DABCF" },
  { name: "NLP", color: "#B085FF" },
];

export default function TechStack() {
  // We duplicate the array enough times to ensure it covers the screen width,
  // then we animate it by exactly 50% so it loops seamlessly.
  const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <section id="tech-stack" className="py-8 md:py-16 relative overflow-hidden bg-transparent my-8">
      <div className="container mx-auto px-4 sm:px-6 mb-12 md:mb-20">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">Tech-Stack</h2>
      </div>
      {/* True mask-based blending for a seamless look */}
      <div 
        className="flex w-max animate-marquee hover:pause-animation"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        {marqueeItems.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center mx-4 md:mx-6 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/5 border border-[#FF85A1]/20 backdrop-blur-md transition-all duration-300 hover:bg-[#FF85A1]/10 hover:border-[#FF85A1]/40 hover:scale-105 cursor-default shadow-[0_0_15px_rgba(255,133,161,0.1)] hover:shadow-[0_0_25px_rgba(255,133,161,0.3)]"
          >
            <span 
              className="text-sm md:text-lg font-bold tracking-widest uppercase drop-shadow-md" 
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Global styles for the animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            /* Translate by exactly 50% of the total track width to create a seamless loop since the array is duplicated 4 times (meaning half is exactly 2 arrays) */
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
