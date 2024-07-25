"use client";

import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { about } from "@/constans";

const About = () => {
  return (
    <section
      id="about"
      className="wrapper section section-gap"
    >
      <h2 className="section-title first-letter:ml-[-2px]">
        O Nas
      </h2>
      <Separator className="w-full border-b-2 border-primary-foreground" />
      <div className="projects-grid">
        {about.map((item) => (
          <figure
            key={item.name}
            className="img-span-2 flex aspect-[7/10] max-h-[80vh] w-full flex-col gap-2"
          >
            <Image
              src={item.image}
              height="1000"
              width="1000"
              className="size-full object-cover"
              alt="Imie Nazwisko"
            />
            <figcaption>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold first-letter:ml-[-2px]">
                  {item.name}
                </h3>
                <p className="text-xl font-medium italic text-muted-foreground">
                  {item.position}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default About;
