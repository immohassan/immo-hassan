"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-line bg-surfaceAlt/30">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="— Experience" title="Where I've shipped." />

        <ul className="space-y-4 md:space-y-5">
          {experience.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="card p-6 md:p-8 grid grid-cols-12 gap-6 items-start"
            >
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
                  {e.company}
                </h3>
                <p className="eyebrow-muted mt-2">{e.period}</p>
              </div>
              <p className="col-span-12 md:col-span-3 eyebrow text-bone/85">
                {e.role}
              </p>
              <p className="col-span-12 md:col-span-5 text-bone/70 text-base md:text-lg leading-relaxed">
                {e.description}
              </p>
            </motion.li>
          ))}
        </ul>

        {/* <div className="card mt-5 p-6 md:p-8 grid grid-cols-12 gap-6 items-start">
          <p className="col-span-12 md:col-span-4 eyebrow eyebrow-dot">
            Education
          </p>
          <div className="col-span-12 md:col-span-8">
            <h3 className="font-serif text-xl md:text-2xl tracking-tight leading-snug">
              {education.degree}
            </h3>
            <p className="text-bone/70 mt-2">
              {education.school} ·{" "}
              <span className="text-muted">{education.period}</span>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
