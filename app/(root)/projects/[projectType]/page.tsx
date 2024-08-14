import GalleryComponent from "@/components/shared/GalleryComponent";
import ProjectsTitle from "@/components/shared/ProjectsTitle";
import { gallery } from "@/constans";
import React from "react";
import HeroGallery from "@/components/sections/HeroGallery";

const ProjectGallery = ({
  params,
  searchParams,
}: {
  params: { projectType: keyof typeof gallery };
  searchParams: { type: string };
}) => {
  // const heroImages = [
  //   {
  //     url: gallery[params.projectType][0].url,
  //     id: params.projectType + "-img-1",
  //   },
  //   {
  //     url: gallery[params.projectType][1].url,
  //     id: params.projectType + "-img-2",
  //   },
  //   {
  //     url: gallery[params.projectType][2].url,
  //     id: params.projectType + "-img-3",
  //   },
  // ];

  return (
    <>
      <HeroGallery
        img={gallery[params.projectType][0].url}
      />
      <section
        id="hero"
        className="wrapper section section-gap section-start"
      >
        <ProjectsTitle
          title={searchParams.type}
          className={`${searchParams.type === "Wnętrza" ? "translate-x-[-0.5px]" : ""}`}
        />
        <GalleryComponent
          type={params.projectType}
          images={gallery[params.projectType]}
        />
      </section>
    </>
  );
};

export default ProjectGallery;
