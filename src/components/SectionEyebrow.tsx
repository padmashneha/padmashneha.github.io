import { Reveal } from "./Reveal";

export function SectionEyebrow({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="mb-5 flex items-center gap-4">
        <span className="font-display text-sm font-semibold text-accent">
          {index}
        </span>
        <span className="h-px flex-1 max-w-10 bg-border-c" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
