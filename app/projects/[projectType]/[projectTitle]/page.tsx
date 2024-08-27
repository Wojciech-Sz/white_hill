import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import Section from "@/components/shared/Section";

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
        <SectionTitle title={title} />
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
