"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, className = "" }: Props) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tightest max-w-[18ch] leading-[1.05]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
