"use client";

import { useEffect, useRef, useState } from "react";

const POOL = "!<>-_\\/[]{}—=+*^?#________";

type Props = {
  text: string;
  duration?: number;
  className?: string;
  delay?: number;
};

/**
 * One-shot decode-on-mount scramble (a la GitHub's old hero).
 * Each char picks a random reveal frame; non-revealed chars cycle through
 * symbols. Fast (< 1s) so it never blocks reading.
 */
export default function TextScramble({
  text,
  duration = 900,
  className = "",
  delay = 0,
}: Props) {
  const [out, setOut] = useState(text);
  const raf = useRef<number | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const len = text.length;
    const reveals = Array.from({ length: len }, () =>
      Math.floor(Math.random() * duration * 0.7)
    );

    const start = performance.now() + delay;

    const tick = (now: number) => {
      const t = now - start;
      if (t < 0) {
        raf.current = requestAnimationFrame(tick);
        return;
      }
      let s = "";
      for (let i = 0; i < len; i++) {
        const ch = text[i];
        if (ch === " " || ch === "\n") {
          s += ch;
          continue;
        }
        if (t >= reveals[i]) {
          s += ch;
        } else {
          s += POOL[Math.floor(Math.random() * POOL.length)];
        }
      }
      setOut(s);
      if (t < duration) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setOut(text);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, duration, delay]);

  return <span className={className}>{out}</span>;
}
