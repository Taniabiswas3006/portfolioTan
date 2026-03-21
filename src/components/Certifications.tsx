"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Python Bootcamp", issuer: "Udemy", date: "2024", url: "https://drive.google.com/file/d/1AfeWgX_zy8_totiUD1Wrcuuk38uwXByM/view?usp=sharing" },
  { name: "MongoDB Badge", issuer: "MongoDB University", date: "2025", url: "https://drive.google.com/file/d/1znfTtFZlVsR1cudnFSb__V5IfG8d1YF9/view?usp=drive_link" },
  { name: "Cybersecurity", issuer: "Ardent Computech", date: "2025", url: "https://drive.google.com/file/d/1KB_6exP1fLzAfZPVL6wHgmy-RGf0GiR7/view?usp=drive_link" },
  { name: "AWS AI/ML", issuer: "AWS Training", date: "2024", url: "https://drive.google.com/file/d/1PyUVNHpiOf--AkXLgsUSJ2BeHJ7eMlnI/view?usp=sharing" },
  { name: "NPTEL", issuer: "NPTEL", date: "2025", url: "https://drive.google.com/file/d/1LLwgRQteyoKyeEvaH6wnmUtjvA9LYacK/view?usp=drive_link" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Verified Intelligence</h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => {
            const Wrapper = cert.url ? motion.a : motion.div;
            return (
              <Wrapper
                key={cert.name}
                href={cert.url}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 glass-card hover:bg-white/10 transition-all group cursor-pointer border-white/5 w-full md:w-[calc(50%-0.75rem)]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-space-black group-hover:shadow-[0_0_20px_rgba(205,180,219,0.4)] transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{cert.name}</h3>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-500 uppercase tracking-tighter">
                    <span className="text-secondary">{cert.issuer}</span>
                    <span className="opacity-20">•</span>
                    <span>{cert.date}</span>
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
