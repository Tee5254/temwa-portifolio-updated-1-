import { skillGroups } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The <span className="text-gradient">toolkit</span> behind the work
        </>
      }
      description="A pragmatic stack chosen for speed of delivery, long-term maintainability and predictable operations."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-11 place-items-center rounded-xl border border-glass-border bg-surface text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-glass-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
