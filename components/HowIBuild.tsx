"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { howIBuild } from "@/lib/data";

export default function HowIBuild() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 px-5 md:px-10 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="— Process" title="How I build systems." />

        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {howIBuild.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="card p-6 md:p-7 flex flex-col gap-4 min-h-[200px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-8 h-8 rounded-full bg-ink grid place-items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
              </div>
              <h3 className="font-serif text-lg md:text-xl tracking-tight leading-snug">
                {step.title}
              </h3>
              <p className="text-bone/70 text-sm leading-relaxed mt-auto">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
