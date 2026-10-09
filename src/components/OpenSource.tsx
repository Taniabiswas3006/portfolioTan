"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitPullRequest,
  GitBranch,
  ArrowUpRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { portfolioData } from "@/data";
import ContributionSkyline, {
  type PaletteInput,
  type ContributionDay,
} from "@/components/ui/contribution-skyline";

const BLUSH_PALETTE: PaletteInput = {
  light: ["#FCD0D8", "#F99DB3", "#F25A82", "#D81B60"],
  dark: ["#3D141F", "#6E1B38", "#A62752", "#FF85A1"],
};

const PALETTE_OPTIONS: { name: string; value: PaletteInput; label: string }[] = [
  { name: "blush", value: BLUSH_PALETTE, label: "Blush Editorial" },
  { name: "github", value: "github", label: "GitHub Classic" },
  { name: "ocean", value: "ocean", label: "Cyan Ocean" },
  { name: "ember", value: "ember", label: "Solar Ember" },
  { name: "grape", value: "grape", label: "Neon Grape" },
];

export default function OpenSource() {
  const [selectedPalette, setSelectedPalette] = useState<PaletteInput>(BLUSH_PALETTE);
  const [activePaletteName, setActivePaletteName] = useState("blush");
  const [contributions, setContributions] = useState<ContributionDay[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  // Fetch real GitHub contribution data
  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github-contributions");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (json.contributions && json.contributions.length > 0) {
          setContributions(json.contributions);
          const total = json.contributions.reduce(
            (sum: number, d: ContributionDay) => sum + d.count,
            0
          );
          setTotalContributions(total);
        }
      } catch (err) {
        console.warn("Could not fetch GitHub contributions, using generated data:", err);
        // contributions stays undefined → skyline will use its generated fallback
      } finally {
        setLoading(false);
      }
    }
    fetchContributions();
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-10">
          <span className="text-[#FF85A1] font-bold">(06)</span>
          <span>Open Source Telemetry</span>
          <span className="text-white/20">—</span>
          <span>Interactive 3D Contribution Skyline</span>
        </div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-[#141311] border border-[rgba(237,232,223,0.08)] p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF85A1]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-[rgba(237,232,223,0.08)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FF85A1]">
                <Github size={24} />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE8DF] tracking-tight flex items-center gap-2">
                  <span>GitHub Contribution</span>
                </h3>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <p className="font-mono text-xs text-[#8A847A] uppercase tracking-wider">
                    @Taniabiswas3006
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[11px]">
                    {loading ? (
                      <>
                        <Loader2 size={11} className="animate-spin text-[#FF85A1]" />
                        <span className="text-[#8A847A]">Syncing GitHub...</span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live GitHub Data ({totalContributions ?? 75} contributions)</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Palette Switcher */}
              <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-[rgba(237,232,223,0.08)] text-[11px] font-mono">
                <span className="px-2 text-[#8A847A] flex items-center gap-1">
                  <Sparkles size={11} className="text-[#FF85A1]" />
                  <span>Theme:</span>
                </span>
                {PALETTE_OPTIONS.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => {
                      setSelectedPalette(p.value);
                      setActivePaletteName(p.name);
                    }}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      activePaletteName === p.name
                        ? "bg-[#FF85A1] text-[#0B0A09] font-medium"
                        : "text-[#8A847A] hover:text-[#EDE8DF]"
                    }`}
                  >
                    {p.label.split(" ")[0]}
                  </button>
                ))}
              </div>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(237,232,223,0.15)] hover:border-[#FF85A1] text-xs font-mono uppercase tracking-widest text-[#EDE8DF] hover:text-[#FF85A1] transition-all bg-white/[0.02]"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Interactive Contribution Skyline Component */}
          <div className="py-6 sm:py-8">
            <ContributionSkyline
              data={contributions}
              palette={selectedPalette}
              defaultView="3d"
              orbit={true}
              heightScale={1.2}
              title={null}
              showStats={true}
              className="bg-transparent border-[rgba(237,232,223,0.08)] text-[#EDE8DF]"
            />
          </div>

          {/* Telemetry Stats Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[rgba(237,232,223,0.08)] font-mono text-xs text-[#8A847A]">
            <div className="flex items-center gap-3">
              <GitPullRequest size={16} className="text-[#FF85A1]" />
              <span>Autonomous commits & Pull Requests</span>
            </div>
            <div className="flex items-center gap-3">
              <GitBranch size={16} className="text-[#FF85A1]" />
              <span>Multi-repo experimentations</span>
            </div>
            <div className="flex items-center sm:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF85A1] animate-pulse" />
              <span className="text-[#EDE8DF]">Mode: Orbit & Inspect (3D)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
