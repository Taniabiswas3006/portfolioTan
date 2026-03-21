"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Background Large Name — centered behind the image */}
      <div className="hero-bg-name">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-[10vw] font-black font-poppins text-white whitespace-nowrap leading-none tracking-tighter"
        >
          Tania Biswas
        </motion.h1>
      </div>

      {/* Main 3-column hero grid */}
      <div className="hero-grid">

        {/* LEFT — Role & Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="hero-left"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mb-4">Who am I</p>
          <h2 className="text-3xl md:text-4xl font-black font-poppins leading-tight text-white mb-4">
            CS Undergrad<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-lavenderGlow">& ML Enthusiast</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
            Passionate about building intelligent systems and solving real-world problems through code.
          </p>

          {/* Location */}
          <div className="flex items-center gap-3 mt-4 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            <span>India</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
          </div>
        </motion.div>

        {/* CENTER — Profile Photo */}
        <div className="hero-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-image-container"
          >
            {/* Glow aura behind image */}
            <div className="hero-glow" />

            <Image
              src="/profile.png"
              alt="Tania Biswas"
              width={500}
              height={660}
              className="hero-image"
              priority
            />
          </motion.div>

          {/* Status Badge — under the photo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mt-10"
          >
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_#FF85A1]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Open to Opportunities</span>
          </motion.div>
        </div>

        {/* RIGHT — Intro & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="hero-right"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mb-4">What I do</p>
          <h2 className="text-3xl md:text-4xl font-black font-poppins leading-tight text-white mb-4">
            Pixel-Perfect<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-pinkGlow">Interfaces.</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mb-8">
            I turn ideas into stunning interfaces and train models that learn from data.
          </p>

          {/* CTA Button */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary via-lavenderGlow to-secondary text-spaceBlack px-5 py-2.5 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(205,180,219,0.3)]"
          >
            <span className="relative z-10 text-xs">View Projects</span>
            <div className="relative z-10 w-7 h-7 rounded-full bg-spaceBlack text-white flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Socials */}
          <div className="mt-6 flex gap-6">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Taniabiswas3006" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/tania-biswas-30469a29a/" },
              { icon: <Twitter size={20} />, href: "https://x.com/Taniabi84087273" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="text-gray-600 hover:text-primary transition-all hover:scale-125"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
