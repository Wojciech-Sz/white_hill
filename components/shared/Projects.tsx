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
      className="wrapper relative section bg-[#fbfaf7] section-gap"
    >
      <span className="absolute"> 251; 250; 247</span>
      <div className="flex justify-between items-center w-full">
        <h2 className="section-title projects-title">
          Nasze{" "}
          <span className="projects-title-span">
            realizacje
          </span>
        </h2>
        <Button
          className="btn"
          onClick={() => setVisible(!visible)}
        >
          Wiecej realizacji
        </Button>
      </div>
      <div className="w-full relative flex flex-col gap-4">
        <div
          className={`justify-center ${visible ? "flex" : "hidden"} gap-2`}
        >
          {projectLinks.map((link, i) => (
            <div key={link.label} className="flex gap-2">
              <Link
                href={link.href}
                className="projects-link"
              >
                {link.label}
              </Link>
              <Separator
                className={`${projectLinks.length - 1 === i ? "h-0" : "h-full"} border-l-2 border-primary-foreground`}
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
