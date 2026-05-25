"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, CheckCircle2, MessageSquare, Mail, Phone } from "lucide-react";

export default function HeroMockup() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.5 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [-6, 6]);
  const translateZ = useTransform(smx, [-0.5, 0.5], [10, 10]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative w-full aspect-square md:aspect-[5/6] lg:aspect-[5/5]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, z: translateZ, transformStyle: "preserve-3d" }}
        className="relative w-full h-full will-change-transform"
      >
        {/* main panel */}
        <div className="absolute inset-0 rounded-[24px] bg-surface border border-line shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* fake chrome */}
          <div className="flex items-center gap-1.5 px-5 h-9 border-b border-line bg-ink/40">
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="ml-4 text-[11px] eyebrow-muted">workflow · live</span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-bone/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              running
            </span>
          </div>

          <div className="relative h-full p-6 md:p-8">
            <NodeCard
              label="Trigger"
              sub="New order"
              Icon={MessageSquare}
              className="absolute top-4 left-4 w-[42%]"
              delay={0}
            />
            <NodeCard
              label="AI"
              sub="Classify intent"
              Icon={Bot}
              className="absolute top-[28%] right-4 w-[42%]"
              accent
              delay={0.15}
            />
            <NodeCard
              label="Workflow"
              sub="Sync to CRM"
              Icon={Workflow}
              className="absolute top-[58%] left-4 w-[44%]"
              delay={0.3}
            />
            <NodeCard
              label="Done"
              sub="Customer notified"
              Icon={CheckCircle2}
              className="absolute bottom-4 right-4 w-[44%]"
              delay={0.45}
            />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <FlowingPath d="M 25 12 C 55 12 70 25 75 35" />
              <FlowingPath d="M 75 42 C 75 60 35 60 25 66" delay={0.6} />
              <FlowingPath d="M 25 73 C 60 80 70 85 78 88" delay={1.2} />
            </svg>
          </div>
        </div>

        {/* floating stat — top right */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ z: 40, transformStyle: "preserve-3d" }}
          className="absolute -top-4 -right-2 md:-right-6 card px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
        >
          <p className="eyebrow-muted">Throughput</p>
          <p className="display text-2xl md:text-3xl tracking-tight mt-0.5">
            1,248<span className="text-muted text-base">/day</span>
          </p>
        </motion.div>

        {/* floating accent toast — bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ z: 50, transformStyle: "preserve-3d" }}
          className="absolute -bottom-2 -left-2 md:-left-6 card-accent px-4 py-3 max-w-[60%] shadow-[0_20px_40px_-20px_rgba(0,229,204,0.4)]"
        >
          <p className="eyebrow-muted text-accent-ink/70">Voice agent</p>
          <p className="text-sm leading-snug mt-1 text-accent-ink">
            &ldquo;Booked Tuesday 3pm. Confirmation sent.&rdquo;
          </p>
          <div className="mt-2 flex gap-2 text-[11px] text-accent-ink/70">
            <span className="inline-flex items-center gap-1">
              <Phone size={11} /> 00:42
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail size={11} /> sent
            </span>
          </div>
        </motion.div>

        {/* rotated tag — mid left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -16 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ z: 30 }}
          className="absolute top-[44%] -left-4 md:-left-8"
        >
          <span className="inline-flex items-center gap-2 bg-bone text-ink text-[11px] uppercase tracking-[0.16em] font-semibold px-3 py-1.5 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Auto-routing
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function FlowingPath({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <g>
      <path
        d={d}
        stroke="#00E5CC"
        strokeWidth="0.4"
        strokeDasharray="0.8 1.2"
        fill="none"
        opacity="0.45"
      />
      {/* moving accent dot */}
      <motion.circle
        r="0.9"
        fill="#00E5CC"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 2.4,
          ease: "linear",
          repeat: Infinity,
          delay,
        }}
        style={{
          offsetPath: `path('${d}')`,
          offsetRotate: "0deg",
        }}
      />
    </g>
  );
}

function NodeCard({
  label,
  sub,
  Icon,
  className = "",
  accent = false,
  delay = 0,
}: {
  label: string;
  sub: string;
  Icon: typeof Bot;
  className?: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.3 + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ z: 25, transformStyle: "preserve-3d" }}
      className={`${className} ${
        accent ? "card-accent" : "card"
      } px-3.5 py-3 z-10`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`w-7 h-7 rounded-md grid place-items-center ${
            accent ? "bg-accent-ink text-accent" : "bg-bone text-ink"
          }`}
        >
          <Icon size={14} strokeWidth={1.8} />
        </span>
        <div className="leading-tight min-w-0">
          <p
            className={`text-[10px] uppercase tracking-[0.16em] font-semibold ${
              accent ? "text-accent-ink/70" : "text-muted"
            }`}
          >
            {label}
          </p>
          <p
            className={`text-[13px] font-medium truncate ${
              accent ? "text-accent-ink" : "text-bone"
            }`}
          >
            {sub}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
