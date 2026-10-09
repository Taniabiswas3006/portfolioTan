"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { portfolioData, HobbyItem } from "@/data";

export default function Beyond() {
  const [selectedHobby, setSelectedHobby] = useState<HobbyItem | null>(null);

  return (
    <section
      id="beyond"
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(11)</span>
          <span>Interests & Aesthetic Soul</span>
          <span className="text-white/20">—</span>
          <span>Beyond The Code</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-24">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Beyond The <span className="italic font-normal text-[#FF85A1]">Terminal</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Melodic cadence, narrative mysteries, and wandering lenses that inform digital sensitivity.
            </p>
          </div>
          <span className="font-mono text-xs text-[#8A847A] uppercase tracking-widest hidden sm:block">
            CLICK POLAROID FOR NOTES
          </span>
        </div>

        {/* Three-Photo Polaroid Collage with slight rotations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {portfolioData.beyond.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              onClick={() => setSelectedHobby(hobby)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative rounded-[28px] bg-[#141311] border border-[rgba(237,232,223,0.1)] hover:border-[#FF85A1]/40 p-5 sm:p-6 transition-all duration-500 cursor-pointer shadow-xl ${hobby.rotation}`}
            >
              {/* Polaroid Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-[#0B0A09] mb-6">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Subtle corner badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#EDE8DF] uppercase tracking-widest">
                  PLATE 0{index + 1}
                </div>
              </div>

              {/* Caption in Italic Serif */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE8DF] group-hover:text-[#FF85A1] transition-colors leading-snug">
                  {hobby.title}
                </h3>
                <p className="font-serif italic text-sm text-[#8A847A] leading-relaxed">
                  &ldquo;{hobby.caption}&rdquo;
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {hobby.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider text-[#8A847A] bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail on Click */}
      <AnimatePresence>
        {selectedHobby && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHobby(null)}
              className="absolute inset-0 bg-[#0B0A09]/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl bg-[#141311] border border-[rgba(237,232,223,0.12)] rounded-[32px] overflow-hidden p-6 sm:p-10 shadow-2xl text-[#EDE8DF]"
            >
              <button
                onClick={() => setSelectedHobby(null)}
                aria-label="Close"
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF85A1] hover:text-[#0B0A09] text-[#EDE8DF] transition-all"
              >
                <X size={18} />
              </button>

              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#0B0A09]">
                <Image
                  src={selectedHobby.image}
                  alt={selectedHobby.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="font-mono text-xs text-[#FF85A1] uppercase tracking-widest block">
                  BEYOND THE CODE ARCHIVE
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#EDE8DF]">
                  {selectedHobby.title}
                </h3>

                <p className="font-serif italic text-base text-[#8A847A]">
                  &ldquo;{selectedHobby.caption}&rdquo;
                </p>

                <p className="font-sans text-sm sm:text-base text-[#EDE8DF]/90 leading-relaxed pt-2">
                  {selectedHobby.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {selectedHobby.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FF85A1]/10 text-[#FF85A1] border border-[#FF85A1]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
