import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Алексей Катюшин — Установка дверей в Брянске | 20+ лет опыта",
  description:
    "Профессиональная установка входных и межкомнатных дверей в Брянске. Опыт более 20 лет. Качество, гарантия, доступные цены. Звоните: +7 (920) 836-75-92",
  keywords: [
    "установка дверей Брянск",
    "монтаж дверей",
    "входные двери",
    "межкомнатные двери",
    "мастер по дверям",
  ],
  openGraph: {
    title: "Алексей Катюшин — Установка дверей в Брянске",
    description:
      "Профессиональная установка входных и межкомнатных дверей. Опыт более 20 лет.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
