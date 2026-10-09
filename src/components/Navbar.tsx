"use client";

import React from "react";
import { motion } from "framer-motion";
import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";

/**
 * Navbar — only the floating bottom pill nav.
 * The old top nav has been removed; the pill handles all navigation.
 */
export default function Navbar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-[800] flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto"
      >
        <PillBase />
      </motion.div>
    </div>
  );
}
