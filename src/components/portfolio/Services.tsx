import { useState } from "react";
import { Check } from "lucide-react";

import { defaultPricingCategory, maintenance, paymentTerms, pricingCategories } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

export function Services() {
  const [activeId, setActiveId] = useState<string>(defaultPricingCategory.id);
  const active = pricingCategories.find((c) => c.id === activeId) ?? defaultPricingCategory;
  const showTerms = active.id !== "websites";

  return (
    <Section
      id="services"
      eyebrow="Web, Systems & App Development"
      title={
        <>
          Packages built for <span className="text-gradient">your business</span>
        </>
      }
      description="Transparent pricing for websites, business management systems and mobile apps — pick a package and we start building."
    >
      <div
        role="tablist"
        aria-label="Package categories"
        className="mb-8 flex flex-wrap gap-2"
      >
        {pricingCategories.map((category) => {
          const selected = category.id === active.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(category.id)}
              className={
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors " +
                (selected
                  ? "text-primary-foreground"
                  : "border border-glass-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-primary")
              }
              style={selected ? { background: "var(--gradient-brand)" } : undefined}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <p className="mb-8 max-w-2xl text-sm text-muted-foreground">{active.intro}</p>

      <div className="grid gap-5 lg:grid-cols-3">
        {active.tiers.map((tier, i) => (
          <Reveal key={`${active.id}-${tier.name}`} delay={i * 0.06}>
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
              <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
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

      {(active.note || showTerms) && (
        <div className="mt-8 grid gap-3 text-xs text-muted-foreground">
          {active.note && <p>{active.note}</p>}
          {showTerms && (
            <>
              <p>
                <span className="font-semibold text-foreground">{maintenance.title}:</span>{" "}
                {maintenance.text}
              </p>
              <p>
                <span className="font-semibold text-foreground">Payment terms:</span> {paymentTerms}
              </p>
            </>
          )}
        </div>
      )}
    </Section>
  );
}
