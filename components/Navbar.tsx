"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Magnetic } from "@/components/animations/Magnetic";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { y: -80, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" }
      );
    }, header);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const menu = menuRef.current;
    const inner = menuInnerRef.current;
    if (!menu || !inner) return;

    const ctx = gsap.context(() => {
      if (open) {
        gsap.fromTo(
          menu,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          inner.querySelectorAll("[data-mobile-link]"),
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.06,
            delay: 0.05,
            ease: "power3.out",
          }
        );
      }
    }, menu);

    return () => ctx.revert();
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-18 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.3em] text-foreground transition-opacity hover:opacity-80"
          aria-label={`${site.name} — home`}
        >
          LANCE
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {site.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Magnetic strength={0.3} className="hidden lg:inline-block">
            <a
              href={site.resume}
              download
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-full px-4"
              )}
            >
              <Download className="size-4" aria-hidden="true" />
              Resume
            </a>
          </Magnetic>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          "glass border-b border-border/60 lg:hidden",
          open ? "visible" : "invisible"
        )}
      >
        <div
          ref={menuInnerRef}
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6"
        >
          {site.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              data-mobile-link
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                isActive(link.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resume}
            download
            data-mobile-link
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
