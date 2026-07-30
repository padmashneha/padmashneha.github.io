import { Award, Check } from "lucide-react";
import { awards, certifications } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { SectionHead } from "./SectionHead";

export function CertificationsAwards() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-10 sm:py-14"
    >
      <SectionHead title="Certifications & awards" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-5">
        <BentoCard hover={false} className="bg-surface sm:col-span-3">
          <div className="space-y-2.5">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="nb-sm flex items-center gap-3 rounded-[10px] bg-paper-2 px-4 py-3"
              >
                <span className="nb-sm flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage">
                  <Check size={13} className="text-ink" />
                </span>
                <span className="text-sm font-semibold text-ink">{cert}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard hover={false} className="bg-lilac sm:col-span-2">
          <div className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <Award size={18} />
            Awards
          </div>
          <div className="mt-4 space-y-3">
            {awards.map((award) => (
              <div
                key={award}
                className="nb-sm rounded-[10px] bg-surface px-4 py-3 text-sm font-bold text-ink"
              >
                {award}
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
