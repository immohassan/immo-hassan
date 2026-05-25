"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Parses any numeric prefix in `value` (e.g. "7+", "90%", "1,248") and
 * animates the digits from 0 → target on first scroll into view. Trailing
 * non-numeric tail (+, %, /day, etc.) renders verbatim.
 */
export default function CountUp({ value, duration = 1400, className = "" }: Props) {
  const match = value.match(/^([\d,]+\.?\d*)(.*)$/);
  const raw = match?.[1] ?? "";
  const tail = match?.[2] ?? "";
  const target = raw ? parseFloat(raw.replace(/,/g, "")) : NaN;
  const hasDecimal = raw.includes(".");

  const [display, setDisplay] = useState(Number.isFinite(target) ? "0" : value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!Number.isFinite(target) || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              setDisplay(
                hasDecimal
                  ? current.toFixed(1)
                  : Math.round(current).toLocaleString()
              );
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, hasDecimal]);

  if (!Number.isFinite(target)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {tail}
    </span>
  );
}
