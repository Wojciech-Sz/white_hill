import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import Hero from "@/components/sections/Hero";

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
  const heroImages = [
    {
      url: gallery[projectType][0].url,
      id: projectType + "-img-1",
    },
    {
      url: gallery[projectType][1].url,
      id: projectType + "-img-2",
    },
    {
      url: gallery[projectType][2].url,
      id: projectType + "-img-3",
    },
  ];

  return (
    <>
      <Hero
        heroImages={heroImages}
        className="hero-gallery h-[40vh]"
        title={"Galeria / " + title.split(" ")[0]}
      />
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
