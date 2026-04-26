"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StaggeredMenu from "./StaggeredMenu";

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
  baseColor = "#9ca3af",
  pillColor = "#FF85A1",
  hoveredPillTextColor = "#ffffff",
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(activeHref || null);

  const staggeredItems = items.map(item => ({ label: item.label, link: item.href, ariaLabel: item.label }));

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-all duration-500 rounded-full border border-white/5 bg-[#0B0A10]/90 backdrop-blur-xl py-3 px-6 md:px-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${className}`}>
      <div className="flex items-center justify-between w-full">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center mr-0 md:mr-6 shrink-0">
          {typeof logo === 'string' ? (
            <div className="relative h-8 w-12">
              <Image 
                src={logo} 
                alt={logoAlt} 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
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

        {/* Mobile Toggle / StaggeredMenu */}
        <div className="md:hidden flex items-center ml-4">
          <StaggeredMenu
            isFixed={true}
            position="right"
            items={staggeredItems}
            displaySocials={true}
            socialItems={[
              { label: 'GitHub', link: 'https://github.com/Taniabiswas3006' },
              { label: 'LinkedIn', link: 'https://linkedin.com/in/tania-biswas-30469a29a' }
            ]}
            displayItemNumbering={false}
            menuButtonColor="#ffffff"
            openMenuButtonColor={pillColor}
            changeMenuColorOnOpen={true}
            colors={['#1a1a2e', '#16213e', pillColor]}
            accentColor={pillColor}
            logoUrl=""
          />
        </div>
      </div>
    </nav>
  );
};

export default PillNav;
