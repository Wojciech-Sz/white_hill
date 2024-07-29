import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { montserrat, muesoSansCyrl } from "./fonts";

export const metadata: Metadata = {
  title:
    "Zaprojektuj swój wymarzony dom lub lokal użytkowy z WhiteHill Architecture w Białymstoku!",
  description:
    "Oferujemy kompleksowe usługi architektoniczne dla budynków mieszkalnych i usługowych, obejmujące projektowanie całych obiektów oraz aranżację wnętrz. Stawiamy na funkcjonalność, estetykę i dopasowanie do indywidualnych potrzeb każdego klienta.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`font-sans ${montserrat.variable} ${muesoSansCyrl.variable}`}
      >
        <div className="flex min-h-screen flex-col font-museoSansCyrl font-medium">
          <Header />

          <main className="flex-1 pb-12 md:pb-24">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
