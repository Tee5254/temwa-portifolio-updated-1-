import { ArrowUp } from "lucide-react";

import { profile } from "@/data/portfolio";
import { Socials } from "./Socials";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
          <Socials className="mt-5" />
        </div>

        <nav className="md:justify-self-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
          <ul className="mt-4 grid gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end md:text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block text-sm text-foreground/90 transition-colors hover:text-primary"
          >
            {profile.email}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          <a
            href="#home"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-glass-border bg-surface px-4 py-2.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp className="size-4" />
            Back to top
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-glass-border px-5 pt-6 sm:px-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Designed and built with React, TypeScript and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
