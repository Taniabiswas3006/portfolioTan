"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Code2 } from "lucide-react";
import DecryptedText from "./DecryptedText";

const projects = [
  {
    title: "EcoTwin",
    subtitle: "Solo project",
    description: "EcoTwin is an AI-powered sustainability platform that analyzes your carbon footprint, energy consumption, and waste generation to create a personalized digital twin of your environmental impact also gives you actionable insights.",
    tech: ["Vite", "REST API", "Flask", "React.js", "Tailwind CSS", "PostgreSQL(Supabase),ML,Scikit-Learn,Numpy,Pandas,Vercel,Render"],
    links: { github: "https://github.com/Taniabiswas3006/Eco-Twin", demo: "https://eco-twin-flame.vercel.app/" },
    image: "Screenshot 2026-04-11 140655.png",
  },
  {
    title: "Nestate",
    subtitle: "Group project",
    description: "A modern real estate solution providing seamless property management, tenant tracking, and portfolio insights for forward-thinking agencies.",
    contribution: ["OCR", "Machine learning",],
    tech: ["Next.js", "Node.js", "React.js", "Tailwind CSS", "PostgreSQL"],
    links: { github: "https://nestate.parot.dev/", demo: "https://nestate.parot.dev/" },
    image: "Screenshot 2026-04-12 023733.png",
  },

  {
    title: "Ahaarsetu",
    subtitle: "Group Project",
    description: "Smart India Hackathon project combining ML and frontend to assist with food accessibility solutions.",
    contribution: ["Deep learning", "NLP"],
    tech: ["ML", "React Native", "Node.js", "MongoDB"],
    links: { github: "https://github.com/Aritra-221B/AhaarSetu", demo: "https://ahaarsetu-theta.vercel.app/" },
    image: "Screenshot 2026-04-12 023413.png",
  },
  {
    title: "ThreatGuardX",
    subtitle: "Group project",
    description: "Collaborative security-focused chrome extension built during a hackathon to detect vulnerabilities.",
    contribution: ["UI/UX", "Logic"],
    tech: ["VirtualBox", "Python", "KaliLinux", "Bash"],
    links: { github: "https://github.com/Aritra-221B/ThreatGuardX-webextension" },
    image: "Screenshot 2026-04-12 020642.png",
  },
  {
    title: "ZByte",
    subtitle: "Solo project",
    description: "Fooding Ecommerce template with antigravity themed experience",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://zbyte.parot.dev/ " },
    image: "Screenshot 2026-04-12 002648.png",
  },
  {
    title: "TwinTitles",
    subtitle: "Group project",
    description: "NLP based system that detects similar or duplicate research paper titles using Sentence Transformers.",
    contribution:["NLP","ML","Frontend"],
    tech: ["NLP", "PyTorch", "HuggingFace", "HTML", "CSS"],
    links: { github: "https://github.com/Aritra-221B/TwinTitles" },
    image: "Screenshot 2026-04-12 120557.png",
  },
  {
    title: "Eleve",
    subtitle: "Solo project",
    description: "clothing Ecommerce template with light themed aesthetics",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://eleve.parot.dev/" },
    image: "Screenshot 2026-04-12 010007.png",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">
          <DecryptedText
            text="Mission Deployments"
            animateOn="hover"
            speed={60}
            maxIterations={15}
            encryptedClassName="text-[#FF85A1] opacity-75 font-mono"
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glow Decoration */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

              <div className="relative glass-card overflow-hidden flex flex-col h-full bg-spaceDark/40 border-white/5 group-hover:border-primary/20 transition-all duration-500">
                <div className="h-44 sm:h-52 md:h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-spaceBlack to-transparent z-10 opacity-60" />
                  <Image
                    src={`/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Code2 size={24} className="text-primary" />
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase font-black text-secondary tracking-tighter px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <span className="text-xs sm:text-sm font-medium text-secondary/80">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {project.contribution && (
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-2">Key Contributions</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.contribution.map((c) => (
                          <span key={c} className="text-xs text-white/70 flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 sm:gap-6 mt-auto flex-wrap">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all bg-white/5 md:bg-transparent py-3 px-4 md:p-0 rounded-lg"
                      >
                        <Github size={18} /> Repository
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-all bg-primary/5 md:bg-transparent py-3 px-4 md:p-0 rounded-lg"
                      >
                        <ExternalLink size={18} /> Live Systems
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
