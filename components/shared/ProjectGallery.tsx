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
    <div className="section-gap grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-2 2xl:grid-cols-3">
      {projectGallery?.images.map((image, i) => (
        <Image
          key={image.url + i}
          src={image.url}
          alt={title}
          width={image.width}
          height={image.height}
          className="aspect-[7/10] h-full max-h-[80vh] object-cover md:odd:col-span-2 2xl:[&:nth-child(2)]:col-span-3"
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
