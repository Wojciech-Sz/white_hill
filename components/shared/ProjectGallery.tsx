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
    <div className="section-gap grid grid-flow-row-dense grid-cols-3">
      {projectGallery?.images.map((image, i) => (
        <Image
          key={image + i}
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="h-full max-h-[80vh] object-cover odd:col-span-2 [&:nth-child(2)]:col-span-3"
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
