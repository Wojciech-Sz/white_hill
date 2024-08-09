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
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-wrap gap-1 text-2xl/none font-bold first-letter:ml-[-2px] sm:text-xl/none lg:text-2xl/none xl:text-xl/none 2xl:text-2xl/none">
                  {item.degree && (
                    <span>{item.degree}</span>
                  )}

                  {item.name}
                </h3>
                <p className="text-xl font-medium italic text-muted-foreground sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
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
