"use client";

import { BrandLogo, allBrands } from "./BrandLogos";

export default function LogoMarquee() {
  const items = [...allBrands, ...allBrands];

  return (
    <section
      aria-label="Tools and platforms"
      className="border-y border-line py-8 md:py-10 overflow-hidden bg-ink"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 mb-6 flex items-center justify-between">
        <p className="eyebrow">— Stack & Integrations</p>
        <p className="eyebrow-muted hidden md:block">27 platforms · API-first</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-14 md:gap-20 items-center">
          {items.map(({ key, label }, i) => (
            <div
              key={`${key}-${i}`}
              className="shrink-0 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-500 ease-smooth"
            >
              <BrandLogo name={key} size={28} title={label} />
              <span className="text-sm md:text-base tracking-tight font-medium whitespace-nowrap text-bone/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
