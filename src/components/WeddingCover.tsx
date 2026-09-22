"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { BatikPattern } from "./ornaments/BatikPattern";
import { CoverScene } from "./ornaments/CoverScene";

const dateParts = new Date(weddingData.weddingDateISO)
  .toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" })
  .split("/");

export function WeddingCover({
  guestName,
  onOpen,
}: {
  guestName: string | null;
  onOpen: () => void;
}) {
  return (
    <motion.section
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
        transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
      }}
      className="jv-cover fixed inset-0 z-50 overflow-hidden text-ivory"
    >
      {/* === Background Layers === */}
      <CoverScene />
      <BatikPattern opacity={0.08} />

      {/* Vignette + Glow Emas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(228,199,122,.15),transparent_28%),linear-gradient(to_bottom,rgba(23,20,15,.05),rgba(20,25,18,.55)_72%,rgba(17,28,20,.96))]" />
      <div className="jv-cover-vignette" />

      {/* === Partikel Debu Emas === */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { top: "14%", left: "18%", size: 2, delay: 0.2, dur: 7.5 },
          { top: "22%", left: "82%", size: 2, delay: 0.8, dur: 8.0 },
          { top: "48%", left: "10%", size: 1.5, delay: 1.2, dur: 7.0 },
          { top: "58%", left: "90%", size: 2, delay: 0.6, dur: 8.5 },
          { top: "70%", left: "24%", size: 1.5, delay: 1.6, dur: 7.8 },
          { top: "38%", left: "72%", size: 1.5, delay: 0.3, dur: 9.0 },
        ].map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.85, 0], y: [-10, -60] }}
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

      {/* === Top Ornament === */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between
                   sm:left-8 sm:right-8 sm:top-8"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-right bg-gradient-to-r from-transparent to-gold/60"
        />
        <span className="mx-3 text-[9px] uppercase tracking-[0.4em] text-gold-light/85 sm:mx-4 sm:text-[10px] sm:tracking-[0.45em]">
          Javanese Wedding
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="h-px flex-1 origin-left bg-gradient-to-l from-transparent to-gold/60"
        />
      </motion.div>

      {/* === Main Copy === */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center
                      px-6 pb-10 pt-16 text-center sm:px-10 sm:pb-12 sm:pt-20">
        {/* Label "The Wedding Of" */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.15em", y: -8 }}
          animate={{ opacity: 1, letterSpacing: "0.4em", y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: "easeOut" }}
          className="text-[10px] font-medium uppercase text-gold-light sm:text-xs"
        >
          The Wedding Of
        </motion.p>

        {/* === Nama Pasangan === */}
        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-5 text-[3.25rem] leading-[0.95] text-[#f3dfae]
                     drop-shadow-[0_6px_28px_rgba(0,0,0,.5)]
                     sm:mt-6 sm:text-7xl md:text-8xl"
        >
          <span className="block sm:inline">{weddingData.groom.nickname}</span>
          <span className="mx-3 inline-block font-script text-4xl text-gold-light sm:mx-4 sm:text-6xl md:text-7xl">
            &amp;
          </span>
          <span className="block sm:inline">{weddingData.bride.nickname}</span>
        </motion.h1>

        {/* === Divider Emas === */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 h-px w-32 origin-center sm:mt-7 sm:w-44"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-1 h-1 rounded-full bg-gold-light
                           shadow-[0_0_10px_2px_rgba(217,179,106,0.9)]" />
        </motion.div>

        {/* === Tanggal === */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
          className="mt-5 text-[11px] tracking-[0.4em] text-ivory/85 sm:mt-6 sm:text-sm sm:tracking-[0.42em]"
        >
          {dateParts.join(" • ")}
        </motion.p>

        {/* === Info Tamu === */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: "easeOut" }}
          className="mt-10 sm:mt-12"
        >
          <p className="text-[9px] uppercase tracking-[0.38em] text-gold-light/85">
            Kepada Yth.
          </p>
          <p className="mt-1.5 font-display text-2xl text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,.5)] sm:text-3xl">
            {guestName ?? "Bapak/Ibu/Saudara/i"}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 h-px w-24 origin-center
                       bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </motion.div>

        {/* === Tombol Buka Undangan === */}
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="jv-cover-button group relative mt-10 inline-flex min-h-12 items-center gap-3
                     overflow-hidden rounded-full border border-gold/80
                     bg-[#3b2a18]/75 px-8 py-3.5
                     text-[10px] font-medium uppercase tracking-[0.28em] text-gold-light
                     shadow-[0_10px_40px_rgba(0,0,0,.35),0_0_0_1px_rgba(217,179,106,.15)_inset]
                     backdrop-blur-sm transition-all duration-500
                     hover:bg-gold hover:text-brown-dark hover:shadow-[0_15px_50px_rgba(184,137,58,.5)]
                     sm:mt-12 sm:px-10 sm:py-4"
        >
          <motion.span
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
              delay: 2.6,
            }}
            className="pointer-events-none absolute inset-y-0 w-1/2
                       bg-gradient-to-r from-transparent via-white/25 to-transparent
                       skew-x-[-20deg]"
          />
          <span className="h-1.5 w-1.5 rounded-full bg-gold-light transition-colors group-hover:bg-brown-dark" />
          <span className="relative">Buka Undangan</span>
          <span className="relative text-base leading-none transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.button>
      </div>

      {/* === Footer Tagline === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.9 }}
        className="absolute bottom-5 left-0 right-0 z-20 text-center
                   text-[8px] uppercase tracking-[0.42em] text-ivory/50
                   sm:bottom-6 sm:tracking-[0.45em]"
      >
        With love &amp; gratitude
      </motion.p>

      {/* === Garis Emas Tepi Bawah === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20 h-px origin-center
                   bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
    </motion.section>
  );
}