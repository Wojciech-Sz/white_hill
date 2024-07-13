import Image from "next/image";
import React from "react";

const Office = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16 wrapper pt-12  md:pt-24">
      <h2 className="text-5xl font-bold lg:text-7xl">
        Nasza pracownia
      </h2>
      <figure className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        <Image
          src="https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
          className="h-[60vh] w-full  object-cover object-center lg:h-[70vh]"
          alt="O Nas"
          width={840}
          height={840}
        />
        <figcaption className="text-2xl md:text-3xl xl:text-4xl">
          <p>
            Jesteśmy zespołem doświadczonych architektów z
            pasją do tworzenia wyjątkowych przestrzeni.
            Każdy projekt jest dla nas unikalnym wyzwaniem,
            które realizujemy z pełnym zaangażowaniem i
            dbałością o każdy detal. Wierzymy, że dobrze
            zaprojektowana przestrzeń może znacząco poprawić
            jakość życia, dlatego staramy się tworzyć
            projekty, które łączą estetykę z
            funkcjonalnością.
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Office;
