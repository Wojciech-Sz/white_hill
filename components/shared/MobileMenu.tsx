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
          className="absolute left-0 cursor-pointer p-0"
        >
          <MenuIcon className="size-7 text-foreground" />
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
            title="White Hill"
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
                    className="mobile-link group"
                    prefetch={false}
                    scroll
                    title={link.label}
                  >
                    {link.label}
                    <SheetClose className="mobile-close" />
                    <div className="border-bottom" />
                  </Link>
                  <div className="mobile-projects_container">
                    {projectLinks.map((link) => (
                      <Link
                        className="mobile-link_projects group"
                        href={link.href}
                        key={link.label}
                        title={link.label}
                      >
                        {link.label}
                        <SheetClose className="mobile-close" />
                        <div className="border-bottom" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.route}
                  key={link.route}
                  className="mobile-link group"
                  prefetch={false}
                  scroll
                  title={link.label}
                >
                  {link.label}
                  <SheetClose className="mobile-close" />
                  <div className="border-bottom" />
                </Link>
              )
            )}

            <Link
              href="/#contact"
              scroll
              className="mobile-link group"
              prefetch={false}
              title="Kontakt"
            >
              Kontakt
              <SheetClose className="mobile-close " />
              <div className="border-bottom" />
            </Link>

            <Link
              href="/appointment"
              className="mobile-link group"
              prefetch={false}
              title="Umów spotkanie"
            >
              Umów spotkanie
              <SheetClose className="mobile-close " />
              <div className="border-bottom" />
            </Link>
          </div>

          <div className="flex gap-2 self-center md:hidden">
            {footerLinks.map((link, i) => (
              <Link
                key={link.name}
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
