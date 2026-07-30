import { profile } from "@/content/data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t-[1.5px] border-page-fg/30 pt-6 font-display text-xs text-page-fg/70 sm:flex-row">
        <p>
          © {new Date().getFullYear().toString()} {profile.name}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-mustard"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
