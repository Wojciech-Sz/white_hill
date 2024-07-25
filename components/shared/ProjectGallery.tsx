import { gallery } from "@/constans";
import Image from "next/image";
import React from "react";

const ProjectGallery = ({
  type,
  route,
}: {
  type: keyof typeof gallery;
  route: string;
}) => {
  const projectGallery = gallery[type].find(
    (project) => project.route === route
  );
  return (
    <div className="section-gap flex w-full flex-col">
      {projectGallery?.images.map((image, i) => (
        <figure
          className="relative h-[85vh] w-full"
          key={image + i}
        >
          <Image
            src={image}
            alt="wnetrze 1"
            fill
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
};

export default ProjectGallery;
