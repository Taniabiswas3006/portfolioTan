"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface NavItem {
  label: string;
  id: string;
}

/**
 * 3D Adaptive Navigation Pill — Pink Edition (Theme Aware)
 * Scroll-aware, hover-expandable floating bottom nav
 */
export const PillBase: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeSection, setActiveSection] = useState("hero");
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: "Home",           id: "hero"           },
    { label: "About",          id: "about"          },
    { label: "Experience",     id: "experience"     },
    { label: "Skills",         id: "skills"         },
    { label: "Projects",       id: "projects"       },
    { label: "Research",       id: "research"       },
    { label: "Hackathons",     id: "hackathons"     },
    { label: "Certifications", id: "certifications" },
    { label: "Beyond",         id: "beyond"         },
    { label: "Contact",        id: "contact"        },
  ];

  const pillWidth = useSpring(160, { stiffness: 220, damping: 25, mass: 1 });

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map((i) => i.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hover expand / collapse
  useEffect(() => {
    if (hovering) {
      setExpanded(true);
      pillWidth.set(800);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false);
        pillWidth.set(160);
      }, 550);
    }
    return () => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); };
  }, [hovering, pillWidth]);

  const handleClick = (id: string) => {
    setIsTransitioning(true);
    setActiveSection(id);
    setHovering(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const activeItem = navItems.find((i) => i.id === activeSection);

  // ── colour tokens ──────────────────────────────────────────────────────────
  const bgIdle = isLight
    ? "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,240,245,0.94) 100%)"
    : "linear-gradient(145deg, rgba(255,133,161,0.18) 0%, rgba(180,60,100,0.22) 40%, rgba(120,20,60,0.28) 80%, rgba(90,10,45,0.32) 100%)";
  const bgHover = isLight
    ? "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(255,232,240,0.96) 100%)"
    : "linear-gradient(145deg, rgba(255,133,161,0.30) 0%, rgba(200,80,120,0.35) 40%, rgba(140,30,80,0.40) 80%, rgba(100,15,55,0.44) 100%)";
  const borderIdle = isLight
    ? "0 0 0 1px rgba(216,58,101,0.22)"
    : "0 0 0 1px rgba(255,133,161,0.35)";
  const borderHover = isLight
    ? "0 0 0 1.5px rgba(216,58,101,0.48)"
    : "0 0 0 1.5px rgba(255,133,161,0.65)";
  const glowIdle = isLight
    ? "0 8px 30px rgba(24,23,21,0.08), 0 2px 10px rgba(216,58,101,0.12)"
    : "0 4px 20px rgba(255,133,161,0.18), 0 10px 40px rgba(180,50,100,0.12)";
  const glowHover = isLight
    ? "0 12px 36px rgba(24,23,21,0.12), 0 4px 18px rgba(216,58,101,0.22)"
    : "0 4px 24px rgba(255,133,161,0.40), 0 12px 48px rgba(220,80,130,0.28), 0 0 60px rgba(255,133,161,0.12)";

  return (
    <motion.nav
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative rounded-full"
      style={{
        width: pillWidth,
        maxWidth: "calc(100vw - 24px)",
        height: "52px",
        background: hovering ? bgHover : bgIdle,
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        boxShadow: `${hovering || isTransitioning ? borderHover : borderIdle}, ${hovering ? glowHover : glowIdle}`,
        overflow: "hidden",
        transition: "background 0.4s ease, box-shadow 0.35s ease",
      }}
    >
      {/* ── Glass layers ────────────────────────────────────────────────── */}

      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 rounded-t-full pointer-events-none" style={{
        height: "1.5px",
        background: isLight
          ? "linear-gradient(90deg, transparent 0%, rgba(216,58,101,0.40) 20%, rgba(216,58,101,0.60) 50%, rgba(216,58,101,0.40) 80%, transparent 100%)"
          : "linear-gradient(90deg, transparent 0%, rgba(255,133,161,0.70) 20%, rgba(255,180,200,0.90) 50%, rgba(255,133,161,0.70) 80%, transparent 100%)",
      }} />

      {/* Top hemisphere pink shimmer */}
      <div className="absolute inset-x-0 top-0 rounded-full pointer-events-none" style={{
        height: "55%",
        background: isLight
          ? "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)"
          : "linear-gradient(180deg, rgba(255,133,161,0.22) 0%, rgba(255,133,161,0.08) 40%, rgba(255,133,161,0) 100%)",
      }} />

      {/* Central radial glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: isLight
          ? "radial-gradient(ellipse at 50% 30%, rgba(216,58,101,0.08) 0%, transparent 80%)"
          : "radial-gradient(ellipse at 50% 30%, rgba(255,133,161,0.18) 0%, rgba(255,133,161,0.06) 50%, transparent 80%)",
        opacity: hovering ? 1 : 0.6,
        transition: "opacity 0.4s ease",
      }} />

      {/* Gloss reflection */}
      <div className="absolute pointer-events-none" style={{
        left: "18%", top: "14%",
        width: expanded ? "150px" : "55px",
        height: "11px",
        background: "radial-gradient(ellipse at center, rgba(255,200,215,0.55) 0%, rgba(255,150,180,0.20) 50%, transparent 100%)",
        filter: "blur(3px)",
        transform: "rotate(-10deg)",
        transition: "width 0.4s ease",
      }} />

      {/* Bottom shadow trough */}
      <div className="absolute inset-x-0 bottom-0 rounded-b-full pointer-events-none" style={{
        height: "45%",
        background: isLight
          ? "linear-gradient(0deg, rgba(24,23,21,0.04) 0%, transparent 100%)"
          : "linear-gradient(0deg, rgba(80,10,40,0.45) 0%, rgba(80,10,40,0.10) 50%, transparent 100%)",
      }} />

      {/* Inner rim */}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{
        boxShadow: isLight
          ? "inset 0 0 0 0.5px rgba(216,58,101,0.15)"
          : "inset 0 0 0 0.5px rgba(255,133,161,0.20), inset 0 2px 8px rgba(255,133,161,0.06)",
      }} />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div ref={containerRef} className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6" style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
      }}>

        {/* Collapsed — active section label */}
        {!expanded && (
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.span
                key={activeItem.id}
                initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  fontSize: "13.5px",
                  fontWeight: 650,
                  color: isLight ? "#D83A65" : "#FFD6E4",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                  textShadow: isLight
                    ? "0 0 8px rgba(216,58,101,0.25)"
                    : "0 0 14px rgba(255,133,161,0.70), 0 1px 2px rgba(80,10,40,0.60)",
                }}
              >
                {activeItem.label}
              </motion.span>
            )}
          </AnimatePresence>
        )}

        {/* Expanded — all sections */}
        {expanded && (
          <div className="flex items-center justify-evenly w-full overflow-x-auto no-scrollbar">
            {navItems.map((item, index) => {
              const isActive = item.id === activeSection;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2, ease: "easeOut" }}
                  onClick={() => handleClick(item.id)}
                  className="relative cursor-pointer shrink-0"
                  style={{
                    fontSize: isActive ? "12.5px" : "12px",
                    fontWeight: isActive ? 680 : 430,
                    color: isActive
                      ? (isLight ? "#D83A65" : "#FFD6E4")
                      : (isLight ? "rgba(24,23,21,0.65)" : "rgba(255,133,161,0.55)"),
                    background: "transparent",
                    border: "none",
                    padding: "6px 8px",
                    outline: "none",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                    transform: isActive ? "translateY(-1.5px)" : "translateY(0)",
                    textShadow: isActive
                      ? (isLight ? "0 0 8px rgba(216,58,101,0.30)" : "0 0 18px rgba(255,133,161,0.80), 0 1px 2px rgba(80,10,40,0.50)")
                      : "none",
                    transition: "color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isLight ? "#D83A65" : "rgba(255,200,215,0.90)";
                      e.currentTarget.style.transform = "translateY(-0.5px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isLight ? "rgba(24,23,21,0.65)" : "rgba(255,133,161,0.55)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="pillActiveDot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{
                        background: "#FF85A1",
                        boxShadow: "0 0 8px 2px rgba(255,133,161,0.90)",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default PillBase;
