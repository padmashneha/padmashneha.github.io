import { Award, BadgeCheck } from "lucide-react";
import { awards, certifications, experience } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <SectionEyebrow index="03" label="Experience" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-5">
        <Reveal className="sm:col-span-3">
          <BentoCard className="h-full bg-surface">
            <div className="space-y-8">
              {experience.map((role) => (
                <div
                  key={role.role + role.org}
                  className="border-l-2 border-border-c pl-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {role.role}
                    </h3>
                    <span className="text-xs font-medium text-muted">
                      {role.dates}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {role.org}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>

        <div className="flex flex-col gap-4 sm:col-span-2 sm:gap-5">
          <Reveal delay={0.08}>
            <BentoCard className="bg-surface-2">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <BadgeCheck size={18} />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2.5">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm leading-snug text-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>

          <Reveal delay={0.14}>
            <BentoCard className="bg-ink text-ink-foreground">
              <div className="mb-4 flex items-center gap-2 text-accent-strong">
                <Award size={18} />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
                  Awards
                </h3>
              </div>
              <ul className="space-y-2.5">
                {awards.map((award) => (
                  <li key={award} className="text-sm leading-snug text-ink-muted">
                    {award}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
