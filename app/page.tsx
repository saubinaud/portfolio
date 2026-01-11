import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <About />
      <Projects />
      <Metrics />
      <Skills />
      <Contact />
    </div>
  );
}
