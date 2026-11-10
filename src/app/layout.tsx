import type { Metadata, Viewport } from "next";
import { Bowlby_One, Figtree, Caveat_Brush } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/content";

const display = Bowlby_One({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });
const hand = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--font-hand", display: "swap" });

const title = "Lonchería El Parian · Taco trucks in Southwest Detroit";
const description =
  "Three El Parian taco trucks on Vernor Hwy and Springwells St in Southwest Detroit. Pastor, asada, birria, lengua, quesabirria, tortas and burritos, plus catering. Call (313) 676-0260.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3120"),
  title,
  description,
  applicationName: "El Parian",
  keywords: ["El Parian", "Detroit taco trucks", "Vernor Highway tacos", "Southwest Detroit birria", "taco catering Detroit"],
  openGraph: { type: "website", siteName: "Lonchería El Parian", title, description, locale: "en_US", images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630 }] },
};

export const viewport: Viewport = { themeColor: "#ee6a1f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
