"use client";

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
                I am an <span className="text-white font-bold">AI Engineer & Full Stack Developer</span> specializing in building intelligent, scalable systems. I excel at bridging the gap between complex <span className="text-[#FF85A1] font-bold">Machine Learning</span> models and robust web applications.
              </p>
              <p>
                Currently pursuing my Computer Science degree at <span className="text-white font-bold">JIS College of Engineering</span>, I am actively seeking roles where I can architect end-to-end AI products, leverage data for actionable insights, and ensure application security.
              </p>
              <p>
                Whether it&apos;s deploying NLP solutions, optimizing backend databases, or crafting responsive frontends, I thrive in fast-paced hackathons and cross-functional teams that demand rapid, secure prototyping.
              </p>
            </div>

            <div className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                { label: "Origin", value: "West Bengal, IN" },
                { label: "Working", value: "Parot.Dev" },
                { label: "Role", value: "AI Engineer" },
                { label: "Status", value: "Active" },
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-l-2 border-[#FF85A1]/30 pl-4 py-2 hover:border-[#FF85A1] transition-colors bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-r-xl sm:rounded-none">
                  <p className="text-[10px] md:text-[13px] uppercase tracking-widest text-[#FF85A1] font-bold">{item.label}</p>
                  <p className="font-bold text-white text-lg md:text-xl">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
