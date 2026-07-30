import { Briefcase } from "lucide-react";
import { experience } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <SectionHead title="Experience" />
      <BentoCard hover={false} className="bg-surface">
        <div className="space-y-4">
          {experience.map((role) => (
            <div
              key={role.role + role.org}
              className="nb-sm flex items-start gap-3.5 rounded-[12px] bg-paper-2 p-4 sm:p-5"
            >
              <span className="nb-sm flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage-soft">
                <Briefcase size={16} className="text-ink" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-bold text-ink">
                    {role.role}
                  </h3>
                  <span className="font-display text-xs font-semibold text-muted">
                    {role.dates}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-muted">
                  {role.org}
                  {role.location ? ` · ${role.location}` : ""}
                </p>
                <ul className="mt-3 space-y-1.5">
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
            </div>
          ))}
        </div>
      </BentoCard>
    </section>
  );
}
