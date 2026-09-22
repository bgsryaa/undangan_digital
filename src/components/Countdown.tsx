"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { useCountdown } from "@/lib/useCountdown";

function Block({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center bg-brown-dark text-ivory rounded-2xl w-16 h-16 sm:w-20 sm:h-20 shadow-md"
    >
      <span className="font-display text-2xl sm:text-3xl leading-none">{String(value).padStart(2, "0")}</span>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-light mt-1">{label}</span>
    </motion.div>
  );
}

export function Countdown() {
  const { days, hours, minutes, seconds, isOver } = useCountdown(weddingData.weddingDateISO);

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      {isOver ? (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display text-2xl sm:text-3xl text-gold tracking-wide"
        >
          THE DAY HAS ARRIVED
        </motion.p>
      ) : (
        <div className="flex items-center gap-3 sm:gap-5">
          <Block value={days} label="Days" />
          <Block value={hours} label="Hours" />
          <Block value={minutes} label="Minutes" />
          <Block value={seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
}
