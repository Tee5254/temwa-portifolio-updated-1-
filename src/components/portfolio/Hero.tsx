import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "motion/react";

import temwaPhoto from "@/assets/temwa.jpg";
import { profile } from "@/data/portfolio";
import { Socials } from "./Socials";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{ background: "var(--gradient-halo)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-surface px-4 py-1.5 font-mono text-xs tracking-wide text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Available for new projects
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-2 block text-gradient">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-brand)" }}
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-surface px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="size-4" />
              Let's work together
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Socials />
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl glass p-1.5 glow-ring">
            <img
              src={temwaPhoto}
              alt={`${profile.name}, ${profile.role}`}
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-6 hidden rounded-2xl bg-card/90 border border-glass-border backdrop-blur-md px-5 py-4 lg:block"
          >
            <p className="font-display text-2xl font-semibold text-gradient">3+ yrs</p>
            <p className="text-xs text-muted-foreground">building for the web</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
