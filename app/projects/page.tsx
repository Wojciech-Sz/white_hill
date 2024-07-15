"use client";
import GalleryComponent from "@/components/shared/GalleryComponent";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projectLinks } from "@/constans";
import Link from "next/link";
import React, { useState } from "react";

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="wrapper section section-gap">
      <div className="flex justify-between items-center w-full">
        <h2 className="section-title">Galeria</h2>
        <Button
          className="btn"
          onClick={() => setVisible(!visible)}
        >
          Wiecej realizacji
        </Button>
      </div>
      <div className="w-full relative flex flex-col gap-4">
        <div
          className={`justify-center ${visible ? "flex" : "hidden"} section-gap text-xl md:text-2xl xl:text-3xl font-semibold justify-items-center section-gap w-full`}
        >
          {projectLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
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
