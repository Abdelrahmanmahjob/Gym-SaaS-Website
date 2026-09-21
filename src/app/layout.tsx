import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk, Kufam } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const kufam = Kufam({ variable: "--font-kufam", subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anan Sustainability | Gym operations, unified",
  description:
    "A modern operations platform for memberships, payments, classes, trainers, and gym growth.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${spaceGrotesk.variable} ${geist.variable} ${jetBrainsMono.variable} ${kufam.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
