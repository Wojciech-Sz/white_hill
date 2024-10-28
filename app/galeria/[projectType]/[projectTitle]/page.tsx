import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import Section from "@/components/shared/Section";
import { Metadata, ResolvingMetadata } from "next";
import { Separator } from "@radix-ui/react-separator";

export async function generateMetadata(props: {
  params: Promise<{
    projectTitle: string;
  }>;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const params = await props.params;

  const { projectTitle } = params;

  return {
    title: projectTitle,
    description: `${projectTitle} - Kompleksowa galeria zdjęć.`,
  };
}
const Project = async (props: {
  params: Promise<{
    projectType: keyof typeof gallery;
    projectTitle: string;
  }>;
}) => {
  const params = await props.params;

  const { projectType, projectTitle } = params;

  const type = decodeURIComponent(projectType) as keyof typeof gallery;
  const title = decodeURIComponent(projectTitle);

  return (
    <>
      <Section className="wrapper section-start section-gap">
        <div id="hero" className="absolute -top-16" />
        <div className="flex flex-col">
          <h1 className="section-title projects-title">{title}</h1>
          <Separator className="separator" />
        </div>
        <ProjectGallery title={title} type={type} route={title} />
      </Section>
    </>
  );
};

export default Project;
