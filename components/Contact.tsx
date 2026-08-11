"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { Magnetic } from "@/components/animations/Magnetic";
import { site } from "@/data/site";

const contactLinks = [
  { label: "Email", value: site.email, href: site.socials.email, icon: Mail },
  { label: "GitHub", value: "github.com/lancetanio", href: site.socials.github, icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/lancetanio", href: site.socials.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(null), 3200);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      showToast("Email address copied to clipboard.");
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      showToast("Could not copy automatically — email is shown below.");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    showToast("Opening your email client — hit send to finish.");
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
              Contact
            </span>
            <RevealText
              as="h2"
              text="Let's build something great together."
              mode="words"
              scroll
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
            />
            <FadeIn scroll delay={0.1} y={18}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Have a project in mind, a role to fill, or just want to say
                hello? My inbox is always open — I&apos;ll get back to you as
                soon as I can.
              </p>
            </FadeIn>

            <ul className="mt-8 space-y-3">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-brand/40">
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="group flex min-w-0 items-center gap-4 text-foreground"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-medium">
                          {value}
                        </span>
                      </span>
                    </a>
                    {label === "Email" ? (
                      <Magnetic strength={0.3}>
                        <button
                          type="button"
                          onClick={copyEmail}
                          aria-label="Copy email address"
                          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                        >
                          {copied ? (
                            <Check className="size-4 text-emerald-500" aria-hidden="true" />
                          ) : (
                            <Copy className="size-4" aria-hidden="true" />
                          )}
                        </button>
                      </Magnetic>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <FadeIn scroll delay={0.15} y={28}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
                />
              </div>

              <Magnetic strength={0.2} className="mt-6 block sm:inline-block">
                <button
                  type="submit"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 sm:w-auto sm:px-8"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Send message
                </button>
              </Magnetic>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Submitting opens your email client with the message pre-filled.
                To connect this form to a service later, replace the submit
                handler in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-[11px]">
                  components/Contact.tsx
                </code>
                .
              </p>
            </form>
          </FadeIn>
        </div>
      </div>

      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2"
      >
        {toast ? (
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground shadow-xl">
            <Check className="size-4 text-emerald-500" aria-hidden="true" />
            {toast}
          </div>
        ) : null}
      </div>
    </section>
  );
}
