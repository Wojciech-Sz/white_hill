import GalleryComponent from "@/components/shared/GalleryComponent";
import { gallery, galleryHero } from "@/constans";
import React from "react";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { Separator } from "@radix-ui/react-separator";
import Hero from "@/components/sections/Hero";
import Section from "@/components/shared/Section";

const ProjectGallery = ({
  params: { projectType },
  searchParams: { type },
}: {
  params: { projectType: keyof typeof gallery };
  searchParams: { type: string };
}) => {
  const heroImages = [
    {
      url: galleryHero[projectType][0],
      id: projectType + "-img-1",
    },
    {
      url: galleryHero[projectType][1],
      id: projectType + "-img-2",
    },
    {
      url: galleryHero[projectType][2],
      id: projectType + "-img-3",
    },
  ];

  return (
    <>
      <Hero
        heroImages={heroImages}
        className="hero-gallery"
      >
        <GalleryHeroTitle title={type} />
      </Hero>
      <Section className="wrapper section-gap section-start">
        <Separator className="separator" />
        <GalleryComponent
          type={projectType}
          card
          images={gallery[projectType]}
        />
      </Section>
    </>
  );
};

export default ProjectGallery;
