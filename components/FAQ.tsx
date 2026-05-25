"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 px-5 md:px-10 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="— FAQ"
            title="Common questions, answered."
            className="lg:sticky lg:top-28 mb-0"
          />
          <p className="text-bone/70 max-w-md mt-6 lg:sticky lg:top-[15rem]">
            Still curious?{" "}
            <a href="#contact" className="link-underline text-bone font-medium">
              Just ask
            </a>{" "}
            — I reply within a day.
          </p>
        </div>

        <ul className="lg:col-span-7 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl tracking-tight leading-snug pr-2">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 w-9 h-9 rounded-full border border-line grid place-items-center transition-all duration-500 ease-smooth ${
                      isOpen
                        ? "bg-accent text-accent-ink border-accent rotate-45"
                        : "group-hover:border-bone"
                    }`}
                  >
                    <Plus size={16} strokeWidth={1.6} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-bone/75 text-base md:text-lg leading-relaxed max-w-[58ch]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
