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
        duration: 5,
        ease: "linear",
      })
        .to(`#${image.id}`, {
          opacity: 0,
          duration: 2,
          ease: "linear",
        })
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
    <section className="h-screen flex overflow-hidden relative w-full lg:h-[90vh]">
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
      <div className="flex self-end pb-20 flex-col absolute gap-10 text-left text-pretty pl-10">
        <h1 className=" text-white text-4xl font-bold tracking-tight lg:text-5xl">
          Architektura / Wnętrza
        </h1>
        <p className="text-white text-4xl font-bold tracking-tight lg:text-5xl max-w-[30ch] ">
          Pomożemy wam stworzyć waszą niepowtarzalną
          przestrzeń
        </p>
      </div>
    </section>
  );
};

export default Hero;
