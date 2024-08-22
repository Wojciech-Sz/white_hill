import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import SectionTitle from "@/components/shared/SectionTitle";

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
      <section
        id="hero"
        className="wrapper section section-start section-gap "
      >
        <SectionTitle title={title} />
        <ProjectGallery
          title={title}
          type={projectType}
          route={projectTitle}
        />
      </section>
    </>
  );
};

export default Project;
