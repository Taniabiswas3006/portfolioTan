"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Nestate",
    description: "A modern real estate solution providing seamless property management, tenant tracking, and portfolio insights for forward-thinking agencies.",
    tech: ["Next.js", "Node.js", "React.js", "Tailwind CSS", "PostgreSQL"],
    links: { github: "https://nestate.parot.dev/", demo: "https://nestate.parot.dev/" },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "TwinTitles",
    description: "NLP based system that detects similar or duplicate research paper titles using Sentence Transformers.",
    tech: ["NLP", "PyTorch", "HuggingFace", "HTML", "CSS"],
    links: { github: "https://github.com/Aritra-221B/TwinTitles" },
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ahaarsetu",
    description: "Smart India Hackathon project combining ML and frontend to assist with food accessibility solutions.",
    tech: ["ML", "React Native", "Node.js", "MongoDB"],
    links: { github: "https://github.com/Aritra-221B/AhaarSetu", demo: "https://ahaarsetu-theta.vercel.app/" },
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "ThreatGuardX",
    description: "Collaborative security-focused chrome extension built during a hackathon to detect vulnerabilities.",
    tech: ["VirtualBox", "Python", "KaliLinux", "Bash"],
    links: { github: "https://github.com/Aritra-221B/ThreatGuardX-webextension" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "ZByte",
    description: "Fooding Ecommerce template with antigravity themed experience",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://zbyte.parot.dev/ " },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Eleve",
    description: "clothing Ecommerce template with light themed aesthetics",
    tech: ["React.js", "Javascript", "Framer-motion", "Node.js"],
    links: { demo: "https://eleve.parot.dev/" },
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Mission Deployments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-spaceBlack to-transparent z-10 opacity-60" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-10 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 size={24} className="text-primary" />
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase font-black text-secondary tracking-tighter px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-10 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-8 mt-auto">
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all hover:translate-x-1"
                    >
                      <Github size={20} /> Repository
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-all hover:translate-x-1"
                    >
                      <ExternalLink size={20} /> Live Systems
                    </a>
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
