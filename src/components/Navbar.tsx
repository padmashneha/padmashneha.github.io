"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#projects", label: "Projects", dot: "bg-mustard" },
  { href: "/#about", label: "About", dot: "bg-sage" },
  { href: "/#experience", label: "Experience", dot: "bg-lilac" },
  { href: "/#contact", label: "Contact", dot: "bg-ink" },
];

export function Navbar() {
  return (
    <div className="sticky top-4 z-50 mx-auto max-w-6xl px-6">
      <nav className="nb flex items-center justify-between rounded-full bg-surface/90 px-5 py-3 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink"
        >
          <span className="nb-sm flex h-8 w-8 items-center justify-center rounded-lg bg-mustard text-xs">
            {"</>"}
          </span>
          PADMA SHNEHA
        </Link>
        <div className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-full px-3.5 py-2 font-display text-[13px] font-semibold text-ink transition-colors hover:bg-paper-2"
            >
              <span className={`nb-sm h-1.5 w-1.5 rounded-full ${link.dot}`} />
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href="/#contact"
            className="nb nb-hover hidden rounded-full bg-ink px-4 py-2 font-display text-[13px] font-bold text-ink-foreground sm:inline-block"
          >
            Let&apos;s talk
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
