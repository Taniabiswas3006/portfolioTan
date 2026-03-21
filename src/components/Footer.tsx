"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-spaceBlack relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">TB.</h4>
            <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">Digital Intelligence Artisan</p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <Github size={24} />, href: "https://github.com", label: "Github" },
              { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "Linkedin" },
              { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm font-bold tracking-tighter">
            © {new Date().getFullYear()} TANIA BISWAS. <span className="text-primary/20">STELLAR EDITION</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
