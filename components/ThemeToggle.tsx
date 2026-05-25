"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative grid place-items-center rounded-full border border-line bg-surface hover:border-accent transition-colors duration-500 ease-smooth ${className}`}
      style={{ width: size, height: size }}
    >
      <Sun
        size={16}
        strokeWidth={1.6}
        className={`absolute transition-all duration-500 ease-smooth ${
          isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        size={16}
        strokeWidth={1.6}
        className={`absolute transition-all duration-500 ease-smooth ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
