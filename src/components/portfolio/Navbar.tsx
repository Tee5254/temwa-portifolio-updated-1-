import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 transition-all duration-300 sm:px-8",
          scrolled && "mt-3 rounded-2xl glass sm:mx-4",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold">
          <span className="grid size-9 place-items-center rounded-xl border border-glass-border bg-surface">
            <Terminal className="size-4 text-primary" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-glass-border bg-surface md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-4 mt-2 grid gap-1 rounded-2xl glass p-3 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
