"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { weddingData, type BankAccount } from "@/data/wedding";
import { JavaneseDivider } from "./ornaments/JavaneseDivider";
import { copyToClipboard } from "@/lib/utils";
import { JavaneseAtmosphere } from "./ornaments/JavaneseAtmosphere";

function AccountCard({ account }: { account: BankAccount }) {
  const [copied, setCopied] = useState(false);

  // SeaBank = orange, BRI = biru
  const accentClass =
    account.bank === "SeaBank"
      ? "from-orange-500 via-orange-600 to-orange-700"
      : "from-blue-700 via-blue-800 to-blue-900";

  async function handleCopy() {
    const ok = await copyToClipboard(account.number);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="jv-card-dark rounded-[1.75rem] p-4 sm:p-5 flex flex-col gap-4 w-full max-w-sm text-left">
      <div className={`rounded-[1.25rem] bg-gradient-to-r ${accentClass} p-3 shadow-inner`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/10 text-gold-light flex items-center justify-center text-xs font-display border border-white/20">
              {account.logoInitial}
            </div>
            <div>
              <p className="font-semibold text-ivory text-sm">{account.bank}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/60">Transfer</p>
            </div>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-ivory/80">
            {account.bank}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light/80">Atas Nama</p>
        <p className="font-display text-lg text-ivory">{account.name}</p>
      </div>

      <div className="rounded-2xl border border-gold-light/20 bg-[#f4efe6]/5 p-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-gold-light/80">Nomor Rekening</p>
        <p className="mt-2 font-display text-xl sm:text-2xl tracking-[0.12em] text-ivory break-all">{account.number}</p>
      </div>

      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-light/50 text-gold-light py-2.5 text-[11px] uppercase tracking-[0.22em] hover:bg-gold hover:text-brown-dark transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Tersalin" : "Copy Rekening"}
      </button>
      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[11px] text-sage text-center"
            role="status"
          >
            Nomor rekening berhasil disalin.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DigitalGift() {
  return (
    <section id="gift" className="jv-section jv-forest relative py-24 lg:py-32 text-ivory">
      <JavaneseAtmosphere variant="dark" />
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">A Token Of Love</p>
        <h2 className="font-display text-4xl sm:text-5xl text-ivory">Wedding Gift</h2>
        <JavaneseDivider />
        <p className="max-w-md text-sm text-ivory/65 leading-relaxed">
          Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila Anda ingin memberikan tanda kasih, dapat
          melalui pilihan berikut.
        </p>

        <div className="grid w-full max-w-3xl gap-5 mt-6 md:grid-cols-2">
          {weddingData.accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
}