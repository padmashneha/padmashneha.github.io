import { ArrowUpRight, Download, Link as LinkIcon, Mail, Newspaper } from "lucide-react";
import { profile } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/padmashneha",
    href: profile.links.linkedin,
    icon: LinkIcon,
  },
  {
    label: "Medium",
    value: "Writing on data & analytics",
    href: profile.links.medium,
    icon: Newspaper,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <SectionHead title="Contact" />

      <Reveal delay={0.05}>
        <BentoCard hover={false} className="bg-ink text-ink-foreground">
          <h2 className="font-display max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
            Let&apos;s turn your data into a{" "}
            <span className="text-mustard">decision.</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-ink-foreground/70 sm:text-base">
            Open to product and data-focused roles, collaborations, and
            conversations about analytics, GenAI, and applied ML.
          </p>
        </BentoCard>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5">
        {LINKS.map((link, i) => (
          <Reveal key={link.label} delay={0.08 + i * 0.05}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="block h-full"
            >
              <BentoCard className="flex h-full flex-col justify-between bg-surface">
                <div className="flex items-center justify-between">
                  <span className="nb-sm flex h-8 w-8 items-center justify-center rounded-md bg-mustard-soft">
                    <link.icon size={15} className="text-ink" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                    {link.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-ink">
                    {link.value}
                  </p>
                </div>
              </BentoCard>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-4 sm:mt-5">
        <a
          href={profile.resumeFile}
          download
          className="nb-sm flex items-center justify-center gap-2 rounded-[16px] border-dashed bg-paper-2 px-6 py-5 font-display text-sm font-bold text-ink transition-colors hover:bg-mustard-soft"
        >
          Download full résumé (PDF)
          <Download size={16} />
        </a>
      </Reveal>
    </section>
  );
}
