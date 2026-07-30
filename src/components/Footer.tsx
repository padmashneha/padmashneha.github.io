import { profile } from "@/content/data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-border-c pt-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear().toString()} {profile.name}. Built with
          Next.js.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
