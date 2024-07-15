import { gallery } from "@/constans";
import Image from "next/image";

const GalleryComponent = ({
  name,
}: {
  name: keyof typeof gallery;
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 section-gap  md:grid-cols-2 xl:grid-cols-3">
        {Array.isArray(gallery[name]) &&
          gallery[name].map((project) => (
            <figure
              key={project.title}
              className="flex flex-col w-full  relative group overflow-hidden items-center"
            >
              <Image
                className="w-full object-cover transition-all duration-500 group-hover:scale-110 "
                src={project.url}
                alt="wnetrze 1"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-secondary-foreground/30 z-[1] group-hover:opacity-0 transition-opacity duration-500" />
              <figcaption className="absolute bottom-10 z-[4] group-hover:translate-x-2 left-4 transition-transform duration-500 text-white">
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
