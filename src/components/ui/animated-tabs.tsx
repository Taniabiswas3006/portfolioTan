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
  activeTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
  panelClassName?: string;
}

const AnimatedTabs = ({
  tabs = [],
  defaultTab,
  activeTab: activeTabProp,
  onTabChange,
  className,
  panelClassName,
}: AnimatedTabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id
  );

  const activeTab = activeTabProp !== undefined ? activeTabProp : internalActiveTab;

  const handleTabChange = (id: string) => {
    if (activeTabProp === undefined) {
      setInternalActiveTab(id);
    }
    onTabChange?.(id);
  };

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full h-full flex flex-col gap-y-3 min-h-0", className)}>
      {/* Tab strip - fixed height */}
      <div className="shrink-0 flex gap-2 flex-wrap bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
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

      {/* Tab content panel — uniform size, strictly fills remaining height without overflow */}
      <div
        className={cn(
          "flex-1 min-h-0 w-full p-5 sm:p-6 bg-[#141311]/80 backdrop-blur-sm rounded-xl border border-[rgba(237,232,223,0.08)] overflow-hidden flex flex-col",
          panelClassName
        )}
      >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                className="w-full h-full flex flex-col min-h-0 flex-1"
                initial={{ opacity: 0, scale: 0.98, x: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, x: -6, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
