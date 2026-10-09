"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-36 px-4 sm:px-8 md:px-12 lg:px-20 hairline-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#8A847A] uppercase tracking-widestEditorial mb-12 sm:mb-16">
          <span className="text-[#FF85A1] font-bold">(10)</span>
          <span>Accreditations & Badges</span>
          <span className="text-white/20">—</span>
          <span>Verified Competency Ledger</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EDE8DF] tracking-tight">
              Verified <span className="italic font-normal text-[#FF85A1]">Certifications</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#8A847A] mt-3 max-w-xl">
              Formal accreditations across distributed databases, machine learning, systems architecture,cloud computing and mobile development.
            </p>
          </div>

        </div>

        {/* Ledger-Style Minimal List */}
        <div className="border-t border-[rgba(237,232,223,0.1)] divide-y divide-[rgba(237,232,223,0.08)]">
          {portfolioData.certifications.map((cert, index) => {
            const hasUrl = !!cert.url;
            return (
              <motion.a
                key={cert.title}
                href={cert.url || "#"}
                target={hasUrl ? "_blank" : undefined}
                rel={hasUrl ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!hasUrl) e.preventDefault();
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 transition-colors overflow-hidden ${hasUrl ? "cursor-pointer" : "cursor-default"
                  }`}
              >
                {/* Hover Underline Sweep Effect */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF85A1] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                {/* Left: Year & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <span className="font-mono text-xs text-[#8A847A] font-semibold w-16 group-hover:text-[#FF85A1] transition-colors">
                    {cert.year}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#EDE8DF] group-hover:text-[#FF85A1] group-hover:translate-x-2 transition-all duration-300">
                    {cert.title}
                  </h3>
                </div>

                {/* Right: Issuer & Arrow Link */}
                <div className="flex items-center justify-between sm:justify-end gap-6 mt-3 sm:mt-0 pl-16 sm:pl-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8A847A] group-hover:text-[#EDE8DF] transition-colors">
                    {cert.issuer}
                  </span>

                  <div className={`w-8 h-8 rounded-full border border-[rgba(237,232,223,0.12)] flex items-center justify-center text-[#8A847A] transition-all ${hasUrl
                      ? "group-hover:border-[#FF85A1] group-hover:text-[#FF85A1] group-hover:rotate-45"
                      : "opacity-40 group-hover:border-[rgba(237,232,223,0.3)] group-hover:text-[#EDE8DF]"
                    }`}>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
