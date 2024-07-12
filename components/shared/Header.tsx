/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZbBImJol8pv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import { footerLinks } from "@/constans";

export default function Header() {
  return (
    <header className="fixed w-screen inset-x-0 top-0 z-10 flex items-center justify-center bg-white/90  wrapper py-3 shadow-sm dark:bg-gray-950  md:py-4">
      <MobileMenu />
      <Link href="/" prefetch={false}>
        <span className="text-2xl font-bold">
          Architekt
        </span>
      </Link>
      <div className="flex absolute right-5 md:right-10 gap-2 xl:right-20 2xl:right-40 items-center 2xl:gap-5">
        {footerLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="text-gray-500 hidden xl:flex size-10 items-center justify-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
            target="_blank"
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
        <Button
          variant="default"
          className="text-base md:text-xl flex"
        >
          <Link href="/#contact">Kontakt</Link>
        </Button>
      </div>
    </header>
  );
}
