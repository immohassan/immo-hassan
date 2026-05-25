import type { SVGProps } from "react";

/**
 * Project-specific realistic UI mockups. Each one references the tool stack
 * of the underlying case study so the visual reads as "this is what we built"
 * rather than a generic illustration. Pure SVG, currentColor-aware where
 * sensible; tokens (--accent etc) are inlined for stability across themes.
 */

type Props = SVGProps<SVGSVGElement>;

const ACC = "#00E5CC";
const FG = "currentColor";

/* ============================================================
 * 1. Agentic Social Media Workflow  →  Make.com scenario canvas
 * ============================================================ */
export function MakeScenarioIllustration(props: Props) {
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* toolbar */}
      <rect x="0" y="0" width="600" height="34" fill="#11171E" />
      <rect x="14" y="11" width="80" height="12" rx="3" fill={ACC} opacity="0.9" />
      <rect x="104" y="11" width="46" height="12" rx="3" fill="#E8F4F8" opacity="0.5" />
      <rect x="540" y="9" width="46" height="16" rx="8" fill={ACC} />
      {/* grid */}
      <g opacity="0.10">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="34" x2={60 * i} y2="380" stroke="#E8F4F8" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 + 50 * i} x2="600" y2={50 + 50 * i} stroke="#E8F4F8" strokeWidth="0.5" />
        ))}
      </g>

      {/* scenario chain — circle nodes joined by curves */}
      <g>
        {/* trigger: Sheets */}
        <Node cx={70} cy={180} label="Sheets" color="#0F9D58" />
        {/* aggregator */}
        <Node cx={160} cy={180} label="Agg" color="#7C8895" />
        {/* router */}
        <RouterNode cx={245} cy={180} />
        {/* GPT */}
        <Node cx={335} cy={110} label="GPT" color="#10A37F" />
        {/* Claude */}
        <Node cx={335} cy={180} label="Claude" color="#D97757" />
        {/* template */}
        <Node cx={335} cy={250} label="Tmpl" color={ACC} />

        {/* converge router */}
        <RouterNode cx={425} cy={180} />

        {/* publishers — fan out */}
        <Node cx={515} cy={70} label="IG" color="#E1306C" />
        <Node cx={545} cy={140} label="X" color="#E8F4F8" textDark />
        <Node cx={545} cy={220} label="FB" color="#1877F2" />
        <Node cx={515} cy={290} label="WP" color="#21759B" />

        {/* connectors */}
        <Connector d="M85 180 H145" />
        <Connector d="M175 180 H230" />
        <Connector d="M260 180 Q300 180 320 110" />
        <Connector d="M260 180 H320" />
        <Connector d="M260 180 Q300 180 320 250" />
        <Connector d="M350 110 Q400 110 410 180" />
        <Connector d="M350 180 H410" />
        <Connector d="M350 250 Q400 250 410 180" />
        <Connector d="M440 180 Q480 180 500 70" />
        <Connector d="M440 180 Q500 180 530 140" />
        <Connector d="M440 180 Q500 180 530 220" />
        <Connector d="M440 180 Q480 180 500 290" />
      </g>

      {/* bottom status bar */}
      <rect x="0" y="350" width="600" height="30" fill="#11171E" />
      <circle cx="16" cy="365" r="4" fill={ACC} />
      <text x="28" y="369" fontFamily="ui-sans-serif" fontSize="11" fill="#E8F4F8" opacity="0.75">
        Scenario active · 24h · 312 ops
      </text>
      <rect x="520" y="358" width="64" height="14" rx="7" fill={ACC} opacity="0.18" />
      <text x="552" y="368" fontFamily="ui-sans-serif" fontSize="9" textAnchor="middle" fill={ACC}>
        RUNNING
      </text>
    </svg>
  );
}

function Node({
  cx,
  cy,
  label,
  color,
  textDark,
}: {
  cx: number;
  cy: number;
  label: string;
  color: string;
  textDark?: boolean;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="20" fill={color} />
      <circle cx={cx} cy={cy} r="20" fill="none" stroke="#E8F4F8" strokeWidth="1" opacity="0.18" />
      <text
        x={cx}
        y={cy + 3}
        fontFamily="ui-sans-serif"
        fontSize="8.5"
        fontWeight={600}
        textAnchor="middle"
        fill={textDark ? "#0A0F14" : "#FFFFFF"}
      >
        {label}
      </text>
    </g>
  );
}

function RouterNode({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <rect x={cx - 15} y={cy - 15} width="30" height="30" rx="6" fill="#11171E" stroke="#7C8895" strokeWidth="1" />
      <path
        d={`M${cx - 6} ${cy - 4} L${cx + 6} ${cy} L${cx - 6} ${cy + 4} Z`}
        fill="#7C8895"
      />
    </g>
  );
}

function Connector({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="#7C8895"
      strokeWidth="1.4"
      strokeDasharray="4 3"
      opacity="0.85"
    />
  );
}

/* ============================================================
 * 2. Order Processing  →  Trello kanban board
 * ============================================================ */
export function TrelloBoardIllustration(props: Props) {
  const cols = [
    { name: "Order In", color: ACC, count: 4 },
    { name: "Verify", color: "#FFD000", count: 3 },
    { name: "Invoice", color: "#0077FF", count: 5 },
    { name: "Ship", color: "#10A37F", count: 2 },
  ];
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* topbar */}
      <rect x="0" y="0" width="600" height="36" fill="#11171E" />
      <rect x="14" y="12" width="120" height="12" rx="3" fill="#E8F4F8" opacity="0.8" />
      <rect x="430" y="10" width="56" height="16" rx="8" fill="#E8F4F8" opacity="0.08" />
      <rect x="494" y="10" width="92" height="16" rx="8" fill={ACC} />
      <text x="540" y="22" fontFamily="ui-sans-serif" fontSize="9" textAnchor="middle" fill="#04221F" fontWeight={700}>
        + AUTOMATE
      </text>

      {cols.map((col, i) => {
        const x = 14 + i * 148;
        return (
          <g key={col.name}>
            {/* column */}
            <rect x={x} y="50" width="138" height="320" rx="8" fill="#11171E" />
            {/* header */}
            <circle cx={x + 14} cy="66" r="4" fill={col.color} />
            <text x={x + 24} y="70" fontFamily="ui-sans-serif" fontSize="11" fontWeight={600} fill="#E8F4F8">
              {col.name}
            </text>
            <rect x={x + 102} y="58" width="24" height="16" rx="8" fill="#E8F4F8" opacity="0.08" />
            <text x={x + 114} y="70" fontFamily="ui-sans-serif" fontSize="9" textAnchor="middle" fill="#E8F4F8" opacity="0.7">
              {col.count}
            </text>

            {/* cards */}
            {Array.from({ length: col.count }).map((_, j) => {
              const cy = 86 + j * 56;
              return (
                <g key={j}>
                  <rect x={x + 10} y={cy} width="118" height="48" rx="5" fill="#161C24" stroke={col.color} strokeOpacity="0.25" />
                  <rect x={x + 16} y={cy + 8} width="40" height="6" rx="2" fill={col.color} opacity="0.7" />
                  <rect x={x + 16} y={cy + 20} width="92" height="4" rx="2" fill="#E8F4F8" opacity="0.55" />
                  <rect x={x + 16} y={cy + 28} width="64" height="4" rx="2" fill="#E8F4F8" opacity="0.32" />
                  <rect x={x + 16} y={cy + 38} width="18" height="6" rx="3" fill={ACC} opacity="0.6" />
                  <rect x={x + 38} y={cy + 38} width="22" height="6" rx="3" fill="#E8F4F8" opacity="0.18" />
                  <circle cx={x + 110} cy={cy + 41} r="6" fill={col.color} opacity="0.85" />
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
 * 3. Hiring Pipeline  →  ClickUp list view + status pills
 * ============================================================ */
export function ClickUpHiringIllustration(props: Props) {
  const rows = [
    ["Compounding Pharmacy Tech", "Yes", "1+ yr", "High School", "Active"],
    ["Pharmacy Technician — Data", "Yes", "1+ yr", "High School", "Active"],
    ["Pharmacy Technician — Disp", "Yes", "< 1 yr", "High School", "Active"],
    ["Shipping Technician", "Yes", "< 1 yr", "High School", "Active"],
    ["Pharmacist In Charge", "Yes", "1+ yr", "Doctorate", "Active"],
    ["Staff Pharmacist", "Yes", "2+ yr", "Doctorate", "Hold"],
    ["Healthcare Field Sales", "Yes", "1+ yr", "High School", "Active"],
  ];
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* topbar */}
      <rect x="0" y="0" width="600" height="36" fill="#11171E" />
      <circle cx="20" cy="18" r="5" fill={ACC} />
      <rect x="32" y="12" width="100" height="12" rx="3" fill="#E8F4F8" opacity="0.85" />
      <rect x="142" y="14" width="50" height="8" rx="3" fill="#E8F4F8" opacity="0.4" />
      <rect x="490" y="10" width="96" height="16" rx="8" fill={ACC} />
      <text x="538" y="22" fontFamily="ui-sans-serif" fontSize="9" textAnchor="middle" fill="#04221F" fontWeight={700}>
        + ADD TASK
      </text>

      {/* tabs */}
      <rect x="0" y="36" width="600" height="28" fill="#11171E" opacity="0.5" />
      {["List", "Board", "Calendar", "Automations"].map((t, i) => (
        <g key={t}>
          <text
            x={20 + i * 76}
            y="54"
            fontFamily="ui-sans-serif"
            fontSize="11"
            fill={i === 0 ? ACC : "#7C8895"}
            fontWeight={i === 0 ? 600 : 500}
          >
            {t}
          </text>
          {i === 0 && <rect x={18 + i * 76} y="58" width="32" height="2" rx="1" fill={ACC} />}
        </g>
      ))}

      {/* column headers */}
      <g>
        <rect x="0" y="72" width="600" height="22" fill="#11171E" />
        {["Name", "Q1", "Exp.", "Edu.", "Status"].map((h, i) => (
          <text
            key={h}
            x={[16, 270, 340, 410, 500][i]}
            y="87"
            fontFamily="ui-sans-serif"
            fontSize="9"
            letterSpacing="0.1em"
            fill="#7C8895"
            fontWeight={600}
          >
            {h.toUpperCase()}
          </text>
        ))}
      </g>

      {/* rows */}
      {rows.map((r, i) => {
        const y = 102 + i * 36;
        const statusColor = r[4] === "Active" ? "#10A37F" : "#FFD000";
        return (
          <g key={i}>
            <rect x="0" y={y - 14} width="600" height="32" fill={i % 2 ? "#11171E" : "transparent"} opacity="0.45" />
            <circle cx="14" cy={y + 2} r="5" stroke="#7C8895" strokeWidth="1.2" fill="none" />
            <text x="28" y={y + 5} fontFamily="ui-sans-serif" fontSize="11" fill="#E8F4F8" fontWeight={500}>
              {r[0]}
            </text>
            <Pill x={260} y={y - 6} w={36} color="#10A37F" label={r[1]} />
            <Pill x={302} y={y - 6} w={48} color="#FFD000" label={r[2]} dark />
            <Pill x={358} y={y - 6} w={70} color="#0077FF" label={r[3]} />
            <Pill x={486} y={y - 6} w={62} color={statusColor} label={r[4]} dark={statusColor === "#FFD000"} />
          </g>
        );
      })}
    </svg>
  );
}

function Pill({
  x,
  y,
  w,
  color,
  label,
  dark,
}: {
  x: number;
  y: number;
  w: number;
  color: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={16} rx="3" fill={color} />
      <text
        x={x + w / 2}
        y={y + 11}
        fontFamily="ui-sans-serif"
        fontSize="8.5"
        fontWeight={700}
        textAnchor="middle"
        fill={dark ? "#0A0F14" : "#FFFFFF"}
      >
        {label}
      </text>
    </g>
  );
}

/* ============================================================
 * 4. Eyeon Inspections  →  Admin dashboard with data table
 * ============================================================ */
export function AdminDashIllustration(props: Props) {
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* sidebar */}
      <rect x="0" y="0" width="140" height="380" fill="#11171E" />
      <circle cx="22" cy="26" r="6" fill={ACC} />
      <rect x="34" y="20" width="60" height="12" rx="3" fill="#E8F4F8" />
      {["Dashboard", "Inspections", "Customer", "Service", "Inspectors", "Regions", "Product", "Roles"].map((n, i) => (
        <g key={n}>
          <rect
            x="10"
            y={64 + i * 32}
            width="120"
            height="22"
            rx="6"
            fill={i === 2 ? ACC : "transparent"}
            opacity={i === 2 ? 0.18 : 1}
          />
          <circle cx="22" cy={75 + i * 32} r="2.5" fill={i === 2 ? ACC : "#7C8895"} />
          <text
            x="34"
            y={79 + i * 32}
            fontFamily="ui-sans-serif"
            fontSize="10.5"
            fill={i === 2 ? ACC : "#7C8895"}
            fontWeight={i === 2 ? 600 : 400}
          >
            {n}
          </text>
        </g>
      ))}

      {/* main */}
      <text x="160" y="34" fontFamily="ui-sans-serif" fontSize="14" fill="#E8F4F8" fontWeight={600}>
        Admin Dashboard
      </text>
      <rect x="520" y="20" width="64" height="20" rx="10" fill={ACC} />
      <text x="552" y="34" fontFamily="ui-sans-serif" fontSize="9" textAnchor="middle" fill="#04221F" fontWeight={700}>
        LOGOUT
      </text>

      {/* KPI cards */}
      {[
        ["Customers", "1,284"],
        ["Inspections", "612"],
        ["Pending", "37"],
        ["Reports", "498"],
      ].map(([l, v], i) => (
        <g key={l}>
          <rect x={160 + i * 110} y="54" width="100" height="58" rx="6" fill="#161C24" stroke="#1F262E" />
          <text x={170 + i * 110} y="74" fontFamily="ui-sans-serif" fontSize="9" fill="#7C8895" letterSpacing="0.08em">
            {l.toUpperCase()}
          </text>
          <text x={170 + i * 110} y="100" fontFamily="ui-sans-serif" fontSize="20" fontWeight={600} fill={ACC}>
            {v}
          </text>
        </g>
      ))}

      {/* table */}
      <rect x="160" y="128" width="430" height="240" rx="8" fill="#11171E" />
      {/* header */}
      <rect x="160" y="128" width="430" height="26" fill="#161C24" />
      {["#", "Name", "Address", "Phone", "Action"].map((h, i) => (
        <text
          key={h}
          x={[174, 200, 314, 432, 538][i]}
          y="145"
          fontFamily="ui-sans-serif"
          fontSize="9"
          fill="#7C8895"
          letterSpacing="0.1em"
          fontWeight={600}
        >
          {h.toUpperCase()}
        </text>
      ))}
      {/* rows */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 168 + i * 24;
        return (
          <g key={i}>
            <line x1="160" y1={y + 8} x2="590" y2={y + 8} stroke="#1F262E" strokeWidth="0.5" />
            <text x="174" y={y + 4} fontFamily="ui-sans-serif" fontSize="10" fill="#7C8895">
              {i + 1}
            </text>
            <rect x="200" y={y - 4} width={70 + (i % 3) * 16} height="6" rx="2" fill="#E8F4F8" opacity="0.7" />
            <rect x="314" y={y - 4} width={88 - (i % 2) * 14} height="6" rx="2" fill="#E8F4F8" opacity="0.4" />
            <rect x="432" y={y - 4} width="64" height="6" rx="2" fill="#E8F4F8" opacity="0.4" />
            {/* action icons */}
            <rect x="532" y={y - 4} width="14" height="6" rx="2" fill={ACC} opacity="0.85" />
            <rect x="550" y={y - 4} width="14" height="6" rx="2" fill="#7C8895" opacity="0.85" />
            <rect x="568" y={y - 4} width="14" height="6" rx="2" fill="#E1306C" opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
 * 5. Momeni Carpets  →  E-commerce product grid
 * ============================================================ */
export function EcommerceGridIllustration(props: Props) {
  const products = [
    "#9C8B73",
    "#5C6E7B",
    "#A88B5C",
    "#7B5A4C",
    "#4D5A48",
    "#8E7A92",
    "#3C4A5A",
    "#B49A6F",
  ];
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* top nav */}
      <rect x="0" y="0" width="600" height="44" fill="#11171E" />
      {/* logo */}
      <g transform="translate(280 14)">
        <path d="M0 16 L8 0 L16 16 L8 8 Z" fill={ACC} />
        <path d="M16 16 L24 0 L32 16 L24 8 Z" fill={ACC} />
      </g>
      {["RUGS", "CARPET", "PILLOWS", "DECOR", "ABOUT"].map((m, i) => (
        <text
          key={m}
          x={16 + i * 50}
          y="28"
          fontFamily="ui-sans-serif"
          fontSize="9"
          letterSpacing="0.14em"
          fill="#E8F4F8"
          opacity={i === 0 ? 1 : 0.6}
          fontWeight={i === 0 ? 600 : 500}
        >
          {m}
        </text>
      ))}
      <circle cx="556" cy="22" r="8" fill="#161C24" />
      <circle cx="578" cy="22" r="8" fill={ACC} />
      <text x="578" y="26" fontFamily="ui-sans-serif" fontSize="8" textAnchor="middle" fontWeight={700} fill="#04221F">
        3
      </text>

      {/* section title */}
      <text
        x="300"
        y="76"
        fontFamily="serif"
        fontSize="20"
        fontStyle="italic"
        textAnchor="middle"
        fill="#E8F4F8"
      >
        Newest Collections
      </text>
      <line x1="270" y1="84" x2="330" y2="84" stroke={ACC} strokeWidth="1.4" />

      {/* product grid 4×2 */}
      {products.map((c, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 22 + col * 144;
        const y = 102 + row * 140;
        return (
          <g key={i}>
            <rect x={x} y={y} width="130" height="100" rx="4" fill={c} />
            {/* weave texture */}
            <g opacity="0.12">
              {Array.from({ length: 8 }).map((_, j) => (
                <line
                  key={j}
                  x1={x}
                  y1={y + j * 13}
                  x2={x + 130}
                  y2={y + j * 13}
                  stroke="#0A0F14"
                  strokeWidth="0.6"
                />
              ))}
              {Array.from({ length: 10 }).map((_, j) => (
                <line
                  key={`v${j}`}
                  x1={x + j * 13}
                  y1={y}
                  x2={x + j * 13}
                  y2={y + 100}
                  stroke="#0A0F14"
                  strokeWidth="0.6"
                />
              ))}
            </g>
            {/* NEW badge */}
            {i < 4 && (
              <g>
                <rect x={x + 100} y={y + 6} width="22" height="10" fill={ACC} />
                <text
                  x={x + 111}
                  y={y + 13}
                  fontFamily="ui-sans-serif"
                  fontSize="6.5"
                  textAnchor="middle"
                  fontWeight={700}
                  fill="#04221F"
                >
                  NEW
                </text>
              </g>
            )}
            <text
              x={x + 6}
              y={y + 116}
              fontFamily="ui-sans-serif"
              fontSize="9"
              letterSpacing="0.18em"
              fill="#7C8895"
            >
              {["ARLO", "BEDFORD", "BENNETT", "BROOKS", "CONOR", "DANTE", "EVAN", "FINN"][i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
 * 6. LR Home  →  Product detail page
 * ============================================================ */
export function ProductDetailIllustration(props: Props) {
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* topbar */}
      <rect x="0" y="0" width="600" height="40" fill="#11171E" />
      <g transform="translate(22 12)">
        <rect width="20" height="16" rx="2" fill={ACC} />
        <text x="26" y="13" fontFamily="ui-sans-serif" fontSize="11" fontWeight={700} fill="#E8F4F8">
          LR HOME
        </text>
      </g>
      {["RUGS", "PILLOWS", "FURNITURE", "OUTDOOR", "ABOUT"].map((m, i) => (
        <text
          key={m}
          x={250 + i * 50}
          y="24"
          fontFamily="ui-sans-serif"
          fontSize="8.5"
          letterSpacing="0.16em"
          fill="#7C8895"
          fontWeight={500}
        >
          {m}
        </text>
      ))}
      <rect x="510" y="14" width="70" height="14" rx="7" fill="#161C24" />

      {/* main: image + detail panel */}
      <rect x="22" y="60" width="260" height="280" rx="6" fill="#5C6E7B" />
      <g opacity="0.18">
        {Array.from({ length: 18 }).map((_, j) => (
          <line key={j} x1="22" y1={60 + j * 16} x2="282" y2={60 + j * 16} stroke="#0A0F14" strokeWidth="0.5" />
        ))}
      </g>
      <circle cx="270" cy="72" r="8" fill="#E8F4F8" opacity="0.85" />
      <text x="270" y="76" fontFamily="ui-sans-serif" fontSize="11" textAnchor="middle" fontWeight={700} fill="#0A0F14">
        +
      </text>

      {/* thumbs */}
      <rect x="22" y="350" width="40" height="24" rx="3" fill="#9C8B73" />
      <rect x="68" y="350" width="40" height="24" rx="3" fill="#3C4A5A" />

      {/* detail panel */}
      <text x="302" y="84" fontFamily="serif" fontSize="22" fontStyle="italic" fill="#E8F4F8">
        ARL-B Steel
      </text>
      <text x="302" y="104" fontFamily="ui-sans-serif" fontSize="9" letterSpacing="0.2em" fill="#7C8895">
        MOMENI / COLLECTION
      </text>

      {/* spec table */}
      <g>
        <rect x="302" y="120" width="282" height="26" fill="#161C24" />
        {["Size", "SKU", "Barcode", "Avail"].map((h, i) => (
          <text
            key={h}
            x={310 + i * 70}
            y="137"
            fontFamily="ui-sans-serif"
            fontSize="8"
            letterSpacing="0.14em"
            fill="#7C8895"
            fontWeight={600}
          >
            {h.toUpperCase()}
          </text>
        ))}
        {[
          ["6×6", "ARLOARL-01", "57508", "Yes"],
          ["13.5×18", "ARLOARL-02", "57510", "Yes"],
          ["13.5×18", "ARLOARL-03", "57512", "Yes"],
          ["27×18", "ARLOARL-04", "57514", "Yes"],
          ["15ft Roll", "ARLOARL-05", "57516", "Yes"],
        ].map((row, i) => {
          const y = 156 + i * 22;
          return (
            <g key={i}>
              <line x1="302" y1={y + 6} x2="584" y2={y + 6} stroke="#1F262E" strokeWidth="0.5" />
              {row.map((cell, j) => (
                <text
                  key={j}
                  x={310 + j * 70}
                  y={y}
                  fontFamily="ui-sans-serif"
                  fontSize="9.5"
                  fill={j === 3 ? ACC : "#E8F4F8"}
                  opacity={j === 0 || j === 3 ? 1 : 0.75}
                  fontWeight={j === 3 ? 600 : 400}
                >
                  {cell}
                </text>
              ))}
            </g>
          );
        })}
      </g>

      {/* CTA */}
      <rect x="302" y="290" width="282" height="32" rx="4" fill={ACC} />
      <text
        x="443"
        y="310"
        fontFamily="ui-sans-serif"
        fontSize="10"
        letterSpacing="0.2em"
        textAnchor="middle"
        fontWeight={700}
        fill="#04221F"
      >
        REQUEST SAMPLE
      </text>
    </svg>
  );
}

/* ============================================================
 * 7. Ashtex internal tools  →  Admin panel with tabs
 * ============================================================ */
export function InternalToolsIllustration(props: Props) {
  return (
    <svg viewBox="0 0 600 380" {...props}>
      <rect x="0" y="0" width="600" height="380" rx="10" fill="#0E1318" />
      {/* top */}
      <rect x="0" y="0" width="600" height="46" fill="#11171E" />
      <rect x="20" y="16" width="6" height="14" fill={ACC} />
      <text x="34" y="28" fontFamily="ui-sans-serif" fontSize="13" fontWeight={700} fill="#E8F4F8">
        Ashtex Admin
      </text>
      <rect x="460" y="14" width="118" height="18" rx="9" fill="#161C24" />
      <circle cx="476" cy="23" r="3" fill={ACC} />
      <text x="486" y="26" fontFamily="ui-sans-serif" fontSize="9" fill="#7C8895">
        admin@ashtex.io
      </text>

      {/* tabs */}
      <rect x="0" y="46" width="600" height="34" fill="#11171E" opacity="0.6" />
      {["Orders", "Customers", "Products", "Reports", "Settings"].map((t, i) => (
        <g key={t}>
          <text
            x={24 + i * 92}
            y="66"
            fontFamily="ui-sans-serif"
            fontSize="11"
            fill={i === 0 ? ACC : "#7C8895"}
            fontWeight={i === 0 ? 600 : 500}
          >
            {t}
          </text>
          {i === 0 && <rect x={22 + i * 92} y="74" width="44" height="2" rx="1" fill={ACC} />}
        </g>
      ))}

      {/* chart area */}
      <g>
        <rect x="20" y="96" width="370" height="170" rx="8" fill="#11171E" />
        <text x="32" y="116" fontFamily="ui-sans-serif" fontSize="10" letterSpacing="0.12em" fill="#7C8895" fontWeight={600}>
          ORDERS · LAST 30 DAYS
        </text>
        <text x="32" y="148" fontFamily="serif" fontSize="26" fontStyle="italic" fill={ACC}>
          1,284
        </text>
        <text x="106" y="148" fontFamily="ui-sans-serif" fontSize="10" fill="#7C8895">
          +12.4%
        </text>
        {/* line chart */}
        <polyline
          points="32,250 60,232 90,236 120,210 152,222 184,196 212,206 244,180 276,184 304,160 336,168 370,144"
          stroke={ACC}
          strokeWidth="1.8"
          fill="none"
        />
        {/* area under */}
        <path
          d="M32 250 L60 232 L90 236 L120 210 L152 222 L184 196 L212 206 L244 180 L276 184 L304 160 L336 168 L370 144 L370 260 L32 260 Z"
          fill={ACC}
          opacity="0.12"
        />
        {/* x axis */}
        <line x1="32" y1="262" x2="380" y2="262" stroke="#1F262E" />
      </g>

      {/* right panel: live feed */}
      <g>
        <rect x="400" y="96" width="180" height="170" rx="8" fill="#11171E" />
        <text x="412" y="116" fontFamily="ui-sans-serif" fontSize="10" letterSpacing="0.12em" fill="#7C8895" fontWeight={600}>
          ACTIVITY
        </text>
        {[
          ["Invoice #4821", "QuickBooks"],
          ["Order shipped", "Shopify"],
          ["Lead created", "HubSpot"],
          ["Refund issued", "Stripe"],
          ["Form intake", "JotForm"],
        ].map(([t, s], i) => {
          const y = 134 + i * 26;
          return (
            <g key={i}>
              <circle cx="416" cy={y + 2} r="3" fill={ACC} />
              <text x="426" y={y + 5} fontFamily="ui-sans-serif" fontSize="10" fill="#E8F4F8" fontWeight={500}>
                {t}
              </text>
              <text x="426" y={y + 17} fontFamily="ui-sans-serif" fontSize="8" fill="#7C8895">
                {s}
              </text>
            </g>
          );
        })}
      </g>

      {/* footer KPI strip */}
      {[
        ["Revenue", "$48.2k"],
        ["Open", "37"],
        ["Refund", "0.4%"],
      ].map(([l, v], i) => (
        <g key={l}>
          <rect x={20 + i * 124} y="282" width="114" height="76" rx="8" fill="#11171E" />
          <text x={32 + i * 124} y="304" fontFamily="ui-sans-serif" fontSize="9" letterSpacing="0.12em" fill="#7C8895" fontWeight={600}>
            {l.toUpperCase()}
          </text>
          <text x={32 + i * 124} y="338" fontFamily="serif" fontStyle="italic" fontSize="22" fill="#E8F4F8">
            {v}
          </text>
        </g>
      ))}
      <rect x="392" y="282" width="188" height="76" rx="8" fill={ACC} />
      <text x="408" y="304" fontFamily="ui-sans-serif" fontSize="9" letterSpacing="0.12em" fill="#04221F" fontWeight={700}>
        AUTOMATED
      </text>
      <text x="408" y="338" fontFamily="serif" fontStyle="italic" fontSize="22" fill="#04221F">
        90%
      </text>
    </svg>
  );
}

/* Map array — index aligns with work[] order */
export const projectIllustrations = [
  MakeScenarioIllustration,     // 1 Social Media
  TrelloBoardIllustration,      // 2 Order Processing
  ClickUpHiringIllustration,    // 3 Hiring
  AdminDashIllustration,        // 4 Eyeon
  EcommerceGridIllustration,    // 5 Momeni
  ProductDetailIllustration,    // 6 LR Home
  InternalToolsIllustration,    // 7 Ashtex
];

/* ----- service illustrations (kept) ----- */

export function AiServiceIllustration(props: Props) {
  return (
    <svg viewBox="0 0 200 120" {...props}>
      <g stroke={FG} strokeWidth="1" fill="none">
        {[20, 60, 100, 140, 180].map((x, i) => (
          <circle key={i} cx={x} cy="60" r="6" />
        ))}
        <line x1="26" y1="60" x2="54" y2="60" />
        <line x1="66" y1="60" x2="94" y2="60" />
        <line x1="106" y1="60" x2="134" y2="60" />
        <line x1="146" y1="60" x2="174" y2="60" />
        <circle cx="60" cy="20" r="5" />
        <circle cx="60" cy="100" r="5" />
        <circle cx="140" cy="20" r="5" />
        <circle cx="140" cy="100" r="5" />
        <line x1="60" y1="26" x2="60" y2="54" />
        <line x1="60" y1="66" x2="60" y2="94" />
        <line x1="140" y1="26" x2="140" y2="54" />
        <line x1="140" y1="66" x2="140" y2="94" />
      </g>
    </svg>
  );
}

export function StackServiceIllustration(props: Props) {
  return (
    <svg viewBox="0 0 200 120" {...props}>
      <g stroke={FG} strokeWidth="1" fill="none">
        <rect x="20" y="20" width="80" height="40" rx="3" />
        <rect x="110" y="20" width="70" height="40" rx="3" />
        <rect x="20" y="68" width="160" height="34" rx="3" />
        <line x1="30" y1="32" x2="80" y2="32" opacity="0.6" />
        <line x1="30" y1="42" x2="70" y2="42" opacity="0.4" />
        <line x1="30" y1="52" x2="60" y2="52" opacity="0.4" />
        <line x1="120" y1="32" x2="170" y2="32" opacity="0.6" />
        <polyline points="120,52 130,46 140,50 150,42 160,46 170,38" />
        <line x1="30" y1="80" x2="170" y2="80" opacity="0.4" />
        <line x1="30" y1="90" x2="120" y2="90" opacity="0.4" />
      </g>
    </svg>
  );
}

export function ProcessServiceIllustration(props: Props) {
  return (
    <svg viewBox="0 0 200 120" {...props}>
      <g stroke={FG} strokeWidth="1" fill="none">
        <circle cx="40" cy="60" r="22" />
        <circle cx="100" cy="60" r="22" />
        <circle cx="160" cy="60" r="22" />
        <path d="M40 38v-10M40 82v10M62 60h10M28 60h-10M100 38v-10M100 82v10M122 60h10M88 60h-10M160 38v-10M160 82v10M138 60h10M182 60h-6" />
        <circle cx="40" cy="60" r="3" fill={FG} />
        <circle cx="100" cy="60" r="3" fill={FG} />
        <circle cx="160" cy="60" r="3" fill={FG} />
      </g>
    </svg>
  );
}
