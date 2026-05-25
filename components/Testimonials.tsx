"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-line bg-surfaceAlt/30">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow eyebrow-dot mb-10">What clients say</p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="card p-8 md:p-10 flex flex-col"
            >
              <Quote size={28} strokeWidth={1.4} className="text-accent mb-6" />
              <blockquote className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-bone/95">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                <span className="eyebrow text-bone/80">— {t.attribution}</span>
                <span className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="w-1.5 h-1.5 rounded-full bg-accent" />
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
