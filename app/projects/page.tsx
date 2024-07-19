"use client";
import GalleryComponent from "@/components/shared/GalleryComponent";
import { Button } from "@/components/ui/button";

import { projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React, { useState } from "react";

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="wrapper section section-gap">
      <div className="flex justify-between items-center w-full">
        <h2 className="section-title projects-title translate-x-[1.2px]">
          Galeria
        </h2>
        <Button
          className="btn"
          onClick={() => setVisible(!visible)}
        >
          Wiecej realizacji
        </Button>
      </div>
      <div className="w-full relative flex flex-col gap-4">
        <div
          className={`justify-center ${visible ? "flex" : "hidden"} gap-2`}
        >
          {projectLinks.map((link, i) => (
            <div key={link.label} className="flex gap-2">
              <Link
                href={link.href}
                className="projects-link"
              >
                {link.label}
              </Link>
              <Separator
                className={`${projectLinks.length - 1 === i ? "h-0" : "h-full"} border-l-2 border-primary-foreground`}
              />
            </div>
          ))}
        </div>
        <Separator className="w-full border-b-2 border-primary-foreground" />
      </div>
      <GalleryComponent name={"houses"} />
      <GalleryComponent name={"interiors"} />
      <GalleryComponent name={"offices"} />
    </section>
  );
};

export default Gallery;
