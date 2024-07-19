"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroImages } from "@/constans";

const Hero = () => {
  const tl = gsap.timeline({ repeat: -1 });

  useGSAP(() => {
    heroImages.forEach((image, i) => {
      tl.to(`#${image.id}`, {
        scale: 1.1,
        duration: 6,
        ease: "linear",
      })
        .to(
          `#${image.id}`,
          {
            opacity: 0,
            duration: 2,
            ease: "linear",
          },
          ">-2"
        )
        .to(
          `#${
            heroImages[i + 1]
              ? heroImages[i + 1].id
              : heroImages[0].id
          }`,
          {
            opacity: 1,
            duration: 2,
            ease: "linear",
          },
          "<"
        )
        .to(`#${image.id}`, {
          scale: 1,
          duration: 0.1,
        });
    });
  }, []);

  return (
    <section className="h-screen flex overflow-hidden relative w-full lg:h-[85vh]">
      {heroImages.map((image, i) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.url}
          alt={image.id}
          fill
          className={`size-full object-cover ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="h-full inset-0 bg-foreground/30 absolute" />
      <div className="flex wrapper text-4xl font-bold lg:text-5xl text-white self-end pb-20 flex-col absolute gap-10 text-left text-pretty">
        <h1>Architektura / Wnętrza</h1>
        <p className="max-w-[30ch] first-letter:-ml-[2.8px]">
          Pomożemy wam stworzyć waszą{" "}
          <span className="first-letter:-ml-[2.3px] inline-block">
            niepowtarzalną
          </span>{" "}
          <span className="first-letter:-ml-[2.3px] block md:first-letter:m-0 md:inline">
            przestrzeń
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
