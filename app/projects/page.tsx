import GalleryComponent from "@/components/shared/GalleryComponent";
import Hero from "@/components/sections/Hero";
import { Separator } from "@radix-ui/react-separator";
import GalleryHeroTitle from "@/components/shared/GalleryHeroTitle";
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
        <GalleryHeroTitle />
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
