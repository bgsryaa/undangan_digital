"use client";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";
import { GununganDecoration } from "./ornaments/GununganDecoration";

export function QuoteSection(){ return <section className="jv-section jv-forest text-ivory py-24 lg:py-32">
  <JavaneseAtmosphere variant="dark"/>
  <div className="section-container relative z-10 flex flex-col items-center text-center">
    <div className="w-20 h-24 opacity-80 mb-6"><GununganDecoration animate/></div>
    <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9}} className="font-display italic text-2xl sm:text-3xl leading-relaxed max-w-4xl text-ivory/90">“{weddingData.quote.text}”</motion.p>
    <p className="mt-7 text-[10px] tracking-[.35em] uppercase text-gold-light">{weddingData.quote.source}</p>
  </div>
</section> }
