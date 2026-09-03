import { Briefcase, GraduationCap } from "lucide-react";

import { timeline } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

export function Timeline() {
  return (
    <Section
      id="journey"
      eyebrow="Experience & education"
      title={
        <>
          The <span className="text-gradient">journey</span> so far
        </>
      }
      description="Six years of building, leading and learning across product teams and client work."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-glass-border to-transparent sm:left-[23px]"
        />
        <div className="space-y-6">
          {timeline.map((item, i) => {
            const Icon = item.kind === "work" ? Briefcase : GraduationCap;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="relative flex gap-5 sm:gap-7">
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-xl border border-glass-border bg-card text-primary sm:size-12">
                    <Icon className="size-4 sm:size-5" />
                  </span>
                  <div className="flex-1 rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      {item.period}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
