import Image from "next/image";
import React from "react";
import { about } from "@/constans";
import SectionTitle from "../shared/SectionTitle";
import Section from "../shared/Section";

const About = () => {
  return (
    <Section className="section-gap wrapper">
      <div id="about" className="absolute top-[-4.25rem]" />
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
              title={item.name}
            />
            <figcaption className="about-img_title">
              <div className="flex flex-col gap-2">
                <h3 className="flex flex-wrap gap-1 font-bold">
                  {item.degree && (
                    <span>{item.degree}</span>
                  )}

                  {item.name}
                </h3>
                <p className="about-img_description">
                  {item.position}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default About;
