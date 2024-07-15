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
          className="p-0 absolute z-10 translate-x-1 left-[0.75rem] md:left-[2rem] xl:left-[4.5rem] 2xl:left-[9.5rem]"
        >
          <MenuIcon className="size-10 text-primary-foreground" />
          <span className="sr-only">Włacz menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col items-center bg-white p-4 dark:bg-gray-950"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-xl md:text-2xl xl:text-3xl font-semibold"
            prefetch={false}
          >
            White Hill
          </Link>
          <SheetClose />
        </div>
        <nav className="flex flex-col w-full h-full justify-between">
          <div className="w-full flex flex-col gap-3">
            {headerLinks.map((link, i) =>
              link.label === "Projekty" ? (
                <div
                  className="flex flex-col gap-3"
                  key={i}
                >
                  <Link
                    href={link.route}
                    className="text-xl md:text-2xl xl:text-3xl font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                  <div className="w-full text-lg md:text-xl xl:text-2xl flex flex-col pl-4 gap-2">
                    {projectLinks.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.route}
                  className="text-xl md:text-2xl xl:text-3xl font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex">
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-gray-500 md:hidden flex size-10 items-center justify-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                  target="_blank"
                >
                  {link.icon}
                  <span className="sr-only">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Button variant="default" className="btn">
              <Link href="/#contact">Kontakt</Link>
            </Button>
            <Button variant="default" className="btn">
              <Link href="/appointment">
                Umów spotkanie
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
