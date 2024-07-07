import { projects } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-5 md:px-10 xl:px-40 flex flex-col gap-16 pt-12 md:pt-24 items-center"
    >
      <h2 className="text-5xl lg:text-7xl font-bold">
        Projekty
      </h2>
      <div className="flex w-full flex-col items-center gap-16">
        {projects.map((project) => (
          <div
            key={project.type}
            className="flex flex-col w-full items-center gap-12"
          >
            <div className="flex flex-col gap-4 w-full items-center">
              <h3 className="text-3xl lg:text-5xl font-semibold">
                {project.type}
              </h3>
              <Separator
                className="border-gray-500 border-b w-full"
                orientation="vertical"
              />
            </div>
            <div className="grid grid-cols-1 w-full xl:grid-cols-3 gap-20 xl:gap-10">
              {project.images.map(
                (image, i) =>
                  i < 3 && (
                    <div
                      key={image.title}
                      className="flex  flex-col gap-4 items-center"
                    >
                      <div className="w-full rounded-md overflow-hidden">
                        <Image
                          className="hover:scale-110 transition-all duration-500 w-full object-cover h-[70vh] "
                          src={image.url}
                          alt="wnetrze 1"
                          width="840"
                          height="1200"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <h4 className="text-3xl lg:text-4xl font-semibold">
                          {image.title}
                        </h4>
                        <p className="text-lg lg:text-xl">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
