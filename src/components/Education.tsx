"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Frontend Developer & AI Engineer",
    organization: "PAROT.DEV",
    period: "2025 — Present",
    description:
      "Building modern web interfaces and integrating AI-driven solutions for cutting-edge products.",
    tags: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    current: true,
  },
  {
    type: "work",
    title: "Freelance ML & Frontend Engineer",
    organization: "Australia Based Startup",
    period: "Nov 2025 — Jan 2026",
    description:
      "Delivered end-to-end architectures operating in the Machine Learning and Frontend domain, extensively utilizing OCR capabilities.",
    tags: ["OCR", "Machine Learning", "Frontend", "Integration"],
    current: false,
  },
  {
    type: "work",
    title: "Machine Learning Intern",
    organization: "Internship Studio",
    period: "Oct 2024 — Dec 2024",
    description:
      "Undertook intensive training and practical internship specifically focused on data models and the Machine Learning domain.",
    tags: ["Machine Learning", "Training", "Data Science", "Python"],
    current: false,
  },
  {
    type: "education",
    title: "B.Tech, Computer Science & Engineering",
    organization: "JIS College of Engineering",
    period: "2023 — 2027",
    description:
      "CGPA: 9.4 — Focused on machine learning, cybersecurity, and full-stack development.",
    tags: ["C++", "Python", "Machine Learning", "Data Structures"],
    current: true,
  },
  {
    type: "education",
    title: "Higher Secondary Education, Pure Science (PCMB)",
    organization: "Ramakrishna Vivekananda Mission Vidyabhawan, Barrackpore",
    period: "Jan 2011 — May 2023",
    description:
      "Scored 84.6% in WBCHSC, 2023. Built a strong foundation in science and analytical thinking.",
    tags: ["Essay Writing", "Storytelling", "Science", "Mathematics"],
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="pt-4 pb-16 md:pt-6 md:pb-24 relative overflow-hidden -mt-8 md:-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl overflow-visible">
        <h2 className="section-title !text-3xl sm:!text-5xl md:!text-6xl lg:!text-[4.5rem]">Education & Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 sm:left-12 md:left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 ${
                      item.current
                        ? "bg-gradient-to-br from-primary to-secondary border-primary/50 shadow-[0_0_20px_rgba(205,180,219,0.4)]"
                        : "bg-spaceDark border-white/10"
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase size={20} className="text-white" />
                    ) : (
                      <GraduationCap size={20} className={item.current ? "text-white" : "text-gray-400"} />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 sm:ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? "md:pr-4 md:text-right md:mr-auto" : "md:pl-4 md:text-left md:ml-auto"
                  }`}
                >
                  <div className="group relative">
                    {/* Glow on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div 
                      className="relative glass-card p-5 sm:p-6 md:p-8 bg-spaceDark/50 border-white/5 group-hover:border-primary/20 transition-all duration-500 overflow-hidden"
                      onMouseMove={(e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        card.style.setProperty('--mouse-x', `${x}px`);
                        card.style.setProperty('--mouse-y', `${y}px`);
                      }}
                    >
                      {/* Dynamic Follow Glow */}
                      <div 
                        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
                        style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 133, 161, 0.15), transparent 40%)' }}
                      />

                      {/* Content Wrapper */}
                      <div className="relative z-10">
                        {/* Current badge */}
                        {item.current && (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4 ${
                            isLeft ? "md:float-right md:ml-auto" : "md:float-none"
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            {item.type === "work" ? "Current Role" : "Ongoing"}
                          </span>
                        )}
                        <div className="clear-both" />

                        {/* Organization */}
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
                          {item.organization}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 font-poppins">
                          {item.title}
                        </h3>

                        {/* Period & Location */}
                        <div
                          className={`flex items-center gap-4 text-xs text-gray-500 mb-4 ${
                            isLeft ? "md:justify-end" : "justify-start"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {item.period}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isLeft ? "md:justify-end" : "justify-start"
                          }`}
                        >
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-bold tracking-wider text-primary/80 px-2.5 py-1 bg-primary/5 border border-primary/10 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
