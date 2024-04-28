import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Commissioner } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });
const commissioner = Commissioner({ subsets: ["cyrillic"]});
const montserrat = Montserrat({ subsets: ["cyrillic"]});


export const metadata: Metadata = {
  title: "FicLibrary",
  description: "Библиотека фанфиков",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
