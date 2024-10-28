"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { footerLinks } from "@/constans";
// import MobileMenu from "../shared/MobileMenu";
import { MenuIcon } from "../icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import NavItems from "../shared/NavItems";

export default function Header() {
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
        ease: "power1.inOut",
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
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
        ease: "power1.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, toggleMenu]);

  return (
    <header className={`header ${!isOpen && "shadow-md"}`}>
      <div className="relative mx-auto flex size-full max-w-7xl items-center justify-center">
        {/* <MobileMenu /> */}
        <button
          title="Menu"
          aria-label="Włacz menu"
          className="absolute left-0 cursor-pointer p-0"
          onClick={toggleMenu}
        >
          <MenuIcon
            topLine={topLine}
            middleLine={middleLine}
            bottomLine={bottomLine}
            className="size-6 text-foreground  md:size-7"
          />
        </button>
        <Link
          href="#hero"
          prefetch={false}
          scroll
          title="Powrót na góre"
        >
          <div className="text-2xl font-black">
            White Hill
          </div>
        </Link>
        <div className="absolute right-0 flex items-center gap-5">
          <div className="hidden gap-2 sm:flex">
            {footerLinks.map((link, i) => (
              <a
                key={link.name + i}
                href={link.href}
                className="nav-social"
                target="_blank"
                rel="noreferrer"
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
          <Link
            scroll
            href="/#contact"
            prefetch={false}
            className="flex items-center"
            title="Kontakt"
          >
            <Button variant="default" className="btn">
              Kontakt
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`absolute  inset-x-0 flex flex-col overflow-hidden bg-background/90 font-museoSansCyrl uppercase shadow-md transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <NavItems closeMenu={toggleMenu} />
      </div>
      <div
        className={`fixed ${isOpen ? "inset-x-0 bottom-0 top-16" : "hidden"} z-[-1]`}
        onClick={toggleMenu}
      />
    </header>
  );
}
