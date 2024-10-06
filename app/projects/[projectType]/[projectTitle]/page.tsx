import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import Section from "@/components/shared/Section";
import { Metadata, ResolvingMetadata } from "next";
import { Separator } from "@radix-ui/react-separator";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { title: string };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const title = searchParams.title;

  return {
    title: title ? `${title}` : "Projekty",
    description: `${title} - Kompleksowa galeria zdjęć.`,
  };
}
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
    <>
      <Section className="wrapper section-start section-gap">
        <div id="hero" className="absolute -top-16" />
        <div className="flex flex-col">
          <h1 className="section-title projects-title">
            {title}
          </h1>
          <Separator className="separator" />
        </div>
        <ProjectGallery
          title={title}
          type={projectType}
          route={projectTitle}
        />
      </Section>
    </>
  );
};

export default Project;
