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
    <div className="w-full flex section-gap flex-col">
      {projectGallery?.images.map((image, i) => (
        <figure className="w-full h-[85vh]" key={image + i}>
          <Image
            src={image}
            alt="wnetrze 1"
            width="400"
            height="400"
            className="w-full h-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
};

export default ProjectGallery;
