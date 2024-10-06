import GalleryComponent from "@/components/shared/GalleryComponent";
import { Separator } from "@radix-ui/react-separator";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { gallery } from "@/constans";
import Hero from "@/components/sections/Hero";
import Section from "@/components/shared/Section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria naszych najlepszych projektów: Wnętrza, Budynki Mieszkalne i Usługowe.",
};

const Gallery = () => {
  const heroImages = [
    {
      url: "https://utfs.io/f/WoM0wck7Fkdg017ufRtodVmuCtGjWBcNlZbFQK6eUE4frDi8",
      id: "gallery-img-1",
    },
    {
      url: "https://utfs.io/f/WoM0wck7Fkdgcmvu6fsJxDMZ8HIUluG2wcWneFBQiCqvEgTV",
      id: "gallery-img-2",
    },
    {
      url: "https://utfs.io/f/WoM0wck7FkdgwnRL66inXFWOdzlVC86Ev5qiaf0DMB2NKGre",
      id: "gallery-img-3",
    },
    {
      url: "https://utfs.io/f/WoM0wck7FkdgTuYrAwLaXEOdM4JmAsgwtR5Svq6KCbQnIV7Y",
      id: "gallery-img-4",
    },
  ];

  return (
    <>
      <Hero
        heroImages={heroImages}
        className="hero-gallery"
      >
        <GalleryHeroTitle />
      </Hero>
      <Section className="wrapper section-start section-gap">
        <Separator className="separator" />
        <GalleryComponent
          type={"houses"}
          images={gallery.houses}
        />
        <GalleryComponent
          type={"interiors"}
          images={gallery.interiors}
        />
        <GalleryComponent
          type={"offices"}
          images={gallery.offices}
        />
      </Section>
    </>
  );
};

export default Gallery;
