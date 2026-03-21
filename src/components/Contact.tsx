"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title">Communication Link</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Open for transmission. Whether it&apos;s a project inquiry or just a technical discussion, I&apos;m ready to connect through the digital void.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              { icon: <Mail size={32} />, title: "Subspace Channel", value: "taniabiswas232@gmail.com", color: "text-primary" },
              { icon: <Phone size={32} />, title: "Secure Line", value: "+91 9123918909", color: "text-secondary" },
              { icon: <MapPin size={32} />, title: "Coordinates", value: "West Bengal, India", color: "text-accent" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 group">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform group-hover:bg-white/10`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 mb-2">{item.title}</h4>
                  <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 space-y-8 bg-white/5 border-white/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Identity</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-gray-600 font-bold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Encryption</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-gray-600 font-bold"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Mission Objective</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-gray-600 font-bold"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Payload</label>
              <textarea
                placeholder="Your Message..."
                rows={4}
                className="w-full bg-white/5 px-5 py-4 rounded-xl border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-gray-600 font-bold resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
              Transmit Data
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
