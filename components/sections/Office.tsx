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
        <figcaption className="office-text">
          <h3 className="office-text_title">WHITEHILL</h3>
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
      <Separator className="separator md:w-full md:border-b-2" />
      {office.map((question) => (
        <div
          key={question.title}
          className="office-question"
        >
          <h4 className="office-question_title">
            {question.title}
          </h4>
          <div className="office-question_text-container">
            <Separator className="separator md:h-full md:w-0 md:border-l-2" />

            <div className="section-gap flex flex-col">
              {question.info.map((info) => (
                <article
                  key={info.title}
                  className="office-question_text"
                >
                  {info.title && (
                    <h5 className="office-question_text-title">
                      {info.title}{" "}
                    </h5>
                  )}
                  <p className="office-question_text-description">
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
