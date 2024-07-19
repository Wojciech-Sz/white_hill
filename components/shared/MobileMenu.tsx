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
          className="p-0 absolute left-5 md:left-10 xl:left-20 2xl:left-40"
        >
          <MenuIcon className="size-10 text-primary-foreground" />
          <span className="sr-only">Włacz menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col items-center bg-white p-4 dark:bg-gray-950"
      >
        <h2 className="flex items-center justify-between">
          <Link
            href="/"
            className="flex relative font-museoSansCyrl items-center text-xl md:text-2xl xl:text-3xl font-bold"
            prefetch={false}
          >
            White Hill
            <SheetClose className="absolute w-full h-full " />
          </Link>
        </h2>
        <nav className="flex flex-col w-full h-full gap-3 justify-between items-center">
          <div className="w-full flex flex-col gap-3">
            {headerLinks.map((link, i) =>
              link.label === "Projekty" ? (
                <div
                  className="flex flex-col gap-3"
                  key={link.label}
                >
                  <Link
                    href={link.route}
                    className="text-xl relative w-max font-museoSansCyrl md:text-2xl xl:text-3xl font-bold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                    prefetch={false}
                    scroll
                  >
                    {link.label}
                    <SheetClose className="absolute h-full left-0 w-full " />
                  </Link>
                  <div className="w-full text-lg md:text-xl xl:text-2xl flex flex-col pl-4 gap-2">
                    {projectLinks.map((link) => (
                      <Link
                        className="relative w-max font-montserrat font-medium"
                        href={link.href}
                        key={link.label}
                      >
                        {link.label}
                        <SheetClose className="absolute h-full left-0 w-full  " />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.route}
                  className="text-xl relative w-max md:text-2xl font-museoSansCyrl xl:text-3xl font-bold transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                  prefetch={false}
                  scroll
                >
                  {link.label}
                  <SheetClose className="absolute h-full left-0 w-full " />
                </Link>
              )
            )}
            <div className="w-full flex flex-col gap-2">
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
                  <SheetClose className="absolute left-0 w-full h-full " />
                </Link>
              </Button>
              <Button
                variant="default"
                className="btn relative"
              >
                <Link href="/appointment" prefetch={false}>
                  Umów spotkanie
                  <SheetClose className="absolute left-0 w-full h-full " />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <Link
                key={link.name + i}
                href={link.href}
                className=" md:hidden flex size-10 items-center text-primary-foreground hover:text-primary"
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
