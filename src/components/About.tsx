"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-14 relative overflow-hidden group"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

            <h2 className="section-title text-left !mb-10">Systems & Logic</h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                As a Computer Science and Engineering student at <span className="text-secondary font-bold">JIS College of Engineering</span>,
                I treat every line of code as an exploration into the unknown. My technical odyssey is fueled by a pursuit of intelligence and security.
              </p>
              <p>
                My expertise spans the vast reaches of <span className="text-primaryGlow font-medium">Machine Learning</span>,
                the protective layers of <span className="text-primaryGlow font-medium">Cybersecurity</span>, and the architectural foundations of <span className="text-primaryGlow font-medium">Full Stack Development</span>.
              </p>
              <p>
                In the high-energy orbits of hackathons, I thrive on rapid prototyping and collaborative problem-solving. I am a lifelong student of technology, constantly recalibrating my skills to stay ahead of the digital curve.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Origin", value: "West Bengal, IN" },
                { label: "Working", value: "Parot.Dev" },
                { label: "Role", value: "AI Engineer & Frontend Developer" },
                { label: "Status", value: "Active" },
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-l border-primary/20 pl-4">
                  <p className="text-[10px] uppercase tracking-tighter text-primary font-bold">{item.label}</p>
                  <p className="font-bold text-white text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
