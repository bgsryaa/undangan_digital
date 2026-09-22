"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  opacity?: number;
};

/**
 * Motif batik parang yang sangat halus, dipakai sebagai tekstur latar belakang.
 * Murni CSS/SVG pattern supaya ringan (tidak memakai file gambar).
 */
export function BatikPattern({ className, opacity = 0.06 }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(198,149,47,0.9) 0px, rgba(198,149,47,0.9) 1.5px, transparent 1.5px, transparent 22px), repeating-linear-gradient(45deg, rgba(62,42,27,0.6) 0px, rgba(62,42,27,0.6) 1px, transparent 1px, transparent 30px)",
        opacity,
      }}
    />
  );
}
