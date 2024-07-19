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
    <header className="sticky h-[4.5rem] top-0 w-full z-[20] flex items-center justify-center bg-white/90 wrapper py-3 shadow-sm dark:bg-gray-950  md:py-4">
      <MobileMenu />
      <Link href="/" prefetch={false}>
        <h2 className="text-2xl font-black font-museoSansCyrl">
          White Hill
        </h2>
      </Link>
      <div className="flex absolute right-5 md:right-10 xl:right-20 2xl:right-40 items-center gap-5">
        <div className="hidden md:flex gap-2">
          {footerLinks.map((link, i) => (
            <Link
              key={link.name + i}
              href={link.href}
              className="text-primary-foreground flex size-full hover:text-primary "
              prefetch={false}
              target="_blank"
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>

        <Button variant="default" className="btn">
          <Link href="/#contact">Kontakt</Link>
        </Button>
      </div>
    </header>
  );
}
