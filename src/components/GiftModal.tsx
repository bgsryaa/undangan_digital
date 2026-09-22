"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { BankAccount } from "@/data/wedding";
import { copyToClipboard } from "@/lib/utils";

type Props = {
  accounts: BankAccount[];
};

// Mapping warna per bank
const BANK_STYLES: Record<string, string> = {
  SeaBank: "bg-gradient-to-r from-orange-500 to-orange-700",
  BRI: "bg-gradient-to-r from-blue-700 to-blue-900",
};

export function GiftSection({ accounts }: Props) {
  return (
    <section className="relative w-full px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl text-gold-light mb-4">
          Wedding Gift
        </h2>
        <p className="text-sm text-ivory/80 leading-relaxed mb-10">
          Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila
          Anda ingin memberikan tanda kasih, dapat melalui pilihan berikut.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {accounts.map((account) => (
            <BankCard key={account.number} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BankCard({ account }: { account: BankAccount }) {
  const [copied, setCopied] = useState(false);
  const headerStyle =
    BANK_STYLES[account.bank] ?? "bg-gradient-to-r from-brown-dark to-brown-deep";

  async function handleCopy() {
    const ok = await copyToClipboard(account.number);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="rounded-3xl border border-gold/30 bg-brown-deep/60 p-6 flex flex-col gap-5 text-left">
      {/* Header bank */}
      <div
        className={`flex items-center justify-between rounded-2xl px-4 py-3 ${headerStyle}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center font-display text-sm text-white">
            {account.logoInitial}
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg text-white">{account.bank}</p>
            <p className="text-[10px] uppercase tracking-widest text-white/70">
              Transfer
            </p>
          </div>
        </div>
        <span className="rounded-full border border-white/40 px-3 py-1 text-[10px] uppercase tracking-widest text-white/80">
          {account.bank}
        </span>
      </div>

      {/* Nama */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gold/80 mb-1">
          Atas Nama
        </p>
        <p className="font-display text-lg text-ivory">{account.name}</p>
      </div>

      {/* Nomor rekening */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gold/80 mb-1">
          Nomor Rekening
        </p>
        <div className="rounded-2xl border border-gold/30 px-4 py-3">
          <p className="font-display text-xl tracking-widest text-ivory">
            {account.number}
          </p>
        </div>
      </div>

      {/* Tombol copy */}
      <button
        onClick={handleCopy}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 py-3 text-xs tracking-widest uppercase text-gold-light hover:bg-gold hover:text-brown-dark transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Tersalin" : "Copy Rekening"}
      </button>
    </div>
  );
}