import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { profile, projects } from "@/content/data";
import { BentoCard } from "@/components/BentoCard";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.summary,
    },
  };
}

const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach & insights" },
  { key: "impact", label: "Impact" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-page-fg/70 transition-colors hover:text-page-fg"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6">
          <span className="nb-sm inline-block rounded-full bg-mustard px-3 py-1 font-display text-xs font-bold text-ink">
            {project.metric}
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-page-fg sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-page-fg/70 sm:text-lg">
            {project.summary}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <BentoCard hover={false} className="mt-8 bg-paper-2">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-muted">
            Tools used
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            {project.tools}
          </p>
        </BentoCard>
      </Reveal>

      <div className="mt-6 space-y-6">
        {SECTIONS.map((section, i) => (
          <Reveal key={section.key} delay={0.12 + i * 0.06}>
            <BentoCard className="bg-surface">
              <h2 className="font-display text-lg font-bold text-ink">
                {section.label}
              </h2>
              <div className="mt-3 space-y-4">
                {project[section.key].split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.35} className="mt-8">
        <Link
          href="/#contact"
          className="nb nb-hover flex items-center justify-center rounded-[16px] bg-ink px-6 py-5 font-display text-sm font-bold text-ink-foreground"
        >
          Have a similar problem?{" "}
          <span className="ml-1 text-mustard">Let&apos;s talk.</span>
        </Link>
      </Reveal>
    </div>
  );
}
