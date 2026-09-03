import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";

import { profile } from "@/data/portfolio";
import { Section, Reveal } from "./Section";
import { Socials } from "./Socials";

const inputClass =
  "w-full rounded-xl border border-glass-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    const subject = encodeURIComponent(values.subject || `New enquiry from ${values.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp?.replace(/\D/g, "")}`,
    },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">worth shipping</span>
        </>
      }
      description="Tell me about your project and I'll reply within one business day with next steps."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="grid h-full gap-4 rounded-2xl glass p-7">
            {details.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-glass-border bg-surface text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground/90">{detail.value}</p>
                  </div>
                </div>
              );
              return detail.href ? (
                <a key={detail.label} href={detail.href} className="transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
            <div className="mt-auto pt-4">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Elsewhere
              </p>
              <Socials />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-2xl glass p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-2 block text-sm text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                value={values.subject}
                onChange={(e) => setValues({ ...values, subject: e.target.value })}
                placeholder="Project enquiry"
                className={inputClass}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                placeholder="A little about the product, timeline and budget…"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ring transition-transform hover:-translate-y-0.5 sm:w-auto"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Send className="size-4" />
              Send message
            </button>
            {sent && (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="size-4" />
                Your email client is opening — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
