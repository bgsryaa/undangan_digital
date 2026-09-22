# Undangan Pernikahan Digital — Adat Jawa

Website undangan pernikahan modern-elegan bertema adat Jawa, dibangun dengan
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## 1. Cara Menjalankan

Butuh **Node.js 18.17 atau lebih baru** terpasang di komputer kamu.

```bash
# 1. Masuk ke folder proyek
cd wedding-invitation

# 2. Install semua dependency
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:3000` di browser.

Untuk build produksi:

```bash
npm run build
npm start
```

Untuk deploy paling mudah, gunakan **Vercel** (pembuat Next.js):
push folder ini ke GitHub, lalu import project-nya di vercel.com — tidak perlu
konfigurasi tambahan.

## 2. Struktur Folder

```
wedding-invitation/
├── public/
│   ├── images/          <- taruh semua foto di sini (lihat README.txt di dalamnya)
│   └── music/           <- taruh wedding.mp3 di sini
├── src/
│   ├── app/
│   │   ├── layout.tsx   <- font, metadata SEO, wrapper utama
│   │   ├── page.tsx     <- halaman utama, merangkai semua section
│   │   └── globals.css  <- style global + Tailwind
│   ├── components/
│   │   ├── ornaments/   <- 4 komponen ornamen Jawa reusable
│   │   │   ├── GununganDecoration.tsx
│   │   │   ├── BatikPattern.tsx
│   │   │   ├── JavaneseDivider.tsx
│   │   │   └── JavaneseOrnament.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── WeddingCover.tsx
│   │   ├── Navbar.tsx        <- menu desktop + bottom nav mobile
│   │   ├── Hero.tsx
│   │   ├── CoupleSection.tsx
│   │   ├── Countdown.tsx
│   │   ├── EventSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── Gallery.tsx
│   │   ├── Lightbox.tsx
│   │   ├── LoveStory.tsx
│   │   ├── QuoteSection.tsx
│   │   ├── RSVPForm.tsx
│   │   ├── WishesList.tsx
│   │   ├── DigitalGift.tsx
│   │   ├── GiftModal.tsx
│   │   ├── MusicPlayer.tsx
│   │   ├── ShareButton.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── wedding.ts   <- SEMUA DATA UNDANGAN ADA DI SINI
│   └── lib/
│       ├── utils.ts       <- baca query param, copy clipboard, dsb
│       └── useCountdown.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 3. Yang Perlu Kamu Ganti (Paling Penting)

### a. Data undangan → `src/data/wedding.ts`
Semua teks, tanggal, nama, alamat, nomor rekening, galeri, dsb ada dalam satu
file ini. Kamu **tidak perlu menyentuh komponen lain** untuk mengganti isi
undangan — cukup edit object `weddingData` di file ini. Ini juga yang membuat
website bisa dipakai ulang untuk pasangan lain.

Beberapa hal yang wajib diganti sebelum publish:
- `groom` / `bride` — nama, orang tua, foto, instagram
- `weddingDateISO` — dipakai untuk countdown realtime
- `events` — detail akad & resepsi
- `location` — nama tempat, alamat, `latitude`/`longitude`, dan `googleMapsUrl`
  (klik kanan lokasi di Google Maps → "Bagikan" untuk dapat koordinatnya)
- `gallery` — 9 path foto galeri
- `accounts` — nomor rekening asli (jangan pakai nomor dummy saat publish!)
- `whatsappNumber` — nomor WhatsApp yang dituju tombol floating

### b. Foto & musik → folder `public/`
Taruh file-file berikut (baca juga `README.txt` di masing-masing folder):
- `public/images/groom.jpg`, `bride.jpg`, `hero.jpg`
- `public/images/gallery-1.jpg` s.d. `gallery-9.jpg`
- `public/music/wedding.mp3`

Jika sebuah file belum ada, website tetap jalan tanpa error — hanya saja
gambar akan kosong/rusak dan musik tidak bersuara sampai file-nya ditambahkan.

### c. Parameter tamu personal (`?to=`)
Bagikan link dengan format:
```
https://domainkamu.com/?to=Bapak%20Budi
```
Nama tamu otomatis muncul di halaman cover ("Kepada Yth. Bapak Budi").
Kalau parameter tidak ada, otomatis tampil "Bapak/Ibu/Saudara/i".

## 4. Menghubungkan RSVP ke Backend Sungguhan

Saat ini form RSVP (`src/components/RSVPForm.tsx`) menyimpan ucapan di
**local state React** (mock data) — artinya data akan hilang saat halaman
di-refresh, dan tidak dibagikan antar-pengunjung.

Untuk produksi, cari komentar `NOTE:` di dalam `handleSubmit` pada file
tersebut, lalu ganti bagian `setWishes(...)` dengan pemanggilan API, contoh
dengan Firebase Firestore atau Supabase:

```ts
// Contoh dengan Supabase
await supabase.from("wishes").insert({
  name, attendance, message,
});

// lalu ambil daftar ucapan terbaru dengan supabase.from('wishes').select()
// dan tampilkan lewat komponen WishesList yang sudah ada
```

Struktur data `Wish` sudah didefinisikan di `src/data/wedding.ts` sehingga
tinggal dicocokkan dengan skema tabel di backend pilihanmu.

## 5. Checklist Sebelum Publish

- [ ] Ganti semua data di `src/data/wedding.ts` dengan data asli
- [ ] Upload foto asli ke `public/images/`
- [ ] Upload musik ke `public/music/wedding.mp3` (opsional)
- [ ] Ganti nomor rekening dummy dengan nomor asli
- [ ] Uji countdown, RSVP, copy rekening, lightbox galeri, dan tombol share
      di HP asli (buka lewat `npm run dev` lalu akses dari HP di jaringan yang sama,
      atau deploy dulu ke Vercel untuk testing paling akurat)
- [ ] Hubungkan RSVP ke backend sungguhan jika ingin data tersimpan permanen
- [ ] Cek tampilan di beberapa ukuran layar (320px s.d. 1920px)

## 6. Catatan Teknis

- Semua animasi menghormati `prefers-reduced-motion` (diatur di `globals.css`).
- Musik **tidak** autoplay — baru diputar setelah tombol "Buka Undangan" ditekan,
  sesuai kebijakan browser modern.
- Tombol "Bagikan Undangan" memakai Web Share API di perangkat yang mendukung
  (kebanyakan HP), dan otomatis fallback ke "copy link" di desktop.
- Warna, font, dan seluruh ornamen Jawa (gunungan, motif parang, ukiran) dibuat
  sebagai SVG/CSS murni di `src/components/ornaments/` — ringan dan mudah
  diubah warnanya lewat `tailwind.config.ts`.
