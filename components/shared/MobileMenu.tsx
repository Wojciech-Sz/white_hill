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
        duration: 0.5,
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.5,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.5,
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.5,
      });
      gsap.to(middleLine.current, {
        attr: {
          y1: 12,
          y2: 12,
          x1: 1.2,
          x2: 22.8,
          opacity: 1,
        },
        duration: 0.5,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.5,
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
