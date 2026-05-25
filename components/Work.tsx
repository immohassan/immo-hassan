"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { work } from "@/lib/data";
import { projectIllustrations } from "./UiIllustrations";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 px-5 md:px-10 border-t border-line">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow={`— Selected Work · ${String(work.length).padStart(2, "0")} projects`}
          title="Systems that ship and stay shipped."
        />

        <p className="text-bone/70 text-base md:text-lg max-w-2xl mb-12 md:mb-16 -mt-4">
          Production-grade automation pipelines and full-stack platforms — built for clients across healthcare, e-commerce, property, and recruitment.
        </p>

        <div className="space-y-16 md:space-y-24">
          {work.map((item, i) => {
            const Illustration = projectIllustrations[i % projectIllustrations.length];
            const hasLink = Boolean(item.url);
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Illustration */}
                <motion.div
                  className="lg:col-span-7"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl border border-line bg-surface overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,229,204,0.15)] hover:shadow-[0_40px_90px_-25px_rgba(0,229,204,0.35)] hover:border-accent/40 transition-all duration-500 ease-smooth group">
                    <div
                      aria-hidden
                      className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(0,229,204,0.5) 0%, transparent 60%)",
                      }}
                    />
                    <Illustration
                      className="absolute inset-0 w-full h-full text-bone transition-transform duration-700 ease-smooth group-hover:scale-[1.02]"
                      preserveAspectRatio="xMidYMid slice"
                    />

                    {/* badges layered on top */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="eyebrow text-[10px] px-3 py-1 rounded-full bg-ink/85 backdrop-blur border border-line text-bone">
                        {String(i + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}
                      </span>
                      <span className="eyebrow text-[10px] px-3 py-1 rounded-full bg-accent text-accent-ink">
                        {item.category}
                      </span>
                    </div>

                    {hasLink && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 btn-dark px-4 py-2 rounded-full text-xs font-medium"
                      >
                        Visit live
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Body */}
                <div className="lg:col-span-5">
                  <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                    <p className="eyebrow-dot eyebrow text-bone/80">{item.role}</p>
                    {item.client && (
                      <span className="eyebrow-muted">· {item.client}</span>
                    )}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tightest leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-bone/70 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {item.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 text-[15px] text-bone/85"
                      >
                        <CheckCircle2
                          size={18}
                          strokeWidth={1.6}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <li
                        key={t}
                        className="text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full bg-surface border border-line text-bone/70 font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {hasLink && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-bone link-underline"
                    >
                      Open case study
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
