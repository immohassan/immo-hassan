"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-3 md:top-4 inset-x-3 md:inset-x-8 z-50 transition-all duration-500 ease-smooth">
        <nav
          className={`mx-auto max-w-[1400px] h-14 md:h-16 flex items-center justify-between px-3 md:px-6 rounded-full transition-all duration-500 ease-smooth ${
            scrolled
              ? "bg-surface/85 backdrop-blur-md border border-line shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
              : "bg-surface/50 backdrop-blur-sm border border-line/60"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 text-base md:text-lg tracking-tight font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            {nav.brand}
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-bone/80">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline hover:text-bone">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle size={36} className="hidden sm:grid" />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 md:px-5 py-2 rounded-full btn-dark"
            >
              Book a call
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden grid place-items-center w-9 h-9 rounded-full border border-line bg-surface"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-smooth ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-ink/80 backdrop-blur-md"
        />
        <div
          className={`absolute top-3 right-3 left-3 card p-6 transition-transform duration-500 ease-smooth ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-base font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {nav.brand}
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle size={36} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid place-items-center w-9 h-9 rounded-full border border-line bg-surface"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-1 border-t border-line pt-2">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 px-2 text-lg font-medium border-b border-line"
                >
                  {l.label}
                  <span className="text-muted text-xs">→</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full btn-accent text-sm font-medium"
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  );
}
