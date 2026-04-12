"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "./ContainerScrollAnimation";

export default function About() {
  return (
    <section id="about" className="relative overflow-visible pb-24 md:pb-32 pt-10">
      <div className="mx-auto w-full">
        <ContainerScroll
          titleComponent={
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF85A1] mb-8 md:mb-12 text-center tracking-tighter leading-none font-poppins">
              Intro & About
            </h2>
          }
        >
          <div className="w-full h-full relative overflow-hidden group p-6 sm:p-8 md:p-14">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF85A1]/10 rounded-bl-full -mr-24 -mt-24 group-hover:bg-[#FF85A1]/20 transition-colors duration-500 blur-3xl mix-blend-screen" />
            
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF85A1]/10 rounded-tr-full -ml-24 -mb-24 group-hover:bg-[#FF85A1]/20 transition-colors duration-500 blur-3xl mix-blend-screen" />

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-2xl leading-relaxed text-gray-300 relative z-10 font-medium">
              <p>
                As a Computer Science and Engineering student at <span className="text-white font-bold">JIS College of Engineering</span>,
                I treat every line of code as an exploration into the unknown. My technical odyssey is fueled by a pursuit of intelligence and security.
              </p>
              <p>
                My expertise spans the vast reaches of <span className="text-[#FF85A1] font-bold tracking-wide">Machine Learning</span>,
                the protective layers of <span className="text-[#FF85A1] font-bold tracking-wide">Cybersecurity</span>, and the architectural foundations of <span className="text-[#FF85A1] font-bold tracking-wide">Full Stack Development</span>.
              </p>
              <p>
                In the high-energy orbits of hackathons, I thrive on rapid prototyping and collaborative problem-solving. I am a lifelong student of technology, constantly recalibrating my skills to stay ahead of the digital curve.
              </p>
            </div>

            <div className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                { label: "Origin", value: "West Bengal, IN" },
                { label: "Working", value: "Parot.Dev" },
                { label: "Role", value: "AI Engineer" },
                { label: "Status", value: "Active" },
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-l-2 border-[#FF85A1]/30 pl-4 py-2 hover:border-[#FF85A1] transition-colors">
                  <p className="text-[11px] md:text-[13px] uppercase tracking-widest text-[#FF85A1] font-bold">{item.label}</p>
                  <p className="font-bold text-white text-base md:text-xl">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
