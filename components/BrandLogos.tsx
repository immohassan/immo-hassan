/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

/**
 * Brand logos served as static <img> from /public/logos.
 * SVGs sourced from simple-icons (CC0).
 *
 * Filter brightness(0) invert(1) flattens the SVG fill to white so all
 * marks share a single monochrome tone. Opacity controlled via wrapper.
 */

export type BrandKey =
  | "n8n"
  | "zapier"
  | "make"
  | "laravel"
  | "nextdotjs"
  | "react"
  | "tailwindcss"
  | "nodedotjs"
  | "docker"
  | "supabase"
  | "stripe"
  | "hubspot"
  | "php"
  | "linux"
  | "uipath"
  | "anthropic"
  | "vercel"
  | "github"
  | "cloudflare"
  | "airtable"
  | "notion"
  | "googleappsscript"
  | "mysql"
  | "livewire"
  | "vuedotjs"
  | "jquery"
  | "bootstrap"
  | "wordpress"
  | "shopify"
  | "trello"
  | "clickup"
  | "quickbooks"
  | "claude"
  | "instagram"
  | "facebook"
  | "x"
  | "meta"
  | "openai"
  | "googlegemini"
  | "googlecloud"
  | "vibecoding";

/* Filter handled via CSS var so it flips with theme. */
const monoFilter: CSSProperties = {};

export function BrandLogo({
  name,
  className = "",
  size = 28,
  title,
}: {
  name: BrandKey;
  className?: string;
  size?: number;
  title?: string;
}) {
  return (
    <img
      src={`/logos/${name}.svg`}
      alt={title ?? name}
      width={size}
      height={size}
      style={monoFilter}
      className={`brand-logo-img ${className}`}
      draggable={false}
    />
  );
}

export const allBrands: { key: BrandKey; label: string }[] = [
  { key: "openai", label: "OpenAI" },
  { key: "claude", label: "Claude" },
  { key: "anthropic", label: "Anthropic" },
  { key: "googlegemini", label: "Gemini" },
  { key: "googlecloud", label: "Vertex AI" },
  { key: "vibecoding", label: "Vibe Coding" },
  { key: "make", label: "Make.com" },
  { key: "zapier", label: "Zapier" },
  { key: "n8n", label: "n8n" },
  { key: "googleappsscript", label: "Apps Script" },
  { key: "airtable", label: "Airtable" },
  { key: "laravel", label: "Laravel" },
  { key: "php", label: "PHP" },
  { key: "mysql", label: "MySQL" },
  { key: "nextdotjs", label: "Next.js" },
  { key: "react", label: "React" },
  { key: "tailwindcss", label: "Tailwind" },
  { key: "vuedotjs", label: "Vue.js" },
  { key: "livewire", label: "Livewire" },
  { key: "nodedotjs", label: "Node.js" },
  { key: "docker", label: "Docker" },
  { key: "linux", label: "Linux" },
  { key: "github", label: "GitHub" },
  { key: "trello", label: "Trello" },
  { key: "clickup", label: "ClickUp" },
  { key: "quickbooks", label: "QuickBooks" },
  { key: "hubspot", label: "HubSpot" },
  { key: "stripe", label: "Stripe" },
  { key: "shopify", label: "Shopify" },
  { key: "wordpress", label: "WordPress" },
  { key: "jquery", label: "jQuery" },
  { key: "bootstrap", label: "Bootstrap" },
];
