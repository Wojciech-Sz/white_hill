import { gallery } from "@/constans";
import React from "react";

import GalleryComponent from "../shared/GalleryComponent";
import ProjectsTitle from "../shared/ProjectsTitle";

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
    <section
      id="projects"
      className="wrapper section section-gap"
    >
      <ProjectsTitle title={"Realizacje"} />
      <GalleryComponent
        images={projects}
        className="img-span-2"
      />
    </section>
  );
};

export default Projects;
