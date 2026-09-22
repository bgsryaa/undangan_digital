import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/wedding";

/* =========================================================
   FONT SETUP
   ========================================================= */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

/* =========================================================
   METADATA
   ========================================================= */
const coupleTitle = `${weddingData.groom.nickname} & ${weddingData.bride.nickname}`;
const description =
  "Undangan pernikahan digital. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir dan memberikan doa restu.";

export const metadata: Metadata = {
  title: `${coupleTitle} — Wedding Invitation`,
  description,
  applicationName: `${coupleTitle} Wedding`,
  authors: [{ name: coupleTitle }],
  keywords: [
    "undangan pernikahan",
    "wedding invitation",
    "undangan digital",
    "javanese wedding",
    coupleTitle,
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${coupleTitle} — Wedding Invitation`,
    description,
    type: "website",
    locale: "id_ID",
    siteName: `${coupleTitle} Wedding`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${coupleTitle} — Wedding Invitation`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   VIEWPORT / THEME COLOR
   ========================================================= */
export const viewport: Viewport = {
  themeColor: "#2E1F14",       // espresso — selaras dengan warna teks utama
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${script.variable}
                    font-body bg-ivory text-brown-dark antialiased
                    selection:bg-gold selection:text-ivory`}
      >
        {children}
      </body>
    </html>
  );
}