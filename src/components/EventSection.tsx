"use client";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { weddingData } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { Countdown } from "./Countdown";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";

export function EventSection(){ return <section id="acara" className="jv-section jv-forest text-ivory py-24 lg:py-32">
  <JavaneseAtmosphere variant="dark"/>
  <div className="section-container relative z-10 flex flex-col items-center">
    <p className="jv-section-title !text-gold-light">Save The Date</p>
    <h2 className="font-display text-5xl sm:text-6xl mt-2">Wedding Event</h2>
    <JavaneseDivider className="my-6 w-52"/>
    <p className="text-sm text-ivory/60 text-center max-w-xl">Sebuah hari yang kami nantikan untuk merayakan cinta bersama keluarga dan orang-orang terkasih.</p>
    <Countdown />
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
      {weddingData.events.map((event,i)=><motion.article key={event.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.75,delay:i*.12}} className="jv-card-dark rounded-[2rem] p-7 sm:p-9 relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full border border-gold-light/10 group-hover:scale-125 transition-transform duration-700"/>
        <p className="text-[10px] uppercase tracking-[.3em] text-gold-light">{i===0?"The Ceremony":"The Celebration"}</p>
        <h3 className="font-display text-3xl mt-2 text-ivory">{event.title}</h3>
        <div className="mt-6 space-y-4 text-sm text-ivory/70">
          <p className="flex gap-3"><CalendarDays size={17} className="text-gold-light shrink-0"/>{event.date}</p>
          <p className="flex gap-3"><Clock size={17} className="text-gold-light shrink-0"/>{event.time}</p>
          <p className="flex gap-3"><MapPin size={17} className="text-gold-light shrink-0"/><span><strong className="text-ivory/90 font-medium">{event.place}</strong><br/>{event.address}</span></p>
        </div>
      </motion.article>)}
    </div>
  </div>
</section> }
