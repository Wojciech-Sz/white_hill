import GalleryComponent from "@/components/shared/GalleryComponent";
import ProjectsTitle from "@/components/shared/ProjectsTitle";
import { gallery } from "@/constans";
import React from "react";
import Hero from "@/components/sections/Hero";

const ProjectGallery = ({
  params: { projectType },
  searchParams: { type },
}: {
  params: { projectType: keyof typeof gallery };
  searchParams: { type: string };
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
        className="hero-gallery h-[40vh] "
        title={"Galeria / " + type}
        subtitle="Zapoznaj się z naszymi najnowszymi realizacjami"
      />
      <section
        id="hero"
        className="wrapper section section-gap section-start"
      >
        <ProjectsTitle
          title={type}
          className={`${type === "Wnętrza" ? "translate-x-[-0.5px]" : ""}`}
        />
        <GalleryComponent
          type={projectType}
          images={gallery[projectType]}
        />
      </section>
    </>
  );
};

export default ProjectGallery;
