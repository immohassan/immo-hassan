"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { hero } from "@/lib/data";
import HeroMockup from "./HeroMockup";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";

const words = hero.headline.split(" ");

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 md:pt-32 pb-12 md:pb-24 px-5 md:px-10 overflow-hidden"
    >
      {/* texture: soft radial */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,204,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(232,244,248,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,244,248,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] w-full">
        {/* announcement pill */}
        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs md:text-sm font-medium hover:border-accent transition-colors duration-500 ease-smooth"
        >
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-ink text-[10px] uppercase tracking-[0.16em] font-semibold">
            <Sparkles size={10} /> New
          </span>
          <span className="text-bone/80">7 case studies live · 2026</span>
          <ArrowUpRight size={14} className="text-muted" />
        </motion.a>

        <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* left: headline + body + CTAs */}
          <div className="lg:col-span-7">
            <h1 className="display text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] text-bone max-w-[16ch]">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 + i * 0.05,
                  }}
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 max-w-[58ch] text-bone/75 text-base md:text-lg leading-relaxed"
            >
              {hero.subtitle}
              <br />
              <span className="text-muted">{hero.tagline}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href={hero.cta.href}
                strength={0.25}
                className="group inline-flex items-center gap-3 btn-dark rounded-full pl-6 pr-2 py-2 text-sm md:text-base font-medium overflow-hidden"
              >
                <span>{hero.cta.label}</span>
                <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </MagneticButton>
              <MagneticButton
                href="#work"
                strength={0.2}
                className="inline-flex items-center gap-2 text-sm md:text-base px-5 py-3 rounded-full border border-line bg-surface hover:border-accent transition-colors duration-500 ease-smooth font-medium"
              >
                See the work
              </MagneticButton>
            </motion.div>

            {/* hero footer meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-10 md:mt-14 grid grid-cols-3 gap-6 md:gap-10 border-t border-line pt-6"
            >
              <Meta value="7+" label="Production systems" />
              <Meta value="90%" label="Manual → automated" />
              <Meta value="24/7" label="Always-on workflows" />
            </motion.div>
          </div>

          {/* right: mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pl-4 max-w-md lg:max-w-none mx-auto w-full"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Meta({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl md:text-4xl tracking-tight">
        <CountUp value={value} duration={1200} />
      </p>
      <p className="eyebrow-muted mt-1">{label}</p>
    </div>
  );
}
