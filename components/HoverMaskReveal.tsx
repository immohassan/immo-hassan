"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type Props = {
  frontImage: string;
  backImage: string;

  /**
   * Blob size as fraction of container's longest side (0–1).
   * Mirrors Framer "Size" knob. e.g. 0.08 = 8%.
   * Pass a raw px number instead with `sizePx`.
   */
  size?: number;
  sizePx?: number;

  /** Mask retract animation seconds. Framer "Return time". */
  returnDuration?: number;

  /** Enable parallax on back image. Framer "Parallax". */
  parallax?: boolean;
  /** Parallax pixel amount. Framer "Amount". */
  parallaxAmount?: number;

  /** Cursor follow easing 0–1. Framer "Smoothing" (0 = snap, 1 = slow). */
  smoothing?: number;

  /** Container corner radius in px. Framer "Radius". */
  radius?: number;

  /** Displacement scale (px). Framer "Strength". */
  strength?: number;

  /** Turbulence baseFrequency. Framer "Edge grain". */
  edgeGrain?: number;

  /** Extra rotational shimmer on the turbulence seed. Framer "Swirl". */
  swirl?: number;

  alt?: string;
  className?: string;

  /** Force auto-loop mode (otherwise auto-detects touch/no-hover). */
  autoLoop?: boolean;
  /** Seconds for one full auto-loop traversal. */
  autoLoopDuration?: number;
};

/**
 * Cursor-reactive liquid mask reveal — Framer "Hover Mask Reveal" parity.
 *
 * Desktop hover: blob follows cursor, retracts on leave.
 * Touch / no-hover: blob auto-traces a smooth lissajous path so the reveal
 * always plays without input.
 */
export default function HoverMaskReveal({
  frontImage,
  backImage,
  size = 0.4,
  sizePx,
  returnDuration = 0.6,
  parallax = true,
  parallaxAmount = 60,
  smoothing = 0.18,
  radius = 0,
  strength = 60,
  edgeGrain = 0.018,
  swirl = 30,
  alt = "",
  className = "",
  autoLoop,
  autoLoopDuration = 7,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const maskId = `liquid-mask-${uid}`;
  const filterId = `liquid-filter-${uid}`;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const animatingRef = useRef(false);
  const lastTimeRef = useRef<number>(0);
  const autoStartRef = useRef<number>(0);

  const target = useRef({ x: 0, y: 0, r: 0 });
  const current = useRef({ x: 0, y: 0, r: 0 });

  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [touchMode, setTouchMode] = useState(false);

  const blobRef = useRef<SVGCircleElement | null>(null);
  const backImgRef = useRef<HTMLDivElement | null>(null);
  const turbRef = useRef<SVGFETurbulenceElement | null>(null);

  // Map "Smoothing" (0 slow → 1 snap if we invert, but Framer's slider is
  // 0 = snap, higher = slower follow). Pick a sensible range: 0 → 0.45 (snap)
  // 1 → 0.05 (very smooth). Default 0.18 follows reasonably tight.
  const FOLLOW = Math.max(0.02, 0.45 - smoothing * 0.4);
  const GROW = 0.22;

  // Resolve blob radius
  const resolvedRadius = (() => {
    if (typeof sizePx === "number") return sizePx;
    if (!dims.w || !dims.h) return 0;
    return Math.max(dims.w, dims.h) * size;
  })();

  const shrinkPerSec = resolvedRadius / Math.max(0.05, returnDuration);

  // Touch detection
  useEffect(() => {
    if (autoLoop !== undefined) {
      setTouchMode(autoLoop);
      return;
    }
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    setTouchMode(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setTouchMode(e.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [autoLoop]);

  const updateSize = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setDims({ w: rect.width, h: rect.height });
  }, []);

  useEffect(() => {
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [updateSize]);

  const tick = useCallback(
    (time: number) => {
      const dt = lastTimeRef.current
        ? Math.min(0.05, (time - lastTimeRef.current) / 1000)
        : 0.016;
      lastTimeRef.current = time;

      if (touchMode && dims.w && dims.h) {
        if (!autoStartRef.current) autoStartRef.current = time;
        const t = ((time - autoStartRef.current) / 1000) / autoLoopDuration;
        const ang = t * Math.PI * 2;
        const padX = dims.w * 0.22;
        const padY = dims.h * 0.22;
        target.current.x = dims.w / 2 + Math.sin(ang) * (dims.w / 2 - padX);
        target.current.y =
          dims.h / 2 + Math.sin(ang * 2) * (dims.h / 2 - padY);
        target.current.r = resolvedRadius;
      }

      current.current.x += (target.current.x - current.current.x) * FOLLOW;
      current.current.y += (target.current.y - current.current.y) * FOLLOW;

      if (target.current.r > 0) {
        current.current.r += (target.current.r - current.current.r) * GROW;
      } else {
        current.current.r = Math.max(0, current.current.r - shrinkPerSec * dt);
      }

      if (blobRef.current) {
        blobRef.current.setAttribute("cx", String(current.current.x));
        blobRef.current.setAttribute("cy", String(current.current.y));
        blobRef.current.setAttribute("r", String(current.current.r));
      }

      if (backImgRef.current && dims.w && dims.h) {
        if (parallax) {
          const nx = (current.current.x - dims.w / 2) / dims.w;
          const ny = (current.current.y - dims.h / 2) / dims.h;
          const px = -nx * parallaxAmount;
          const py = -ny * parallaxAmount;
          const scale = 1 + parallaxAmount / Math.max(dims.w, dims.h) / 2;
          backImgRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`;
        } else {
          backImgRef.current.style.transform = "none";
        }
      }

      if (turbRef.current && current.current.r > 0.5) {
        const seed = Math.floor(((time / 60) * (1 + swirl / 30)) % 100);
        turbRef.current.setAttribute("seed", String(seed));
      }

      const stillMoving =
        touchMode ||
        Math.abs(target.current.x - current.current.x) > 0.2 ||
        Math.abs(target.current.y - current.current.y) > 0.2 ||
        Math.abs(target.current.r - current.current.r) > 0.2 ||
        current.current.r > 0.5;

      if (stillMoving) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        animatingRef.current = false;
        rafRef.current = null;
        lastTimeRef.current = 0;
      }
    },
    [
      dims.w,
      dims.h,
      parallax,
      parallaxAmount,
      shrinkPerSec,
      touchMode,
      resolvedRadius,
      autoLoopDuration,
      swirl,
      FOLLOW,
    ]
  );

  const ensureAnimating = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    if (touchMode && dims.w && dims.h) {
      autoStartRef.current = 0;
      current.current.x = dims.w / 2;
      current.current.y = dims.h / 2;
      target.current.r = resolvedRadius;
      ensureAnimating();
    }
  }, [touchMode, dims.w, dims.h, resolvedRadius, ensureAnimating]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (touchMode) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
      target.current.r = resolvedRadius;
      ensureAnimating();
    },
    [resolvedRadius, ensureAnimating, touchMode]
  );

  const onEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (touchMode) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      current.current.x = e.clientX - rect.left;
      current.current.y = e.clientY - rect.top;
      target.current.x = current.current.x;
      target.current.y = current.current.y;
      target.current.r = resolvedRadius;
      ensureAnimating();
    },
    [resolvedRadius, ensureAnimating, touchMode]
  );

  const onLeave = useCallback(() => {
    if (touchMode) return;
    target.current.r = 0;
    ensureAnimating();
  }, [ensureAnimating, touchMode]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={{ borderRadius: radius ? `${radius}px` : undefined }}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frontImage}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        ref={backImgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          WebkitMask: `url(#${maskId})`,
          mask: `url(#${maskId})`,
          maskType: "alpha",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backImage}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width={dims.w || "100%"}
        height={dims.h || "100%"}
        viewBox={dims.w ? `0 0 ${dims.w} ${dims.h}` : undefined}
        aria-hidden="true"
      >
        <defs>
          <filter
            id={filterId}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency={edgeGrain}
              numOctaves="2"
              seed="2"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale={strength}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={dims.w || 0}
            height={dims.h || 0}
          >
            <rect width="100%" height="100%" fill="black" />
            <circle
              ref={blobRef}
              cx="0"
              cy="0"
              r="0"
              fill="white"
              filter={`url(#${filterId})`}
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
}
