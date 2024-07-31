import { gallery } from "@/constans";
import Image from "next/image";
import React from "react";

const ProjectGallery = ({
  type,
  route,
  title,
}: {
  type: keyof typeof gallery;
  route: string;
  title: string;
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
            alt={title}
            width={1920}
            height={1080}
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
};

export default ProjectGallery;
