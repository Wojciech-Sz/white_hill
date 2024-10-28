"use client";

import React, { useRef, useState } from "react";
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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuIcon } from "../icons";

gsap.registerPlugin(useGSAP);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleMenu = contextSafe(() => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // Animate to X
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.3,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
      gsap.to(middleLine.current, {
        attr: {
          y1: 12,
          y2: 12,
          x1: 1.2,
          x2: 22.8,
          opacity: 1,
        },
        duration: 0.3,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
    }
  });

  return (
    <Sheet onOpenChange={toggleMenu}>
      <SheetTrigger asChild>
        <button
          title="Menu"
          aria-label="Włacz menu"
          className="absolute left-0 cursor-pointer p-0"
        >
          <MenuIcon
            topLine={topLine}
            middleLine={middleLine}
            bottomLine={bottomLine}
            className="size-6 text-foreground  md:size-7"
          />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col overflow-auto bg-white p-4 font-museoSansCyrl uppercase"
      >
        <SheetTitle className="self-center">
          <Link
            scroll
            href="#hero"
            prefetch={false}
            className="relative text-3xl"
            title="White Hill"
          >
            White Hill
            <SheetClose className="mobile-close" />
          </Link>
        </SheetTitle>
        <nav className="flex size-full flex-col justify-between">
          <ul className="mobile-links_container">
            {headerLinks.map((link) =>
              link.label === "Realizacje" ? (
                <li
                  className="mobile-projects_container"
                  key={link.label}
                >
                  <Link
                    href={link.route}
                    prefetch={false}
                    className="mobile-link group"
                    scroll
                    title={link.label}
                  >
                    {link.label}
                    <SheetClose className="mobile-close" />
                    <div className="border-bottom" />
                  </Link>
                  <ul className="mobile-projects_container">
                    {projectLinks.map((link) => (
                      <li
                        className="mobile-link_projects group"
                        key={link.label}
                      >
                        <Link
                          href={link.href}
                          title={link.label}
                        >
                          {link.label}
                          <SheetClose className="mobile-close" />
                          <div className="border-bottom" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  className="mobile-link group"
                  key={link.route}
                >
                  <Link
                    href={link.route}
                    scroll
                    prefetch={false}
                    title={link.label}
                  >
                    {link.label}
                    <SheetClose className="mobile-close" />
                    <div className="border-bottom" />
                  </Link>
                </li>
              )
            )}

            <li className="mobile-link group">
              <Link
                href="/#contact"
                prefetch={false}
                scroll
                title="Kontakt"
              >
                Kontakt
                <SheetClose className="mobile-close " />
                <div className="border-bottom" />
              </Link>
            </li>

            <li className="mobile-link group">
              <Link
                href="/konsultacje"
                title="Umów spotkanie"
              >
                Umów spotkanie
                <SheetClose className="mobile-close " />
                <div className="border-bottom" />
              </Link>
            </li>
          </ul>

          <ul className="flex gap-2 self-center md:hidden">
            {footerLinks.map((link, i) => (
              <li className="nav-social" key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  title={link.name}
                >
                  {link.icon}
                  <span className="sr-only">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
