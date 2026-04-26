import Navbar from "@/components/Navbar";
import LandingIntro from "@/components/LandingIntro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Publication from "@/components/Publication";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      <Starfield />
      <Navbar />
      <LandingIntro />
      <Hero />
      <div className="relative z-10">
        <About />
        <Education />
        <Skills />
        <Projects />
        <TechStack />
        <Hackathons />
        <Certifications />
        <Publication />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
