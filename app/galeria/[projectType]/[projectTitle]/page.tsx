import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import Section from "@/components/shared/Section";
import { Metadata, ResolvingMetadata } from "next";
import { Separator } from "@radix-ui/react-separator";

export async function generateMetadata({
  params: { projectTitle },
}: {
  params: {
    projectTitle: string;
  };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  return {
    title: projectTitle,
    description: `${projectTitle} - Kompleksowa galeria zdjęć.`,
  };
}
const Project = ({
  params: { projectType, projectTitle },
}: {
  params: {
    projectType: keyof typeof gallery;
    projectTitle: string;
  };
}) => {
  console.log(projectType, projectTitle);
  return (
    <>
      <Section className="wrapper section-start section-gap">
        <div id="hero" className="absolute -top-16" />
        <div className="flex flex-col">
          <h1 className="section-title projects-title">
            {projectTitle}
          </h1>
          <Separator className="separator" />
        </div>
        <ProjectGallery
          title={projectTitle}
          type={projectType}
          route={projectTitle}
        />
      </Section>
    </>
  );
};

export default Project;
