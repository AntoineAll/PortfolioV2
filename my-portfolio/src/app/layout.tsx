// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antoine Allard | Développeur Web",
  description: "Portfolio d'Antoine Allard - Étudiant Web@cadémie.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}