import { nav } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-5 md:px-10 py-10 md:py-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2 font-serif text-2xl tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              {nav.brand}
            </a>
            <p className="mt-4 text-bone/65 text-sm max-w-xs">
              Process automation engineer & full-stack developer. Building systems that hold.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow-muted mb-4">Sitemap</p>
            <ul className="flex flex-col gap-2 text-sm">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-bone/80 hover:text-bone">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow-muted mb-4">Built with</p>
            <p className="text-sm text-bone/65 leading-relaxed">
              Next.js · Tailwind · Framer Motion
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone/55">
          <p>© {year} immohassan · Muhammad Hassan. All rights reserved.</p>
          <p>Lahore · Remote-first · Available 2026</p>
        </div>
      </div>
    </footer>
  );
}
