"use client";

import { motion } from "framer-motion";

export function CoverScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="jv-cover-sky" />
      <div className="jv-cover-glow" />

      <motion.div
        className="absolute inset-0"
        animate={{ x: [-4, 4, -4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full opacity-90">
          <defs>
            <linearGradient id="coverMountain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8b7351" stopOpacity=".55" />
              <stop offset="1" stopColor="#3e2a1b" stopOpacity=".05" />
            </linearGradient>
            <linearGradient id="coverGround" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#637052" stopOpacity=".22" />
              <stop offset="1" stopColor="#16251b" stopOpacity=".86" />
            </linearGradient>
            <filter id="coverBlur">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          <path d="M0 500 C180 430 270 450 420 360 C570 270 680 340 800 250 C940 145 1040 285 1170 330 C1300 375 1420 310 1600 390 V900 H0Z" fill="url(#coverMountain)" />
          <path d="M0 620 C190 520 300 560 450 480 C610 395 760 520 920 430 C1070 345 1210 500 1360 445 C1460 410 1530 440 1600 470 V900 H0Z" fill="url(#coverGround)" />

          <g opacity=".35" filter="url(#coverBlur)">
            <ellipse cx="330" cy="610" rx="230" ry="80" fill="#e8d7ae" />
            <ellipse cx="1220" cy="610" rx="260" ry="75" fill="#d8c79e" />
          </g>

          {/* central pavilion */}
          <g transform="translate(650 455)" opacity=".75">
            <path d="M150 20 L0 115 H300 Z" fill="#2a1b10" stroke="#c6952f" strokeWidth="3" />
            <path d="M38 110 H262 V285 H38Z" fill="#4a3a2a" fillOpacity=".65" stroke="#c6952f" strokeWidth="2" />
            <path d="M70 120 V280 M230 120 V280 M150 110 V280" stroke="#e4c77a" strokeWidth="3" />
            <path d="M70 165 Q150 215 230 165 V280 H70Z" fill="#f4ead7" fillOpacity=".17" />
            <path d="M20 285 H280" stroke="#e4c77a" strokeWidth="5" />
          </g>

          {/* distant trees */}
          <g fill="#1d2d20" opacity=".8">
            <path d="M85 610 l45 -180 l45 180z" />
            <path d="M1370 610 l55 -205 l55 205z" />
            <path d="M250 620 l38 -150 l38 150z" />
            <path d="M1240 625 l42 -170 l42 170z" />
          </g>
        </svg>
      </motion.div>

      {/* Gunungan halo */}
      <motion.div
        className="absolute left-1/2 top-[15%] h-[38vh] w-[31vh] -translate-x-1/2"
        animate={{ y: [0, -8, 0], rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[-18%] rounded-full bg-gold/10 blur-3xl" />
        <svg viewBox="0 0 220 260" className="relative h-full w-full drop-shadow-[0_0_18px_rgba(228,199,122,.25)]">
          <defs>
            <linearGradient id="sceneGunungan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f2d990" />
              <stop offset=".55" stopColor="#c6952f" />
              <stop offset="1" stopColor="#8f6825" />
            </linearGradient>
          </defs>
          <path d="M110 6 C122 43 98 57 130 80 C158 100 150 121 178 133 C200 143 213 160 214 179 V250 H6 V179 C7 160 20 143 42 133 C70 121 62 100 90 80 C122 57 98 43 110 6Z" fill="#2a1b10" fillOpacity=".34" stroke="url(#sceneGunungan)" strokeWidth="2" />
          <path d="M110 25 C116 52 101 65 130 88 C151 104 144 124 169 138" stroke="#e4c77a" strokeWidth="1.5" fill="none" opacity=".75" />
          <path d="M110 25 C104 52 119 65 90 88 C69 104 76 124 51 138" stroke="#e4c77a" strokeWidth="1.5" fill="none" opacity=".75" />
          <path d="M110 45 C94 85 126 88 110 125 C94 162 125 178 110 218" stroke="#e4c77a" strokeWidth="1" fill="none" opacity=".55" />
          <path d="M55 190 Q110 158 165 190" stroke="#e4c77a" strokeWidth="1.4" fill="none" opacity=".55" />
          <circle cx="110" cy="67" r="4" fill="url(#sceneGunungan)" />
        </svg>
      </motion.div>

      {/* Wayang silhouettes */}
      <motion.div
        className="absolute left-[4%] top-[28%] hidden w-[16vw] max-w-[220px] md:block"
        animate={{ y: [0, -7, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <WayangSilhouette flip />
      </motion.div>

      <motion.div
        className="absolute right-[4%] top-[28%] hidden w-[16vw] max-w-[220px] md:block"
        animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <WayangSilhouette />
      </motion.div>

      {/* Foreground foliage */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#16251b]/95 via-[#263b29]/55 to-transparent" />
      <Leaf className="left-[7%] bottom-[12%]" size="lg" rotate={-28} delay={0} />
      <Leaf className="left-[15%] bottom-[5%]" size="md" rotate={32} delay={1.4} />
      <Leaf className="right-[10%] bottom-[8%]" size="lg" rotate={25} delay={.7} />
      <Leaf className="right-[18%] bottom-[17%]" size="md" rotate={-30} delay={2} />
    </div>
  );
}

function WayangSilhouette({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 180 420" className={flip ? "scale-x-[-1]" : ""}>
      <g fill="#20150d" stroke="#d9b968" strokeWidth="1.3" opacity=".92">
        <path d="M88 38 C78 28 82 12 97 10 C111 8 119 23 112 37 C106 48 97 50 88 38Z" />
        <path d="M83 48 C67 57 61 77 67 101 L80 154 L71 225 L58 333 L72 338 L91 244 L99 196 L107 244 L127 338 L141 333 L128 224 L118 154 L131 101 C137 76 126 57 111 48Z" />
        <path d="M72 72 L38 52 L18 70 L58 91Z" />
        <path d="M118 72 L152 50 L169 68 L130 91Z" />
        <path d="M81 153 L44 176 L18 160 L48 199 L88 179Z" />
        <path d="M119 153 L156 176 L162 160 L132 199 L112 179Z" />
        <path d="M81 220 L45 270 L55 279 L94 239Z" />
        <path d="M117 220 L137 270 L126 278 L103 239Z" />
        <path d="M80 57 L51 28 L43 34 L70 70Z" fill="none" />
        <path d="M100 56 L127 27 L137 35 L110 71Z" fill="none" />
      </g>
    </svg>
  );
}

function Leaf({ className, size, rotate, delay }: { className: string; size: "sm" | "md" | "lg"; rotate: number; delay: number }) {
  const dimensions = size === "lg" ? "w-24 h-36" : size === "md" ? "w-16 h-24" : "w-10 h-16";
  return (
    <motion.div
      className={`absolute ${className} ${dimensions}`}
      animate={{ y: [0, -6, 0], rotate: [rotate - 3, rotate + 3, rotate - 3] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 100 150" className="h-full w-full">
        <path d="M50 145 C22 110 14 75 28 42 C36 23 51 12 73 4 C78 32 77 58 66 83 C57 104 50 125 50 145Z" fill="#31462e" stroke="#9bab7c" strokeWidth="1" opacity=".85" />
        <path d="M51 141 C52 98 58 55 72 12" stroke="#d2c38e" strokeWidth="1" opacity=".45" />
      </svg>
    </motion.div>
  );
}
