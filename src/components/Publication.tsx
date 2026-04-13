"use client";

import { motion } from "framer-motion";
import { BookOpen, Bookmark } from "lucide-react";

export default function Publication() {
  return (
    <section id="publications" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">Knowledge Archive</h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.a
            href="https://drive.google.com/file/d/1P0SSN1tKJV9kuQrtZN0jU4oAHELX1dA0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            className="block relative p-[2px] rounded-3xl bg-gradient-to-br from-primary via-lavenderGlow to-secondary shadow-[0_0_30px_rgba(205,180,219,0.1)] transition-transform cursor-pointer"
          >
            <div className="bg-spaceBlack rounded-[22px] p-6 sm:p-8 md:p-14 overflow-hidden relative">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative z-10">
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <BookOpen size={32} className="text-primary animate-pulse sm:w-12 sm:h-12" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <Bookmark size={18} className="text-secondary" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary">Major Contribution</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins text-white leading-tight italic">
                    &quot;Advances in TinyML: A Systematic Review of Architectures, Algorithms and Innovations&quot;
                  </h3>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    Published in the seminal work of <span className="font-bold text-primary">Scrivener publication: </span><span className="font-bold text-primary italic">Tiny Machine Learning: Fundamentals, Applications and Security</span>
                  </p>
                  
                  <div className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/5 backdrop-blur-sm">
                    <p className="text-gray-400 italic text-sm sm:text-base md:text-lg leading-relaxed">
                      &quot;This research navigates the critical intersection of compact hardware and complex intelligence, defining the next frontier of edge computing.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient glows around the card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
