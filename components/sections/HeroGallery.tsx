"use client";

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
      className="projects-hero_gallery flex-center background-img"
    >
      <h2 className="hero_gallery-title">
        {title || "Realizacje"}
      </h2>
    </section>
  );
};

export default HeroGallery;
