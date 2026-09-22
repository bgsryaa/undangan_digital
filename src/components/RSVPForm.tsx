"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { initialWishes, type Wish } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { WishesList } from "./WishesList";

type Attendance = Wish["attendance"];

const attendanceOptions: { value: Attendance; label: string }[] = [
  { value: "hadir", label: "Akan Hadir" },
  { value: "tidak_hadir", label: "Tidak Dapat Hadir" },
  { value: "ragu", label: "Masih Ragu" },
];

export function RSVPForm() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("hadir");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // NOTE: Saat ini disimpan di local state (mock data).
    // Untuk produksi, ganti bagian ini dengan panggilan ke Firebase / Supabase / API,
    // misalnya: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify({...}) })
    const newWish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      attendance,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    setWishes((prev) => [newWish, ...prev]);
    setSubmitted(true);
    setName("");
    setMessage("");
    setGuests(1);
    setAttendance("hadir");

    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <section id="rsvp" className="relative py-20 lg:py-28">
      <div className="section-container flex flex-col items-center gap-4">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">Konfirmasi Kehadiran</p>
        <h2 className="font-display text-4xl sm:text-5xl text-brown-dark">RSVP &amp; Wishes</h2>
        <JavaneseDivider />

        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="rsvp-name" className="block text-sm text-brown-dark/80 mb-1.5">
              Nama
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <span className="block text-sm text-brown-dark/80 mb-1.5">Kehadiran</span>
            <div className="grid grid-cols-3 gap-2">
              {attendanceOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setAttendance(opt.value)}
                  className={`rounded-xl border px-2 py-2.5 text-xs sm:text-sm transition-colors ${
                    attendance === opt.value
                      ? "bg-gold border-gold text-ivory"
                      : "border-gold/30 text-brown-dark/70 hover:border-gold"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="rsvp-guests" className="block text-sm text-brown-dark/80 mb-1.5">
              Jumlah Tamu
            </label>
            <input
              id="rsvp-guests"
              type="number"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label htmlFor="rsvp-message" className="block text-sm text-brown-dark/80 mb-1.5">
              Pesan / Ucapan
            </label>
            <textarea
              id="rsvp-message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              placeholder="Tulis doa dan ucapan Anda..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-2 rounded-full bg-brown-dark text-ivory py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-brown-dark transition-colors"
          >
            Kirim
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 justify-center text-sage text-sm mt-1"
                role="status"
              >
                <CheckCircle2 size={16} /> Terima kasih, ucapan Anda telah terkirim.
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <WishesList wishes={wishes} />
      </div>
    </section>
  );
}
