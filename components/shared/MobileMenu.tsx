import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
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
        <button
          title="Menu"
          aria-label="Włacz menu"
          className="absolute left-5 cursor-pointer p-0 md:left-10 lg:left-20 xl:left-32 2xl:left-40"
        >
          <MenuIcon className="size-7 text-primary-foreground" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col overflow-auto bg-white p-4 font-museoSansCyrl uppercase"
      >
        <SheetTitle className="self-center">
          <Link
            scroll
            href="#hero"
            className="relative text-3xl"
          >
            White Hill
            <SheetClose className="mobile-close" />
          </Link>
        </SheetTitle>
        <nav className="flex size-full flex-col justify-between">
          <div className="mobile-links_container">
            {headerLinks.map((link) =>
              link.label === "Realizacje" ? (
                <div
                  className="mobile-projects_container"
                  key={link.label}
                >
                  <Link
                    href={link.route}
                    className="mobile-link"
                    prefetch={false}
                    scroll
                  >
                    {link.label}
                    <SheetClose className="mobile-close" />
                  </Link>
                  <div className="mobile-projects_container">
                    {projectLinks.map((link) => (
                      <Link
                        className="mobile-link_projects"
                        href={link.href}
                        key={link.label}
                      >
                        {link.label}
                        <SheetClose className="mobile-close" />
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
                  <SheetClose className="mobile-close" />
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
              <SheetClose className="mobile-close " />
            </Link>

            <Link
              href="/appointment"
              className="mobile-link"
              prefetch={false}
            >
              Umów spotkanie
              <SheetClose className="mobile-close " />
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
