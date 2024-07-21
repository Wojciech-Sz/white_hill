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
          <Link
            key={project.route}
            href={`/projects/${type ? type : project.type}/${project.route}?title=${project.title}`}
            className={`${className}`}
          >
            <figure className="relative h-full group overflow-hidden">
              <Image
                className="projects-img aspect-square"
                src={project.url}
                alt="wnetrze 1"
                width="400"
                height="400"
              />
              <div className="projects-img-filter" />
              <figcaption className="projects-img-title">
                <h4 className="text-3xl font-semibold lg:text-4xl">
                  {project.title}
                </h4>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GalleryComponent;
