import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import { profile, stats } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame >= total) window.clearInterval(id);
    }, 16);
    return () => window.clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

const highlights = [
  "End-to-end delivery: discovery, build, deploy, support",
  "Typed, tested codebases your next developer will thank you for",
  "Clear weekly communication and transparent timelines",
  "Performance and accessibility treated as requirements, not extras",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Engineering that turns ideas into <span className="text-gradient">shipped products</span>
        </>
      }
      description={profile.tagline}
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a software engineer with six years of experience building web platforms, APIs and
            internal tools. My work sits where thoughtful interface design meets solid backend
            engineering — interfaces that feel effortless, backed by systems that hold up under
            load.
          </p>
          <p>
            I've delivered products for fintech, healthcare and logistics teams, often as the
            technical lead responsible for architecture and release. I care about small bundles,
            fast queries, honest estimates and code that stays readable a year later.
          </p>
          <ul className="grid gap-3 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
