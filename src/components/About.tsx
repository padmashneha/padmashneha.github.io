import { about } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          About
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <BentoCard className="bg-surface">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </BentoCard>
      </Reveal>
    </section>
  );
}
