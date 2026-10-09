"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({
  tabs = [],
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full h-full flex flex-col gap-y-1", className)}>
      {/* Tab strip */}
      <div className="flex gap-2 flex-wrap bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-mono font-medium rounded-lg text-white outline-none transition-colors uppercase tracking-widest"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#FF85A1]/20 border border-[#FF85A1]/40 shadow-[0_0_20px_rgba(255,133,161,0.15)] backdrop-blur-sm !rounded-lg"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors duration-200",
                activeTab === tab.id ? "text-[#FF85A1]" : "text-[#8A847A] hover:text-[#EDE8DF]"
              )}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content panel — flex-1 fills remaining height */}
      <div className="flex-1 p-6 bg-[#141311]/80 backdrop-blur-sm rounded-xl border border-[rgba(237,232,223,0.08)] min-h-[320px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                className="h-full"
                initial={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
export type { Tab, AnimatedTabsProps };
