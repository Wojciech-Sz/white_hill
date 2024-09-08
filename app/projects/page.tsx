import GalleryComponent from "@/components/shared/GalleryComponent";
import { Separator } from "@radix-ui/react-separator";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
import { gallery } from "@/constans";
import Hero from "@/components/sections/Hero";
import Section from "@/components/shared/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
};

const Gallery = () => {
  const heroImages = [
    {
      url: "/images/gallery/galeria1.webp",
      id: "gallery-img-1",
    },
    {
      url: "/images/gallery/galeria2.webp",
      id: "gallery-img-2",
    },
    {
      url: "/images/gallery/galeria3.webp",
      id: "gallery-img-3",
    },
    {
      url: "/images/gallery/galeria4.webp",
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
