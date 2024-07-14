"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="wrapper section section-gap"
    >
      <h2 className="text-5xl font-bold lg:text-7xl">
        O Nas
      </h2>

      <div className="grid w-full grid-cols-1 section-gap md:grid-cols-2 2xl:grid-cols-3">
        <figure className="flex h-max flex-col gap-4">
          <Image
            src="https://utfs.io/f/05dcd7ce-6483-44df-a481-d46c1a527dd4-mv8qnj.jpg"
            height="500"
            width="500"
            className="w-full h-[70%] object-cover"
            alt="Imie Nazwisko"
          />
          <figcaption>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">
                  Imie Nazwisko
                </h3>
                <p className="text-xl italic text-muted-foreground">
                  Stanowisko
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex h-max flex-col gap-4">
          <Image
            src="https://utfs.io/f/2e186a62-ad97-4ec3-a4b8-c8835204b807-mv8qnk.jpg"
            height="500"
            width="500"
            className="w-full h-[70%] object-cover "
            alt="Imie Nazwisko"
          />
          <figcaption>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">
                  Imie Nazwisko
                </h3>
                <p className="text-xl italic text-muted-foreground">
                  Stanowisko
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex md:col-span-2 h-full 2xl:col-span-1 flex-col gap-4">
          <Image
            src="https://utfs.io/f/92ff00ed-c586-4f9a-9bce-1d183664d176-24vw.jpg"
            height="500"
            width="500"
            className="w-full h-full object-cover "
            alt="Imie Nazwisko"
          />
          <figcaption>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">
                  Imie Nazwisko
                </h3>
                <p className="text-xl italic text-muted-foreground">
                  Stanowisko
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
