import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

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
    <html lang="en">
      <body className={`font-sans ${montserrat.variable}`}>
        <div className="flex font-montserrat flex-col min-h-screen">
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
