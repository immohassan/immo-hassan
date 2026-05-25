"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { BrandLogo, type BrandKey } from "./BrandLogos";
import { Webhook, Database, Terminal, Sparkles } from "lucide-react";

const brandMap: Record<string, BrandKey> = {
  OpenAI: "openai",
  Claude: "claude",
  Gemini: "googlegemini",
  "Vertex AI": "googlecloud",
  Anthropic: "anthropic",
  "Make.com": "make",
  Zapier: "zapier",
  n8n: "n8n",
  "Google Apps Script": "googleappsscript",
  Airtable: "airtable",
  Trellinator: "trello",
  Laravel: "laravel",
  PHP: "php",
  "Node.js": "nodedotjs",
  MySQL: "mysql",
  "Next.js": "nextdotjs",
  React: "react",
  Tailwind: "tailwindcss",
  Livewire: "livewire",
  "Vue.js": "vuedotjs",
  jQuery: "jquery",
  Docker: "docker",
  Linux: "linux",
  Git: "github",
  GitHub: "github",
  QuickBooks: "quickbooks",
  HubSpot: "hubspot",
  ClickUp: "clickup",
  Trello: "trello",
  Stripe: "stripe",
  WordPress: "wordpress",
  Shopify: "shopify",
};

export default function TechStack() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-line">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow eyebrow-dot mb-10">Tech stack</p>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tightest leading-[1.05]">
              The toolkit behind every build.
            </h2>
            <p className="mt-5 text-bone/70 text-base md:text-lg max-w-md">
              Five layers, picked for the job — never just because they&apos;re trendy.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 md:space-y-5">
            {techStack.map((row, i) => (
              <motion.div
                key={row.layer}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.05,
                }}
                className="card p-6 md:p-7"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <p className="eyebrow text-bone">{row.layer}</p>
                  <span className="eyebrow-muted">
                    {String(row.tools.length).padStart(2, "0")} tools
                  </span>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8">
                  {row.tools.map((t) => {
                    const key = brandMap[t];
                    return (
                      <li
                        key={t}
                        className="group flex items-center gap-2.5 text-bone/75 hover:text-bone transition-colors duration-500 ease-smooth cursor-default"
                      >
                        {key ? (
                          <BrandLogo
                            name={key}
                            size={20}
                            title={t}
                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-500 ease-smooth"
                          />
                        ) : t === "REST APIs" ? (
                          <Webhook size={18} strokeWidth={1.4} />
                        ) : t === "Pipedrive" ? (
                          <Database size={18} strokeWidth={1.4} />
                        ) : t === "PL/SQL" || t === "Shell" ? (
                          <Terminal size={18} strokeWidth={1.4} />
                        ) : t === "Vibe Coding" ? (
                          <Sparkles size={18} strokeWidth={1.4} className="text-accent" />
                        ) : (
                          <span className="h-5 w-5 rounded-full border border-line grid place-items-center text-[10px]">
                            {t[0]}
                          </span>
                        )}
                        <span className="text-sm md:text-base tracking-tight">
                          {t}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
