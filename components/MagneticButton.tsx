"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  as?: "a" | "button" | "div";
  [k: string]: unknown;
};

/**
 * Wraps any clickable element with a magnetic pull effect.
 * Translates a small amount toward the cursor on hover, snaps back on leave.
 */
export default function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.35,
  as = "a",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag =
    as === "a"
      ? motion.a
      : as === "button"
        ? motion.button
        : motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement & HTMLDivElement>}
      href={href}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      {...rest}
    >
      <motion.span
        style={{ x: sx, y: sy }}
        className="inline-flex items-center gap-3 will-change-transform"
      >
        {children}
      </motion.span>
    </MotionTag>
  );
}
