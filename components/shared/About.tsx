"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../ui/3d-card";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-5 md:px-10 xl:px-40 flex flex-col gap-16 pt-12 md:pt-24 items-center"
    >
      <h2 className="text-5xl lg:text-7xl font-bold">
        O Nas
      </h2>
      <div className="flex flex-col w-full gap-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Image
            src="https://utfs.io/f/cdaa3749-c2a3-4fb8-bea3-f14fbe6e2a18-njtigs.jpg"
            className="w-full lg:order-last object-cover h-[60vh] lg:h-[70vh] rounded-sm object-bottom"
            alt="O Nas"
            width={840}
            height={840}
          />
          <p className="text-2xl lg:text-4xl">
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
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <CardContainer
            containerClassName="py-0"
            className="inter-var cursor-default"
          >
            <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto lg:h-[80vh] rounded-xl p-6 border  ">
              <div className="flex h-full flex-col w-full gap-6">
                <Image
                  src="https://utfs.io/f/05dcd7ce-6483-44df-a481-d46c1a527dd4-mv8qnj.jpg"
                  height="1000"
                  width="1000"
                  className="h-[70%] w-full object-cover rounded-xl"
                  alt="Imie Nazwisko"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">
                      Imie Nazwisko
                    </h3>
                    <p className="text-xl text-muted-foreground italic">
                      Stanowisko
                    </p>
                  </div>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo labore sed rerum
                    dolorum magni eos sint eveniet minus
                    molestiae, harum adipisci, aspernatur
                    autem rem consequatur unde sapiente,
                    similique culpa. Iusto?
                  </p>
                  <Dialog>
                    <DialogTrigger>
                      <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Dowiedz się więcej
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          Imie Nazwisko
                        </DialogTitle>
                        <DialogDescription className="text-xl text-muted-foreground italic">
                          Stanowisko
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4">
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer
            containerClassName="py-0"
            className="inter-var cursor-default"
          >
            <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto lg:h-[80vh] rounded-xl p-6 border  ">
              <div className="flex flex-col h-full w-full gap-6">
                <Image
                  src="https://utfs.io/f/2e186a62-ad97-4ec3-a4b8-c8835204b807-mv8qnk.jpg"
                  height="1000"
                  width="1000"
                  className="h-[70%] w-full object-cover rounded-xl"
                  alt="Imie Nazwisko"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">
                      Imie Nazwisko
                    </h3>
                    <p className="text-xl text-muted-foreground italic">
                      Stanowisko
                    </p>
                  </div>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo labore sed rerum
                    dolorum magni eos sint eveniet minus
                    molestiae, harum adipisci, aspernatur
                    autem rem consequatur unde sapiente,
                    similique culpa. Iusto?
                  </p>
                  <Dialog>
                    <DialogTrigger>
                      <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Dowiedz się więcej
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          Imie Nazwisko
                        </DialogTitle>
                        <DialogDescription className="text-xl text-muted-foreground italic">
                          Stanowisko
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4">
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit.
                          Asperiores itaque nostrum
                          voluptates esse odio amet,
                          perspiciatis obcaecati similique,
                          expedita cum sunt rem atque
                          officiis unde cupiditate ab
                          officia, non ad.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
