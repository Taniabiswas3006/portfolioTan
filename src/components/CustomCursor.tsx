"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for the outer ring & radial ambient glow
  const springX = useSpring(mouseX, { stiffness: 450, damping: 38 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 38 });

  const glowSpringX = useSpring(mouseX, { stiffness: 180, damping: 35 });
  const glowSpringY = useSpring(mouseY, { stiffness: 180, damping: 35 });

  useEffect(() => {
    // Only mount on desktop pointers
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='view']");
      if (projectTarget) {
        setIsProjectHover(true);
        setCursorText("VIEW");
        setIsPointer(true);
        return;
      } else {
        setIsProjectHover(false);
        setCursorText("");
      }

      const clickable = target.closest("a, button, [role='button'], input, textarea, select, .interactive-hover");
      if (clickable) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Soft Pink Radial Ambient Glow following the cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-10 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-40 mix-blend-screen"
        style={{
          x: glowSpringX,
          y: glowSpringY,
          background: "radial-gradient(circle, rgba(255, 133, 161, 0.18) 0%, rgba(255, 133, 161, 0.05) 50%, transparent 75%)",
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[1001] w-2 h-2 rounded-full bg-[#FF85A1] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isProjectHover ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing Editorial Ring / Badge */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[1000] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono font-bold tracking-widest text-[10px] text-black"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isProjectHover ? 72 : isPointer ? 44 : 26,
          height: isProjectHover ? 72 : isPointer ? 44 : 26,
          backgroundColor: isProjectHover ? "#FF85A1" : isPointer ? "rgba(255, 133, 161, 0.18)" : "transparent",
          borderColor: isProjectHover ? "transparent" : "#FF85A1",
          borderWidth: isProjectHover ? 0 : 1,
          boxShadow: isProjectHover ? "0 0 25px rgba(255, 133, 161, 0.5)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      >
        {isProjectHover && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="text-[10px] font-mono tracking-widest text-[#0B0A09] font-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
