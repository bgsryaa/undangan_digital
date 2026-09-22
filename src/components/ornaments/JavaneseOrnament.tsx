"use client";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "corner" | "floral" | "wing";
  flip?: boolean;
};

/**
 * Ornamen sudut/hiasan Jawa yang reusable — ditempatkan di sudut kartu,
 * section header, atau sebagai bingkai foto.
 */
export function JavaneseOrnament({ className, variant = "corner", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("text-gold", flip && "scale-x-[-1]", className)}
      aria-hidden="true"
    >
      {variant === "corner" && (
        <path
          d="M4 4 C 40 4, 40 30, 60 30 C 80 30, 80 4, 116 4 M4 4 C 4 40, 30 40, 30 60 C 30 80, 4 80, 4 116"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      )}
      {variant === "floral" && (
        <g stroke="currentColor" strokeWidth="1.3" fill="none">
          <path d="M60 10 C 70 30, 90 30, 96 50 C 90 60, 70 55, 60 70" />
          <path d="M60 10 C 50 30, 30 30, 24 50 C 30 60, 50 55, 60 70" />
          <circle cx="60" cy="12" r="3.5" fill="currentColor" stroke="none" />
        </g>
      )}
      {variant === "wing" && (
        <path
          d="M10 60 C 30 40, 30 20, 55 15 C 45 35, 55 45, 70 40 C 65 55, 80 60, 100 55"
          stroke="currentColor"
          strokeWidth="1.3"
          fill="none"
        />
      )}
    </svg>
  );
}
