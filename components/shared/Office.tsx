import { office } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

const Office = () => {
  return (
    <section
      id="office"
      className="wrapper relative  section section-gap"
    >
      <span className="absolute">227; 226; 225</span>
      <h2 className=" section-title">Nasza pracownia</h2>
      <Separator className="w-full border-b-2 border-primary-foreground" />
      <figure className="grid w-full grid-cols-1  section-gap lg:grid-cols-2">
        <Image
          src="https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
          className="h-[60vh] w-full object-cover object-center lg:h-[70vh]"
          alt="O Nas"
          width={840}
          height={840}
        />
        <figcaption className="text-2xl md:text-3xl xl:text-4xl">
          <article>
            Jesteśmy zespołem doświadczonych architektów z
            pasją do tworzenia wyjątkowych przestrzeni.
            Każdy projekt jest dla nas unikalnym wyzwaniem,
            które realizujemy z pełnym zaangażowaniem i
            dbałością o każdy detal. Wierzymy, że dobrze
            zaprojektowana przestrzeń może znacząco poprawić
            jakość życia, dlatego staramy się tworzyć
            projekty, które łączą estetykę z
            funkcjonalnością.
          </article>
        </figcaption>
      </figure>
      <Separator className="md:w-full md:border-b-2 border-primary-foreground" />
      {office.map((item) => (
        <div
          key={item.title}
          className="grid w-full  md:gap-0 grid-cols-1 gap-2 md:grid-cols-[35%_1fr]"
        >
          <h3 className="text-lg first-letter:-ml-[1.8px]  text-balance sm:text-xl self-center lg:text-2xl font-semibold">
            {item.title}
          </h3>
          <div className="flex items-center flex-col md:flex-row md:section-gap">
            <Separator className="w-full border-t-2 md:h-full md:w-0 md:border-l-2 border-primary-foreground" />
            <p className="text-base py-4 -ml-[1.8px] md:ml-0 lg:text-lg">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Office;
