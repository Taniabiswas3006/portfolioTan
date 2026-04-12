"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface PillNavProps {
  logo?: string | React.ReactNode;
  logoAlt?: string;
  items: { label: string; href: string }[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  theme?: "light" | "dark";
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power2.easeOut",
  baseColor = "#9ca3af",
  pillColor = "#FF85A1",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#ffffff",
  theme = "dark",
  initialLoadAnimation = true,
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(activeHref || null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-all duration-500 rounded-full border border-white/5 bg-[#0B0A10]/90 backdrop-blur-xl py-3 px-6 md:px-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${className}`}>
      <div className="flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center mr-0 md:mr-6 shrink-0">
          {typeof logo === 'string' ? (
            <img src={logo} alt={logoAlt} className="h-8 auto" />
          ) : (
            logo
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2 relative w-full justify-center">
          {items.map((item) => {
            const isActive = hoveredNode === item.href || (activeNode === item.href && !hoveredNode);
            return (
              <li
                key={item.href}
                className="relative z-10"
                onMouseEnter={() => setHoveredNode(item.href)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveNode(item.href)}
                  className="relative px-5 py-2 text-xs lg:text-sm font-bold tracking-widest uppercase transition-colors duration-300 block"
                  style={{
                    color: isActive ? hoveredPillTextColor : baseColor,
                  }}
                >
                  <span className="relative z-20 pointer-events-none">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute inset-0 rounded-full z-0"
                      style={{ backgroundColor: pillColor }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-[#FF85A1] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-2 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-white/10"
          >
            {items.map((item) => {
              const isMobileActive = activeNode === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveNode(item.href);
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 mt-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 rounded-xl block text-center"
                  style={{
                    backgroundColor: isMobileActive ? pillColor : "transparent",
                    color: isMobileActive ? hoveredPillTextColor : baseColor,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default PillNav;
