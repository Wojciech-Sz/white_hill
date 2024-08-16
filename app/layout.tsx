import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { montserrat, muesoSansCyrl } from "./fonts";
import Header from "@/components/sections/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "WhiteHill Architecture | Budynki i Wnętrza",
  description:
    "Oferujemy kompleksowe usługi architektoniczne dla budynków mieszkalnych i usługowych, obejmujące projektowanie całych obiektów oraz aranżację wnętrz. Stawiamy na funkcjonalność, estetykę i dopasowanie do indywidualnych potrzeb każdego klienta.",
  keywords: [
    "budynki",
    "wnętrza",
    "whitehill",
    "whitehill architecture",
    "budynki mieszkalne",
    "budynki usługowe",
    "budynki publiczne",
    "budynki prywatne",
    "budynki przemysłowe",
    "architekt białystok",
    "architekt polska",
    "architektura",
    "architekt",
    "architekt wnętrz",
  ],

  generator: "Next.js",
  authors: [
    {
      name: "Szczygielski W&M Developer",
      url: "https://wm-portfolio-theta.vercel.app/",
    },
  ],
  creator: "Szczygielski W&M Developer",
  publisher: "Szczygielski W&M Developer",

  openGraph: {
    title: "WhiteHill Architecture | Budynki i Wnętrza",
    description:
      "Kompleksowe usługi architektoniczne dla budynków i wnętrz dostosowane do Twoich potrzeb.",
    url: "https://white-hill-two.vercel.app/",
    siteName: "WhiteHill Architecture",
    images: [
      {
        url: "https://utfs.io/f/5b304e99-9833-4093-9c2a-78ece5c5c6aa-rcqaza.png",
        width: 1920,
        height: 800,
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    title: "WhiteHill Architecture | Budynki i Wnętrza",
    card: "summary_large_image",
    description:
      "Kompleksowe usługi architektoniczne dla budynów i wnętrz dostosowane do Twoich potrzeb.",
    images: [
      {
        url: "https://utfs.io/f/5b304e99-9833-4093-9c2a-78ece5c5c6aa-rcqaza.png",
        width: 1920,
        height: 800,
      },
    ],
    site: "https://white-hill-two.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

          <main className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
