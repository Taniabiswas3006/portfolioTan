"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Zap } from "lucide-react";
import Folder from "./Folder";

const hackathons = [
  {
    name: "Hack4Bengal",
    role: "Participant & Builder",
    achievement: "Top Project Contributor",
    icon: <Trophy className="text-secondary"
     />,
    url: "https://drive.google.com/file/d/14BnTOEgxNkIcMH0m-RqLgor1_V6-2HP3/view?usp=drive_link"
  },
  {
    name: "StatusCode 2",
    role: "Competitive Programmer",
    achievement: "Finalist",
    icon: <Award className="text-primary" />,
    url: "https://drive.google.com/file/d/1R6Zo_mYEroEvNg6v5e_UGOzlBmznD6nj/view?usp=drive_link"
  },
  {
    name: "Hackodisha 5.0",
    role: "National Level Participant",
    achievement: "Honorable Mention",
    icon: <Star className="text-accent" />,
    url: "https://drive.google.com/file/d/1S45LnJP0-5Hd2TV2gzm0XeTIiWX_lk59/view?usp=drive_link"
  },
  {
    name: "SIH (Ahaarsetu)",
    role: "Smart India Hackathon",
    achievement: "Key Developer",
    icon: <Zap className="text-secondary" />,
  },
];

interface Hackathon {
  name: string;
  role: string;
  achievement: string;
  icon: React.ReactNode;
  url?: string;
}

export default function Hackathons() {
  const [activeCard, setActiveCard] = useState<Hackathon | null>(null);

  return (
    <section id="hackathons" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">Hackathon&apos;s Tech Era</h2>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-48 justify-center items-center mt-24 md:mt-56 pt-12 md:pt-24 pb-20 px-6 md:px-0">
          
          {/* Folder 1: Early/Major Hacks */}
          <div className="flex flex-col items-center gap-6">
            <Folder 
              color="#FF85A1" 
              size={2.5} 
              items={[
                <div key="0" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveCard(hackathons[0]); }} className="w-full h-full p-1.5 flex flex-col items-center justify-center text-center cursor-pointer bg-white hover:bg-gray-50 transition-colors relative group border border-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gray-200 rounded-full" />
                  <div className="transform scale-[0.4] mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity bg-pink-50 rounded-full p-2 text-pink-600">{hackathons[0].icon}</div>
                  <h3 className="text-[7.5px] font-black text-gray-800 tracking-tight leading-tight mb-1">{hackathons[0].name}</h3>
                  <div className="w-8 h-[1px] bg-gray-200 mb-1" />
                  <p className="text-[5.5px] text-pink-600 font-bold tracking-[0.2em] uppercase leading-tight line-clamp-2">{hackathons[0].role}</p>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-pink-100 rounded-tl-md" />
                </div>,
                <div key="1" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveCard(hackathons[1]); }} className="w-full h-full p-1.5 flex flex-col items-center justify-center text-center cursor-pointer bg-white hover:bg-gray-50 transition-colors relative group border border-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gray-200 rounded-full" />
                  <div className="transform scale-[0.4] mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity bg-blue-50 rounded-full p-2 text-blue-600">{hackathons[1].icon}</div>
                  <h3 className="text-[7.5px] font-black text-gray-800 tracking-tight leading-tight mb-1">{hackathons[1].name}</h3>
                  <div className="w-8 h-[1px] bg-gray-200 mb-1" />
                  <p className="text-[5.5px] text-blue-600 font-bold tracking-[0.2em] uppercase leading-tight line-clamp-2">{hackathons[1].role}</p>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-100 rounded-tl-md" />
                </div>
              ]}
            />
            <span className="text-white/60 font-mono text-sm tracking-widest uppercase font-bold mt-16 bg-white/5 py-1 px-4 rounded-full border border-white/10">Hackathon Volume I</span>
          </div>

          {/* Folder 2: Recent Hacks */}
          <div className="flex flex-col items-center gap-6">
            <Folder 
              color="#B085FF" 
              size={2.5} 
              items={[
                <div key="2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveCard(hackathons[2]); }} className="w-full h-full p-1.5 flex flex-col items-center justify-center text-center cursor-pointer bg-white hover:bg-gray-50 transition-colors relative group border border-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gray-200 rounded-full" />
                  <div className="transform scale-[0.4] mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity bg-purple-50 rounded-full p-2 text-purple-600">{hackathons[2].icon}</div>
                  <h3 className="text-[7.5px] font-black text-gray-800 tracking-tight leading-tight mb-1">{hackathons[2].name}</h3>
                  <div className="w-8 h-[1px] bg-gray-200 mb-1" />
                  <p className="text-[5.5px] text-purple-600 font-bold tracking-[0.2em] uppercase leading-tight line-clamp-2">{hackathons[2].role}</p>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-100 rounded-tl-md" />
                </div>,
                <div key="3" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveCard(hackathons[3]); }} className="w-full h-full p-1.5 flex flex-col items-center justify-center text-center cursor-pointer bg-white hover:bg-gray-50 transition-colors relative group border border-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gray-200 rounded-full" />
                  <div className="transform scale-[0.4] mb-0.5 opacity-70 group-hover:opacity-100 transition-opacity bg-green-50 rounded-full p-2 text-green-600">{hackathons[3].icon}</div>
                  <h3 className="text-[7.5px] font-black text-gray-800 tracking-tight leading-tight mb-1">{hackathons[3].name}</h3>
                  <div className="w-8 h-[1px] bg-gray-200 mb-1" />
                  <p className="text-[5.5px] text-green-600 font-bold tracking-[0.2em] uppercase leading-tight line-clamp-2">{hackathons[3].role}</p>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-100 rounded-tl-md" />
                </div>
              ]}
            />
            <span className="text-white/60 font-mono text-sm tracking-widest uppercase font-bold mt-16 bg-white/5 py-1 px-4 rounded-full border border-white/10">Hackathon Volume II</span>
          </div>

        </div>

        {/* Modal Overlay Overlay */}
        {activeCard && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveCard(null)}
          >
            <div className="absolute inset-0 bg-[#0B0A10]/70 backdrop-blur-xl" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 bg-white p-10 md:p-14 rounded-[40px] w-full max-w-xl shadow-[0_0_80px_rgba(255,133,161,0.2)] text-gray-900 cursor-default"
            >
              <button 
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 font-bold"
                onClick={() => setActiveCard(null)}
              >
                ✕
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="transform scale-150 mb-8 p-6 bg-gray-50 rounded-full border border-gray-100 shadow-inner">
                  {activeCard.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">{activeCard.name}</h3>
                <p className="text-pink-600 font-bold tracking-[0.2em] uppercase mb-8 text-sm sm:text-base">{activeCard.role}</p>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 w-full mb-8 shadow-sm">
                  <p className="text-gray-600 italic text-lg opacity-80">&quot;{activeCard.achievement}&quot;</p>
                </div>
                
                {activeCard.url ? (
                  <a 
                    href={activeCard.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF85A1] hover:text-black transition-all shadow-xl hover:shadow-[#FF85A1]/30 hover:-translate-y-1 w-full sm:w-auto"
                  >
                    View Project Documentation
                  </a>
                ) : (
                  <div className="bg-gray-100 text-gray-400 px-10 py-4 rounded-full font-bold cursor-not-allowed w-full sm:w-auto">
                    Documentation Private
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
