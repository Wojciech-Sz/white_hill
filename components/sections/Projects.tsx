import { gallery } from "@/constans";
import React from "react";

import GalleryComponent from "../shared/GalleryComponent";
import ProjectsSectionTitle from "../shared/ProjectsSectionTitle";

const Projects = () => {
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
    <section className="wrapper section section-gap">
      <div
        id="projects"
        className="absolute top-[-4.25rem]"
      />

      <ProjectsSectionTitle title={"Realizacje"} />
      <GalleryComponent
        images={projects}
        className="img-span-2"
      />
    </section>
  );
};

export default Projects;
