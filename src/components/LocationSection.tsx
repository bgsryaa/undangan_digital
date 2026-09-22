"use client";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";

export function LocationSection(){ const {location}=weddingData; const embedSrc=`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`;
 return <section id="lokasi" className="jv-section jv-forest text-ivory py-24 lg:py-32"><JavaneseAtmosphere variant="dark"/><div className="section-container relative z-10 flex flex-col items-center text-center">
  <p className="jv-section-title !text-gold-light">Come & Celebrate</p><h2 className="font-display text-5xl sm:text-6xl mt-2">The Location</h2><JavaneseDivider className="my-6 w-52"/>
  <div className="flex items-start gap-3 max-w-xl text-left text-ivory/70"><MapPin size={19} className="text-gold-light shrink-0 mt-1"/><p className="text-sm leading-6"><strong className="text-ivory">{location.name}</strong><br/>{location.address}</p></div>
  <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="w-full max-w-4xl mt-10 rounded-[2rem] overflow-hidden border border-gold-light/25 shadow-2xl bg-black/20 p-2"><div className="rounded-[1.5rem] overflow-hidden"><iframe title="Lokasi Pernikahan" src={embedSrc} width="100%" height="380" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block grayscale-[.15]"/></div></motion.div>
  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold-light/50 bg-gold/10 text-gold-light px-7 py-3 text-xs tracking-[.18em] uppercase hover:bg-gold hover:text-brown-dark transition-colors">Buka Google Maps <ExternalLink size={14}/></a>
 </div></section> }
