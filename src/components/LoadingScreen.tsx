"use client";

import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { GununganDecoration } from "./ornaments/GununganDecoration";

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(8px)",
            transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center
                     bg-brown-dark text-ivory overflow-hidden"
        >
          {/* === Layer 1: Vignette + Glow Emas === */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse at center, rgba(184,137,58,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)
              `,
            }}
          />

          {/* === Layer 2: Partikel Emas Halus === */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {[
              { top: "18%", left: "22%", size: 3, delay: 0.2, dur: 3.2 },
              { top: "28%", left: "78%", size: 2, delay: 0.6, dur: 4.0 },
              { top: "62%", left: "15%", size: 2, delay: 0.9, dur: 3.6 },
              { top: "72%", left: "85%", size: 3, delay: 0.4, dur: 3.0 },
              { top: "42%", left: "8%",  size: 2, delay: 1.1, dur: 3.8 },
              { top: "55%", left: "92%", size: 2, delay: 0.7, dur: 4.2 },
            ].map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.9, 0], y: [-10, -40] }}
                transition={{
                  duration: p.dur,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-gold-light"
                style={{
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 8px 2px rgba(217,179,106,0.7)",
                }}
              />
            ))}
          </div>

          {/* === Layer 3: Ornamen Sudut (Batik-ish line) === */}
          <svg
            aria-hidden
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          >
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D9B36A" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#D9B36A" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#D9B36A" strokeWidth="0.5" />
          </svg>

          {/* === Content === */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Gunungan dengan pulse + glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-20 h-24 mb-8"
            >
              {/* Glow di belakang gunungan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(217,179,106,0.7), transparent 70%)" }}
              />
              <GununganDecoration
                animate
                className="relative w-full h-full [&_svg_path]:!stroke-gold-light"
              />
            </motion.div>

            {/* Label kecil di atas nama */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.5em] text-gold-light/70 mb-3"
            >
              The Wedding Of
            </motion.p>

            {/* Nama Pasangan */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl tracking-[0.15em] uppercase
                         text-gold-light text-center
                         drop-shadow-[0_0_20px_rgba(217,179,106,0.35)]"
            >
              {weddingData.groom.nickname}
              <span className="mx-3 italic text-gold/80">&amp;</span>
              {weddingData.bride.nickname}
            </motion.h1>

            {/* Divider dengan animasi expand */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "10rem", opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-px mt-6 bg-gradient-to-r from-transparent via-gold to-transparent"
            >
              {/* Titik emas di tengah */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-1.5 h-1.5 rounded-full bg-gold-light
                           shadow-[0_0_12px_3px_rgba(217,179,106,0.9)]"
              />
            </motion.div>

            {/* Tanggal */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-5 text-[11px] tracking-[0.4em] text-gold-light/60 uppercase"
            >
              {weddingData.date}
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center gap-1.5 mt-10"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-1 rounded-full bg-gold-light"
                />
              ))}
            </motion.div>
          </div>

          {/* Garis emas di tepi bawah */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px origin-center
                       bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}