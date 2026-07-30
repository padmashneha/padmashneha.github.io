import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsGrid />
      <Experience />
      <Contact />
    </>
  );
}
