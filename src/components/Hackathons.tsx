"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Zap } from "lucide-react";

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

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Galactic Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hackathons.map((hack, i) => {
            const Wrapper = hack.url ? motion.a : motion.div;
            return (
              <Wrapper
                key={hack.name}
                href={hack.url}
                target={hack.url ? "_blank" : undefined}
                rel={hack.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`glass-card p-8 border-l-4 border-primary hover:border-secondary transition-all group bg-spaceDark/20 block ${hack.url ? 'cursor-pointer' : ''}`}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{hack.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{hack.name}</h3>
                <p className="text-sm text-primary font-bold mb-4 tracking-widest">{hack.role}</p>
                <p className="text-gray-400 text-sm italic group-hover:text-gray-300">&quot;{hack.achievement}&quot;</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
