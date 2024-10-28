import GalleryComponent from "@/components/shared/GalleryComponent";
import {
  gallery,
  galleryHero,
  projectTitles,
} from "@/constans";
import React from "react";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { Separator } from "@radix-ui/react-separator";
import Hero from "@/components/sections/Hero";
import Section from "@/components/shared/Section";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{
    projectType: keyof typeof projectTitles;
  }>;
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const params = await props.params;

  const { projectType } = params;

  const type = decodeURIComponent(
    projectType
  ) as keyof typeof projectTitles;
  const title = projectTitles[type];

  return {
    title,
    description: `Galeria naszych najlepszych projektów: ${title}.`,
  };
}

const ProjectGallery = async (props: {
  params: Promise<{ projectType: keyof typeof gallery }>;
}) => {
  const params = await props.params;

  const { projectType } = params;

  const type = decodeURIComponent(
    projectType
  ) as keyof typeof gallery;
  const heroImages = [
    {
      url: galleryHero[type][0],
      id: type + "-img-1",
    },
    {
      url: galleryHero[type][1],
      id: type + "-img-2",
    },
    {
      url: galleryHero[type][2],
      id: type + "-img-3",
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
          type={type}
          card
          images={gallery[type]}
        />
      </Section>
    </>
  );
};

export default ProjectGallery;
