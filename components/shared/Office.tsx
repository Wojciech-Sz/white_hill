import { office } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";

const Office = () => {
  return (
    <section
      id="office"
      className="wrapper section section-gap"
    >
      <h2 className="section-title projects-title">
        Pracownia
      </h2>
      <Separator className="w-full border-b-2 border-primary-foreground" />
      <figure className="section-gap grid w-full  grid-cols-1 lg:grid-cols-2">
        <Image
          src="https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
          className="h-[60vh] w-full object-cover object-center lg:h-[70vh]"
          alt="O Nas"
          width={840}
          height={840}
        />
        <figcaption className="font-montserrat text-xl/snug tracking-tight md:text-2xl/snug">
          Jesteśmy zespołem doświadczonych architektów z
          pasją do tworzenia wyjątkowych przestrzeni. Każdy
          projekt jest dla nas unikalnym wyzwaniem, które
          realizujemy z pełnym zaangażowaniem i dbałością o
          każdy detal. Wierzymy, że dobrze zaprojektowana
          przestrzeń może znacząco poprawić jakość życia,
          dlatego staramy się tworzyć projekty, które łączą
          estetykę z funkcjonalnością.
        </figcaption>
      </figure>
      <Separator className="border-primary-foreground md:w-full md:border-b-2" />
      {office.map((item) => (
        <div
          key={item.title}
          className="grid w-full  grid-cols-1 gap-2 md:grid-cols-[35%_1fr] md:gap-0"
        >
          <h3 className="ml-[-1.8px] self-center  text-balance text-lg/none font-bold sm:text-xl/none lg:text-2xl/none">
            {item.title}
          </h3>
          <div className="md:section-gap flex flex-col items-center md:flex-row">
            <Separator className="w-full border-t-2 border-primary-foreground md:h-full md:w-0 md:border-l-2" />
            <p className="ml-[-1.8px] py-4 font-montserrat text-base/none md:ml-0 lg:text-lg/none">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Office;
