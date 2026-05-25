"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import CountUp from "./CountUp";

export default function StatsStrip() {
  return (
    <section className="px-5 md:px-10 py-12 md:py-16 border-y border-line bg-surfaceAlt/30">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col group"
          >
            <p className="font-serif text-5xl md:text-6xl display leading-none">
              <CountUp value={s.value} duration={1400} />
            </p>
            <span className="mt-3 h-px w-8 bg-line group-hover:bg-accent transition-colors duration-500 ease-smooth" />
            <p className="text-bone/70 mt-3 text-sm md:text-base max-w-[24ch] leading-snug">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
