"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { weddingData } from "@/data/wedding";

type Props = {
  shouldPlay: boolean;
};

/**
 * Floating music button. Musik hanya boleh diputar setelah interaksi user
 * (setelah tombol "Buka Undangan" ditekan), sesuai kebijakan autoplay browser.
 */
export function MusicPlayer({ shouldPlay }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [shouldPlay]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }

  return (
    <>
      {/* Jika file /music/wedding.mp3 belum tersedia, elemen audio tidak akan menimbulkan error di UI. */}
      <audio ref={audioRef} src={weddingData.music.src} loop preload="none" />
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={toggle}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className="fixed bottom-24 lg:bottom-6 right-5 z-40 w-12 h-12 rounded-full bg-brown-dark text-gold-light flex items-center justify-center shadow-lg border border-gold/40"
      >
        <motion.div animate={isPlaying ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 6, repeat: isPlaying ? Infinity : 0, ease: "linear" }}>
          {isPlaying ? <Pause size={18} /> : <Music size={18} />}
        </motion.div>
      </motion.button>
    </>
  );
}
