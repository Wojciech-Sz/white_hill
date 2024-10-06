import { gallery } from "@/constans";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import React from "react";

const GalleryComponent = ({
  images,
  type,
  className,
  card,
}: {
  type?: keyof typeof gallery;
  images: IProject[];
  className?: string;
  card?: boolean;
}) => {
  return (
    <>
      <div className="projects-grid">
        {images.map((project, i) =>
          type && card && i === 1 ? (
            <Card key={i} type={type} />
          ) : (
            <figure
              key={project.route}
              className={`${className} projects-img_container group`}
            >
              <Image
                className="projects-img"
                src={project.url}
                title={project.title}
                alt={project.title}
                width={1920}
                height={1080}
              />
              <div className="projects-img_filter" />
              <figcaption className="projects-img_title">
                <h4>{project.title}</h4>
              </figcaption>
              <Link
                href={`/projects/${type || project.type}/${project.route}?title=${project.title}`}
                className="absolute inset-0 z-[3]"
                title={project.title}
              />
            </figure>
          )
        )}
      </div>
    </>
  );
};

export default GalleryComponent;
