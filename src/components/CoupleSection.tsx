"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";
import { GununganDecoration } from "./ornaments/GununganDecoration";

function PersonCard({
  photo,
  name,
  order,
  parents,
  delay,
}: {
  photo: string;
  name: string;
  order: string;
  parents: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay }}
      className="jv-card relative rounded-[2rem] p-6 sm:p-8 flex flex-col items-center text-center gap-4 w-full max-w-sm"
    >
      <div className="jv-photo-frame relative w-44 h-72 rounded-[6rem_6rem_2rem_2rem] overflow-hidden shadow-xl">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="176px"
          className="object-cover"
          style={{ objectPosition: "center 8%" }}
        />
      </div>

      <p className="jv-section-title">{order}</p>
      <h3 className="font-display text-3xl sm:text-4xl text-brown-dark">
        {name}
      </h3>
      <p className="text-sm text-brown-dark/65 max-w-[17rem]">{parents}</p>
    </motion.article>
  );
}

export function CoupleSection() {
  return (
    <section id="mempelai" className="jv-section jv-paper py-24 lg:py-32">
      <JavaneseAtmosphere />

      <div className="section-container relative z-10 flex flex-col items-center">
        <p className="jv-section-title">A Sacred Beginning</p>
        <h2 className="font-display text-5xl sm:text-6xl text-brown-dark mt-2">
          The Bride &amp; Groom
        </h2>
        <JavaneseDivider className="my-6 w-52" />

        <p className="font-display italic text-lg sm:text-xl text-brown-dark/70 text-center max-w-2xl leading-relaxed">
          {weddingData.greeting.salutation}
        </p>
        <p className="mt-4 text-sm sm:text-base leading-7 text-brown-dark/65 text-center max-w-2xl">
          {weddingData.greeting.message}
        </p>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 w-full max-w-5xl">
          <PersonCard
            photo={weddingData.groom.photo}
            name={weddingData.groom.fullName}
            order={weddingData.groom.order}
            parents={weddingData.groom.parents}
            delay={0}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex w-24 h-28 items-center justify-center relative"
          >
            <div className="absolute inset-0 border border-gold/20 rounded-full blur-xl" />
            <GununganDecoration animate />
          </motion.div>

          <PersonCard
            photo={weddingData.bride.photo}
            name={weddingData.bride.fullName}
            order={weddingData.bride.order}
            parents={weddingData.bride.parents}
            delay={0.15}
          />
        </div>

        <div className="mt-10 flex items-center gap-2 text-gold">
          <Sparkles size={14} />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Dipertemukan dalam kasih dan doa
          </span>
          <Sparkles size={14} />
        </div>
      </div>
    </section>
  );
}