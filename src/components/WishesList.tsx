"use client";

import { motion } from "framer-motion";
import type { Wish } from "@/data/wedding";

const attendanceLabel: Record<Wish["attendance"], string> = {
  hadir: "Akan Hadir",
  tidak_hadir: "Tidak Dapat Hadir",
  ragu: "Masih Ragu",
};

const attendanceColor: Record<Wish["attendance"], string> = {
  hadir: "text-sage",
  tidak_hadir: "text-brown-light/70",
  ragu: "text-gold",
};

export function WishesList({ wishes }: { wishes: Wish[] }) {
  if (wishes.length === 0) {
    return <p className="text-sm text-brown-dark/60 text-center mt-6">Belum ada ucapan. Jadilah yang pertama!</p>;
  }

  return (
    <div className="mt-8 w-full max-w-xl flex flex-col gap-4 max-h-96 overflow-y-auto pr-1">
      {wishes.map((wish, i) => (
        <motion.div
          key={wish.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.05 }}
          className="bg-ivory border border-gold/20 rounded-2xl px-5 py-4"
        >
          <div className="flex items-center justify-between mb-1.5">
            <p className="font-semibold text-brown-dark">{wish.name}</p>
            <span className={`text-[10px] uppercase tracking-wide ${attendanceColor[wish.attendance]}`}>
              {attendanceLabel[wish.attendance]}
            </span>
          </div>
          <p className="text-sm text-brown-dark/75 leading-relaxed">{wish.message}</p>
        </motion.div>
      ))}
    </div>
  );
}
