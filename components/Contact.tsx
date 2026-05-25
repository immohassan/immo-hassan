"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { contact, hero } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-5 md:px-10 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="card-dark p-6 sm:p-8 md:p-14 lg:p-20 relative overflow-hidden">
          {/* dotted texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,229,204,0.7) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage:
                "radial-gradient(ellipse at 80% 20%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 80% 20%, black 0%, transparent 70%)",
            }}
          />
          {/* corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.22]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,229,204,0.6) 0%, transparent 60%)",
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-dot text-accent">Contact</p>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl display max-w-[16ch] text-white"
              >
                {contact.heading}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 max-w-[58ch] text-white/70 text-base md:text-lg leading-relaxed"
              >
                {contact.body}
              </motion.p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-3 btn-accent rounded-full pl-6 pr-2 py-2 text-sm md:text-base font-medium"
                >
                  <span>{hero.cta.label}</span>
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-black text-accent transition-transform duration-500 ease-smooth group-hover:translate-x-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <div className="space-y-5">
                <ContactLine
                  Icon={Mail}
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactLine
                  Icon={Phone}
                  label="Phone"
                  value={contact.phone}
                  href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
                />
                <ContactLine
                  Icon={MapPin}
                  label="Based in"
                  value="Lahore · Remote-first"
                />
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {contact.links
                  .filter((l) => l.href.startsWith("http"))
                  .map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center justify-between gap-2 px-4 py-3 rounded-full border border-white/20 text-white/90 hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors duration-500 ease-smooth text-sm font-medium"
                      >
                        <span>{l.label}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="flex items-center gap-4 group"
    >
      <span className="w-10 h-10 rounded-full bg-white/5 border border-white/15 grid place-items-center text-accent shrink-0">
        <Icon size={16} strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <p className="eyebrow-muted text-white/50">{label}</p>
        <p
          className={`text-base md:text-lg truncate text-white ${
            href ? "link-underline" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </Tag>
  );
}
