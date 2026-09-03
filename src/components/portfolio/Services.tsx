import { Check } from "lucide-react";

import { pricing } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Web & App Development"
      title={
        <>
          Packages built for <span className="text-gradient">your business</span>
        </>
      }
      description="Transparent pricing for websites and web applications — pick a package and we start building."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.06}>
            <article
              className={
                "relative flex h-full flex-col rounded-2xl glass p-7 transition-all hover:-translate-y-1 hover:border-primary/40" +
                (tier.highlighted ? " border-primary/50 glow-ring" : "")
              }
            >
              {tier.highlighted && (
                <span
                  className="absolute -top-3 left-6 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-3 font-display text-3xl font-semibold text-gradient">{tier.price}</p>
              <ul className="mt-6 grid flex-1 content-start gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  tier.highlighted
                    ? "mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    : "mt-8 inline-flex items-center justify-center rounded-xl border border-glass-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
                }
                style={tier.highlighted ? { background: "var(--gradient-brand)" } : undefined}
              >
                Get started
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
