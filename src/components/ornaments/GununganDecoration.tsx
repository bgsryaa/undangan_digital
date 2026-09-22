"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  animate?: boolean;
};

/**
 * Siluet Gunungan (kayon) wayang — elemen tanda tangan visual website ini.
 * Digambar sebagai SVG murni agar ringan, dengan motif garis parang subtle di dalamnya.
 */
export function GununganDecoration({ className, animate = true }: Props) {
  const Wrapper = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, scale: 0.85, y: 20 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      }
    : {};

  return (
    <Wrapper className={cn("select-none", className)} {...motionProps}>
      <svg viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="gununganGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E4C77A" />
            <stop offset="100%" stopColor="#C6952F" />
          </linearGradient>
          <pattern id="parangLine" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#C6952F" strokeOpacity="0.18" strokeWidth="1" />
          </pattern>
        </defs>
        <path
          d="M110 8
             C 118 40, 96 55, 130 78
             C 160 98, 150 120, 178 132
             C 200 141, 212 158, 214 176
             L 214 250
             L 6 250
             L 6 176
             C 8 158, 20 141, 42 132
             C 70 120, 60 98, 90 78
             C 124 55, 102 40, 110 8 Z"
          fill="url(#gununganGold)"
          fillOpacity="0.14"
          stroke="#C6952F"
          strokeWidth="1.5"
        />
        <path
          d="M110 8
             C 118 40, 96 55, 130 78
             C 160 98, 150 120, 178 132
             C 200 141, 212 158, 214 176
             L 214 250
             L 6 250
             L 6 176
             C 8 158, 20 141, 42 132
             C 70 120, 60 98, 90 78
             C 124 55, 102 40, 110 8 Z"
          fill="url(#parangLine)"
        />
        <circle cx="110" cy="66" r="4" fill="#C6952F" />
        <path d="M60 200 Q110 175 160 200" stroke="#C6952F" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </Wrapper>
  );
}
