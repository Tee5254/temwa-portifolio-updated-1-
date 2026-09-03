import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import { socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function WhatsApp(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24a8.19 8.19 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.15-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: WhatsApp as unknown as LucideIcon,
  mail: Mail,
};

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon] ?? Mail;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.label}
            className="grid size-11 place-items-center rounded-xl border border-glass-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Icon className="size-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
