"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Code2 } from "lucide-react";
import DecryptedText from "./DecryptedText";

const projects = [
  {
    title: "EcoTwin",
    subtitle: "Solo project",
    description: "An AI-powered digital twin platform that analyzes personal carbon footprints and energy consumption. Built to solve the lack of personalized sustainability tracking. Integrated predictive ML models, increasing data accuracy by 20% and providing highly actionable eco-insights.",
    tech: ["Vite", "REST API", "Flask", "React.js", "Tailwind CSS", "PostgreSQL(Supabase),ML,Scikit-Learn,Numpy,Pandas,Vercel,Render"],
    links: { github: "https://github.com/Taniabiswas3006/Eco-Twin", demo: "https://eco-twin-flame.vercel.app/" },
    image: "Screenshot 2026-04-11 140655.png",
  },
  {
    title: "Nestate",
    subtitle: "Group project",
    description: "A comprehensive real estate management dashboard designed to eliminate manual data entry. Implemented OCR and ML models for automated property tracking, reducing document processing time by 30% for agencies.",
    contribution: ["OCR integration for document parsing", "ML property valuation models"],
    tech: ["Next.js", "Node.js", "React.js", "Tailwind CSS", "PostgreSQL"],
    links: { github: "https://nestate.parot.dev/", demo: "https://nestate.parot.dev/" },
    image: "Screenshot 2026-04-12 023733.png",
  },

  {
    title: "Ahaarsetu",
    subtitle: "Group Project",
    description: "A smart livestock management platform that assigns every animal a Digital Medicine Passport — tracking drug use, withdrawal periods, and MRL compliance in real-time so farmers, vets, buyers, and regulators can guarantee residue-free, traceable food from farm to table.",
    contribution: ["Deep learning models for demand forecasting", "NLP for resource matching"],
    tech: ["ML", "React Native", "Node.js", "MongoDB"],
    links: { github: "https://github.com/Aritra-221B/AhaarSetu", demo: "https://ahaarsetu-theta.vercel.app/" },
    image: "Screenshot 2026-04-12 023413.png",
  },
  {
    title: "ThreatGuardX",
    subtitle: "Group project",
    description: "A security-focused Chrome extension developed to instantly detect web vulnerabilities. Architected the core detection logic and user interface, allowing users to identify potential threats 40% faster during browsing.",
    contribution: ["Threat-detection logic", "UI/UX architecture"],
    tech: ["VirtualBox", "Python", "KaliLinux", "Bash"],
    links: { github: "https://github.com/Aritra-221B/ThreatGuardX-webextension" },
    image: "Screenshot 2026-04-12 020642.png",
  },
  {
    title: "ZByte",
    subtitle: "Solo project",
    description: "A high-performance food e-commerce template. Engineered complex Framer Motion animations to deliver an 'antigravity' user experience while maintaining a 90+ Lighthouse performance score.",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://zbyte.parot.dev/ " },
    image: "Screenshot 2026-04-12 002648.png",
  },
  {
    title: "TwinTitles",
    subtitle: "Group project",
    description: "An NLP system that solves academic plagiarism by detecting duplicate research titles. Implemented advanced Sentence Transformers to achieve a 92% semantic similarity accuracy rate across large datasets.",
    contribution: ["Sentence Transformers implementation", "Frontend architecture"],
    tech: ["NLP", "PyTorch", "HuggingFace", "HTML", "CSS"],
    links: { github: "https://github.com/Aritra-221B/TwinTitles" },
    image: "Screenshot 2026-04-12 120557.png",
  },
  {
    title: "Eleve",
    subtitle: "Solo project",
    description: "A scalable clothing e-commerce frontend architecture. Built with React and Framer Motion to provide a fluid, light-themed aesthetic focused on high conversion rates and accessible design.",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://eleve.parot.dev/" },
    image: "Screenshot 2026-04-12 010007.png",
  }
];

export default function Projects() {
  const [graphError, setGraphError] = useState(false);

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
                        <ExternalLink size={18} /> Live System
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contributions Graph */}
        {!graphError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 md:mt-32 max-w-5xl mx-auto flex flex-col items-center max-w-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <Github size={24} className="text-[#FF85A1]" />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase text-center">Open Source Activity</h3>
            </div>

            <div className="w-full p-4 sm:p-6 md:p-10 flex justify-start sm:justify-center overflow-x-auto no-scrollbar group relative max-w-[100vw] bg-transparent">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <img
                src="https://ghchart.rshah.org/FF85A1/Taniabiswas3006"
                alt="Tania's GitHub Contributions"
                onError={() => setGraphError(true)}
                className="min-w-[600px] w-full max-w-4xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
