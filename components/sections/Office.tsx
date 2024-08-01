import { office } from "@/constans";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Office = () => {
  return (
    <section
      id="office"
      className="wrapper section-start section section-gap "
    >
      <SectionTitle title="Pracownia" />

      <figure className="section-gap grid w-full  grid-cols-1 lg:grid-cols-2">
        <Image
          src="https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
          className="h-[60vh] w-full object-cover object-center lg:h-[70vh]"
          alt="O Nas"
          width={840}
          height={840}
        />
        <figcaption className="flex flex-col font-montserrat text-lg/tight md:text-xl/tight xl:text-2xl/tight">
          <h3 className="text-xl/none font-bold tracking-tighter md:text-2xl/none xl:text-3xl">
            WHITEHILL
          </h3>
          <p className="mb-4">
            to biuro projektowe specjalizujące się w
            kompleksowym projektowaniu domów, obiektów
            usługowych oraz przemysłowych. Każdy projekt,
            który realizujemy, jest unikalną odpowiedzią na
            potrzeby naszych klientów, łącząc estetykę z
            funkcjonalnością. Projektujemy wnętrza, które
            nie tylko zachwycają swoim wyglądem, ale także
            stają się sceną dla życia codziennego i miejscem
            narodzin marzeń.
          </p>
          <p>
            Podczas współpracy z naszymi klientami stawiamy
            na zaufanie i budowanie partnerskiej relacji.
            Wierzymy, że najlepsze efekty osiąga się dzięki
            bliskiej współpracy i otwartości na potrzeby
            inwestorów. Naszym celem jest tworzenie
            przestrzeni, które będą inspirować i odpowiadać
            na wszystkie oczekiwania użytkowników.
          </p>
        </figcaption>
      </figure>
      <Separator className="border-primary-foreground md:w-full md:border-b-2" />
      {office.map((question) => (
        <div
          key={question.title}
          className="grid w-full grid-cols-1 md:grid-cols-[30%_1fr] md:gap-2"
        >
          <h3 className="ml-[-1.8px] self-center text-balance text-xl font-bold lg:text-2xl">
            {question.title}
          </h3>
          <div className="md:section-gap flex flex-col items-center md:flex-row">
            <Separator className="w-full border-t-2 border-primary-foreground md:h-full md:w-0 md:border-l-2" />

            <div className="flex flex-col">
              {question.info.map((info) => (
                <article
                  key={info.title}
                  className="ml-[-1.8px] text-pretty py-4 font-montserrat text-base/none md:ml-0 lg:text-lg/none"
                >
                  {info.description && (
                    <h3 className="inline text-lg/none font-bold lg:text-xl/none">
                      {info.title}{" "}
                    </h3>
                  )}
                  <p className="inline tracking-tight">
                    {info.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Office;
