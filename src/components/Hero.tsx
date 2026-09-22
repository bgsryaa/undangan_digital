"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";
import { GununganDecoration } from "./ornaments/GununganDecoration";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";

export function Hero() {
  return (
    <section
      id="home"
      className="jv-section jv-paper relative min-h-screen flex items-center
                 py-28 lg:py-32 overflow-hidden"
    >
      <JavaneseAtmosphere />

      {/* Gradient bawah */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#26352B]/20 to-transparent" />

      {/* === Partikel Debu Emas (visual, tanpa delay) === */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "15%", size: 2 },
          { top: "20%", left: "85%", size: 2 },
          { top: "45%", left: "8%",  size: 1.5 },
          { top: "60%", left: "92%", size: 2 },
          { top: "75%", left: "20%", size: 1.5 },
          { top: "35%", left: "78%", size: 1.5 },
          { top: "85%", left: "65%", size: 2 },
        ].map((p, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0, 0.8, 0], y: [-8, -55] }}
            transition={{
              duration: 7 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className="absolute rounded-full bg-gold"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px 2px rgba(184,137,58,0.6)",
            }}
          />
        ))}
      </div>

      {/* === Glow emas besar di belakang (visual statis + pulse pelan) === */}
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(217,179,106,0.35), transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        {/* === Label "The Wedding Of" === */}
        <p className="jv-section-title">The Wedding Of</p>

        {/* === Gunungan dengan Glow Pulse === */}
        <div className="relative mt-6 w-28 h-36 jv-float-slow">
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.2, 0.9] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gold/25 blur-3xl"
          />
          <div className="relative w-full h-full opacity-90">
            <GununganDecoration animate />
          </div>
        </div>

        {/* === Nama Pasangan === */}
        <div>
          <p className="font-script text-3xl sm:text-4xl text-gold-light/90 -mb-2">
            With love
          </p>
          <h1
            className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-brown-dark
                       drop-shadow-[0_2px_20px_rgba(184,137,58,0.15)]"
          >
            {weddingData.groom.nickname}{" "}
            <span className="font-script text-5xl sm:text-6xl text-gold">&amp;</span>{" "}
            {weddingData.bride.nickname}
          </h1>
        </div>

        <JavaneseDivider className="my-7 w-44" />

        {/* === Foto Hero dengan Parallax + Shimmer === */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative w-56 h-72 sm:w-64 sm:h-80
                     rounded-[7rem_7rem_2rem_2rem] overflow-hidden
                     shadow-2xl group cursor-pointer"
        >
          {/* Glow emas di belakang frame */}
          <div className="absolute -inset-3 rounded-[7rem_7rem_2rem_2rem] bg-gold/15 blur-2xl -z-10" />

          <Image
            src={weddingData.heroPhoto}
            alt={`${weddingData.groom.nickname} dan ${weddingData.bride.nickname}`}
            fill
            sizes="256px"
            className="object-cover transition-transform duration-[2000ms] ease-out
                       group-hover:scale-110"
            priority
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231A]/30 via-transparent to-white/10" />

          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-1/2
                       bg-gradient-to-r from-transparent via-white/25 to-transparent
                       skew-x-[-20deg]"
          />

          {/* Border emas tipis */}
          <div className="absolute inset-0 rounded-[7rem_7rem_2rem_2rem]
                          border border-gold/25 pointer-events-none" />
        </motion.div>

        {/* === Tanggal === */}
        <div className="mt-7 flex items-center gap-3 text-brown-dark/70">
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-sm tracking-[0.24em] uppercase">
            {weddingData.weddingDateDisplay}
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </div>

        {/* === Quote === */}
        <p className="mt-6 max-w-xl font-display italic text-xl text-brown-dark/75">
          &ldquo;Two hearts, one story, and a beautiful beginning.&rdquo;
        </p>

        {/* === Tagline Together Forever === */}
        <div className="mt-8 flex items-center gap-2 text-gold">
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={13} fill="currentColor" />
          </motion.span>
          <span className="text-[10px] tracking-[0.35em] uppercase">
            Together Forever
          </span>
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Heart size={13} fill="currentColor" />
          </motion.span>
        </div>
      </div>
    </section>
  );
}