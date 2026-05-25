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
  /** Reveal blob radius in px */
  size?: number;
  /** Mask retract animation duration in seconds */
  returnDuration?: number;
  /** Parallax intensity for back image (0-1) */
  parallax?: number;
  alt?: string;
  className?: string;
  /** Force auto-loop mode (otherwise auto-detects touch / no-hover devices). */
  autoLoop?: boolean;
  /** Seconds for one full auto-loop traversal. */
  autoLoopDuration?: number;
};

/**
 * Cursor-reactive liquid mask reveal with mobile auto-animation.
 *
 * Desktop (hover): blob follows cursor, retracts on leave.
 * Touch / no-hover: blob auto-traces a smooth lissajous path across the
 * image so the reveal always plays — no input needed.
 */
export default function HoverMaskReveal({
  frontImage,
  backImage,
  size = 200,
  returnDuration = 0.6,
  parallax = 0.04,
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

  const FOLLOW = 0.18;
  const GROW = 0.22;
  const shrinkPerSec = size / returnDuration;

  // Detect touch / no-hover capability on mount.
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

      // In touch mode, drive the target along a lissajous path so the blob
      // sweeps the whole frame smoothly without ever stopping.
      if (touchMode && dims.w && dims.h) {
        if (!autoStartRef.current) autoStartRef.current = time;
        const t = ((time - autoStartRef.current) / 1000) / autoLoopDuration;
        const ang = t * Math.PI * 2;
        const padX = dims.w * 0.22;
        const padY = dims.h * 0.22;
        target.current.x = dims.w / 2 + Math.sin(ang) * (dims.w / 2 - padX);
        target.current.y =
          dims.h / 2 + Math.sin(ang * 2) * (dims.h / 2 - padY);
        target.current.r = size;
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
        const px =
          ((current.current.x - dims.w / 2) / dims.w) * 2 * parallax * 100;
        const py =
          ((current.current.y - dims.h / 2) / dims.h) * 2 * parallax * 100;
        backImgRef.current.style.transform = `translate3d(${-px}%, ${-py}%, 0) scale(${
          1 + parallax * 0.6
        })`;
      }

      if (turbRef.current && current.current.r > 0.5) {
        const seed = (time / 60) % 100;
        turbRef.current.setAttribute("seed", String(Math.floor(seed)));
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
    [dims.w, dims.h, parallax, shrinkPerSec, touchMode, size, autoLoopDuration]
  );

  const ensureAnimating = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // Kick off auto-loop when touch mode + dims are ready.
  useEffect(() => {
    if (touchMode && dims.w && dims.h) {
      autoStartRef.current = 0;
      current.current.x = dims.w / 2;
      current.current.y = dims.h / 2;
      target.current.r = size;
      ensureAnimating();
    }
  }, [touchMode, dims.w, dims.h, size, ensureAnimating]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (touchMode) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
      target.current.r = size;
      ensureAnimating();
    },
    [size, ensureAnimating, touchMode]
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
      target.current.r = size;
      ensureAnimating();
    },
    [size, ensureAnimating, touchMode]
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
              baseFrequency="0.018"
              numOctaves="2"
              seed="2"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale="60"
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
