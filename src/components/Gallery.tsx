"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { Lightbox } from "./Lightbox";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = weddingData.gallery;

  return (
    <section id="galeri" className="jv-section jv-paper py-24 lg:py-32">
      <JavaneseAtmosphere />

      <div className="section-container relative z-10 flex flex-col items-center">
        <p className="jv-section-title">Frames of Our Story</p>
        <h2 className="font-display text-5xl sm:text-6xl text-brown-dark mt-2">
          Our Moments
        </h2>
        <JavaneseDivider className="my-6 w-52" />
        <p className="text-sm text-brown-dark/60 text-center max-w-xl">
          Beberapa potongan kecil dari perjalanan yang membawa kami sampai pada
          hari istimewa ini.
        </p>

        {/* === MASONRY GALLERY (CSS Columns) === */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-5 w-full mt-12 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: (i % 4) * 0.08 }}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full mb-3 sm:mb-5 break-inside-avoid
                         overflow-hidden rounded-[1.5rem] border border-gold/20 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-gold
                         transition-shadow duration-300 hover:shadow-gold"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-[#17231A]/0 group-hover:bg-[#17231A]/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}