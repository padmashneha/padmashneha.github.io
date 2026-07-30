import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border-c bg-surface p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
