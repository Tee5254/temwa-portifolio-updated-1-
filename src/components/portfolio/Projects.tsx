import { ExternalLink, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import { Section, Reveal } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="text-gradient">work</span>
        </>
      }
      description="A sample of products I've designed, built and shipped — each one running in production."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:border-primary/40">
              <div
                className={`relative h-36 bg-gradient-to-br ${project.accent} border-b border-glass-border`}
              >
                <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
                <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-glass-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-glass-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="size-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <ExternalLink className="size-4" />
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
