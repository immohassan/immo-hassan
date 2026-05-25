"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { packages } from "@/lib/data";

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-20 md:py-28 px-5 md:px-10 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="— How we work together"
          title="Three ways to start."
        />

        <p className="text-bone/70 text-base md:text-lg max-w-2xl -mt-4 mb-12">
          Fixed scope or open-ended — pick the shape that fits your problem. All engagements start with a free audit.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {packages.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className={`${
                p.highlighted ? "card-dark" : "card"
              } p-7 md:p-8 flex flex-col gap-6 relative`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full bg-accent text-accent-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-ink animate-pulse" />
                  Most popular
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3
                  className={`font-serif text-3xl tracking-tight ${
                    p.highlighted ? "text-ink" : ""
                  }`}
                >
                  {p.name}
                </h3>
                <span
                  className={`eyebrow-muted ${
                    p.highlighted ? "text-ink/60" : ""
                  }`}
                >
                  {p.cadence}
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <p
                  className={`font-serif text-5xl tracking-tightest ${
                    p.highlighted ? "text-ink" : ""
                  }`}
                >
                  {p.price}
                </p>
              </div>

              <p
                className={`text-[15px] leading-relaxed ${
                  p.highlighted ? "text-ink/75" : "text-bone/70"
                }`}
              >
                {p.blurb}
              </p>

              <ul
                className={`space-y-2.5 pt-5 border-t ${
                  p.highlighted ? "border-ink/30" : "border-line"
                }`}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-[15px] ${
                      p.highlighted ? "text-ink/85" : "text-bone/85"
                    }`}
                  >
                    <Check
                      size={16}
                      strokeWidth={2}
                      className={`shrink-0 mt-0.5 ${
                        p.highlighted ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto inline-flex items-center justify-between gap-2 text-sm font-medium rounded-full px-5 py-3 ${
                  p.highlighted
                    ? "bg-accent text-accent-ink hover:bg-ink hover:text-accent border border-accent"
                    : "bg-ink text-bone hover:bg-accent hover:text-accent-ink"
                } transition-colors duration-500 ease-smooth`}
              >
                <span>{p.cta}</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
