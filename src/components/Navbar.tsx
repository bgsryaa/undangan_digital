"use client";

import { useEffect, useState, type ElementType } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { cn } from "@/lib/utils";
import { Home, Users, CalendarDays, Images, MapPin, Gift } from "lucide-react";

const icons: Record<string, ElementType> = {
  home: Home,
  mempelai: Users,
  acara: CalendarDays,
  galeri: Images,
  lokasi: MapPin,
  gift: Gift,
};

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = weddingData.navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="hidden lg:flex fixed top-0 inset-x-0 z-40 justify-center"
      >
        <div className="mt-5 flex items-center gap-1 rounded-full border border-gold/40 bg-ivory/85 backdrop-blur-md px-3 py-2 shadow-sm">
          {weddingData.navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={cn(
                "px-4 py-2 text-xs tracking-[0.15em] uppercase rounded-full transition-colors",
                active === link.id ? "bg-gold text-ivory" : "text-brown-dark/70 hover:text-brown-dark"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile bottom navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="lg:hidden fixed bottom-4 inset-x-4 z-40"
        aria-label="Navigasi utama"
      >
        <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-brown-dark/95 backdrop-blur-md px-2 py-2 shadow-lg">
          {weddingData.navLinks.map((link) => {
            const Icon = icons[link.id] ?? Home;
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-label={link.label}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 transition-colors",
                  isActive ? "text-gold-light" : "text-ivory/50"
                )}
              >
                <Icon size={18} strokeWidth={isActive ? 2.2 : 1.6} />
                <span className="text-[9px] tracking-wide">{link.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
