import { Reveal } from "./Reveal";

export function SectionHead({
  title,
  count,
}: {
  title: string;
  count?: string;
}) {
  return (
    <Reveal>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl font-bold text-page-fg">
          {title}
        </h2>
        {count && (
          <span className="nb-sm rounded-full bg-surface px-3 py-1.5 font-display text-xs font-bold text-ink">
            {count}
          </span>
        )}
      </div>
    </Reveal>
  );
}
