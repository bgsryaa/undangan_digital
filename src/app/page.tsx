"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { getQueryParam } from "@/lib/utils";
import { weddingData } from "@/data/wedding";

import { LoadingScreen } from "@/components/LoadingScreen";
import { WeddingCover } from "@/components/WeddingCover";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoupleSection } from "@/components/CoupleSection";
import { EventSection } from "@/components/EventSection";
import { LocationSection } from "@/components/LocationSection";
import { Gallery } from "@/components/Gallery";
import { QuoteSection } from "@/components/QuoteSection";
import { DigitalGift } from "@/components/DigitalGift";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const to = getQueryParam("to");
    setGuestName(to);

    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleOpen() {
    setIsOpened(true);
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  useEffect(() => {
    const shouldLockScroll = isLoading || !isOpened;
    const overflowValue = shouldLockScroll ? "hidden" : "auto";

    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpened, isLoading]);

  return (
    <>
      <LoadingScreen show={isLoading} />

      <AnimatePresence>
        {!isLoading && !isOpened && (
          <WeddingCover guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Navbar />
          <Hero />
          <CoupleSection />
          <EventSection />
          <QuoteSection />
          <Gallery />
          <LocationSection />
          <DigitalGift />
          <Footer />

          <MusicPlayer shouldPlay={isOpened} />

          {/* === Tombol WhatsApp === */}
          <motion.a
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            href={`https://wa.me/${weddingData.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
            className="fixed bottom-24 lg:bottom-24 right-20 lg:right-6 z-40
                       w-12 h-12 rounded-full
                       bg-gradient-to-br from-[#A8B598] to-[#8B9A7B]
                       text-white
                       flex items-center justify-center
                       shadow-[0_8px_22px_-8px_rgba(139,154,123,0.65)]
                       border border-white/15
                       transition-shadow duration-300
                       hover:shadow-[0_12px_28px_-8px_rgba(139,154,123,0.85)]"
          >
            <MessageCircle size={18} />
          </motion.a>

          {/* === Tombol Back to Top === */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Kembali ke atas"
                className="fixed bottom-24 lg:bottom-6 right-[136px] lg:right-[68px] z-40
                           w-12 h-12 rounded-full
                           bg-gradient-to-br from-[#D9B36A] to-[#B8893A]
                           text-white
                           flex items-center justify-center
                           shadow-[0_8px_22px_-8px_rgba(184,137,58,0.65)]
                           border border-white/15
                           transition-shadow duration-300
                           hover:shadow-[0_12px_28px_-8px_rgba(184,137,58,0.85)]"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.main>
      )}
    </>
  );
}