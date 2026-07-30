import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, skills } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section className="mx-auto max-w-6xl px-6 pt-14 pb-8 sm:pt-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
        <Reveal className="sm:col-span-4">
          <BentoCard className="flex h-full flex-col justify-between bg-surface">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border-c bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                Open to Product &amp; Data-focused roles
              </span>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-accent">
                {profile.title}
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {profile.tagline}.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                View projects
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-border-c bg-surface-2 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Resume
                <Download size={16} />
              </a>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08} className="sm:col-span-2">
          <BentoCard className="flex h-full flex-col items-center justify-center gap-4 bg-accent text-center text-white">
            <div className="font-display flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 text-2xl font-semibold ring-1 ring-white/20">
              {initials}
            </div>
            <div>
              <p className="text-sm font-medium text-white/80">
                {profile.location}
              </p>
              <p className="mt-1 text-sm text-white/70">
                Analytics · GenAI · ML
              </p>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.14} className="sm:col-span-6">
          <BentoCard className="bg-surface-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Toolkit
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border-c bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
