"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/wedding";

type Props = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, activeIndex, onClose, onNavigate }: Props) {
  const isOpen = activeIndex !== null;

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galeri foto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-brown-deep/95 flex items-center justify-center px-4"
        >
          <button
            onClick={onClose}
            aria-label="Tutup galeri"
            className="absolute top-5 right-5 text-ivory/80 hover:text-gold-light transition-colors"
          >
            <X size={28} />
          </button>

          <button
            onClick={goPrev}
            aria-label="Foto sebelumnya"
            className="absolute left-3 sm:left-8 text-ivory/70 hover:text-gold-light transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <motion.div
            key={images[activeIndex].id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-2xl aspect-[4/5] sm:aspect-video"
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-contain"
            />
          </motion.div>

          <button
            onClick={goNext}
            aria-label="Foto berikutnya"
            className="absolute right-3 sm:right-8 text-ivory/70 hover:text-gold-light transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
