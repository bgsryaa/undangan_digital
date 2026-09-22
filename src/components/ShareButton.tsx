"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Share2, Check } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { copyToClipboard } from "@/lib/utils";

export function ShareButton() {
  const [toast, setToast] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareData = {
      title: `${weddingData.groom.nickname} & ${weddingData.bride.nickname} — Wedding Invitation`,
      text: "Anda diundang untuk hadir dalam pernikahan kami.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    const ok = await copyToClipboard(shareData.url);
    if (ok) {
      setToast("Link undangan berhasil disalin.");
      setCopied(true);
      setTimeout(() => setToast(null), 2500);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <motion.button
        onClick={handleShare}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex items-center gap-2.5
                   rounded-full
                   bg-gradient-to-br from-[#D9B36A] to-[#B8893A]
                   px-7 py-3
                   text-xs sm:text-sm font-medium uppercase tracking-[0.18em]
                   text-white
                   border border-white/20
                   shadow-[0_8px_22px_-8px_rgba(184,137,58,0.75)]
                   transition-shadow duration-300
                   hover:shadow-[0_14px_28px_-8px_rgba(184,137,58,0.95)]
                   focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-ivory"
      >
        {/* Shimmer halus */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
        >
          <span
            className="absolute inset-y-0 -left-1/2 w-1/2
                       bg-gradient-to-r from-transparent via-white/30 to-transparent
                       skew-x-[-20deg]
                       transition-transform duration-700
                       group-hover:translate-x-[300%]"
          />
        </span>

        {copied ? (
          <>
            <Check size={16} strokeWidth={2.5} />
            <span>Tersalin!</span>
          </>
        ) : (
          <>
            <Share2 size={16} strokeWidth={2.2} />
            <span>Bagikan Undangan</span>
          </>
        )}
      </motion.button>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            className="absolute top-full mt-3 whitespace-nowrap
                       rounded-full
                       bg-brown-dark/95 backdrop-blur-sm
                       text-ivory text-xs
                       px-4 py-2
                       shadow-[0_8px_24px_-8px_rgba(46,31,20,0.5)]
                       border border-gold/20"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}