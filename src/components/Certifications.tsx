"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Python Bootcamp", issuer: "Udemy", date: "2024", url: "https://drive.google.com/file/d/1AfeWgX_zy8_totiUD1Wrcuuk38uwXByM/view?usp=sharing" },
  { name: "MongoDB Badge", issuer: "MongoDB University", date: "2025", url: "https://drive.google.com/file/d/1znfTtFZlVsR1cudnFSb__V5IfG8d1YF9/view?usp=drive_link" },
  { name: "Cybersecurity", issuer: "Ardent Computech", date: "2025", url: "https://drive.google.com/file/d/1KB_6exP1fLzAfZPVL6wHgmy-RGf0GiR7/view?usp=drive_link" },
  { name: "AWS AI/ML", issuer: "AWS Training", date: "2024", url: "https://drive.google.com/file/d/1PyUVNHpiOf--AkXLgsUSJ2BeHJ7eMlnI/view?usp=sharing" },
  { name: "NPTEL", issuer: "NPTEL", date: "2025", url: "https://drive.google.com/file/d/1LLwgRQteyoKyeEvaH6wnmUtjvA9LYacK/view?usp=drive_link" },
  { name: "Android App development", issuer: "Google powered by EduSkill", date: "2025", url: "https://drive.google.com/file/d/1iqaX0U4rSm2yjVgr1Hp5RhXccISEFt5I/view?usp=drive_link" },];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">Verified Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-12">
          {certifications.map((cert, i) => {
            const Wrapper: any = cert.url ? motion.a : motion.div;
            return (
              <Wrapper
                key={cert.name}
                href={cert.url}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-[240px] rounded-3xl cursor-pointer block"
              >
                {/* Outer Ambient Glow Effect */}
                <div className="absolute -inset-1 bg-[#FF85A1]/0 group-hover:bg-[#FF85A1]/20 blur-2xl transition-all duration-700 rounded-3xl" />

                {/* Border tracking layer & Card Container */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-[1px] group-hover:from-[#FF85A1]/60 group-hover:to-[#FF85A1]/10 transition-colors duration-500">

                  {/* Inner Glass Layer */}
                  <div className="absolute inset-[1px] rounded-[inherit] bg-[#0B0A10]/95 backdrop-blur-2xl flex flex-col justify-between p-8 overflow-hidden z-10 transition-all duration-500 group-hover:bg-[#0B0A10]/80">

                    {/* Background Radial Light Source */}
                    <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#FF85A1]/10 blur-[50px] rounded-full group-hover:bg-[#FF85A1]/30 transition-colors duration-700 pointer-events-none" />

                    {/* Top Section */}
                    <div className="flex justify-between items-start relative z-20">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#FF85A1] group-hover:bg-[#FF85A1]/10 group-hover:border-[#FF85A1]/30 transition-all duration-500 group-hover:scale-110 shadow-none group-hover:shadow-[0_0_25px_rgba(255,133,161,0.25)]">
                        <CheckCircle2 size={28} />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-gray-500 bg-white/5 py-1.5 px-3 rounded-full border border-white/10 group-hover:text-white/90 group-hover:border-[#FF85A1]/40 group-hover:bg-[#FF85A1]/10 transition-all">
                        {cert.date}
                      </span>
                    </div>

                    {/* Bottom Text Content */}
                    <div className="relative z-20 mt-auto">
                      <h3 className="text-2xl font-bold font-poppins text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF85A1] transition-all tracking-tight">
                        {cert.name}
                      </h3>
                      <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase group-hover:text-[#FF85A1] transition-colors">
                        {cert.issuer}
                      </p>
                    </div>

                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
