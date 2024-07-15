"use client";
import { projectLinks, projects } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section
      id="projects"
      className="wrapper section section-gap"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="section-title">Nasze realizacje</h2>
        <Button
          className="btn"
          onClick={() => setVisible(!visible)}
        >
          Wiecej realizacji
        </Button>
      </div>
      <div className="w-full relative flex flex-col gap-4">
        <div
          className={`justify-center ${visible ? "flex" : "hidden"} section-gap text-xl md:text-2xl xl:text-3xl font-semibold justify-items-center section-gap w-full`}
        >
          {projectLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <Separator className="w-full border-b-2 border-primary-foreground" />
      </div>
      <div className="grid w-full grid-cols-1 section-gap  md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <figure
            key={project.title}
            className="flex flex-col w-full  relative group overflow-hidden md:last:aspect-video md:last:col-span-2 xl:last:col-span-1 xl:last:aspect-square items-center"
          >
            <Image
              className="w-full object-cover transition-all duration-500 group-hover:scale-110 "
              src={project.url}
              alt="wnetrze 1"
              width="400"
              height="400"
            />
            <div className="absolute inset-0 bg-secondary-foreground/30 z-[1] group-hover:opacity-0 transition-opacity duration-500" />
            <figcaption className="absolute bottom-10 z-[4] group-hover:translate-x-2 left-4 transition-transform duration-500 text-white">
              <h4 className="text-3xl font-semibold lg:text-4xl">
                {project.title}
              </h4>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Projects;
