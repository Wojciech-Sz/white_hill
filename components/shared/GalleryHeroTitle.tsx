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
    <div className="wrapper relative flex size-full flex-col text-white">
      <div className="flex-center relative h-full flex-col items-center">
        <h2 className="section-title">
          {title || "Galeria"}
        </h2>
        <ChevronDown
          id="chevron"
          onMouseDown={() => handleClick()}
          className="size-8 cursor-pointer transition-transform duration-300 hover:translate-y-1 hover:scale-125 sm:size-10 lg:size-14"
        />
        <div
          className={`projects-links-container absolute inset-x-0 bottom-0 w-full ${isDown ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
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
