import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Commissioner } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });
const commissioner = Commissioner({ subsets: ["cyrillic"]});

export const metadata: Metadata = {
  title: "Александр Лексин",
  description: "Поэтический блог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={commissioner.className}>{children}</body>
    </html>
  );
}
