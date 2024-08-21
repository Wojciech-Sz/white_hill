import React from "react";
import { gallery } from "@/constans";
import ProjectGallery from "@/components/shared/ProjectGallery";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { Separator } from "@radix-ui/react-separator";
import GalleryHero from "@/components/sections/GalleryHero";

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
      <GalleryHero
        heroImages={heroImages}
        className="hero-gallery"
      >
        <GalleryHeroTitle title={title} />
      </GalleryHero>
      <section
        id="hero"
        className="wrapper section section-start section-gap "
      >
        <Separator className="separator" />
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
