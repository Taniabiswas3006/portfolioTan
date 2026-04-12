"use client";

import { useState } from "react";
import { Brain, Shield, Layout, Smartphone, Code2, Database } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SkillInfo {
  id: string;
  name: string;
  role: string;
  description: string;
  level: number;
  icon: React.ReactNode;
  techStack: string[];
}

const SKILLS: SkillInfo[] = [
  {
    id: "1",
    name: "Machine Learning",
    role: "ADVANCED",
    icon: <Brain className="text-[#FF85A1]" size={22} />,
    level: 95,
    description: "Experienced in training models, crafting NLP solutions, and deep data preprocessing pipelines.",
    techStack: ["Python", "Pandas","NumPy", "Scikit", "NLP"],
  },
  {
    id: "2",
    name: "Cybersecurity",
    role: "COMPETENT",
    icon: <Shield className="text-[#FF85A1]" size={22} />,
    level: 75,
    description: "Knowledgeable in network security, pen testing foundations, and cryptography deployments.",
    techStack: ["Kali Linux", "VMware", "Metasploit","VirtualBox"],
  },
  {
    id: "3",
    name: "Data Analysis",
    role: "PROFICIENT",
    icon: <Layout className="text-[#FF85A1]" size={22} />,
    level: 85,
    description: "Proficient in data analysis with hands-on experience in extracting insights, identifying patterns, and visualizing data.",
    techStack: ["Pandas", "Matplotlib", "SQL", "Tableau","EXCEL"],
  },
  {
    id: "4",
    name: "Android Apps",
    role: "COMPETENT",
    icon: <Smartphone className="text-[#FF85A1]" size={22} />,
    level: 75,
    description: "Experience with building solid mobile applications using modern flexible frameworks.",
    techStack: ["Java", "Kotlin", "Android Studio", "XML"],
  },
  {
    id: "5",
    name: "Full Stack Dev",
    role: "ADVANCED",
    icon: <Code2 className="text-[#FF85A1]" size={22} />,
    level: 90,
    description: "Highly proficient in React, Next.js, Framer Motion, and Tailwind. End-to-End scalable architectures.",
    techStack: ["React", "Next.js", "Node.js", "Appwrite","Flask","REST API","HTML+CSS+JS"],
  },
  {
    id: "6",
    name: "Database Mgmt",
    role: "ADVANCED",
    icon: <Database className="text-[#FF85A1]" size={22} />,
    level: 90,
    description: "Designing schemas, optimizing NoSQL structures, and high-availability data migrations.",
    techStack: ["MongoDB", "PostgreSQL", "MYSQL", "SQLite"],
  },
];

export default function Skills({ members = SKILLS }: { members?: SkillInfo[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[7xl] xl:!text-[4.5rem]">
          Technical Arsenal
        </h2>

        {/* Changed md:flex-row to xl:flex-row so large grid blocks don't squeeze text out of bounds on medium screens */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 lg:gap-16 select-none w-full mx-auto">

          {/* ── Left: detailed info grid replacing images ── */}
          <div className="flex gap-2 md:gap-4 flex-shrink-0 overflow-visible pb-4 md:pb-0 w-full xl:w-auto justify-center flex-wrap sm:flex-nowrap xl:justify-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4 shrink-0">
              {col1.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  className="w-[150px] h-[180px] sm:w-[180px] sm:h-[200px] md:w-[220px] md:h-[260px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4 mt-[50px] md:mt-[70px] shrink-0">
              {col2.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  className="w-[165px] h-[190px] sm:w-[200px] sm:h-[220px] md:w-[245px] md:h-[285px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:gap-4 mt-[25px] md:mt-[35px] shrink-0">
              {col3.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  className="w-[160px] h-[185px] sm:w-[190px] sm:h-[210px] md:w-[230px] md:h-[270px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* ── Right: full skill name list (Right-Aligned) ── */}
          <div className="flex flex-col gap-4 md:gap-6 pt-4 lg:pt-10 flex-1 w-full overflow-visible justify-center items-center xl:items-end">
            {members.map((skill) => (
              <SkillRow
                key={skill.id}
                skill={skill}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Skill "Detailed Info" Card 
───────────────────────────────────────── */
function SkillCard({
  skill,
  className,
  hoveredId,
  onHover,
}: {
  skill: SkillInfo;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === skill.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-500 p-4 sm:p-5 flex flex-col justify-between relative group z-10',
        className,
        isDimmed ? 'opacity-30 scale-95 border-white/5' : 'opacity-100 scale-100 border-[#FF85A1]/30 shadow-[0_0_25px_rgba(255,133,161,0.05)]',
        'border bg-spaceDark/60 backdrop-blur-md'
      )}
      onMouseEnter={() => onHover(skill.id)}
      onMouseLeave={() => onHover(null)}
    >
      {isDimmed === false && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF85A1]/10 to-transparent transition-opacity opacity-100 pointer-events-none" />
      )}

      <div className="flex justify-between items-start relative z-20">
        <div className={cn("p-2 sm:p-3 rounded-xl transition-colors duration-500 flex-shrink-0", isActive ? "bg-[#FF85A1]/20 shadow-[0_0_15px_rgba(255,133,161,0.2)]" : "bg-white/5")}>
          {skill.icon}
        </div>
        <span className={cn("font-black text-xl md:text-2xl transition-all duration-500 font-mono ml-2", isActive ? "text-white" : "text-gray-500")}>
          {skill.level}%
        </span>
      </div>

      <div className="relative z-20 overflow-hidden mt-2">
        <p className={cn("text-[10px] sm:text-xs md:text-sm leading-snug md:leading-relaxed transition-colors duration-500", isActive ? "text-gray-100" : "text-gray-500")}>
          {skill.description}
        </p>
      </div>

      <div className="relative z-20 flex flex-wrap gap-1 md:gap-2 mt-4">
        {skill.techStack.map((tech) => (
          <span 
            key={tech} 
            className={cn(
              "text-[8px] md:text-[10px] px-1.5 py-0.5 rounded-md border transition-all duration-300",
              isActive ? "border-[#FF85A1]/40 text-[#FF85A1] bg-[#FF85A1]/5" : "border-white/5 text-gray-600"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Skill Index Row (Right aligned list)
───────────────────────────────────────── */
function SkillRow({
  skill,
  hoveredId,
  onHover,
}: {
  skill: SkillInfo;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === skill.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-500 py-2 sm:py-3 rounded-2xl px-4 md:px-6 w-full flex flex-col xl:items-end overflow-hidden',
        isDimmed ? 'opacity-40' : 'opacity-100',
        isActive ? 'bg-white/5' : ''
      )}
      onMouseEnter={() => onHover(skill.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name and Dash row - perfectly right aligned for xl */}
      <div className="flex items-center gap-4 sm:gap-6 xl:flex-row-reverse w-full xl:justify-start">
        <span
          className={cn(
            'h-2 sm:h-3 rounded-full flex-shrink-0 transition-all duration-500',
            isActive ? 'bg-[#FF85A1] w-8 sm:w-12 shadow-[0_0_10px_rgba(255,133,161,0.5)]' : 'bg-[#FF85A1]/20 w-3 sm:w-4',
          )}
        />
        <span
          className={cn(
            'text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight transition-all duration-500 truncate min-w-0 flex-1 xl:flex-none xl:text-right',
            isActive ? 'text-white translate-x-1 sm:translate-x-2 xl:translate-x-0 xl:-translate-x-2' : 'text-gray-500 hover:text-gray-300',
          )}
        >
          {skill.name}
        </span>
      </div>

      <p className={cn(
        "mt-3 md:mt-4 pl-[48px] sm:pl-[72px] xl:pl-0 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] transition-colors duration-500 xl:text-right xl:pr-[60px]",
        isActive ? "text-[#FF85A1]" : "text-gray-600"
      )}>
        {skill.role} <span className="opacity-50 mx-1 md:mx-2">•</span> LEVEL {skill.level} / 100
      </p>
    </div>
  );
}
