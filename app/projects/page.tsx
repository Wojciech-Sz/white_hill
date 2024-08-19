import GalleryComponent from "@/components/shared/GalleryComponent";
import Hero from "@/components/sections/Hero";
import { Separator } from "@radix-ui/react-separator";
import HeroGalleryTitle from "@/components/shared/HeroGalleryTitle";
import { gallery } from "@/constans";

const Gallery = () => {
  const heroImages = [
    { url: gallery.houses[0].url, id: "gallery-img-1" },
    { url: gallery.interiors[0].url, id: "gallery-img-2" },
    { url: gallery.offices[0].url, id: "gallery-img-3" },
  ];

  return (
    <>
      <Hero
        heroImages={heroImages}
        className="hero-gallery"
      >
        <HeroGalleryTitle />
      </Hero>
      <section
        id="hero"
        className="wrapper section section-start section-gap"
      >
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
      </section>
    </>
  );
};

export default Gallery;
