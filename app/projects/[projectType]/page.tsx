import GalleryComponent from "@/components/shared/GalleryComponent";
import { gallery } from "@/constans";
import React from "react";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { Separator } from "@radix-ui/react-separator";
import GalleryHero from "@/components/sections/GalleryHero";

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
      <GalleryHero
        heroImages={heroImages}
        className="hero-gallery"
      >
        <GalleryHeroTitle title={type} />
      </GalleryHero>
      <section
        id="hero"
        className="wrapper section section-gap section-start"
      >
        <Separator className="separator" />
        <GalleryComponent
          type={projectType}
          card
          images={gallery[projectType]}
        />
      </section>
    </>
  );
};

export default ProjectGallery;
