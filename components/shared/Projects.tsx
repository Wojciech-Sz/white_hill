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
      <div className="projects-grid">
        {projects.map((project) => (
          <figure
            key={project.title}
            className="flex flex-col w-full  relative group overflow-hidden md:last:aspect-video md:last:col-span-2 xl:last:col-span-1 xl:last:aspect-square items-center"
          >
            <Image
              className="projects-img"
              src={project.url}
              alt="wnetrze 1"
              width="400"
              height="400"
            />
            <div className="projects-img-filter" />
            <figcaption className="projects-img-title">
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
