"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
};

/**
 * Divider bergaya ukiran Jawa: garis emas tipis dengan ornamen bunga kecil di tengah.
 */
export function JavaneseDivider({ className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`flex items-center justify-center gap-3 ${className ?? ""}`}
    >
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold shrink-0">
        <path
          d="M12 2C12 2 14 6 12 9C10 6 12 2 12 2Z M12 22C12 22 10 18 12 15C14 18 12 22 12 22Z M2 12C2 12 6 10 9 12C6 14 2 12 2 12Z M22 12C22 12 18 14 15 12C18 10 22 12 22 12Z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      </svg>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
    </motion.div>
  );
}
