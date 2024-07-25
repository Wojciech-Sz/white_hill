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
import { Button } from "../ui/button";
import { MenuIcon } from "../icons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="absolute left-5 p-0 md:left-10 xl:left-20 2xl:left-40"
        >
          <MenuIcon className="size-8 text-primary-foreground" />
          <span className="sr-only">Włacz menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col bg-white p-4 font-museoSansCyrl uppercase"
      >
        <nav className="flex size-full flex-col justify-between">
          <div className="flex flex-col gap-2">
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
                  <div className="flex flex-col pl-4 text-lg md:text-xl xl:text-2xl">
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
            <div className="flex  w-full flex-col gap-2">
              <Button
                variant="default"
                className="btn relative"
              >
                <Link
                  href="/#contact"
                  scroll
                  prefetch={false}
                >
                  Kontakt
                  <SheetClose className="absolute left-0 size-full " />
                </Link>
              </Button>
              <Button
                variant="default"
                className="btn relative"
              >
                <Link href="/appointment" prefetch={false}>
                  Umów spotkanie
                  <SheetClose className="absolute left-0 size-full " />
                </Link>
              </Button>
            </div>
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
