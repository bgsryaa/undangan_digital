// =========================================================================
// SEMUA DATA UNDANGAN DIPUSATKAN DI SINI.
// Ganti isi object ini untuk memakai ulang website ini untuk pasangan lain.
// =========================================================================

export type EventItem = {
  id: string;
  title: string;
  date: string; // human readable
  time: string;
  place: string;
  address: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export type BankAccount = {
  id: string;
  bank: string;
  name: string;
  number: string;
  logoInitial: string;
};


export const weddingData = {
  seo: {
    title: "Yasin & Puji — Wedding Invitation",
    description:
      "Undangan pernikahan Yasin & Puji. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir dan memberikan doa restu pada pernikahan kami.",
  },

  groom: {
    fullName: "Yasin",
    nickname: "Yasin",
    parents: "Bapak Gutomo (ALM) & Ibu Robingatun",
    order: "Putra pertama",
    photo: "/images/profil/IMG_6409.JPG.jpeg",
   
   
  },

  bride: {
    fullName: "Puji",
    nickname: "Puji",
    parents: "Bapak Sadimun & Ibu Sinem",
    order: "Putri pertama",
    photo: "/images/profil/IMG_6408.JPG.jpeg",
    
  },

  heroPhoto: "/images/prewed/9.png",

  weddingDateISO: "2026-10-03T08:00:00+07:00",
  weddingDateDisplay: "03 Oktober 2026",

  greeting: {
    salutation: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    message:
      "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami.",
  },

  quote: {
    text:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },

  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      date: "03 Oktober 2026",
      time: "08.00 – Selesai",
      place: "Rumah Mempelai Wanita",
      address: "Jl. Mondoroko, Desa Sirapan RT 07/03, Kab Madiun, Jawa Timur",
    },
    {
      id: "resepsi",
      title: "Resepsi",
      date: "03 Oktober 2026",
      time: "10.00 – Selesai",
      place: "Rumah Mempelai Wanita",
      address: "Jl. Mondoroko, Desa Sirapan RT 07/03, Kab Madiun, Jawa Timur",
    },
  ] as EventItem[],

  location: {
    name: "Rumah Mempelai Wanita",
    address: "Jl. Mondoroko, Desa Sirapan RT 07/03, Kab Madiun, Jawa Timur",
    latitude: -7.597636,
    longitude: 111.593461,
    googleMapsUrl: "https://www.google.com/maps/place//@-7.5972994,111.5935073,225m/data=!3m1!1e3!4m6!1m5!3m4!2zN8KwMzUnNTEuNSJTIDExMcKwMzUnMzYuNSJF!8m2!3d-7.597636!4d111.593461?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
  },

  gallery: [
    { id: "1", src: "/images/prewed/2.jpg.jpeg", alt: "Potret prewedding pertama" },
    { id: "2", src: "/images/prewed/4.jpg.jpeg", alt: "Potret prewedding kedua" },
    { id: "3", src: "/images/prewed/9.png", alt: "Potret prewedding ketiga" },
    { id: "4", src: "/images/prewed/11.jpeg", alt: "Potret prewedding keempat" },
    { id: "5", src: "/images/prewed/10 (2).png", alt: "Potret prewedding kelima" },
    { id: "6", src: "/images/prewed/12.png", alt: "Potret prewedding keenam" },
  ] as GalleryImage[],

  accounts: [
    { id: "seabank", bank: "SeaBank", name: "Slamet Puji Astutik", number: "901407467555", logoInitial: "SB" },
    { id: "bri", bank: "BRI", name: "Slamet Puji Astutik", number: "635401004456507", logoInitial: "BRI" },
  ] as BankAccount[],

  music: {
    // Public assets are served from the site root. Use "/music/..." not "public/music/..."
    src: "/music/ssstik.io_1790059608919.mp3.mpeg",
    title: "Wedding Song",
  },

  whatsappNumber: "62895367056447",

  navLinks: [
    { id: "home", label: "Home" },
    { id: "mempelai", label: "Mempelai" },
    { id: "acara", label: "Acara" },
    { id: "galeri", label: "Galeri" },
    { id: "lokasi", label: "Lokasi" },
    { id: "gift", label: "Gift" },
  ],
};
