import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";

const Project = ({
  params: { projectType, projectTitle },
  searchParams: { title },
}: {
  params: {
    projectType: keyof typeof gallery;
    projectTitle: string;
  };
  searchParams: { title: string };
}) => {
  return (
    <section className="wrapper section section-gap ">
      <h2 className="section-title">{title}</h2>
      <Separator className="border-primary-foreground md:w-full md:border-b-2" />
      <ProjectGallery
        title={title}
        type={projectType}
        route={projectTitle}
      />
    </section>
  );
};

export default Project;
