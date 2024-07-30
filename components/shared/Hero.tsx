"use client";

import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IHero } from "@/types";

const Hero = ({ heroImages }: { heroImages: IHero[] }) => {
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
    <section
      id="hero"
      className="relative flex h-[95vh] w-full overflow-hidden lg:h-[80vh]"
    >
      {heroImages.map((image, i) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.url}
          alt={image.id}
          fill
          className={`absolute size-full object-cover ${
            i !== 0 ? "opacity-0" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 h-full bg-foreground/30" />
      <div className="wrapper absolute flex flex-col gap-10 self-end text-pretty pb-20 text-left font-montserrat text-4xl font-thin text-white lg:text-5xl">
        <h2>Architektura / Wnętrza</h2>
        <p className="ml-[-4.4px] max-w-[30ch]">
          Pomożemy wam stworzyć waszą niepowtarzalną
          przestrzeń
        </p>
      </div>
    </section>
  );
};

export default Hero;
