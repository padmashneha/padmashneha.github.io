import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const CARD_COLORS = ["bg-mustard-soft", "bg-sage-soft", "bg-lilac-soft"];

export function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <SectionHead title="Case studies" count={`${projects.length} selected works`} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link href={`/projects/${project.slug}`} className="block h-full">
              <BentoCard
                as="article"
                className={`flex h-full flex-col justify-between ${CARD_COLORS[i % CARD_COLORS.length]}`}
              >
                <div>
                  <span className="nb-sm inline-block rounded-full bg-surface px-3 py-1 font-display text-xs font-bold text-ink">
                    {project.metric}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
                <div className="nb-sm mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-surface px-3.5 py-2 font-display text-xs font-bold text-ink">
                  Read case study
                  <ArrowUpRight
                    size={14}
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
