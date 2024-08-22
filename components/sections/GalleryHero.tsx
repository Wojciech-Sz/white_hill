"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HeroProps } from "@/types";

const GalleryHero = ({
  heroImages,
  className,
  children,
}: HeroProps) => {
  const tl = gsap.timeline({
    repeat: -1,
  });

  useGSAP(() => {
    heroImages.forEach((image, i) => {
      tl.to(
        `#${image.id}`,
        {
          scale: 1.1,
          duration: 8,
          ease: "linear",
        },
        i > 0 ? ">-3" : ""
      )
        .to(
          `#${image.id}`,
          {
            opacity: 0,
            duration: 3,
            ease: "linear",
          },
          ">-3"
        )
        .to(
          `#${
            heroImages[i + 1]
              ? heroImages[i + 1].id
              : heroImages[0].id
          }`,
          {
            opacity: 1,
            duration: 3,
            ease: "linear",
          },
          "<"
        )
        .to(
          `#${image.id}`,
          {
            scale: 1,
            duration: 0.1,
          },
          ">-0.1"
        );
    });
  }, []);

  return (
    <section id="hero" className={className}>
      {heroImages.map((image, i) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.url}
          alt={image.id}
          priority
          title="Hero image"
          width={1920}
          height={1080}
          className={`absolute size-full object-cover ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/50" />
      {children}
    </section>
  );
};

export default GalleryHero;
