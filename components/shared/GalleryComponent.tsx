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
            href={`/projects/${type || project.type}/${project.route}?title=${project.title}`}
            className={`${className} aspect-[7/10] max-h-[80vh] w-full`}
          >
            <figure className="group relative h-full overflow-hidden ">
              <Image
                className="projects-img"
                src={project.url}
                alt="wnetrze 1"
                width="1000"
                height="1000"
              />
              <div className="projects-img-filter" />
              <figcaption className="projects-img-title">
                <h4 className="text-3xl font-bold lg:text-4xl">
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
