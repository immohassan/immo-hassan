"use client";

import { motion } from "framer-motion";
import { BrandLogo, allBrands } from "./BrandLogos";

export default function LogoWall() {
  return (
    <section
      aria-label="Tools and platforms"
      className="py-12 md:py-20 px-5 md:px-10 border-y border-line bg-surfaceAlt/40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
          <p className="eyebrow eyebrow-dot">Stack & integrations</p>
          <p className="eyebrow-muted">
            {allBrands.length} platforms · API-first
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.025, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-line border border-line rounded-lg overflow-hidden"
        >
          {allBrands.map(({ key, label }) => (
            <motion.li
              key={key}
              variants={{
                hidden: { opacity: 0, scale: 0.88 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-ink flex flex-col items-center justify-center gap-2 py-6 px-3 hover:bg-surface transition-colors duration-500 ease-smooth"
            >
              {/* hover glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-smooth"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,229,204,0.18) 0%, transparent 70%)",
                }}
              />
              <BrandLogo
                name={key}
                size={26}
                title={label}
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 ease-smooth relative z-10"
              />
              <span className="text-[11px] tracking-tight text-bone/65 group-hover:text-bone transition-colors duration-500 ease-smooth text-center relative z-10">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
