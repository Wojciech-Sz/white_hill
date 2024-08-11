import Link from "next/link";
import { Button } from "@/components/ui/button";

import { footerLinks } from "@/constans";
import MobileMenu from "../shared/MobileMenu";

export default function Header() {
  return (
    <header className="wrapper header">
      <MobileMenu />
      <Link
        href="#hero"
        prefetch={false}
        scroll
        title="Powrót na góre"
      >
        <h1 className="text-2xl font-black">White Hill</h1>
      </Link>
      <div className="absolute right-5 flex items-center gap-5 md:right-7 lg:right-14 xl:right-20 2xl:right-28">
        <div className="hidden gap-2 md:flex">
          {footerLinks.map((link, i) => (
            <Link
              key={link.name + i}
              href={link.href}
              className="nav-social"
              prefetch={false}
              target="_blank"
              title={link.name}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>

        <Button variant="default" className="btn">
          <Link scroll href="/#contact" title="Kontakt">
            Kontakt
          </Link>
        </Button>
      </div>
    </header>
  );
}
