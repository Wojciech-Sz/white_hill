import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

import Link from "next/link";
import {
  footerLinks,
  headerLinks,
  projectLinks,
} from "@/constans";
import { MenuIcon } from "../icons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="absolute left-5 cursor-pointer p-0 md:left-10 xl:left-20 2xl:left-40">
          <MenuIcon className="size-7 text-primary-foreground" />
          <span className="sr-only">Włacz menu</span>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col overflow-auto bg-white p-4 font-museoSansCyrl uppercase"
      >
        <nav className="flex size-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              scroll
              className="mobile-link"
              prefetch={false}
            >
              Home
              <SheetClose className="absolute left-0 size-full" />
            </Link>
            {headerLinks.map((link) =>
              link.label === "Projekty" ? (
                <div
                  className="flex flex-col "
                  key={link.label}
                >
                  <Link
                    href={link.route}
                    className="mobile-link"
                    prefetch={false}
                    scroll
                  >
                    {link.label}
                    <SheetClose className="absolute left-0 size-full " />
                  </Link>
                  <div className="flex flex-col text-lg md:text-xl xl:text-2xl">
                    {projectLinks.map((link) => (
                      <Link
                        className="relative w-max font-medium hover:text-primary-foreground/80"
                        href={link.href}
                        key={link.label}
                      >
                        {link.label}
                        <SheetClose className="absolute left-0 size-full" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.route}
                  key={link.route}
                  className="mobile-link"
                  prefetch={false}
                  scroll
                >
                  {link.label}
                  <SheetClose className="absolute left-0 size-full" />
                </Link>
              )
            )}

            <Link
              href="/#contact"
              scroll
              className="mobile-link"
              prefetch={false}
            >
              Kontakt
              <SheetClose className="absolute left-0 size-full " />
            </Link>

            <Link
              href="/appointment"
              className="mobile-link"
              prefetch={false}
            >
              Umów spotkanie
              <SheetClose className="absolute left-0 size-full " />
            </Link>
          </div>

          <div className="flex self-center md:hidden">
            {footerLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className=" flex size-10 items-center text-primary-foreground hover:text-primary "
                prefetch={false}
                target="_blank"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
