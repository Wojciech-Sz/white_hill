import { projects } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-col  items-center gap-10 wrapper pt-12  md:pt-24 "
    >
      <h2 className="text-5xl font-bold lg:text-7xl">
        Nasze realizacje
      </h2>
      <Separator className="w-full border-b-2 border-black" />
      <div className="grid w-full grid-cols-1 gap-20 md:gap-5 lg:gap-7 2xl:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <figure
            key={project.title}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-full relative group overflow-hidden">
              <Image
                className="aspect-square w-full object-cover transition-all duration-500 group-hover:scale-110 "
                src={project.url}
                alt="wnetrze 1"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-orange-300/10 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <figcaption className="absolute bottom-10 group-hover:translate-x-2 left-4 transition-transform duration-500 text-white">
                <h4 className="text-3xl font-semibold lg:text-4xl">
                  {project.title}
                </h4>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Projects;
