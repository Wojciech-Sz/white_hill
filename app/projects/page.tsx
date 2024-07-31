import GalleryComponent from "@/components/shared/GalleryComponent";
import Hero from "@/components/sections/Hero";
import ProjectsTitle from "@/components/shared/ProjectsTitle";

import { gallery } from "@/constans";
import React from "react";

const Gallery = () => {
  const heroImages = [
    { url: gallery.houses[0].url, id: "gallery-img-1" },
    { url: gallery.interiors[0].url, id: "gallery-img-2" },
    { url: gallery.offices[0].url, id: "gallery-img-3" },
  ];
  return (
    <>
      <Hero heroImages={heroImages} />
      <section
        id="hero"
        className="wrapper section section-start section-gap"
      >
        <ProjectsTitle
          title="Galeria"
          className="translate-x-[-1.2px]"
        />
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
      </section>
    </>
  );
};

export default Gallery;
