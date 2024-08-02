import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import HeroGallery from "@/components/sections/HeroGallery";

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
      <HeroGallery
        img={gallery[projectType][0].url}
        title={title.split(" ")[0]}
      />
      <section className="wrapper section section-gap ">
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
