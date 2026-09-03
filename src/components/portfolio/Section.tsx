import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.75rem]">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
