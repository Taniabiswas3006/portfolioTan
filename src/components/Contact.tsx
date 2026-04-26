"use client";

import { Github, Linkedin, ArrowRight, Mail, Phone } from "lucide-react";
import TextType from "./TextType";

export default function Contact() {
    const contactMethods = [
        {
            icon: <Github className="w-8 h-8" />,
            title: "Explore My Code",
            desc: "Dive into my repositories. I regularly publish open-source projects, machine learning experiments, and modern frontend architectures.",
            link: {
                name: "Taniabiswas3006",
                href: "https://github.com/Taniabiswas3006"
            },
        },
        {
            icon: <Linkedin className="w-8 h-10" />,
            title: "Connect professionally",
            desc: "I'm always open to discussing new engineering opportunities, startup collaborations, or exchanging ideas.",
            link: {
                name: "Tania Biswas",
                href: "https://www.linkedin.com/in/tania-biswas-30469a29a"
            },
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-transparent">
            {/* Background ambient glow matching the portfolio theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF85A1]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 gap-16 md:px-8 flex flex-col lg:flex-row items-center relative z-10">
                <div className="max-w-md w-full text-center lg:text-left">
                    <h3 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem] !text-center lg:!text-left">
                        <TextType
                            texts={["Let's Connect", "Transmit Data", "Initiate Link"]}
                            typingSpeed={90}
                            deletingSpeed={50}
                            pauseDuration={2500}
                        />
                    </h3>
                    <p className="mt-6 text-gray-400 leading-relaxed text-lg sm:text-xl font-medium">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    
                    <div className="mt-10 flex flex-col gap-4 items-center lg:items-start text-gray-300 font-mono">
                        <a href="mailto:taniabiswas232@gmail.com" className="flex items-center gap-3 hover:text-[#FF85A1] transition-colors group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF85A1]/50 group-hover:bg-[#FF85A1]/10 transition-colors">
                                <Mail className="w-5 h-5 text-[#FF85A1]" />
                            </div>
                            <span className="text-sm sm:text-base font-bold tracking-tight">taniabiswas232@gmail.com</span>
                        </a>
                        <a href="tel:+919123918909" className="flex items-center gap-3 hover:text-[#FF85A1] transition-colors group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF85A1]/50 group-hover:bg-[#FF85A1]/10 transition-colors">
                                <Phone className="w-5 h-5 text-[#FF85A1]" />
                            </div>
                            <span className="text-sm sm:text-base font-bold tracking-widest">+91 9123918909</span>
                        </a>
                    </div>
                </div>

                <div className="flex-1 w-full mt-12 lg:mt-0 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
                    <ul className="gap-y-12 gap-x-12 items-start flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-x-0">
                        {contactMethods.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-5 border-t border-white/10 pt-8 first:pt-0 first:border-0 md:max-w-[45%] lg:max-w-none md:pt-0 md:border-t-0 md:border-l md:border-white/10 md:first:border-0 md:px-12 md:first:pl-0 flex-1 group w-full"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-[#FF85A1]/30 bg-[#FF85A1]/10 flex items-center justify-center text-[#FF85A1] shadow-[0_0_20px_rgba(255,133,161,0.15)] group-hover:scale-110 group-hover:bg-[#FF85A1]/20 transition-all duration-500">
                                    {item.icon}
                                </div>

                                <h4 className="text-white text-xl sm:text-2xl font-bold font-mono tracking-tight pt-2 group-hover:text-[#FF85A1] transition-colors duration-300">
                                    {item.title}
                                </h4>

                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    {item.desc}
                                </p>

                                <a
                                    href={item.link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 text-sm sm:text-base text-[#FF85A1] duration-300 hover:text-white font-bold tracking-[0.2em] uppercase mt-2 w-full sm:w-max bg-white/5 sm:bg-transparent py-4 sm:p-0 rounded-xl sm:rounded-none"
                                >
                                    {item.link.name}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
