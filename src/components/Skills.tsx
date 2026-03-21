"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Layout, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Machine Learning",
    icon: <Brain className="text-primary" />,
    level: 85,
    description: "Experienced in training models, NLP, and data preprocessing.",
    color: "bg-primary",
  },
  {
    name: "Cybersecurity",
    icon: <Shield className="text-secondary" />,
    level: 75,
    description: "Knowledgeable in network security, pen testing foundations, and cryptography.",
    color: "bg-secondary",
  },
  {
    name: "Frontend Development",
    icon: <Layout className="text-accent" />,
    level: 90,
    description: "Proficient in React, Next.js, and modern CSS frameworks like Tailwind.",
    color: "bg-accent",
  },
  {
    name: "Android Development",
    icon: <Smartphone className="text-primary" />,
    level: 80,
    description: "Experience with building mobile applications using modern frameworks.",
    color: "bg-primary",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: 1 }}
              className="glass-card p-8 flex flex-col h-full border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                {skill.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <span>Capability</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r from-primary to-lavender-glow shadow-[0_0_10px_rgba(205,180,219,0.3)]`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
