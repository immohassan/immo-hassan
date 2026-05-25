"use client";

import { motion } from "framer-motion";
import HoverMaskReveal from "./HoverMaskReveal";
import { whyMe, personalEdge } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const line = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyMe() {
  return (
    <section id="why" className="py-20 md:py-28 px-5 md:px-10 border-t border-line">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow eyebrow-dot mb-10">Why me</p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-line bg-surfaceAlt order-1">
            <HoverMaskReveal
              frontImage={whyMe.frontImage}
              backImage={whyMe.backImage}
              size={220}
              returnDuration={0.7}
              alt="Hassan portrait reveals mountaineering on hover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between eyebrow-muted pointer-events-none">
              <span className="hidden md:inline">Hover to reveal</span>
              <span className="md:hidden">Auto reveal</span>
              <span className="text-accent">Liquid mask</span>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 flex flex-col justify-center"
          >
            <motion.h2
              variants={line}
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.05] mb-3"
            >
              {whyMe.lead[0]}
            </motion.h2>
            <motion.h2
              variants={line}
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.05] text-muted mb-12"
            >
              {whyMe.lead[1]}
            </motion.h2>

            <motion.blockquote
              variants={line}
              className="font-serif italic text-2xl md:text-3xl text-bone/95 leading-snug border-l-2 border-accent pl-6 mb-12"
            >
              &ldquo;{whyMe.pullQuote}&rdquo;
            </motion.blockquote>

            {whyMe.body.map((p, i) => (
              <motion.p
                key={i}
                variants={line}
                className="text-bone/75 text-base md:text-lg leading-relaxed mb-5 max-w-[60ch]"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-8">
          <p className="eyebrow lg:col-span-3">— Personal Edge</p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-9 max-w-[60ch]"
          >
            {personalEdge.body.map((p, i) => (
              <motion.p
                key={i}
                variants={line}
                className={`text-bone/75 text-lg md:text-xl leading-relaxed mb-5 ${
                  i === personalEdge.body.length - 1
                    ? "font-serif italic text-bone"
                    : ""
                }`}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
