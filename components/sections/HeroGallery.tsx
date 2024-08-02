import React from "react";

const HeroGallery = ({
  img,
  title,
}: {
  img: string;
  title?: string;
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="flex h-[70vh] items-center justify-center bg-gray-400 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
    >
      <h2 className="hero_gallery-text">
        {title || "Realizacje"}
      </h2>
    </section>
  );
};

export default HeroGallery;
