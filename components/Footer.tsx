import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Magnetic } from "@/components/animations/Magnetic";
import { site } from "@/data/site";

const footerSocials = [
  { label: "GitHub", href: site.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: site.socials.email, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-[0.3em] text-foreground"
              aria-label={`${site.name} — home`}
            >
              LANCE
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Frontend developer building modern, responsive web and mobile
              experiences with clean code and thoughtful design.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-foreground">
              Navigation
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {site.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Connect
            </h2>
            <ul className="mt-4 flex items-center gap-2">
              {footerSocials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Magnetic strength={0.4}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-foreground"
                    >
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              {site.email}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & built with Next.js, Tailwind CSS, and GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
