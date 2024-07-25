"use client";
import { gallery, projectLinks } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import GalleryComponent from "./GalleryComponent";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const projects = Object.entries(gallery).flatMap(
    ([key, array]) =>
      array.slice(0, 3).map((project) => ({
        url: project.url,
        title: project.title,
        route: project.route,
        type: key as keyof typeof gallery,
      }))
  );

  return (
    <section
      id="projects"
      className="wrapper section section-gap"
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="section-title projects-title">
          Nasze realizacje
        </h2>
        <Button
          className="btn"
          onClick={() => setVisible(!visible)}
        >
          Wiecej realizacji
        </Button>
      </div>
      <div className="relative flex w-full flex-col gap-4">
        <div
          className={`flex justify-center lg:justify-between ${visible ? "h-9 opacity-100" : "h-0 overflow-hidden opacity-0"} gap-2 transition-all duration-500 lg:px-10`}
        >
          {projectLinks.map((link, i) => (
            <div
              key={link.label}
              className="flex items-center gap-2"
            >
              <Link
                href={link.href}
                className="projects-link"
              >
                {link.label}
              </Link>
              <Separator
                className={`${projectLinks.length - 1 === i ? "h-0" : "h-7 xs:h-5 sm:h-6 md:h-7"} border-l-2 border-primary-foreground/70 lg:hidden`}
              />
            </div>
          ))}
        </div>
        <Separator className="w-full border-b-2 border-primary-foreground" />
      </div>
      <GalleryComponent
        images={projects}
        className="img-span-2"
      />
    </section>
  );
};

export default Projects;
