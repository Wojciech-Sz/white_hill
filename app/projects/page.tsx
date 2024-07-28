"use client";
import GalleryComponent from "@/components/shared/GalleryComponent";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";

import { gallery, projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React, { useState } from "react";

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const heroImages = [
    { url: gallery.houses[0].url, id: "gallery-img-1" },
    { url: gallery.interiors[0].url, id: "gallery-img-2" },
    { url: gallery.offices[0].url, id: "gallery-img-3" },
  ];
  return (
    <>
      <Hero heroImages={heroImages} />
      <section
        id="hero"
        className="wrapper section section-gap"
      >
        <div className="projects-container">
          <h2 className="section-title translate-x-[-1.2px]">
            Galeria
          </h2>
          <Button
            className="btn projects-btn"
            onClick={() => setVisible(!visible)}
          >
            Wiecej realizacji
          </Button>
        </div>
        <div className="relative flex w-full flex-col">
          <div
            className={`projects-links-container ${visible ? "mb-2 h-9 opacity-100" : "mb-0 h-0 overflow-hidden opacity-0"}`}
          >
            {projectLinks.map((link, i) => (
              <div
                key={link.label}
                className="flex items-center gap-2"
              >
                <Link
                  href={link.href}
                  className="projects-link"
                >
                  {link.label}
                </Link>
                <Separator
                  className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground/70 lg:hidden`}
                />
              </div>
            ))}
          </div>
          <Separator className="w-full border-b-2 border-primary-foreground" />
        </div>
        <GalleryComponent
          type={"houses"}
          images={gallery.houses}
        />
        <GalleryComponent
          type={"interiors"}
          images={gallery.interiors}
        />
        <GalleryComponent
          type={"offices"}
          images={gallery.offices}
        />
      </section>
    </>
  );
};

export default Gallery;
