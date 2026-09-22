"use client";

import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
};

function calculate(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: false,
  };
}

/**
 * Hook countdown realtime menuju tanggal target (ISO string).
 */
export function useCountdown(targetISO: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculate(targetISO));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculate(targetISO));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  return timeLeft;
}
