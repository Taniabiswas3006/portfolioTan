"use client";

import React, { useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Award, 
  BookOpen,
  Printer
} from "lucide-react";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const data = {
    name: "Tania Biswas",
    title: "AI Engineer & Full Stack Developer",
    contact: {
      email: "taniabiswas232@gmail.com",
      phone: "+91 9123918909",
      location: "West Bengal, IN",
      linkedin: "linkedin.com/in/tania-biswas-30469a29a",
      github: "github.com/Taniabiswas3006",
      portfolio: "taniabiswas.dev" // Assuming or placeholder
    },
    about: "AI Engineer & Full Stack Developer specializing in bridging the gap between complex Machine Learning models and robust web applications. Proven track record of architecting scalable, end-to-end AI products during hackathons and freelance deployments.",
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        school: "JIS College of Engineering",
        period: "2023 — 2027",
        details: "CGPA: 9.4 | Focus: Machine Learning, Cybersecurity, Full-Stack Development."
      },
      {
        degree: "Higher Secondary Education (Pure Science)",
        school: "Ramakrishna Vivekananda Mission Vidyabhawan",
        period: "2011 — 2023",
        details: "Scored 84.6% in WBCHSC."
      }
    ],
    experience: [
      {
        role: "Frontend Developer & AI Engineer",
        company: "PAROT.DEV",
        period: "2025 — Present",
        desc: "Developing modern web interfaces and integrating AI-driven solutions for cutting-edge products using Next.js and TypeScript."
      },
      {
        role: "Freelance ML & Frontend Engineer",
        company: "Australia Based Startup",
        period: "Nov 2025 — Jan 2026",
        desc: "Architected end-to-end ML solutions with OCR capabilities and modern React frontends."
      },
      {
        role: "Machine Learning Intern",
        company: "Internship Studio",
        period: "Oct 2024 — Dec 2024",
        desc: "Focused on data model training and preprocessing pipelines in the Machine Learning domain."
      }
    ],
    skills: [
      { category: "Machine Learning", items: ["Python", "NLP", "Scikit-Learn", "PyTorch", "Pandas", "NumPy"] },
      { category: "Full Stack", items: ["React", "Next.js", "Node.js", "Flask", "TypeScript", "Tailwind CSS"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "MYSQL", "Supabase", "Appwrite"] },
      { category: "Cybersecurity", items: ["Kali Linux", "Metasploit", "Network Security", "Cryptography"] },
      { category: "Others", items: ["Android Dev (Java/Kotlin)", "C++", "Vite", "REST APIs", "Git/GitHub"] }
    ],
    projects: [
      {
        name: "EcoTwin",
        type: "Solo Project",
        desc: "AI digital twin platform analyzing personal carbon footprints. Integrated predictive ML models to increase data accuracy by 20% and provide actionable eco-insights.",
        tech: "PostgreSQL, Flask, React, ML"
      },
      {
        name: "Nestate",
        type: "Group Project",
        desc: "Comprehensive real estate management dashboard. Implemented OCR and ML property valuation models, automating data entry and reducing processing time by 30%.",
        tech: "Next.js, Node.js, PostgreSQL"
      },
      {
        name: "Ahaarsetu",
        type: "SIH Project",
        desc: "Food accessibility platform combating food waste. Engineered demand forecasting ML models and NLP pipelines to match surplus food with localized demand.",
        tech: "React Native, MongoDB, ML"
      },
      {
        name: "TwinTitles",
        type: "Group Project",
        desc: "NLP system detecting academic plagiarism. Implemented Sentence Transformers to achieve a 92% semantic similarity accuracy rate across large datasets.",
        tech: "HuggingFace, PyTorch, NLP"
      }
    ],
    publications: [
      {
        title: "Advances in TinyML: A Systematic Review of Architectures, Algorithms and Innovations",
        publisher: "Scrivener Publication / Tiny Machine Learning Book",
        year: "2024"
      }
    ],
    achievements: [
      "Top Project Contributor - Hack4Bengal",
      "Finalist - StatusCode 2",
      "Honorable Mention - Hackodisha 5.0",
      "Key Developer - Smart India Hackathon"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0B0A10] text-gray-300 py-12 px-4 sm:px-6 relative overflow-hidden print:bg-white print:text-black print:p-0 print:m-0">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF85A1]/5 rounded-full blur-[120px] -z-10 print:hidden" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 print:hidden" />

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="text-[#FF85A1]" /> Curriculum Vitae
        </h1>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl transition-all font-bold text-sm"
          >
            <Printer size={18} /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Card */}
      <div 
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-[#0B0A10]/50 border border-white/5 backdrop-blur-xl p-8 sm:p-12 md:p-16 rounded-[40px] shadow-2xl print:shadow-none print:border-0 print:p-0 print:bg-white print:text-black resume-container"
      >
        {/* Header */}
        <header className="flex flex-col md:flex-row print:flex-row justify-between items-start md:items-center print:items-center gap-6 print:gap-2 mb-12 print:mb-4 border-b border-white/10 pb-12 print:pb-4 print:border-gray-300">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight print:text-black uppercase">
              {data.name}
            </h2>
            <p className="text-[#FF85A1] font-bold tracking-[0.2em] uppercase text-sm md:text-base print:text-gray-600">
              {data.title}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium">
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-[#FF85A1] print:text-black" /> {data.contact.email}
            </a>
            <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-[#FF85A1] print:text-black" /> {data.contact.phone}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FF85A1] print:text-black" /> {data.contact.location}
            </p>
            <a href={`https://${data.contact.linkedin}`} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <Linkedin size={16} className="text-[#FF85A1] print:text-black" /> {data.contact.linkedin.split('/in/')[1]}
            </a>
            <a href={`https://${data.contact.github}`} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={16} className="text-[#FF85A1] print:text-black" /> {data.contact.github.split('.com/')[1]}
            </a>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row print:flex-row gap-12 print:gap-8">
          {/* Left Column: Summary, Skills, Achievements */}
          <div className="lg:w-1/3 print:w-1/3 space-y-12 print:space-y-6">
            {/* About */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-4 print:mb-2 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Profile
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 font-medium print:text-gray-700">
                {data.about}
              </p>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6 print:mb-3 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Technical Arsenal
              </h3>
              <div className="space-y-6 print:space-y-3">
                {data.skills.map((skillGroup, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <p className="text-[10px] font-black text-[#FF85A1] uppercase tracking-widest mb-2 print:text-black">
                      {skillGroup.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 print:bg-gray-100 print:border-gray-200 print:text-black">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6 print:mb-3 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Achievements
              </h3>
              <ul className="space-y-3 print:space-y-1.5">
                {data.achievements.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-400 group print:text-gray-700 print:break-inside-avoid">
                    <Award size={16} className="text-[#FF85A1] shrink-0 print:text-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Experience, Projects, Education */}
          <div className="lg:w-2/3 print:w-2/3 space-y-12 print:space-y-6">
            {/* Experience */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 print:mb-4 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Experience
              </h3>
              <div className="space-y-10 print:space-y-4">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 group print:border-gray-300 print:pl-4 print:break-inside-avoid">
                    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-[#FF85A1] group-hover:scale-150 transition-transform print:bg-black print:-left-[4px] print:w-[7px] print:h-[7px]" />
                    <div className="flex justify-between items-start mb-2 print:mb-0.5">
                      <h4 className="text-xl print:text-base font-bold text-white print:text-black">{exp.role}</h4>
                      <span className="text-xs print:text-[10px] font-mono font-bold text-gray-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-[#FF85A1] text-xs print:text-[10px] font-black uppercase tracking-widest mb-4 print:mb-1 print:text-gray-600">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed print:text-gray-700">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 print:mb-4 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Mission Deployments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-6 print:gap-3">
                {data.projects.map((proj, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl print:bg-transparent print:border-gray-300 print:p-3 print:rounded-md print:break-inside-avoid">
                    <h4 className="text-lg print:text-sm font-bold text-white mb-1 print:text-black">{proj.name}</h4>
                    <p className="text-[10px] text-[#FF85A1] font-bold uppercase tracking-widest mb-3 print:mb-1 print:text-gray-500">{proj.type}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4 print:mb-2 print:text-gray-700">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tech.split(',').map((t, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-bold text-white/40 uppercase tracking-tighter print:text-gray-500">
                          {t.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Publication */}
            <section className="print:break-inside-avoid">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6 print:mb-3 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Publication
              </h3>
              <div className="p-6 bg-white/5 border border-[#FF85A1]/20 rounded-3xl relative overflow-hidden print:bg-transparent print:border-gray-300 print:p-3 print:rounded-md">
                <div className="absolute top-0 right-0 p-4 opacity-10 print:hidden">
                  <BookOpen size={40} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 italic print:text-black">
                  &quot;{data.publications[0].title}&quot;
                </h4>
                <p className="text-sm text-gray-400 print:text-gray-700">
                  Published in <span className="text-[#FF85A1] font-bold print:text-black">{data.publications[0].publisher}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{data.publications[0].year}</p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 print:mb-4 flex items-center gap-2 print:text-black">
                <span className="w-6 h-[2px] bg-[#FF85A1] print:bg-black" /> Education
              </h3>
              <div className="space-y-8 print:space-y-4">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="group print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-1 print:mb-0.5">
                      <h4 className="text-lg print:text-base font-bold text-white group-hover:text-[#FF85A1] transition-colors print:text-black">{edu.degree}</h4>
                      <span className="text-xs print:text-[10px] font-mono font-bold text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-sm print:text-xs text-gray-400 font-medium mb-2 print:mb-1 print:text-gray-800">{edu.school}</p>
                    <p className="text-xs text-gray-500 leading-relaxed print:text-gray-600">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>


      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .resume-container {
            border-radius: 0 !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
