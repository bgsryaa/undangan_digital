"use client";

import { motion, useReducedMotion } from "framer-motion";

function Leaf({ className, delay, duration }: { className: string; delay: number; duration: number }) {
  return (
    <motion.span
      aria-hidden
      className={`absolute block h-3 w-7 rounded-[100%_0_100%_0] bg-sage/50 blur-[0.2px] ${className}`}
      animate={{ y: [0, -18, 4, 0], x: [0, 8, -5, 0], rotate: [12, 30, -10, 12], opacity: [0.15, 0.55, 0.25, 0.15] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function JavaneseAtmosphere({ variant = "light" }: { variant?: "light" | "dark" }) {
  const reduce = useReducedMotion();
  const dark = variant === "dark";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${dark ? "text-gold-light" : "text-gold"}`} aria-hidden>
      <div className="absolute inset-0 jv-garden-grain" />
      <div className={`absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl ${dark ? "bg-gold/10" : "bg-gold/10"}`} />
      <div className={`absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl ${dark ? "bg-sage/10" : "bg-sage/20"}`} />

      {!reduce && (
        <>
          <Leaf className="left-[8%] top-[28%]" delay={0} duration={7} />
          <Leaf className="left-[22%] top-[68%] scale-75" delay={1.5} duration={8} />
          <Leaf className="right-[15%] top-[30%] scale-90" delay={2} duration={7.5} />
          <Leaf className="right-[7%] top-[72%] scale-75" delay={0.8} duration={9} />
          <motion.div
            className="absolute left-[15%] top-[18%] h-1 w-1 rounded-full bg-gold-light shadow-[0_0_18px_6px_rgba(228,199,122,.28)]"
            animate={{ opacity: [0.1, 0.9, 0.15], scale: [0.7, 1.4, 0.7] }}
            transition={{ duration: 3.8, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-[19%] top-[55%] h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_20px_7px_rgba(228,199,122,.25)]"
            animate={{ opacity: [0.15, 0.85, 0.2], y: [0, -14, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, delay: 1.2 }}
          />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}
