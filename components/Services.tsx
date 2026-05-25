"use client";

import { motion } from "framer-motion";
import { Bot, LayoutGrid, Workflow, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";
import {
  AiServiceIllustration,
  StackServiceIllustration,
  ProcessServiceIllustration,
} from "./UiIllustrations";

const featureMatrix = [
  ["AI agents", "Content engines", "Voice intake", "RPA pipelines"],
  ["Laravel APIs", "Next.js dashboards", "Internal tools", "Admin panels"],
  ["CRM workflows", "Payment integrations", "Systems mapping", "Documentation"],
];

const Icons = [Bot, LayoutGrid, Workflow];
const Illustrations = [
  AiServiceIllustration,
  StackServiceIllustration,
  ProcessServiceIllustration,
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-5 md:px-10 border-t border-line bg-surfaceAlt/30"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="— Services"
          title="What I build for clients."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => {
            const Icon = Icons[i] ?? Bot;
            const Illustration = Illustrations[i] ?? AiServiceIllustration;
            const features = featureMatrix[i] ?? [];
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="card p-6 md:p-8 flex flex-col gap-6 md:min-h-[440px] hover:border-accent/40 hover:shadow-[0_30px_70px_-25px_rgba(0,229,204,0.25)] transition-all duration-500 ease-smooth group"
              >
                <div className="flex items-start justify-between">
                  <span className="w-11 h-11 rounded-xl grid place-items-center bg-accent text-accent-ink">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-muted">
                    {String(i + 1).padStart(2, "0")} / 03
                  </span>
                </div>

                <div className="relative h-28 md:h-32 rounded-lg overflow-hidden border border-line bg-surfaceAlt">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.25]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <Illustration className="absolute inset-0 w-full h-full p-4 text-accent" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl md:text-[28px] tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-bone/70">
                    {s.description}
                  </p>
                </div>

                <ul className="mt-auto grid grid-cols-2 gap-x-3 gap-y-2 pt-5 border-t border-line">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-bone/75"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between gap-2 text-sm font-medium rounded-full px-5 py-3 btn-dark"
                >
                  <span>Discuss this service</span>
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
