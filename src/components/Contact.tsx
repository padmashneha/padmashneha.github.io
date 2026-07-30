import { ArrowUpRight, Download, Link as LinkIcon, Mail, Newspaper } from "lucide-react";
import { profile } from "@/content/data";
import { BentoCard } from "./BentoCard";
import { Reveal } from "./Reveal";

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
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <BentoCard className="bg-accent text-white">
          <h2 className="font-display max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Let&apos;s turn your data into a decision.
          </h2>
          <p className="mt-3 max-w-lg text-white/85">
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
                  <link.icon size={20} className="text-accent-2" />
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {link.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-foreground">
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
          className="flex items-center justify-center gap-2 rounded-3xl border border-dashed border-border-c bg-surface-2 px-6 py-5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Download full resume (PDF)
          <Download size={16} />
        </a>
      </Reveal>
    </section>
  );
}
