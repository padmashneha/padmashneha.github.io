import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { highlights, profile, skills } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-8 sm:pt-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
        <Reveal className="sm:col-span-4">
          <BentoCard className="flex h-full flex-col justify-between bg-surface">
            <div>
              <span className="nb-sm inline-flex items-center gap-2 rounded-full bg-paper-2 px-3 py-1.5 font-display text-xs font-semibold text-ink">
                <span className="nb-sm h-2 w-2 rounded-full bg-mustard" />
                Open to Product &amp; Data-focused roles · {profile.location}
              </span>
              <h1 className="font-display mt-6 text-4xl font-bold leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                {profile.name}
              </h1>
              <span className="nb-sm mt-4 inline-block rounded-md bg-mustard-soft px-3 py-1 font-display text-base font-bold text-ink">
                {profile.title}
              </span>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {profile.tagline}.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className="nb nb-hover inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-display text-sm font-bold text-ink-foreground"
              >
                View case studies
                <ArrowUpRight size={16} className="text-mustard" />
              </Link>
              <a
                href={profile.resumeFile}
                download
                className="nb nb-hover inline-flex items-center gap-1.5 rounded-full bg-surface px-5 py-2.5 font-display text-sm font-bold text-ink"
              >
                Résumé
                <Download size={16} />
              </a>
            </div>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08} className="sm:col-span-2">
          <BentoCard hover={false} className="flex h-full flex-col justify-center gap-3.5 bg-mustard">
            <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-ink">
              Snapshot
            </p>
            {highlights.map((item) => (
              <div
                key={item.label}
                className="nb-sm flex items-baseline gap-2.5 rounded-[10px] bg-surface px-3.5 py-2.5"
              >
                <span className="font-display shrink-0 text-xl font-bold text-ink">
                  {item.value}
                </span>
                <span className="text-xs leading-snug text-muted">
                  {item.label}
                </span>
              </div>
            ))}
          </BentoCard>
        </Reveal>

        <Reveal delay={0.14} className="sm:col-span-6">
          <BentoCard className="flex flex-wrap items-center gap-3 bg-paper-2">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-muted">
              Toolkit
            </p>
            {skills.map((skill) => (
              <span
                key={skill}
                className="nb-sm rounded-full bg-surface px-4 py-2 font-display text-sm font-semibold text-ink"
              >
                {skill}
              </span>
            ))}
          </BentoCard>
        </Reveal>
      </div>
    </section>
  );
}
