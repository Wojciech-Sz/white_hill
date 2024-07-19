import { gallery } from "@/constans";
import Image from "next/image";

const GalleryComponent = ({
  name,
}: {
  name: keyof typeof gallery;
}) => {
  return (
    <>
      <div className="projects-grid">
        {Array.isArray(gallery[name]) &&
          gallery[name].map((project) => (
            <figure
              key={project.title}
              className="w-full relative group overflow-hidden"
            >
              <Image
                className="projects-img"
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
          ))}
      </div>
    </>
  );
};

export default GalleryComponent;
