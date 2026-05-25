"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      // show after 80vh, hide near footer
      setVisible(y > window.innerHeight * 0.8 && y < h - window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 btn-dark rounded-full pl-5 pr-2 py-2 text-sm font-medium shadow-[0_20px_60px_-15px_rgba(10,15,20,0.35)]"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Book a call</span>
          <span className="grid place-items-center w-8 h-8 rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-smooth group-hover:translate-x-0.5">
            <ArrowUpRight size={14} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
