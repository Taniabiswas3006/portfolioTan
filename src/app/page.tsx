import Navbar from "@/components/Navbar";
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      <Starfield />
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <Education />
        <Skills />
        <Projects />
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
