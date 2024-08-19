import GalleryComponent from "@/components/shared/GalleryComponent";
import { gallery } from "@/constans";
import React from "react";
import Hero from "@/components/sections/Hero";
import HeroGalleryTitle from "@/components/shared/HeroGalleryTitle";
import { Separator } from "@radix-ui/react-separator";

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
        className="hero-gallery"
      >
        <HeroGalleryTitle title={type} />
      </Hero>
      <section
        id="hero"
        className="wrapper section section-gap section-start"
      >
        <Separator className="separator" />
        <GalleryComponent
          type={projectType}
          images={gallery[projectType]}
        />
      </section>
    </>
  );
};

export default ProjectGallery;
