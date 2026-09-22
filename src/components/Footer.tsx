"use client";

import { weddingData } from "@/data/wedding";
import { GununganDecoration } from "./ornaments/GununganDecoration";
import { ShareButton } from "./ShareButton";

export function Footer() {
  return (
    <footer className="relative bg-brown-dark text-ivory pt-16 pb-28 lg:pb-12 overflow-hidden">
      <div className="section-container flex flex-col items-center text-center gap-5">
        <div className="w-10 h-12 opacity-80">
          <GununganDecoration animate={false} />
        </div>
        <h3 className="font-display text-3xl text-gold-light">
          {weddingData.groom.nickname} &amp; {weddingData.bride.nickname}
        </h3>
        <p className="text-sm text-ivory/70 max-w-xs">Thank you for being part of our special day.</p>

        <ShareButton />

        <div className="gold-divider-line w-32 mt-4" />
        <p className="text-xs text-ivory/50 tracking-widest uppercase">Made with love</p>
      </div>
    </footer>
  );
}
