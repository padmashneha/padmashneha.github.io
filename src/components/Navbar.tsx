"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-c/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Padma Shneha
        </Link>
        <div className="hidden items-center gap-6 sm:flex sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 sm:inline-block"
          >
            Let&apos;s talk
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
