import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";

export function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          Selected work
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link href={`/projects/${project.slug}`} className="block h-full">
              <BentoCard
                as="article"
                className="flex h-full flex-col justify-between bg-surface"
              >
                <div>
                  <span className="inline-block rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-accent-2">
                    {project.metric}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read case study
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </BentoCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
