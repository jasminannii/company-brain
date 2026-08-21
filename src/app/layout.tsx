import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BrainSymbolDefs } from "@/components/BrainLogo";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Company Brain — Deine KI. Sicher, simpel, für alle im Team.",
  description:
    "Company Brain ist die DSGVO-sichere KI-Plattform für den Mittelstand im deutschsprachigen Raum, gefüttert mit dem Wissen deines Unternehmens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${schibsted.variable} ${hanken.variable} antialiased`}>
        <BrainSymbolDefs />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
