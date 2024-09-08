"use client";

import { projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const GalleryHeroTitle = ({
  title,
}: {
  title?: string;
}) => {
  const [isDown, setIsDown] = useState(false);
  const handleClick = () => {
    setIsDown(!isDown);
  };
  return (
    <div className="wrapper flex-center relative size-full flex-col text-white">
      <div className="grid w-max grid-rows-[1fr_auto_1fr] justify-center lg:w-full lg:justify-normal">
        <div />
        <div className="flex-center flex-col">
          <h2 className="section-title">
            {title || "Galeria"}
          </h2>
          <ChevronDown
            id="chevron"
            onMouseDown={() => handleClick()}
            className="relative -top-2 z-[1] size-8 translate-x-[.5px] cursor-pointer transition-transform duration-300 hover:translate-y-2 hover:scale-125 xs:translate-x-[2.5px] sm:size-10 sm:translate-x-0 lg:size-14"
          />
        </div>
        <div
          className={`projects-links-container relative -top-3 translate-x-[-2.5px] sm:translate-x-[-2.5px] md:translate-x-[-3.5px] lg:-translate-x-2.5 ${isDown ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
        >
          {projectLinks.map((link, i) => (
            <div
              key={link.label}
              className="flex items-center gap-1 sm:gap-2"
            >
              <Link
                href={link.href}
                className="projects-link group hover:text-white/80"
                title={link.label}
              >
                {link.label}
                <div className="border-bottom border-white" />
              </Link>
              <Separator
                className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-white/70 lg:hidden`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHeroTitle;
