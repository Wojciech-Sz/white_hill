"use client";

import { projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const HeroGalleryTitle = ({
  title,
}: {
  title?: string;
}) => {
  const [isDown, setIsDown] = useState(false);
  const handleClick = () => {
    gsap.to("#chevron", {
      rotate: isDown ? 0 : 90,
      duration: 0.2,
      ease: "linear",
    });

    setIsDown(!isDown);
  };
  return (
    <div className="flex-center wrapper relative h-40 w-full flex-col text-white">
      <div className="flex-center">
        <h2 className="section-title">
          {title || "Galeria"}
        </h2>
        <ChevronRight
          id="chevron"
          onMouseDown={() => handleClick()}
          className="size-10 cursor-pointer"
        />
      </div>
      <div
        className={`projects-links-container w-full ${isDown ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
      >
        {projectLinks.map((link, i) => (
          <div
            key={link.label}
            className="flex items-center gap-1 sm:gap-2"
          >
            <div className="group flex flex-col">
              <Link
                href={link.href}
                className="projects-link hover:text-white/80"
                title={link.label}
              >
                {link.label}
              </Link>
              <div className="w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full" />
            </div>
            <Separator
              className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-white/70 lg:hidden`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGalleryTitle;
