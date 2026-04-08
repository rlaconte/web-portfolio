import Hero from "@/components/hero";
import About from "@/components/about";
import AIPhilosophy from "@/components/ai-philosophy";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AIPhilosophy />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
