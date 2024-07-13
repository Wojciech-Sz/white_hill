import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

import Link from "next/link";
import { footerLinks, headerLinks } from "@/constans";
import { Button } from "../ui/button";
import { MenuIcon } from "../icons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 absolute z-10 translate-x-1 left-[0.75rem] md:left-[2rem] xl:left-[4.5rem] 2xl:left-[9.5rem]"
        >
          <MenuIcon className="size-10 " />
          <span className="sr-only">Włacz menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col items-center bg-white p-4 dark:bg-gray-950"
      >
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            prefetch={false}
          >
            <span className="ml-2 text-lg font-semibold">
              Acme Inc
            </span>
          </Link>
          <SheetClose />
        </div>
        <nav className="grid gap-4">
          {headerLinks.map((link, i) => (
            <Link
              key={i}
              href={link.route}
              className="text-center text-lg font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex ">
            {footerLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-gray-500 md:hidden flex size-10 items-center justify-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-50"
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
