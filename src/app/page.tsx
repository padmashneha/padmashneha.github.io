import { About } from "@/components/About";
import { CertificationsAwards } from "@/components/CertificationsAwards";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <About />
      <Experience />
      <CertificationsAwards />
      <Contact />
    </>
  );
}
