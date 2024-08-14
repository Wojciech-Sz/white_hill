import { gallery } from "@/constans";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const GalleryComponent = ({
  images,
  type,
  className,
}: {
  type?: keyof typeof gallery;
  images: IProject[];
  className?: string;
}) => {
  return (
    <>
      <div className="projects-grid">
        {images.map((project) => (
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
              <h3>{project.title}</h3>
            </figcaption>
            <Link
              href={`/projects/${type || project.type}/${project.route}?title=${project.title}`}
              className="absolute inset-0 z-[3]"
              title={project.title}
            />
          </figure>
        ))}
      </div>
    </>
  );
};

export default GalleryComponent;
