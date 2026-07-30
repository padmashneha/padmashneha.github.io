import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoCard({
  children,
  className,
  as: Tag = "div",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  hover?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "nb group relative overflow-hidden rounded-[20px] bg-surface p-6 sm:p-8",
        hover && "nb-hover",
        className
      )}
    >
      {children}
    </Tag>
  );
}
