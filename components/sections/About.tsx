"use client";

import Image from "next/image";
import React from "react";
import { about } from "@/constans";
import SectionTitle from "../shared/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="wrapper section section-gap"
    >
      <SectionTitle title="O nas" />
      <div className="projects-grid">
        {about.map((item) => (
          <figure
            key={item.name}
            className="img-span-2 about-img"
          >
            <Image
              src={item.image}
              height={640}
              width={1080}
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
