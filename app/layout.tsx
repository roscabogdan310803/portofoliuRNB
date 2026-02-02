import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Importă fontul
import "./globals.css";
import Navbar from "./components/Navbar"; // 2. Asigură-te că ai creat acest fișier
import { SpeedInsights } from "@vercel/speed-insights/next"

// 3. Configurează instanța fontului
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofoliu Bogdan",
  description: "Creative Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth"> 
      {/* 4. Folosește inter.className aici */}
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <Navbar />
        <main>{children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}